# 강남J비뇨기과 홈페이지 본 개발 · 의료법 검수 · 런칭 실무 보고서

- **작성 일자**: 2026-11-25
- **프로젝트 단계**: 시안 2종(`site_a`, `site_b`) 고객 발송 완료 → **본 계약 · 백엔드 연동 · 의료광고심의 · 런칭 준비 단계**
- **대상 도메인**: `http://www.manclinic.com/@2018/` + `http://m.manclinic.com/` → **`https://www.manclinic.com/` (단일 반응형 통합)**

---

## 1. 기능 및 백엔드 연동 개발 스펙 정의

현재 시안의 목업(프론트엔드 알림창) 상태인 **온라인 예약 · 1:1 비밀상담 · 빠른 상담 바**를 실제 병원 업무에 연동하기 위한 실무 아키텍처와 상세 스펙입니다.

### 1-1. 기술 스택 및 아키텍처 선택안 (TypeScript 풀스택 기준)

의원급 홈페이지는 대용량 분산 트랜잭션보다 **초기 로딩 속도(SEO), 보안 관리의 단순함, 카카오·네이버 등 외부 API 연동 편의성, 유지보수 비용 절감**이 핵심입니다. 프론트엔드와 백엔드를 **TypeScript 단일 언어(Next.js)**로 통합하면 개발 속도와 End-to-End 타입 안전성(보안·입력 검증)을 동시에 확보할 수 있습니다.

| 구분 | Option A: 무관리 서버리스형 (권장: 속도·보안·유지보수 최적) | Option B: 국내 VPS 자체 보관형 (데이터 단일 서버 통제) |
| :--- | :--- | :--- |
| **핵심 스택** | **Next.js (App Router, TypeScript)** + **Supabase (서울 리전 PostgreSQL · Auth)** + **Cloudflare (WAF · SSL · 301)** | **Next.js (Docker)** + **PostgreSQL (Drizzle/Prisma ORM)** + **Caddy (자동 HTTPS)** |
| **장점** | • 서버 OS 패치·장애 대응 부담 0%<br>• Git Push 시 1분 자동 배포 및 자동 DB 백업<br>• 솔라피(카톡)·네이버·Resend 공식 TS SDK 1순위 지원<br>• `Zod` + ORM + RLS로 SQLi·잘못된 입력값 원천 차단 | • 웹서버와 DB 모두 국내 단일 VPS(가비아/카페24/Lightsail 서울)에 100% 직접 보관<br>• 트래픽 증가 시에도 고정비 유지<br>• 향후 타 병의원 납품용 사내 표준 템플릿으로 패키징 용이 |
| **인프라 비용** | 월 0원 ~ 3만 원대 (의원급 트래픽은 무료~기본 티어로 충분) | 월 1 ~ 2만 원대 (경량 국내 VPS) |
| **보안/규정** | **서울 리전(`ap-northeast-2`) 지정 필수** + Cloudflare WAF + 연락처 AES-256-GCM 암호화 | 국내 물리/가상 서버 직접 보관(개인정보 국외이전 이슈 원천 차단) |

> **실무 권장**: 유지보수 리소스를 최소화하면서 **최고 수준의 응답 속도(SSG/SSR + 엣지 캐싱)와 보안(Cloudflare WAF + RLS + AES-256)**을 얻으려면 **Option A (Next.js + Supabase 서울 리전 + Cloudflare)**가 가장 효율적입니다. 병원에서 "모든 데이터를 국내 단일 서버에 직접 보관"하길 원할 경우 동일한 코드베이스 그대로 **Option B (국내 VPS + Docker)**로 즉시 배포할 수 있습니다.

---

### 1-2. 핵심 DB 스키마 설계 (신규 UTF-8 클린 PostgreSQL 기준, 7개 테이블)

이전 업체가 구형 `euc-kr` DB를 제공하지 않더라도 아래 **7개 핵심 테이블**만으로 의원 홈페이지의 모든 운영 기능을 100% 커버합니다. (Prisma/Drizzle ORM으로 스키마·마이그레이션 자동 관리)

| 테이블명 | 역할 | 핵심 컬럼 (예시) | 비고 |
| :--- | :--- | :--- | :--- |
| `admin_users` | 병원 관리자 계정 | `id`, `email/username`, `password_hash(bcrypt/argon2)`, `role`, `last_login_at` | Supabase Auth 또는 자체 세션 (원장님/실장님 분리) |
| `reservations` | 온라인 간편 예약 | `id`, `clinic_subject`, `doctor_name`, `hope_date`, `time_slot`, `patient_name`, `phone_enc(AES-256-GCM)`, `memo`, `status(NEW/CONFIRMED/DONE/CANCELED)`, `privacy_agreed_at`, `created_at` | 상태 변경 시 카카오 알림톡 발송 연계 |
| `consultations` | 1:1 비밀 수술·비용상담 | `id`, `category(수술/비용/재수술)`, `title`, `content`, `author_name`, `phone_enc`, `password_hash`, `is_secret(DEFAULT TRUE)`, `answer_content`, `answered_at`, `status` | **기본 비밀글 강제** |
| `quick_callbacks` | 하단/플로팅 빠른 상담 | `id`, `name`, `phone_enc`, `subject`, `channel_source(BOTTOM_BAR/FLOAT)`, `status`, `created_at` | 실장님 콜백 리스트 |
| `popups` | 공지/휴진 팝업·띠배너 | `id`, `type(TOP_BAR/BOTTOM_SHEET/MODAL)`, `title`, `image_url`, `link_url`, `start_at`, `end_at`, `is_active` | 직원이 직접 휴진 공지 등록 |
| `doctor_schedules` | 2인 원장 진료시간표 | `id`, `doctor_id`, `day_of_week`, `am_status`, `pm_status`, `updated_at` | 메인·오시는길·예약 화면 단일 연동 |
| `nonbenefit_items` | 비급여 비용안내 표 | `id`, `category(수술/주사/검사/제증명/입원)`, `item_name`, `detail`, `price_text`, `sort_order`, `is_active` | 의료법 고지 변경 시 즉시 수정 |

---

### 1-3. Next.js API (Route Handlers) 인터페이스 명세 (목업 → 실연동 교체 대상)

모든 API 엔드포인트는 **Zod 스키마 검증**으로 허용되지 않은 입력을 차단하고, **Drizzle/Prisma ORM(Parameterized Query)**을 통해 SQL Injection을 원천 방어합니다.

| 기능 | HTTP Method & Endpoint | 요청 필수 필드 (Zod 검증) | 서버 처리 로직 |
| :--- | :--- | :--- | :--- |
| **간편 예약 등록** | `POST /api/public/reservations` | `subject`, `doctor`, `hopeDate`, `timeSlot`, `name`, `phone`, `privacyAgreed` | Cloudflare Turnstile 토큰 검증 → Rate Limit 체크 → 연락처 AES-256-GCM 암호화 저장 → **병원(실장님) 알림 + 환자 접수 알림 발송** |
| **비회원 예약 조회** | `POST /api/public/reservations/lookup` | `name`, `phone` (또는 SMS 인증코드) | 해시 인덱스 매칭 후 일치 예약 목록 마스킹 반환 (예약 취소 요청 가능) |
| **빠른 전화상담 등록** | `POST /api/public/callbacks` | `name`, `phone`, `subject`, `privacyAgreed` | DB 저장 + 실장님 즉시 알림(알림톡/문자/이메일) |
| **비밀 상담 글쓰기/조회** | `POST /api/public/consultations`<br>`POST /api/public/consultations/[id]/verify` | `category`, `title`, `content`, `name`, `password`, `isSecret` | 비밀번호 bcrypt/argon2 해시 저장, 열람 시 비밀번호 검증 후 상세 반환 |
| **진료시간/팝업/비급여 조회** | `GET /api/public/site-data` (또는 Server Component 직접 조회) | - | 메인·오시는길·비급여 표를 DB에서 실시간 렌더링 + ISR 캐싱 (하드코딩 제거) |
| **관리자 로그인 & 관리** | `POST /api/admin/login`<br>`GET/PATCH /api/admin/reservations/*` | HttpOnly·Secure Cookie 세션 (또는 Supabase Auth) | 예약 상태 변경, 비밀상담 답변 등록, 팝업·진료시간·비급여 CRUD |

---

### 1-4. 알림 연동 스펙 (카카오 알림톡 · SMS · 이메일 · 네이버)

환자가 예약/상담을 남겼을 때 병원 데스크(실장님)가 **1분 안에 인지**하는 것이 매출(내원 전환율)의 핵심입니다. TypeScript 환경에서는 공식 SDK를 통해 10~20줄 수준의 코드로 안정적인 연동이 가능합니다.

1. **1단계 (기본 포함 — 비용 0원~최소)**:
   - **병원 측 즉시 수신**: 예약/빠른상담 접수 시 **Resend** 또는 **Naver Works SMTP**로 병원 전용 이메일 발송 + **텔레그램/슬랙/잔디 웹훅** 또는 **단문 문자(SMS, 건당 약 10~20원)** 즉시 발송.
2. **2단계 (권장 옵션 — 카카오 알림톡 + SMS 대체발송)**:
   - **연동 사업자 & SDK**: **솔라피(`solapi` 공식 TS SDK 권장)**, 알리고(Aligo), NHN Cloud 중 택 1 (연동 0.5일 소요).
   - **사전 준비물 (병원 측 협조 필수 — 오픈 최소 1주 전 신청)**:
     - ① 병원 사업자등록증(`120-90-16660`)으로 **카카오톡 비즈니스 채널** 개설 및 비즈니스 인증
     - ② **발신번호 사전등록** (`02-3018-7575` 통신서비스 이용증명원 제출 — SMS 대체발송용)
     - ③ **알림톡 템플릿 검수 승인** (영업일 2~3일 소요):
       - `[환자용] 예약 접수 안내`: *"#{이름}님, 강남J비뇨기과 #{진료과목} 예약 요청이 접수되었습니다. 담당자 확인 후 확정 연락드리겠습니다."* (민감 질환명 노출 방지를 위해 `#{진료과목}` 대신 **"진료 예약"**으로 중립 표기 권장!)
       - `[환자용] 예약 확정 안내`: *"#{이름}님, #{날짜} #{시간} 강남J비뇨기과 예약이 확정되었습니다. 위치: 학동역 8·9번 출구 4F"*
       - `[병원 데스크용] 신규 접수 알림`: 실장님 휴대폰(`010-9190-7575`)으로 접수자·연락처·과목 즉시 발송
3. **보안·스팸·개인정보 보호 필수 구현**:
   - **스팸 봇 차단**: **Cloudflare Turnstile**(무료, 클릭 없는 자동 검증) + 숨김 필드(Honeypot) + Upstash Redis/메모리 기반 Rate Limit(IP당 분당 5회 제한)
   - **개인정보 자동 파기 배치**: **Supabase `pg_cron`** 또는 **Vercel Cron Job**을 통해 보관 기간(예: 상담 완료 후 1년) 경과 데이터를 매일 자정 자동 마스킹/파기하고 개인정보처리방침에 보유기간 명시
   - **민감정보 보호**: 알림톡·이메일 제목에 `"음경임플란트"`, `"발기부전"`, `"이물질제거"` 같은 **민감 시술명이 잠금 화면에 노출되지 않도록** 기본 문구 중립화(예: *"강남J비뇨기과 예약/상담 안내"*) — **비뇨기과 UX의 핵심 디테일**

---

## 2. 의료법 및 컴플라이언스 검수 체크리스트

비뇨기과·남성수술 홈페이지는 보건소 민원 및 경쟁 병원 신고가 매우 잦은 분야입니다. 오픈 전 **의료법 제56조(의료광고의 금지 등)·제57조(의료광고의 심의)** 및 **개인정보보호법** 기준을 반드시 점검해야 합니다.

### 2-1. 대한의사협회 의료광고심의위원회 사전 심의 대상 여부 확인

- **심의 제외 (자체 홈페이지 기본 원칙)**: 의료법 시행령 제24조에 따라, 의료기관이 자체 개설·운영하는 공식 홈페이지 자체는 원칙적으로 사전심의 의무 대상에서 제외되는 경우가 많습니다.
- **★주의 (사전심의가 반드시 필요한 경우)**:
  - 홈페이지 내 배너·랜딩 페이지를 **네이버 파워링크/브랜드검색, 구글 애즈, 유튜브 광고, 카카오 모먼트, SNS 배너** 등 유료 매체 광고의 연결 소재로 쓰거나, 이벤트·할인 문구를 외부 광고에 노출할 경우 **대한의사협회 의료광고심의위원회 사전심의(심의필 번호 부여)**가 필요합니다.
  - 심의 소요 기간: 접수 후 통상 **2~4주** (수정 보완 시 추가 1~2주) → 오픈 일정과 광고 집행 일정을 고려해 병원 측에 사전 고지 필수.

### 2-2. 시안·본문 내 금지 표현 최종 점검표 (강남J비뇨기과 실제 사례 기반)

| 점검 항목 | 의료법 위반 위험 (금지 사례) | 강남J 기존 사이트 확인 문구 | 안전한 수정 권장안 (To-Be) |
| :--- | :--- | :--- | :--- |
| **치료효과 보장 / 단정 표현** | "완치", "100%", "평생 보장", "부작용 0%", "무통·무출혈" 단정 | • *"No pain, No bleeding, No complication"*<br>• *"한번 수술로 평생 발기걱정이 없는 가장 확실한 치료법"*<br>• *"완벽하게 할 수 있습니다"* | • **"통증·출혈·합병증 부담을 줄이는 No3 원칙 지향"**<br>• **"약물치료에 반응하지 않는 발기부전의 근본적 해결을 돕는 수술적 치료"**<br>• 하단에 *"※ 모든 시술 및 수술은 개인에 따라 출혈·감염·염증 등 부작용이 발생할 수 있으므로 전문의와 충분한 상담이 필요합니다."* 공통 고지 삽입 |
| **최상급 · 비교 · 과장 표현** | "최고", "최초", "국내 1위", "유일", "가장 확실한" (객관적 증빙 없이 사용 금지) | • *"가장 확실한 치료 방법"*<br>• *"대학병원 수준의 치료장비"* | • **"가장 확실한"** 삭제 → **"검증된 수술적 치료 방법"**<br>• 장비명은 실제 보유 장비의 정식 모델명/기능 팩트(`C-arm`, `홀뮴레이저 30W`, `연성요관내시경`) 중심으로 객관 기술 |
| **수술 전후 사진 · 치료 경험담** | 비로그인 일반 대중에게 수술 전후 비교 사진·환자 후기·수술 장면 원색 노출 금지 | • 모바일 `landing4, 5`의 이물질 사진/전후사진 언급 | • **전후 사진 및 수술 사례 사진은 반드시 로그인(본인인증/회원가입) 게이트 뒤에만 배치**하거나, 메인/오픈 페이지에서는 일러스트·장비 사진으로만 구성 |
| **미승인/불분명한 학력·경력 표기** | 전문의 자격과 무관한 임의 명칭, 증빙 불가한 약력 | • 이웅희 원장 약력 (`연세의대 교수 역임`, `현 외래교수`, `아시아 성학회 사무총장`) | • 원장님 실제 증빙서류(경력증명서·학위기)와 **글자 한 자 틀리지 않게** 일치 여부 최종 서면 확인 |
| **비급여 진료비용 고지 의무** | 의료법 제45조: 비급여 항목·비용을 환자가 알기 쉽게 홈페이지 내 고지 필수 | • `nonbenefit.html` (기존 존재) | • **푸터(전 페이지 공통)와 상단/병원소개 메뉴에 `[비급여 비용안내]` 링크 상시 노출** + 건강보험심사평가원(심평원) 신고 단가와 100% 일치 여부 병원 원무과 확인 |
| **부작용·주의사항 고지** | 수술/시술 홍보 시 부작용 가능성 누락 | • 모바일 `landing2`(역행성사정, 재발 가능성 고지 — 우수 사례) | • 모든 시술 상세 페이지 하단에 **부작용·회복 주의사항 고지 박스** 의무 삽입 |

### 2-3. 개인정보보호법 & 전자상거래/웹 접근성 체크
- [ ] **개인정보 수집·이용 동의서 분리**: 예약/상담 폼에 필수 수집 항목(`이름`, `연락처`), 수집 목적(`진료 예약 및 상담 안내`), 보유·이용 기간(`목적 달성 후 지체 없이 파기 또는 1년`) 명시 + **마케팅 수신 동의는 별도 선택(체크 해제 기본)**으로 분리
- [ ] **개인정보처리방침 최신화**: 기존 `04_member/member_01.html`의 2018년 기준 구형 문구(구 '개인정보취급방침')를 현행 개인정보보호법 기준 **`개인정보처리방침`**으로 개정하고, 개인정보 보호책임자(대표원장 박천진, 연락처 `02-3018-7575`) 및 위탁업체(호스팅/알림톡 발송사) 명시
- [ ] **푸터 필수 사업자 정보**: `상호(강남J비뇨기과의원) / 대표자(박천진) / 사업자등록번호(120-90-16660) / 주소(서울시 강남구 학동로 203 4F) / 대표전화(02-3018-7575)` 전 페이지 노출

---

## 3. 런칭 전 기술 체크리스트 (SEO 무손실 이전 · 301 · SSL)

기존 `http://www.manclinic.com/@2018/*`와 `http://m.manclinic.com/*`는 **1999년부터 축적된 27년 도메인 신뢰도(Domain Authority)**를 가진 자산입니다. 이전 과정에서 301 리다이렉트를 놓치면 네이버·구글 검색 순위가 수개월간 급락할 수 있으므로 아래 절차를 순서대로 집행해야 합니다.

### 3-1. Step 1: 도메인·DNS 소유권 사전 확보 (오픈 2주 전 필수)
- [ ] **`manclinic.com` 등록기관(가비아·후이즈·카페24 등) 계정 소유권 확인** (병원 명의인지, 이전 웹에이전시 명의인지 즉시 확인)
- [ ] 현재 DNS 레코드 백업: `A` 레코드(`@`, `www`, `m`), `MX` 레코드(**병원 업무 이메일 끊김 방지 — 절대 건드리지 말 것!**), `TXT` 레코드(네이버/구글 소유권 인증 등)
- [ ] 전환 48시간 전 기존 DNS 레코드의 **TTL을 `300초(5분)`로 낮춰두기** (오픈 당일 전파 지연 최소화 및 장애 시 즉시 롤백 가능)

### 3-2. Step 2: SSL(HTTPS) 적용 및 대표 도메인(Canonical) 단일화
- [ ] **최종 대표 URL 확정**: `https://www.manclinic.com` (또는 `https://manclinic.com` 중 1개 고정 — 기존 검색 인덱스가 `www` 기준이므로 **`https://www.manclinic.com` 권장**)
- [ ] **SSL 인증서 발급**: `manclinic.com`, `www.manclinic.com`, **`m.manclinic.com`** 3개 호스트 모두 포함하는 SAN 인증서(Let's Encrypt / Caddy 자동 갱신 또는 Cloudflare SSL) 발급
  - *※ `m.manclinic.com`에도 SSL을 포함해야 `https://m.manclinic.com`으로 유입된 사용자가 인증서 경고 없이 안전하게 301 리다이렉트됩니다.*
- [ ] **혼합 콘텐츠(Mixed Content) 0건 검증**: 새 사이트 내부의 모든 이미지·스크립트·지도 API(`dmaps.daum.net` → `https://dapi.kakao.com`)를 `https://` 또는 상대경로로 통일
- [ ] **HSTS 헤더 적용**: 안정화 확인(오픈 1주 후) 뒤 `Strict-Transport-Security: max-age=31536000; includeSubDomains` 적용

### 3-3. Step 3: 301 영구 리다이렉트 매핑 구현 (검색 순위 100% 승계)

Next.js + Cloudflare 조합에서는 복잡한 웹서버 설정 없이 **Cloudflare Redirect Rules(도메인 레벨)**와 **`next.config.ts`(경로 레벨)**만으로 301 영구 리다이렉트를 깔끔하게 처리합니다.

#### ① 도메인·프로토콜 레벨 리다이렉트 (Cloudflare Redirect Rules)
- **HTTP → HTTPS 자동 강제**: Cloudflare SSL/TLS `Always Use HTTPS` 활성화 (apex · `www` · `m` 일괄 적용)
- **Apex → `www` 통합**: `manclinic.com/*` → `https://www.manclinic.com/$1` (`301 Permanent`)
- **모바일(`m.manclinic.com`) → 반응형 통합**:
  - `m.manclinic.com/landing1.html` → `https://www.manclinic.com/implant` (`301`)
  - `m.manclinic.com/landing2.html` → `https://www.manclinic.com/prostate` (`301`)
  - `m.manclinic.com/landing3~5.html` → `https://www.manclinic.com/plastic` (`301`)
  - `m.manclinic.com/landing6.html` → `https://www.manclinic.com/stone` (`301`)
  - `m.manclinic.com/coun.html` → `https://www.manclinic.com/consult` (`301`)
  - `m.manclinic.com/nonbenefit.html` → `https://www.manclinic.com/hospital#nonbenefit` (`301`)
  - 그 외 `m.manclinic.com/*` → `https://www.manclinic.com/` (`301`)

#### ② 기존 PC `/@2018/*` 경로 → 신규 URL 301 매핑 (`next.config.ts`)
```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // PC 루트 및 메인
      { source: '/@2018', destination: '/', permanent: true },
      { source: '/@2018/index.html', destination: '/', permanent: true },
      { source: '/main.html', destination: '/', permanent: true },

      // 카테고리별 일괄 301 매핑 (신규 라우트 확정 시 경로 동기화)
      { source: '/@2018/01_hp/:path*', destination: '/hospital', permanent: true },
      { source: '/@2018/clinic_08/:path*', destination: '/stone', permanent: true },
      { source: '/@2018/clinic_04/c4_0401.html', destination: '/implant', permanent: true },
      { source: '/@2018/clinic_02/:path*', destination: '/prostate', permanent: true },
      { source: '/@2018/clinic_03/:path*', destination: '/plastic', permanent: true },
      { source: '/@2018/clinic_04/:path*', destination: '/sexual', permanent: true },
      { source: '/@2018/clinic_06/:path*', destination: '/sexual', permanent: true },
      { source: '/@2018/clinic_05/:path*', destination: '/vasectomy', permanent: true },
      { source: '/@2018/clinic_07/:path*', destination: '/circumcision', permanent: true },
      { source: '/@2018/02_coun/:path*', destination: '/consult', permanent: true },
      { source: '/@2018/05_faq/:path*', destination: '/consult', permanent: true },
      { source: '/@2018/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
```
*(※ Option B 국내 VPS 배포 시에도 Next.js 앱 레벨에서 동일하게 작동하며, Caddy/Nginx 앞단에서도 병행 처리 가능. 404 에러 페이지에도 메인·예약 복귀 버튼 필수 구성.)*

### 3-4. Step 4: 네이버 · 구글 SEO 재등록 및 메타/구조화 데이터 검증
- [ ] **기존 네이버 소유권 인증 유지**: 기존 `index.html`에 있던 `<meta name="naver-site-verification" content="64cd5619dd07f1f4aae3c5baca241d4e9df20eda"/>` 태그를 새 사이트 `<head>`에 반드시 유지 *(네이버 서치어드바이저 기존 등록 유지)*
- [ ] **네이버 서치어드바이저 (`searchadvisor.naver.com`)**:
  - 신규 `https://www.manclinic.com` 사이트 추가 등록 → `robots.txt` 검증 → `sitemap.xml` 제출 → 주요 페이지 웹페이지 수집 요청
  - **네이버 플레이스(스마트플레이스)** 홈페이지 링크를 `http://www.manclinic.com` → **`https://www.manclinic.com`**으로 변경
- [ ] **구글 서치콘솔 (`search.google.com/search-console`)**:
  - 도메인 속성(`manclinic.com`) 인증 → `sitemap.xml` 제출 → 기존 `/@2018/` URL 색인 리다이렉트 정상 처리 모니터링
- [ ] **페이지별 고유 SEO 메타태그 + OpenGraph + JSON-LD**:
  - 모든 페이지 고유 `<title>`, `<meta name="description">`, `<link rel="canonical" href="https://www.manclinic.com/...">` 적용
  - 카카오톡 링크 공유 시 깔끔한 썸네일이 뜨도록 `og:title`, `og:description`, `og:image`(1200x630px WebP/JPG) 세팅 + 카카오 공유 디버거(`developers.kakao.com/tool/debugger/sharing`) 캐시 초기화
  - `MedicalClinic`, `Physician`(박천진·이웅희), `FAQPage` JSON-LD 구조화 데이터 삽입

---

## 4. 기타 필수 실무 정리 (계약 · 데이터 · QA · 운영)

### 4-1. 본 계약 전 원장님/실장님께 반드시 확정받을 5가지 체크리스트
시안 선택 회신이 오면 **착수 전 15분 미팅/전화**로 아래 5가지를 문서로 확정해야 분쟁을 막을 수 있습니다.

1. **확정 진료시간 및 휴진일**: 구형(수요일 휴진) vs 최신 팝업(이웅희 목 휴진 / 박천진 월·목 오후 휴진) 중 **공식 오픈 기준 최종 확인**
2. **시설·주차·의료진 공식 텍스트**: 주차 가능 여부(건물 내 주차/발렛/유료 여부), 이웅희 원장님 공식 프로필 사진(고해상도 원본 제공 여부) 및 약력 최종 컨펌
3. **기존 회원·게시글 DB 처리 방식**:
   - 이전 업체가 DB를 안 주거나 휴면 회원이 대부분이면 **신규 DB 클린 오픈** 확정 (공개 공지/언론보도/비급여/유튜브는 이미 확보한 데이터로 이관)
   - 기존 사이트 보존 필요 시 `old.manclinic.com` 읽기 전용 보관 여부 결정
4. **도메인(`manclinic.com`) 및 네이버 플레이스/광고 계정 관리자 확인**: 오픈 당일 DNS 전환 및 파워링크 랜딩 URL 변경 협조자 지정
5. **계약 범위 및 유지보수 경계 명시**:
   - 착수금 50% / 잔금 50%(오픈 전)
   - 자료(고해상도 사진·원고) 제공 기한: 계약 후 1~2주 이내
   - 디자인 시안 확정 후 레이아웃 전면 재수정 제한(부분 수정 2회), 의료광고심의 보완 수정 1~2회 무상 지원
   - **도메인·호스팅·SSL·알림톡 발송 실비 병원 부담** + 오픈 후 1개월 무상 하자보수 + 이후 유지보수 정책(관리자 페이지로 팝업/진료시간/비급여/공지 셀프 수정 제공)
   - **에이전시 포트폴리오(Before/After) 활용 동의** 조항

### 4-2. 오픈 직전 최종 QA(품질 검증) 체크리스트
- [ ] **실제 스마트폰 테스트 (iOS Safari / Android Chrome / 카카오톡 인앱 브라우저)**:
  - `tel:02-3018-7575`, `tel:010-9190-7575` 클릭 시 전화 앱 정상 호출
  - 카카오톡 상담(`gnjurology` 링크 또는 채널 URL) 정상 연결
  - 예약·상담 폼 입력 시 키보드 올라옴/화면 잘림/가로 스크롤 없음 확인
- [ ] **알림 E2E 실전 테스트**: 실제 휴대폰 번호로 예약·빠른상담·비밀상담 1건씩 제출 → DB 저장, 관리자 페이지 노출, 실장님 알림(이메일/알림톡/SMS) 수신까지 전 구간 검증
- [ ] **외부 링크 & 404 점검**: 기존 모바일에 있던 외부 이탈 링크(`penisdoctor.co.kr`) 및 깨진 이미지 0건 검증
- [ ] **성능 최적화**: 이미지 WebP 변환 + `loading="lazy"`, YouTube Facade 지연 로딩 적용 후 Google PageSpeed Insights 모바일 점수 점검 (LCP ≤ 2.5s, CLS ≤ 0.1 목표)
- [ ] **분석 도구 심기**: GA4(Google Analytics 4) + 네이버 애널리틱스 설치, 핵심 전환 이벤트(`예약 완료`, `카톡 클릭`, `전화 클릭`) 태깅

### 4-3. 오픈 직후(D+1 ~ D+30) 안정화 런북
- **D-Day (야간 또는 진료 종료 후 권장)**: DNS A레코드 전환 → HTTPS 및 301 리다이렉트 `curl -I` 전수 확인 → 예약/상담 실전 1건 테스트 → 네이버 플레이스·파워링크 URL 업데이트
- **D+1 ~ D+7**: 서버 에러 로그(`404`, `500`) 일일 모니터링 (누락된 옛날 URL 유입 발견 시 즉시 301 추가) + 네이버/구글 서치콘솔 색인 상태 확인
- **D+14 ~ D+30**: 병원 데스크(실장님) 관리자 페이지 사용법 1장 매뉴얼 전달(팝업 등록, 진료시간 변경, 비급여 수정, 예약 상태 관리) + 1개월 하자보수 점검 후 정식 인수인계 완료
