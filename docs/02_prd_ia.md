# STEP 2. 강남J비뇨기과 홈페이지 리뉴얼 신규 기획서 (IA · User Flow · PRD)

- **작성일:** 2026-11-25
- **선행 기준 문서:** `docs/01_asis_analysis.md` (STEP 1 승인 완료)
- **프로젝트 목표:** 단일 지점 · 2인 전문의 협진 병원용 단일 반응형 홈페이지(`https://www.manclinic.com/`) Phase 1 MVP 기획 확정 및 Phase 2 확장 포인트 분리
- **확정 전제 조건 (Phase 1):**
  1. **경량 회원제 포함 (비밀상담 전용):** Supabase Auth(이메일/비밀번호) 기반 `MEMBER` 권한 도입. 범위는 **본인 1:1 비밀상담 작성·답변 확인**으로 한정(소셜 로그인·회원 등급·포인트·치료후기 제외).
  2. **온라인 예약:** 비회원 신청 가능, **병원 측 수동(전화) 확정 방식** 유지(외부 알림톡/SMS 연동 및 환자용 신청 내역 조회 페이지 제외).
  3. **의료진·진료시간표·컴플라이언스:** 박천진·이웅희 2인 체제, `2026.08.24` 팝업 진료시간표 기준 적용, `Thanks Letter`는 의료광고법 제56조 리스크로 Phase 1 제외.
  4. **단일 데이터 접근 경로:** 모든 DB 읽기/쓰기는 Next.js 서버에서 Supabase Auth 세션 및 역할(`SUPER_ADMIN` / `STAFF` / `MEMBER`) 검증 후 Drizzle ORM으로만 수행(브라우저 PostgREST 직접 접근 차단).

---

## 1. 범위 변경 영향도 분석 (경량 회원제 추가에 따른 전문가 검토)

STEP 1의 "완전 비회원제"에서 **"비밀상담 전용 경량 회원제(이메일/비밀번호)"**로 Phase 1 범위가 조정됨에 따라 일정·복잡도·보안 영향을 사전에 정의합니다.

| 평가 항목 | 영향 수준 | 구체적 영향 및 대응 방안 |
|---|---|---|
| **일정 영향** | **+2 ~ 3 영업일** | 인증 화면(로그인/회원가입/비밀번호 재설정/탈퇴), `MEMBER` 전용 상담 목록·상세, 권한 분기 테스트(IDOR 차단) 추가 |
| **비용 영향** | **인프라 추가비 0원** | Supabase Auth 기본 제공 범위(MAU 50,000 무료) 내에서 이메일/비밀번호 인증 처리 가능. 단, 비밀번호 재설정 이메일 발송 안정화를 위해 추후 커스텀 SMTP(Resend/Naver Works 등) 연결 권장 |
| **개발 복잡도** | **중간 (통제 가능)** | 관리자(`SUPER_ADMIN`/`STAFF`)와 일반 회원(`MEMBER`)이 동일한 `auth.users`를 공유하므로 **역할 혼동 방지 설계**가 핵심. 관리자 여부는 별도 `admin_user` 테이블 매핑으로만 판별하고, 일반 회원은 `member_profile`로 분리해 `/admin/*` 접근을 미들웨어 + 서버 액션 2중 차단 |
| **보안·법적 영향** | **높음 (필수 통제)** | ① **IDOR(타인 글 열람) 원천 차단:** 서버 쿼리에 `consultation.member_user_id = session.user.id` 강제 ② **개인정보 최소 수집:** 가입 시 이메일·비밀번호·이름(또는 닉네임)만 수집하고, 증상·건강정보는 비밀상담 작성 시점에 별도 민감정보 동의 후 수집 ③ **회원 탈퇴 정책:** 탈퇴 시 개인식별정보 즉시 파기 또는 비식별화 정책 명시 필요 |

### [설계 의사결정] 비밀상담 인증 방식 비교

| 대안 | 장점 | 단점 | 채택 여부 |
|---|---|---|---|
| **안 A: Supabase Auth 이메일/비밀번호 경량 회원제 (확정)** | 본인 답변 누적 관리 용이, 비밀번호 분실 시 이메일 재설정 가능, Supabase Auth 세션 재사용으로 안전한 IDOR 방어 | 가입/로그인 허들 존재, 이메일 발송(인증/재설정) 및 회원 탈퇴 기능 필요 | **채택 (확정)** |
| 안 B: 비회원 게시글 비밀번호 방식 | 가입 허들 없음 | 비밀번호 분실 시 복구 불가, 답변 확인 재방문 불편, 브루트포스 방어 별도 구현 필요 | 미채택 |
| 안 C: 소셜 로그인(카카오/네이버) 포함 | 가입 전환율 높음 | 비뇨기과 특성상 SNS 계정 연동 거부감 존재, 검수·심사 일정 증가, Phase 1 과설계 | **Phase 2 보류** |

---

## 2. 최종 사이트맵 (IA) 및 유연한 진료 카테고리 설계

### 2-1. 진료 분야 카테고리 통합안 비교 및 추천 시안

AS-IS PC의 **7개 진료 대메뉴**(요로결석, 음경임플란트, 전립선, 남성성형, 성기능장애, 정관수술, 포경수술)는 상단 GNB가 지나치게 좁고 복잡해지며 모바일·PC 모두에서 주력 특화 분야(2인 전문의 협진 + 유튜브 `@uroj` 3대 센터)가 분산되는 문제가 있습니다.

| 구분 | 안 1: **5개 핵심 진료센터 통합 (추천 시안)** | 안 2: 4개 진료센터 통합 | 안 3: AS-IS 7개 대메뉴 유지 |
|---|---|---|---|
| **구성** | ① 전립선 센터<br>② 요로결석 센터<br>③ 음경임플란트·성기능 센터<br>④ 남성성형·재건 센터<br>⑤ 정관·포경 센터 | ① 전립선<br>② 요로결석<br>③ 발기부전·임플란트<br>④ 남성성형·정관·포경 | 요로결석 / 음경임플란트 / 전립선 / 남성성형 / 성기능장애 / 정관수술 / 포경수술 |
| **장점** | • GNB 대메뉴 5~6개 이내 유지(가독성 최적)<br>• 병원 3대 주력(전립선·요로결석·임플란트/재건)과 경수술(정관/포경)의 포지셔닝이 명확<br>• 모바일 드로어 탐색 깊이 최소화 | • 가장 간결한 1차 메뉴 | • 기존 단골·병원 내부 친숙도 유지 |
| **단점** | • AS-IS 대비 메뉴 명칭 변경 안내 필요 | • 정관/포경과 고난도 재건성형이 섞여 전문성 희석 | • GNB가 9개(병원소개·상담 포함)로 과밀, 1280px 해상도 줄바꿈 위험 |
| **추천** | **1순위 추천 (기본 시안 채택)** | 보류 | 고객사 요청 시 DB 설정 변경으로 즉시 전환 가능 |

> **[유연한 카테고리 아키텍처 원칙]**
> 진료 카테고리를 코드에 하드코딩하지 않고 `department` 테이블(또는 카테고리 메타 구조)의 `category_slug` · `display_order` · `parent_group`으로 관리합니다. URL 패턴을 `/departments/[category]/[slug]`로 통일해 두면, **추후 고객사가 기존 7개 메뉴 유지를 원하더라도 페이지 레이아웃·라우트 구조 변경 없이 카테고리 묶음만 즉시 5개 ↔ 7개로 재편**할 수 있습니다.

### 2-2. Phase 1 최종 사이트맵 (추천 5개 진료센터 기준)

```text
https://www.manclinic.com/
│
├── /                                        # 메인 페이지 (히어로 · 2인 전문의 · 5대 센터 · @uroj 미디어 · 2인 진료시간표/오시는 길)
│
├── /about                                   # [GNB 1] 병원소개
│   ├── /about/greeting                      # 병원 철학 · 3S 원칙(Safe·Simple·Speed) · IOM 음악요법
│   ├── /about/doctors                       # 2인 전문의 협진 소개 (박천진 대표원장 · 이웅희 원장 약력)
│   ├── /about/facilities                    # 프라이빗 진료실(5실) · 수술센터(2실) · 보유 장비 · 시설 갤러리(30장 선별)
│   └── /about/location                      # 2인 요일별 진료시간표 · 오시는 길(학동역 8·9번 출구) · 주차/연락처
│
├── /departments                             # [GNB 2] 진료센터 (전체 개요 허브)
│   ├── /departments/prostate                # ① 전립선 센터 (허브)
│   │   ├── /departments/prostate/overview   # 전립선 개요
│   │   ├── /departments/prostate/bph        # 전립선비대증
│   │   ├── /departments/prostate/holep      # HoLEP 수술
│   │   ├── /departments/prostate/urolift    # 유로리프트
│   │   ├── /departments/prostate/prostatitis# 전립선염
│   │   ├── /departments/prostate/cancer     # 전립선암
│   │   └── /departments/prostate/prostatodynia # 전립선통
│   ├── /departments/stone                   # ② 요로결석 센터 (허브)
│   │   ├── /departments/stone/symptoms      # 요로결석 원인·증상
│   │   ├── /departments/stone/diagnosis     # 요로결석 진단
│   │   └── /departments/stone/treatment     # 요로결석 치료 (하위 c8_030101/02 섹션 통합)
│   ├── /departments/sexual-implant          # ③ 음경임플란트·성기능 센터 (허브)
│   │   ├── /departments/sexual-implant/penile-implant # 음경임플란트 (대표 특화)
│   │   ├── /departments/sexual-implant/ed             # 발기부전
│   │   ├── /departments/sexual-implant/ed-test        # 성기능검사
│   │   ├── /departments/sexual-implant/ed-treatment   # 발기부전 치료
│   │   └── /departments/sexual-implant/pe             # 조루증 (개요·원인진단·치료 탭 통합, AS-IS GNB 오류 복구)
│   ├── /departments/reconstruction          # ④ 남성성형·재건 센터 (허브)
│   │   ├── /departments/reconstruction/peyronie       # 음경만곡증 (기하학적 백막이식)
│   │   ├── /departments/reconstruction/foreign-body   # 음경이물질제거
│   │   ├── /departments/reconstruction/glans          # 귀두확대술
│   │   ├── /departments/reconstruction/girth          # 음경굵기확대술
│   │   ├── /departments/reconstruction/length         # 음경길이연장술
│   │   └── /departments/reconstruction/buried-penis   # 함몰음경
│   └── /departments/vasectomy-circumcision  # ⑤ 정관·포경 센터 (허브)
│       ├── /departments/vasectomy-circumcision/vasectomy      # 정관수술 개요 & 무도정관수술
│       ├── /departments/vasectomy-circumcision/reversal       # 미세정관복원수술
│       └── /departments/vasectomy-circumcision/circumcision   # 레이저포경수술
│
├── /media                                   # [GNB 3] 미디어 (공식 유튜브 @uroj 선별 영상 가이드 + 언론보도/방송 아카이브)
│
├── /reservation                             # [GNB 4] 온라인 예약 (비회원 신청 가능 · 병원 수동 전화 확정 안내)
│
├── /consultation                            # [GNB 5] 1:1 비밀상담 (경량 회원 전용)
│   ├── /consultation                        # 비밀상담 안내 & 내 상담 목록 (로그인 시 본인 글만 노출)
│   ├── /consultation/new                    # 1:1 비밀상담 작성 (일반 개인정보 + 민감정보 별도 동의)
│   └── /consultation/[id]                   # 내 비밀상담 상세 및 병원 답변 확인 (본인 소유 서버 검증)
│
├── /community (또는 유틸리티/서브 링크)      # [GNB 6] 고객안내
│   ├── /notice                              # 공지사항 목록
│   ├── /notice/[id]                         # 공지사항 상세
│   ├── /faq                                 # 자주 묻는 질문 (전립선·요로결석·임플란트/성기능·남성수술 재분류)
│   └── /nonbenefit                          # 비급여 진료비용 안내 (푸터 전 페이지 상시 노출, 의료법 제45조)
│
├── /auth & /account                         # 경량 회원 인증 (헤더 유틸: 로그인 / 내 상담)
│   ├── /auth/login                          # 이메일/비밀번호 로그인
│   ├── /auth/signup                         # 경량 회원가입 (이메일/비밀번호/이름 + 이용약관·개인정보 동의)
│   ├── /auth/forgot-password                # 비밀번호 재설정 요청 (이메일 링크 발송)
│   ├── /auth/reset-password                 # 새 비밀번호 설정
│   └── /account                             # 최소 계정 관리 (비밀번호 변경 · 회원 탈퇴)
│
├── /privacy                                 # 개인정보처리방침 (현행법 개정본)
├── /terms                                   # 이용약관
│
└── /admin                                   # 경량 관리자 시스템 (SUPER_ADMIN / STAFF 전용, 검색엔진 차단 noindex)
    ├── /admin/login                         # 관리자 전용 로그인
    ├── /admin                               # 대시보드 (미처리 예약 · 미답변 비밀상담 현황 요약)
    ├── /admin/reservations                  # 온라인 예약 관리 (목록 · 상세 · 전화 확인 후 확정/변경/취소)
    ├── /admin/consultations                 # 1:1 비밀상담 관리 (목록 · 상세 · 답변 작성/수정 · 상태 관리)
    ├── /admin/schedule                      # 2인 전문의 진료시간표 관리
    ├── /admin/media                         # 유튜브(@uroj) 선별 영상 & 언론보도 관리
    ├── /admin/notices                       # 공지사항 CRUD
    ├── /admin/faqs                          # FAQ CRUD
    ├── /admin/popups                        # 팝업 · 띠배너 관리
    ├── /admin/nonbenefit                    # 비급여 진료비용표 관리
    └── /admin/staff                         # 관리자 계정 관리 (SUPER_ADMIN 전용)
```

*(※ AS-IS의 `Thanks Letter`(`hp_09.html`), 구 공개상담(`qna1.html`), 숨은 페이지(`hp_03`, `hp_06`), `교육자 박천진`(`hp_12.html` → 의료진 소개/미디어에 요약 편입 검토)은 별도 독립 메뉴로 두지 않고 정리합니다.)*

---

## 3. AS-IS → TO-BE 주요 URL 301 영구 리다이렉트 매핑표 초안

1999년부터 축적된 도메인 검색 자산(SEO) 손실을 막기 위해 도메인 레벨(Cloudflare/프록시)과 경로 레벨(`next.config.ts`)에서 301 영구 리다이렉트를 병행 적용합니다.

### 3-1. 도메인 · 프로토콜 레벨 리다이렉트
| AS-IS 패턴 | TO-BE 대상 | 상태코드 | 비고 |
|---|---|---|---|
| `http://manclinic.com/*` | `https://www.manclinic.com/$1` | `301` | HTTPS 강제 + `www` 대표 도메인 단일화 |
| `http://www.manclinic.com/*` | `https://www.manclinic.com/$1` | `301` | HTTPS 강제 |
| `https://manclinic.com/*` | `https://www.manclinic.com/$1` | `301` | Canonical 통일 |
| `http(s)://m.manclinic.com/*` | 아래 3-3 매핑표 적용 후 `https://www.manclinic.com/...` | `301` | `m.manclinic.com` SAN SSL 포함 필수 |

### 3-2. PC (`/@2018/*`) 주요 경로 301 매핑표
| AS-IS PC 경로 (`www.manclinic.com`) | TO-BE 신규 경로 | 처리 의도 |
|---|---|---|
| `/main.html`, `/@2018`, `/@2018/`, `/@2018/index.html` | `/` | 구형 frameset 및 PC 메인 통합 |
| `/@2018/01_hp/hp_01.html`, `/@2018/01_hp/hp_12.html` | `/about/doctors` | 의료진 소개(박천진·이웅희) 통합 |
| `/@2018/01_hp/hp_04.html` | `/about/location` | 진료안내·진료시간표 통합 |
| `/@2018/01_hp/hp_11.html` | `/about/facilities` | 병원 둘러보기(시설 30장) 승계 |
| `/@2018/01_hp/hp_08.html` | `/about/location` | 연락처 및 오시는 길 승계 |
| `/@2018/01_hp/hp_05.html`, `hp_02.html`, `hp_07*.html`, `hp_06.html` | `/media` | 언론보도·대외활동·VIDEO GALLERY 미디어 통합 |
| `/@2018/01_hp/nonbenefit.html` | `/nonbenefit` | 비급여 진료비용 안내 승계 |
| `/@2018/01_hp/hp_09.html` *(Thanks Letter)*, `hp_03.html` | `/about/greeting` | 의료광고법 리스크 페이지 폐기 후 안전 경로 리다이렉트 |
| `/@2018/clinic_08/c8_0101.html` | `/departments/stone/symptoms` | 요로결석 원인·증상 |
| `/@2018/clinic_08/c8_0201.html` | `/departments/stone/diagnosis` | 요로결석 진단 |
| `/@2018/clinic_08/c8_0301*.html` | `/departments/stone/treatment` | 요로결석 치료(+하위 2p 통합) |
| `/@2018/clinic_04/c4_0401.html` | `/departments/sexual-implant/penile-implant` | 음경임플란트 |
| `/@2018/clinic_04/c4_0101.html` | `/departments/sexual-implant/ed` | 발기부전 |
| `/@2018/clinic_04/c4_0201.html` | `/departments/sexual-implant/ed-test` | 성기능검사 |
| `/@2018/clinic_04/c4_0301.html` | `/departments/sexual-implant/ed-treatment` | 발기부전 치료 |
| `/@2018/clinic_06/c6_0101.html`, `c6_0201.html`, `c6_0301.html` | `/departments/sexual-implant/pe` | 조루증(개요·진단·치료 통합) |
| `/@2018/clinic_02/c2_0101.html` | `/departments/prostate/overview` | 전립선 개요 |
| `/@2018/clinic_02/c2_0201.html` | `/departments/prostate/bph` | 전립선비대증 |
| `/@2018/clinic_02/c2_0301.html` | `/departments/prostate/holep` | HoLEP 수술 |
| `/@2018/clinic_02/c2_0701.html` | `/departments/prostate/urolift` | 유로리프트 |
| `/@2018/clinic_02/c2_0401.html` | `/departments/prostate/prostatitis` | 전립선염 |
| `/@2018/clinic_02/c2_0501.html` | `/departments/prostate/cancer` | 전립선암 |
| `/@2018/clinic_02/c2_0601.html` | `/departments/prostate/prostatodynia` | 전립선통 |
| `/@2018/clinic_03/c3_0101.html` | `/departments/reconstruction/glans` | 귀두확대술 |
| `/@2018/clinic_03/c3_0201.html` | `/departments/reconstruction/girth` | 음경굵기확대술 |
| `/@2018/clinic_03/c3_0301.html` | `/departments/reconstruction/length` | 음경길이연장술 |
| `/@2018/clinic_03/c3_0401.html` | `/departments/reconstruction/foreign-body` | 음경이물질제거 |
| `/@2018/clinic_03/c3_0501.html` | `/departments/reconstruction/peyronie` | 음경만곡증 |
| `/@2018/clinic_03/c3_0601.html` | `/departments/reconstruction/buried-penis` | 함몰음경 |
| `/@2018/clinic_05/c5_0101.html`, `c5_0201.html` | `/departments/vasectomy-circumcision/vasectomy` | 정관수술·무도정관수술 |
| `/@2018/clinic_05/c5_0301.html` | `/departments/vasectomy-circumcision/reversal` | 미세정관복원수술 |
| `/@2018/clinic_07/c7_0101.html` | `/departments/vasectomy-circumcision/circumcision` | 레이저포경수술 |
| `/@2018/02_coun/qna.html`, `qna1.html` | `/consultation` | 1:1 비밀상담 통합 |
| `/@2018/02_coun/rev.html` | `/reservation` | 온라인 예약 승계 |
| `/@2018/05_faq/*` | `/faq` | FAQ 통합 |
| `/@2018/04_member/login.html` | `/auth/login` | 경량 로그인 연결 |
| `/@2018/04_member/join1.html` | `/auth/signup` | 경량 회원가입 연결 |
| `/@2018/04_member/member_01.html` | `/privacy` | 개인정보처리방침 |
| `/@2018/04_member/member_02.html` | `/terms` | 이용약관 |
| `/@2018/:path*` (그 외 미매핑 경로) | `/` | 404 손실 방지 폴백 |

### 3-3. 모바일 (`m.manclinic.com/*`) 주요 경로 301 매핑표
| AS-IS 모바일 경로 (`m.manclinic.com`) | TO-BE 신규 경로 | 비고 |
|---|---|---|
| `/`, `/index.html` | `/` | 메인 통합 |
| `/landing1.html` | `/departments/sexual-implant/penile-implant` | 음경임플란트 |
| `/landing2.html` | `/departments/prostate/bph` | 전립선비대증 |
| `/landing3.html` | `/departments/reconstruction/peyronie` | 음경만곡증 |
| `/landing4.html` | `/departments/reconstruction/foreign-body` | 음경이물질제거 |
| `/landing5.html` | `/departments/reconstruction` | 남성확대수술 (AS-IS 메뉴명 오기재 정상화) |
| `/landing6.html` | `/departments/stone` | 요로결석 (AS-IS 드로어 누락 정상화) |
| `/coun.html` | `/consultation` | 1:1 비밀상담 |
| `/nonbenefit.html` | `/nonbenefit` | 비급여 진료비용 안내 |
| `/*` (그 외 모든 경로) | `/` | 폴백 |

---

## 4. 핵심 사용자 동선 (User Flow)

### Flow 1. 메인 진입 → 신뢰 확인(2인 협진 · 유튜브) → 비회원 온라인 예약(수동 전화 확정)

```text
[1. 검색/직접 진입 (/)]
  ├─ 풀스크린 히어로(2인 전문의 협진 메시지 · 즉시 예약/전화 CTA)
  ├─ 2인 전문의 섹션(박천진 · 이웅희 약력 요약 및 3S 철학 확인)
  ├─ 5대 핵심 진료센터 탐색 (PC 가로 슬라이드 / 모바일 터치 스와이프 → 필요 시 상세 페이지 확인)
  ├─ 공식 유튜브(@uroj 5.2만+) 선별 영상 썸네일 클릭 → 모달 재생으로 전문성 검증
  └─ 2인 요일별 진료시간표 확인 (원장별 휴진 요일 인지)
        │
        ▼ (헤더 CTA / 본문 CTA / 모바일 하단 고정바 [온라인 예약])
[2. 온라인 예약 신청 (/reservation) — 비회원 접근 가능]
  ├─ 진료 분야 선택 (5대 센터 또는 '초진 상담/미정')
  ├─ 희망 의료진 선택 (박천진 원장 / 이웅희 원장 / 무관)
  ├─ 희망 날짜 및 시간대 선택 (선택 의료진의 휴진 요일·시간대 자동 안내/비활성화)
  ├─ 신청자 최소 정보 입력 (이름 · 연락처 · 간단한 내원 목적/증상 메모[선택])
  ├─ 동의 체크박스 분리 확인:
  │   ├─ [필수] 일반 개인정보 수집·이용 동의
  │   └─ [선택/조건부 필수] 증상·건강정보 입력 시 민감정보 수집·이용 별도 동의
  └─ [예약 신청하기] 제출 (서버 Zod 검증 · 스팸 방어 · DB 저장 · consent_record 기록)
        │
        ▼
[3. 예약 접수 완료 안내 화면 (즉시 확정 표기 금지)]
  ├─ "예약 신청이 정상 접수되었습니다. (현재 상태: 확인 대기)"
  ├─ "병원 담당자가 일정 확인 후 02-3018-7575 번호로 확정 전화를 드립니다." 안내
  └─ 급한 문의용 대표전화(tel:02-3018-7575) · 오시는 길 바로가기 제공
        │
        ▼ (병원 백오피스 업무)
[4. 관리자 예약 확인 및 수동 확정 (/admin/reservations)]
  └─ STAFF/SUPER_ADMIN 대시보드 미처리 건 확인 → 환자에게 전화 확인 → 상태 변경(확정/일정변경/취소) 및 처리 메모 기록
```

### Flow 2. 경량 회원가입/로그인 → 민감정보 별도 동의 → 1:1 비밀상담 작성 → 병원 답변 확인

```text
[1. 1:1 비밀상담 진입 (/consultation)]
  ├─ [비로그인 상태]
  │   ├─ "환자 프라이버시 보호를 위해 1:1 비공개 회원 전용으로 운영됩니다." 안내
  │   ├─ [로그인하기 (/auth/login)] / [간편 이메일 회원가입 (/auth/signup)] 버튼 노출
  │   └─ 타인의 상담 목록·제목 일체 미노출 (비뇨기과 민감정보 노출 원천 차단)
  │
  ├─ [회원가입 경로 (/auth/signup)]
  │   ├─ 최소 정보 입력: 이메일, 비밀번호(8자 이상 조합), 이름(또는 닉네임)
  │   ├─ [필수] 이용약관 및 일반 개인정보 수집·이용 동의 (consent_record 기록)
  │   └─ Supabase Auth 계정 생성 + member_profile 생성 → 자동 로그인 후 /consultation 복귀
  │
  ▼ [로그인 완료 (역할: MEMBER)]
[2. 내 비밀상담 목록 (/consultation)]
  ├─ 서버에서 session.user.id 기준 본인 작성 글만 조회 (타인 글 조회 불가)
  ├─ 상태 배지 표시: [접수됨] / [확인중] / [답변완료]
  └─ [새 비밀상담 작성하기 (/consultation/new)] 클릭
        │
        ▼
[3. 1:1 비밀상담 작성 (/consultation/new)]
  ├─ 상담 카테고리 선택 (전립선 / 요로결석 / 음경임플란트·성기능 / 남성성형·재건 / 정관·포경 / 기타)
  ├─ 제목, 상담 내용 입력, 회신 연락처(선택 — 전화 안내 희망 시)
  ├─ [필수] 일반 개인정보 수집·이용 동의 체크
  ├─ [필수] 민감정보(건강·증상정보) 수집·이용 별도 동의 체크 (미동의 시 제출 차단)
  └─ [비밀상담 등록] 제출 → Server Action(세션 검증 + Zod 검증 + consultation & consent_record 저장)
        │
        ▼ (병원 백오피스 업무)
[4. 관리자 비밀상담 확인 및 답변 등록 (/admin/consultations)]
  └─ STAFF/SUPER_ADMIN이 상담 상세 열람 → 전문의 확인 후 답변 등록 → 상태 [답변완료] 전환
        │
        ▼ (회원 재방문)
[5. 내 비밀상담 상세 및 답변 확인 (/consultation/[id])]
  ├─ 서버에서 session.user.id === consultation.member_user_id 일치 검증 (불일치 시 404/403 반환)
  └─ 본인 질문 원문 + 병원 공식 답변 확인 + 하단 [온라인 예약 바로가기] CTA로 내원 전환 유도
```

### 보조 단축 동선 (모바일 `390px` 고정 하단 액션바)
- 전 페이지 하단 고정 바: `[전화상담 02-3018-7575]` · `[온라인 예약]` · `[1:1 비밀상담]` · `[오시는 길]` 4개 핵심 버튼으로 1탭 전환(AS-IS의 `penisdoctor.co.kr` 이탈 및 `010-3168-8275` 오연결 완전 제거).

---

## 5. 전체 화면 목록 및 기능 명세서 (PRD)

### 5-1. Phase 1 MVP vs Phase 2 확장 범위 구분표

| 기능 영역 | Phase 1 MVP (이번 납품 구축) | Phase 2 확장 (설계 포인트만 확보, 미구현) |
|---|---|---|
| **지점 / 의료진** | 단일 지점(학동역) · 2인 전문의(박천진·이웅희) | 다지점(`branch`) 및 지점별 의료진/시간표 분리 |
| **회원 인증** | 이메일/비밀번호 경량 회원제(`MEMBER`, 비밀상담 전용) | 소셜 로그인(카카오/네이버/구글), 본인인증(PASS) |
| **온라인 상담** | 회원 전용 1:1 비공개 비밀상담(작성·목록·답변 확인, 민감정보 별도 동의) | 상담 첨부파일(비공개 Storage + Signed URL), AI 초안 보조 |
| **온라인 예약** | 비회원/회원 예약 신청 + 병원 수동 전화 확정(신청 내역 조회 페이지 제외) | 카카오 알림톡/SMS 자동 발송, 비회원 예약 조회/취소, EMR 연동 |
| **미디어·신뢰** | 유튜브(`@uroj`) 선별 영상(썸네일+모달) · 언론보도 아카이브 | 로그인 게이트 기반 치료후기/전후사례(법무·심의 완료 전제) |
| **콘텐츠·고지** | 5대 진료센터 템플릿(7개 전환 가능), 공지, FAQ, 비급여표, 팝업/배너 | 범용 페이지 빌더 풀 CMS(`content_page`), 다국어(EN/CN/RU/MN) |
| **관리자 권한** | 2단계(`SUPER_ADMIN` / `STAFF`) 경량 백오피스 | 5단계 세분화 RBAC + 개인정보 열람·수정 상세 감사로그(`audit_log`) |

### 5-2. 사용자 페이지 전체 화면 목록 (Public / Member)

| 화면 ID | 경로 | 대상 권한 | 핵심 기능 및 콘텐츠 명세 |
|---|---|---|---|
| `PUB-01` | `/` | 전체 | 풀스크린 안전 높이(`100svh`) 히어로, 2인 전문의 협진 소개, 5대 진료센터 가로 슬라이드(PC 휠/모바일 스와이프), 유튜브 `@uroj` 선별 4~6개(썸네일+모달), 2인 요일별 진료시간표(모바일 7컬럼 컴팩트), 오시는 길 요약, 활성 팝업/띠배너 |
| `PUB-02` | `/about/greeting` | 전체 | 병원 철학, 3S 원칙(Safe·Simple·Speed), 수술 중 음악요법(IOM), 프라이버시 보장 시스템(독립 5개 진료실·전원 남성 간호팀·전자차트) |
| `PUB-03` | `/about/doctors` | 전체 | 박천진 대표원장·이웅희 원장 2인 프로필(사진·학력·경력·학회·방송/칼럼 원문 보존), 원장별 전문 진료 분야 안내 |
| `PUB-04` | `/about/facilities` | 전체 | 병원 시설 갤러리(기존 950×630 고해상도 30장 중 선별), 수술실·소독장비·진단장비 소개 |
| `PUB-05` | `/about/location` | 전체 | DB 연동 2인 요일별 진료시간표, 상담시간, 대표전화·휴대폰·FAX, 카카오맵(HTTPS), 학동역 8·9번 출구 도보 안내, 주차 안내 |
| `PUB-06` | `/departments` | 전체 | 5대 핵심 진료센터 허브 및 증상별 빠른 진료과목 탐색 |
| `PUB-07` | `/departments/[category]` | 전체 | 센터별 개요, 하위 세부 시술/질환 카드 리스트, 해당 분야 선별 `@uroj` 유튜브 영상 연동 |
| `PUB-08` | `/departments/[category]/[slug]` | 전체 | 진료 상세 템플릿: 질환 개요 → 증상/원인 → 진단·치료법(AS-IS 의학 원문 + 검증 도식) → **하단 부작용·주의사항 공통 고지 박스(의료법)** → 관련 유튜브 영상 → 예약/비밀상담 CTA |
| `PUB-09` | `/media` | 전체 | 탭 구성: ① 공식 유튜브(`@uroj`) 카테고리 필터 + 썸네일 카드 + 모달 재생 ② 언론보도·방송 출연 리스트 |
| `PUB-10` | `/reservation` | 전체(비회원) | 비회원 온라인 예약 신청 폼(진료분야·희망원장·희망날짜/시간·이름·연락처·메모), 의료진 휴진일 표시, 일반/민감정보 분리 동의, 스팸 방어(Honeypot + Rate Limit), 접수 완료 안내(수동 전화 확정 명시) |
| `PUB-11` | `/notice`, `/notice/[id]` | 전체 | 병원 휴진·진료 안내 공지사항 목록(상단 고정 지원) 및 상세 |
| `PUB-12` | `/faq` | 전체 | 아코디언형 FAQ, 카테고리 필터(전립선 / 요로결석 / 임플란트·성기능 / 남성수술·기타 — AS-IS `faq_04` 오분류 정정) |
| `PUB-13` | `/nonbenefit` | 전체 | 카테고리별(수술·주사·검사·제증명·입원) 비급여 진료비용 표(DB 연동, 의료법 제45조 상시 고지) |
| `PUB-14` | `/privacy`, `/terms` | 전체 | 현행 개인정보보호법 기준 개정 개인정보처리방침(보유·파기기간, 책임자, 수탁사 명시) 및 서비스 이용약관 |
| `AUTH-01` | `/auth/login` | 비로그인 | 이메일/비밀번호 로그인, 비밀번호 찾기 링크, 회원가입 링크, 로그인 후 이전 경로(`/consultation`) 복귀 |
| `AUTH-02` | `/auth/signup` | 비로그인 | 이메일·비밀번호·이름(또는 닉네임) 입력, 이용약관·개인정보 동의 체크, 이메일 중복 검증, Supabase Auth 가입 |
| `AUTH-03` | `/auth/forgot-password`, `/auth/reset-password` | 비로그인 | 이메일 입력 → 재설정 링크 발송 → 새 비밀번호 변경 |
| `MEM-01` | `/consultation` | 전체 / `MEMBER` | 비로그인 시 1:1 비공개 운영 안내 및 로그인/가입 유도. 로그인(`MEMBER`) 시 **본인 작성 상담 목록만** 노출(상태·작성일·답변 여부) |
| `MEM-02` | `/consultation/new` | `MEMBER` | 1:1 비밀상담 작성 폼(카테고리·제목·내용·선택 연락처), **일반 개인정보 동의 + 민감정보(건강정보) 별도 동의 필수 체크**, `consent_record` 저장 |
| `MEM-03` | `/consultation/[id]` | `MEMBER`(본인) | 본인 상담 원문 및 병원 답변 상세 열람(서버에서 `member_user_id` 일치 검증, 타인 접근 시 차단), 답변 완료 전 수정/삭제 제한 정책 적용 |
| `MEM-04` | `/account` | `MEMBER` | 비밀번호 변경, 회원 탈퇴(탈퇴 시 개인정보 파기/비식별화 안내 및 확인) — 최소 계정 관리만 제공 |

### 5-3. 경량 관리자 페이지 화면 목록 (`/admin/*`, `SUPER_ADMIN` / `STAFF` 전용)

| 화면 ID | 경로 | 접근 권한 | 핵심 기능 명세 |
|---|---|---|---|
| `ADM-01` | `/admin/login` | 비로그인 | 관리자 전용 로그인(로그인 후 `admin_user` 테이블 활성화·역할 검증; 일반 `MEMBER` 계정은 로그인 거부) |
| `ADM-02` | `/admin` | `SUPER_ADMIN`, `STAFF` | 대시보드: 미처리 예약 건수, 미답변 비밀상담 건수, 오늘의 예약 목록, 최근 접수 리스트 빠른 이동 |
| `ADM-03` | `/admin/reservations` | `SUPER_ADMIN`, `STAFF` | 예약 목록(상태·날짜·원장·검색 필터), 상세 열람, 상태 전이(`PENDING`→`CONFIRMED`/`RESCHEDULED`/`CANCELED`/`NO_SHOW`), 전화 확인 처리 메모 기록 |
| `ADM-04` | `/admin/consultations` | `SUPER_ADMIN`, `STAFF` | 비밀상담 목록(상태·카테고리·검색 필터), 상세 열람(동의 이력 확인 포함), 병원 공식 답변 작성/수정, 상태 전이(`RECEIVED`→`IN_REVIEW`→`ANSWERED`/`CLOSED`), 내부 메모 |
| `ADM-05` | `/admin/schedule` | `SUPER_ADMIN`, `STAFF` | 2인 원장 요일별 오전/오후 진료·수술·휴진 상태 수정 및 특이사항 문구 관리(메인·오시는길·예약 화면 즉시 반영) |
| `ADM-06` | `/admin/media` | `SUPER_ADMIN`, `STAFF` | 유튜브(`@uroj`) 선별 영상 등록(URL 입력 → Video ID 자동 추출 · 카테고리 · 메인 노출 여부 · 정렬순서) 및 언론보도 CRUD |
| `ADM-07` | `/admin/notices` | `SUPER_ADMIN`, `STAFF` | 공지사항 작성·수정·삭제·상단고정·공개여부 토글 |
| `ADM-08` | `/admin/faqs` | `SUPER_ADMIN`, `STAFF` | FAQ 카테고리별 등록·수정·삭제·정렬순서 관리 |
| `ADM-09` | `/admin/popups` | `SUPER_ADMIN`, `STAFF` | 메인 팝업 및 상단 띠배너 등록(이미지 Supabase Storage 업로드, 게시 시작/종료 일시, 링크, 활성 토글) |
| `ADM-10` | `/admin/nonbenefit` | `SUPER_ADMIN`, `STAFF` | 비급여 항목별 분류·명칭·세부구분·비용·정렬·노출 관리 |
| `ADM-11` | `/admin/staff` | **`SUPER_ADMIN` 전용** | 관리자(`STAFF`) 계정 등록/비활성화 및 역할 관리 |

### 5-4. 핵심 보안 · 개인정보 · 운영 비기능 요구사항 (PRD 기준)
1. **권한 격리(Role Isolation):**
   - `MEMBER`는 `auth.users` + `member_profile`에만 존재하며 `admin_user`에 레코드가 없으므로 모든 `/admin/*` 라우트 및 관리자 Server Action에서 서버 측 즉시 차단(403/리다이렉트).
   - `consultation` 상세/목록 조회는 항상 서버에서 `session.user.id`를 조건절에 강제해 URL 파라미터 변조(IDOR)를 원천 차단.
2. **동의 이력 증적(`consent_record`):**
   - 회원가입(약관·일반 개인정보), 온라인 예약(일반·민감정보), 비밀상담(일반·민감정보) 제출 시 동의 항목 유형, 약관 버전, 동의 시각, 대상 레코드 참조를 서버 트랜잭션으로 저장.
3. **개인정보 최소 노출 및 로그 금지:**
   - 서버 콘솔/애플리케이션 로그에 환자 이름·연락처·증상 내용을 기록하지 않으며, 관리자 외 영역에 타인의 상담 제목·작성자 정보를 일체 노출하지 않음.
   - 개인정보 보유기간 경과 시 파기 정책(수동/배치 파기 기준)을 개인정보처리방침에 명시하고 STEP 4에서 구체화.
4. **스팸·봇 방어:**
   - 비회원 예약 폼 및 회원가입 폼에 숨김 필드(Honeypot) + IP 기반 Rate Limit(및 필요 시 Cloudflare Turnstile) 적용.

---

## 6. 공식 유튜브(`@uroj`) 및 벤치마킹(`gold-man.com`) 반영 기준

### 6-1. 벤치마킹(`gold-man.com`) 채택 요소 vs 복제 금지 항목

| 구분 | 항목 | 적용 원칙 |
|---|---|---|
| **채택할 UX/연출** | **대담한 풀스크린 히어로(`100svh`)** | 우측 답답한 요약 박스 배제, 2인 협진 신뢰 메시지와 직관적 CTA 중심 |
| **채택할 UX/연출** | **스크롤 연동 가로 슬라이드** | 5대 핵심 진료센터(또는 병원 강점) 섹션에 적용. **PC(`≥1024px`)는 스크롤 휠 연동 가로 이동**, **모바일(`390px`)은 자연스러운 터치 가로 스와이프**로 안전 전환 |
| **채택할 UX/연출** | **면 대비(Color Surface) + 충분한 여백** | 1px 회색 테두리 카드 나열(SaaS 템플릿화) 금지, 섹션 간 배경 톤 전환과 타이포그래피 위계로 의료 브랜드 품격 확보 |
| **채택할 UX/연출** | **전문성·신뢰 증거 배치** | 2인 전문의 약력, 3S 철학, 보유 시설/장비, 공식 유튜브(`5.2만+` 구독자·`780+` 영상), 언론보도를 동선 곳곳에 배치 |
| **채택할 UX/연출** | **모바일 `390px` 7컬럼 시간표 무결성** | `table-layout: fixed` 컴팩트 그리드로 박천진·이웅희 2인 요일별(월~토) 시간표를 가로 스크롤 0%로 한눈에 표시 |
| **복제·도입 금지** | **다지점 구조(5개 지점 선택기)** | 강남J비뇨기과는 단일 지점(학동역). 다지점은 Phase 2 확장으로만 분리 |
| **복제·도입 금지** | **다국어(EN/RU/MN/CN)** | 고객사 요구사항 미포함(Phase 2 옵션) |
| **복제·도입 금지** | **치료후기 · 전후사진 공개 게시판** | 의료법 제56조 위반 리스크로 Phase 1 제외(`Thanks Letter` 포함) |
| **복제·도입 금지** | **유료 AI 챗봇 · 유로닷 AI · AI MRI · 검사결과 조회** | 확인되지 않은 대형 병원 특화 기능 가정 금지 |
| **복제·도입 금지** | **경쟁 병원 실적 수치·카피 혼용** | 200만 건·6,500건 등 `gold-man.com`의 수치를 절대 참조·모방하지 않음 |

### 6-2. 공식 유튜브(`@uroj`) 연동 및 의료광고 안전 기준
- **성능 최적화 (Facade 패턴):** 메인·미디어 페이지에 무거운 `<iframe>`을 다수 직접 삽입하지 않고(AS-IS 메인 4개 제거), 고화질 썸네일(`hqdefault`/`maxresdefault` 또는 관리자 업로드 썸네일) + 재생 아이콘을 선노출한 뒤 클릭 시 팝업 모달에서 `youtube-nocookie.com` 임베드 재생.
- **콘텐츠 큐레이션 및 필터링 기준:**
  - **노출 권장:** 원장 직접 설명 의학 가이드, `가장 궁금해 하는 QnA`, 질환별 원인·진단·수술 원리 설명 영상.
  - **노출 제외(금지):** 수술실 절개·출혈 장면이 직접 노출되는 자극적 영상, 의료법상 치료경험담 소지가 있는 `환자인터뷰` 재생목록 영상.
  - 관리자가 `/admin/media`에서 안전한 선별 영상 URL만 화이트리스트 방식으로 등록·노출 제어.

---

## 7. STEP 2 종료 체크리스트 (마스터 프롬프트 13번 기준)

### 1. 완료된 작업
- 경량 회원제(비밀상담 전용) 추가에 따른 일정·비용·복잡도·보안 영향도 분석 완료
- AS-IS 7개 진료 대메뉴 → **5개 핵심 진료센터 추천 시안** 및 7개 전환 가능한 유연한 `/departments/[category]/[slug]` 사이트맵(IA) 설계 완료
- PC(`/@2018/*`) 및 모바일(`m.manclinic.com/*`) 전체 주요 경로 **301 영구 리다이렉트 매핑표 초안** 작성 완료
- 2대 핵심 사용자 동선(비회원 온라인 예약 전화 확정 / 경량 회원 1:1 비밀상담) 설계 완료
- 사용자 페이지(20개 화면 그룹) 및 경량 관리자 페이지(11개 화면) 전체 PRD·기능 명세 및 Phase 1 vs Phase 2 경계 확정
- `gold-man.com` 벤치마킹 채택/금지 기준 및 유튜브 `@uroj` 큐레이션·모달 연동 기준 수립 완료 (코드 작성 0건)

### 2. 결정된 사항
- **경량 회원제 범위 고정:** Supabase Auth 이메일/비밀번호 로그인(`MEMBER`), 본인 1:1 비밀상담 작성·답변 확인 및 최소 계정 관리(비밀번호 변경·탈퇴)로 한정
- **권한 3분리 확정:** `SUPER_ADMIN` / `STAFF` (`admin_user` 테이블 매핑) vs `MEMBER` (`member_profile`), 서버 측 `session.user.id` 검증으로 IDOR 원천 차단
- **온라인 예약 정책 유지:** 비회원 신청 가능 + 병원 수동 전화 확정(외부 알림톡/SMS, 환자 예약 조회 페이지 제외)
- **진료 카테고리 구조:** 추천 5개 핵심 진료센터를 기본 시안으로 채택하되, DB 기반 유연 구조로 추후 7개 대메뉴 전환 대응 가능
- **컴플라이언스:** `Thanks Letter` Phase 1 제외(`/about/greeting`으로 301 처리), 모든 시술 상세 하단 부작용·주의사항 공통 고지 박스 필수 배치

### 3. 미확정 사항 (고객사 확인 대기)
- STEP 1 고객사 확인 사항 중 `C-03`~`C-12` (성시현 원장 재직 여부, 이웅희·박천진 원장 고해상도 사진 및 약력 서면 확정, 오전/오후 상세 진료시각·점심시간, 심평원 기준 최신 비급여표, 유튜브 선별 영상 리스트, 개인정보처리방침 보유기간·수탁사, 도메인/DNS 권한)
- 추천 5개 진료센터 명칭·묶음에 대한 고객사 최종 동의(또는 7개 대메뉴 유지 여부)
- 경량 회원 가입 시 이메일 인증(Confirm Email) 필수 여부 및 비밀번호 재설정용 커스텀 SMTP 발신 주소 결정(STEP 4에서 기술 대안 확정)

### 4. 위험 요소
- **역할 혼동 및 IDOR 보안 리스크:** 일반 회원(`MEMBER`)과 관리자(`STAFF`/`SUPER_ADMIN`)가 동일 Supabase Auth 인스턴스를 사용하므로, 미들웨어 + 서버 액션의 이중 역할 검증 및 상담 소유권 검증 누락 시 치명적 개인정보 사고 발생 가능 → STEP 4 설계 및 STEP 7 Playwright 권한 테스트로 필수 검증
- **이메일 발송 한도 리스크:** Supabase 기본 Auth 이메일은 시간당 발송 제한이 매우 낮아 실제 운영 시 비밀번호 재설정/가입 메일이 차단될 수 있음 → STEP 4에서 SMTP(Resend 등) 또는 가입 즉시 로그인 정책 검토 필요
- **의료광고법 리스크:** 진료 상세 원문에 잔존한 단정·최상급 표현(`No pain`, `평생`, `가장 확실한`) 미수정 시 행정처분 우려 → 콘텐츠 이관 전 완화 문구 대조표 확정 필요

### 5. 다음 단계
- **STEP 3. UI/UX 및 디자인 시스템 (`docs/03_design_system.md`):** 신규 디자인 콘셉트, 컬러·타이포그래피·스페이싱 토큰, 공통 컴포넌트 명세(헤더/GNB/푸터/모바일 하단바/2인 진료시간표/유튜브 모달/상담·예약 폼), PC(`1440px`)·모바일(`390px`) 핵심 화면 와이어프레임 설계

### 6. 사용자 승인 필요 여부
- **승인 필요:** 추천 **5개 핵심 진료센터 IA**, **경량 회원제(비밀상담 전용) 화면/권한 범위**, **301 리다이렉트 매핑 초안**을 확정하고 **STEP 3(UI/UX 및 디자인 시스템 설계)**로 진행할지 여부
