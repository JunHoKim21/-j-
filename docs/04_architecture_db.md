# STEP 4. 강남J비뇨기과 홈페이지 시스템 및 데이터 설계서

- **작성일:** 2026-11-25
- **선행 기준 문서:** `docs/01_asis_analysis.md`, `docs/02_prd_ia.md`, `docs/03_design_system.md` (STEP 1~3 승인 완료)
- **아키텍처 핵심 원칙:**
  1. **TypeScript 단일 풀스택:** Next.js(App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + PostgreSQL(Supabase 서울 리전) + Drizzle ORM
  2. **단일 데이터 접근 경로:** 모든 DB 테이블에 RLS를 활성화하되 클라이언트 직접 접근(`anon`/`authenticated`)을 원천 차단하고, 모든 읽기/쓰기는 Next.js 서버에서 Supabase Auth 검증 후 Drizzle ORM으로만 수행
  3. **3단계 권한 격리:** `SUPER_ADMIN` / `STAFF` (`admin_user`) vs `MEMBER` (`member_profile`, 1:1 비밀상담 전용) 완전 분리 및 IDOR 원천 차단
  4. **이식성 확보:** Repository / Service 계층 분리로 향후 자체 PostgreSQL 환경 이전 가능 구조 유지

---

## 1. 최신 안정 버전 확정표 (2026-11-25 npm Registry 실측 기준)

로컬 런타임 실측 결과(`Node.js v24.15.0`, `npm 11.12.1`, `pnpm 11.1.1`) 및 npm 공식 레지스트리 `latest` 태그와 `peerDependencies` 호환성을 직접 검증한 확정 버전표입니다. 패키지 매니저는 lockfile 일관성과 설치 속도가 우수한 **`pnpm`**을 기본 채택합니다.

| 영역 | 패키지명 | 실측 최신 안정 버전 | 호환성 검증 및 적용 비고 |
|---|---|---|---|
| **Framework** | `next` | `16.4.6` | App Router, Server Actions, React 19 호환 확인(`^19.0.0`). 비동기 `params`/`cookies()` 규칙 및 Next.js 16 요청 인터셉션 규격 준수 |
| **UI Library** | `react` / `react-dom` | `19.3.1` | `next@16.4.6` peer 충족 |
| **Language** | `typescript` | `7.0.2` *(주의)* | 최신 메이저(`7.0.2`). 프로젝트 초기화 시 에코시스템 플러그인(ESLint/Drizzle Kit) 호환성 테스트 후 충돌 시 안정 `5.9.x` 핀 폴백 허용 |
| **Styling** | `tailwindcss` / `@tailwindcss/postcss` | `4.3.5` | CSS-first `@theme inline` 토큰 체계 적용 (`tailwind.config.js` 미사용) |
| **UI Components** | `shadcn` (CLI) / `lucide-react` | `4.23.0` / `1.79.0` | 디자인 토큰 매핑 후 SaaS 보더 스타일 커스터마이징 |
| **ORM / Migration** | `drizzle-orm` / `drizzle-kit` | `0.45.4` / `0.31.11` | SQL 마이그레이션 파일 기반 스키마 관리 |
| **PG Driver** | `postgres` (`postgres.js`) | `4.1.1` | `drizzle-orm` peer(`>=3`) 충족. Supabase Transaction Pooler 연결 시 `prepare: false` 설정 적용 |
| **Auth / Storage** | `@supabase/supabase-js` / `@supabase/ssr` | `2.119.2` / `0.12.7` | peer(`^2.114.0`) 충족. 쿠키 기반 SSR 세션 검증 전용 |
| **Validation** | `zod` | `4.6.7` | Zod v4 API 기준 서버·클라이언트 공유 스키마 검증 |
| **Form** | `react-hook-form` / `@hookform/resolvers` | `7.92.0` / `7.0.9` | `@hookform/resolvers@7.0.9`의 `zod ^4.0.0` peer 지원 확인 완료 |
| **Testing** | `vitest` / `@playwright/test` | `5.1.1` / `1.65.1` | 단위/서비스 검증(Vitest) + 반응형·권한·IDOR E2E 검증(Playwright) |

---

## 2. 프로젝트 디렉터리 구조 (계층 분리 아키텍처)

향후 Supabase PostgreSQL에서 자체 VPS/클라우드 PostgreSQL로 이전하더라도 비즈니스 로직과 UI를 수정하지 않도록 **App Router(표현·라우팅) → Service(비즈니스 규칙·트랜잭션·권한 검증) → Repository(Drizzle DB 접근)** 3계층으로 명확히 분리합니다.

```text
gangnam-j-web/
├── docs/                                # 단계별 산출물 문서 (01~04+)
├── public/
│   └── assets/                          # 정적 검증 자산 (로고, 시설, 의학 도식 등)
├── drizzle/                             # Drizzle Kit 생성 SQL 마이그레이션 파일 (Git 추적)
│   └── migrations/
├── tests/
│   ├── unit/                            # Vitest: Zod 스키마, 권한 가드, Service 단위 테스트
│   └── e2e/                             # Playwright: 1440/390px 반응형, 예약/상담, IDOR 차단
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # 루트 레이아웃 (Pretendard 폰트, 메타데이터, JSON-LD)
│   │   ├── globals.css                  # Tailwind v4 @theme inline + shadcn/ui 시맨틱 변수
│   │   ├── robots.ts                    # robots.txt (/admin, /api, /consultation/* 크롤링 차단)
│   │   ├── sitemap.ts                   # 공개 페이지 동적 sitemap.xml
│   │   ├── not-found.tsx                # 404 복귀 페이지 (메인·예약 바로가기)
│   │   │
│   │   ├── (public)/                    # [라우트 그룹 1] 공통 헤더 · 다크 푸터 · 모바일 고정바 적용
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                 # 메인 (/)
│   │   │   ├── about/{greeting,doctors,facilities,location}/page.tsx
│   │   │   ├── departments/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [category]/page.tsx
│   │   │   │   └── [category]/[slug]/page.tsx
│   │   │   ├── media/page.tsx           # 공식 유튜브(@uroj) + 언론보도
│   │   │   ├── reservation/page.tsx     # 비회원 온라인 예약 신청
│   │   │   ├── notice/{page.tsx,[id]/page.tsx}
│   │   │   ├── faq/page.tsx
│   │   │   ├── nonbenefit/page.tsx      # 비급여 진료비용 안내
│   │   │   ├── privacy/page.tsx
│   │   │   └── terms/page.tsx
│   │   │
│   │   ├── (auth)/                      # [라우트 그룹 2] 중앙 집중형 클린 인증 레이아웃
│   │   │   ├── layout.tsx
│   │   │   └── auth/{login,signup,forgot-password,reset-password}/page.tsx
│   │   │
│   │   ├── (member)/                    # [라우트 그룹 3] 경량 회원 전용 (비밀상담 · 계정)
│   │   │   ├── layout.tsx               # 공개 헤더/푸터 공유 + 세션 상태 주입
│   │   │   ├── consultation/{page.tsx,new/page.tsx,[id]/page.tsx}
│   │   │   └── account/page.tsx
│   │   │
│   │   ├── (admin)/                     # [라우트 그룹 4] 관리자 전용 (noindex 강제)
│   │   │   ├── admin/login/page.tsx
│   │   │   └── admin/
│   │   │       ├── layout.tsx           # 서버 측 requireAdmin() 강제 가드 + 사이드바
│   │   │       ├── page.tsx             # 대시보드
│   │   │       ├── reservations/page.tsx
│   │   │       ├── consultations/{page.tsx,[id]/page.tsx}
│   │   │       ├── schedule/page.tsx
│   │   │       ├── media/page.tsx
│   │   │       ├── notices/page.tsx
│   │   │       ├── faqs/page.tsx
│   │   │       ├── popups/page.tsx
│   │   │       ├── nonbenefit/page.tsx
│   │   │       └── staff/page.tsx       # SUPER_ADMIN 전용 가드
│   │   │
│   │   └── api/                         # Route Handlers (최소 범위)
│   │       ├── auth/callback/route.ts   # 비밀번호 재설정 PKCE 코드 교환
│   │       ├── health/route.ts          # 배포 헬스체크
│   │       └── cron/retention/route.ts  # 보유기간 만료 개인정보 파기 크론(Secret 검증)
│   │
│   ├── components/
│   │   ├── ui/                          # shadcn/ui 커스터마이징 기본 컴포넌트
│   │   ├── layout/                      # Header, GNB, MobileDrawer, Footer, MobileStickyBar
│   │   ├── medical/                     # DoctorScheduleTable, YouTubeModalCard, DisclaimerBox, CenterHorizontalSlider
│   │   ├── forms/                       # ConsentSplitBox, ReservationForm, ConsultationForm, AuthForms
│   │   └── admin/                       # AdminSidebar, StatusBadge, AdminDataTable
│   │
│   ├── lib/
│   │   ├── env.ts                       # 서버/클라이언트 환경변수 Zod 검증 (부팅 시 누락 차단)
│   │   ├── validations/                 # Zod 공유 검증 스키마 (reservation, consultation, auth, admin)
│   │   ├── crypto.ts                    # 연락처 AES-256-GCM 암·복호화 & IP SHA-256 단방향 해시
│   │   ├── rate-limit.ts                # IP 기반 요청 빈도 제한 및 Honeypot 검증 유틸
│   │   └── format.ts                    # 날짜/전화번호 마스킹/유튜브 Video ID 추출 유틸
│   │
│   └── server/                          # 서버 전용 계층 ('server-only' 강제, 클라이언트 import 금지)
│       ├── auth/
│       │   ├── supabase-server.ts       # @supabase/ssr 쿠키 기반 서버 클라이언트 생성
│       │   └── guards.ts                # requireMember(), requireAdmin(roles), assertConsultationOwner()
│       ├── db/
│       │   ├── index.ts                 # Drizzle 인스턴스 + postgres.js 풀러 커넥션
│       │   ├── schema/                  # 도메인별 테이블 스키마 분리 (auth, clinic, inquiry, cms)
│       │   └── seed.ts                  # 초기 기준 데이터 시드(2인 원장, 시간표, 5대 센터, 비급여)
│       ├── repositories/                # 순수 Drizzle 쿼리 계층 (향후 PG 이전 시 유일한 DB 경계)
│       ├── services/                    # 트랜잭션, 암호화, 동의 이력 동시 기록, 권한 검증 비즈니스 로직
│       └── actions/                     # Next.js Server Actions ('use server', Zod → Guard → Service)
│
├── drizzle.config.ts
├── next.config.ts                       # 301 영구 리다이렉트, 이미지 도메인, 보안 헤더
└── playwright.config.ts
```

---

## 3. PostgreSQL / Drizzle ERD 및 테이블 명세

콘텐츠(공개) 데이터와 개인정보·민감정보(비공개) 데이터를 논리적으로 분리하고, **Phase 1 MVP 13개 테이블**을 우선 구축합니다.

### 3-1. Phase 1 MVP 핵심 ERD (논리 관계도)

```text
[Supabase auth.users (외부 인증 스키마)]
   │ 1:0..1                                  │ 1:0..1
   ▼                                         ▼
admin_user                                member_profile
(id, auth_user_id UK, role, is_active)    (id, auth_user_id UK, display_name, status)
   │ 1:N (답변/처리/작성자 참조)              │ 1:N (소유자 강제: IDOR 방어)
   ├──▶ consultation (answered_by_admin_id) ◀┘ (member_user_id FK)
   ├──▶ reservation  (handled_by_admin_id)
   └──▶ notice       (author_admin_id)

doctor (박천진 · 이웅희)
   ├── 1:N ──▶ business_hour (doctor_id, day_of_week UK)
   └── 1:N ──▶ reservation   (preferred_doctor_id, nullable)

department (5개↔7개 유연 전환 지원)
   └── (category_slug 논리 연계) ──▶ media_item / consultation / reservation / faq

[독립/고지/증적 테이블]
- consent_record   (회원가입·예약·상담 동의 이력 불변 증적)
- media_item       (유튜브 @uroj 선별 영상 & 언론보도)
- popup_banner     (메인 팝업 & 상단 띠배너)
- notice           (공지사항)
- faq              (자주 묻는 질문)
- nonbenefit_item  (비급여 진료비용표)
```

### 3-2. Phase 1 MVP 테이블 상세 명세 (13개 테이블)

모든 테이블 공통: `id`는 `UUID (defaultRandom)` PK 사용(순차 숫자 ID 노출에 의한 건수 추측 및 열거 공격 방지), 타임스탬프는 `TIMESTAMPTZ` (`created_at`, `updated_at`) 표준 적용.

#### ① 인증 · 권한 도메인
| 테이블명 | 주요 컬럼 및 타입 | PK / FK / 제약 | 주요 인덱스 |
|---|---|---|---|
| **`admin_user`** | `id` (UUID PK), `auth_user_id` (UUID NOT NULL), `email` (TEXT NOT NULL), `name` (TEXT NOT NULL), `role` (`'SUPER_ADMIN' \| 'STAFF'`), `is_active` (BOOLEAN DEFAULT true), `last_login_at`, `created_at`, `updated_at` | `UNIQUE(auth_user_id)`, `UNIQUE(email)` | `idx_admin_user_auth_active (auth_user_id, is_active)` |
| **`member_profile`** | `id` (UUID PK), `auth_user_id` (UUID NOT NULL), `email` (TEXT NOT NULL), `display_name` (TEXT NOT NULL), `status` (`'ACTIVE' \| 'WITHDRAWN'`), `withdrawn_at` (TIMESTAMPTZ NULL), `created_at`, `updated_at` | `UNIQUE(auth_user_id)` | `idx_member_profile_auth_status (auth_user_id, status)` |

#### ② 병원 · 진료 · 미디어 도메인 (공개 콘텐츠)
| 테이블명 | 주요 컬럼 및 타입 | PK / FK / 제약 | 주요 인덱스 |
|---|---|---|---|
| **`doctor`** | `id` (UUID PK), `slug` (TEXT UK), `name` (TEXT), `title` (TEXT — 대표원장/원장), `specialty_summary` (TEXT), `profile_image_path` (TEXT NULL), `careers_json` (JSONB), `media_history_json` (JSONB), `display_order` (INT), `is_active` (BOOLEAN), `created_at`, `updated_at` | `UNIQUE(slug)` | `idx_doctor_active_order (is_active, display_order)` |
| **`department`** | `id` (UUID PK), `category_slug` (TEXT), `category_name` (TEXT), `legacy_category_slug` (TEXT NULL — **AS-IS 7개 메뉴 롤백용 매핑**), `slug` (TEXT), `title` (TEXT), `summary` (TEXT), `body_sections_json` (JSONB — 개요/증상/진단/치료/도식), `disclaimer_text` (TEXT NULL), `display_order` (INT), `category_order` (INT), `is_published` (BOOLEAN), `created_at`, `updated_at` | `UNIQUE(category_slug, slug)` | `idx_dept_cat_order (is_published, category_order, display_order)` |
| **`business_hour`** | `id` (UUID PK), `doctor_id` (UUID FK → `doctor.id`), `day_of_week` (SMALLINT `1=월..6=토`), `am_status` (`'OPEN' \| 'SURGERY_OPEN' \| 'CLOSED'`), `pm_status` (`'OPEN' \| 'SURGERY_OPEN' \| 'CLOSED' \| 'NONE'`), `am_label` (TEXT NULL), `pm_label` (TEXT NULL), `note` (TEXT NULL), `updated_at` | `UNIQUE(doctor_id, day_of_week)` | `idx_bh_doctor_day (doctor_id, day_of_week)` |
| **`media_item`** | `id` (UUID PK), `type` (`'YOUTUBE' \| 'PRESS'`), `category_slug` (TEXT), `title` (TEXT), `summary` (TEXT NULL), `source_name` (TEXT NULL — 언론사명/@uroj), `youtube_video_id` (TEXT NULL), `external_url` (TEXT NULL), `thumbnail_url` (TEXT NULL), `published_date` (DATE NULL), `is_featured` (BOOLEAN DEFAULT false), `is_safe_verified` (BOOLEAN DEFAULT false — 자극 영상·후기 배제 검수 플래그), `display_order` (INT), `is_published` (BOOLEAN), `created_at`, `updated_at` | `CHECK(type != 'YOUTUBE' OR youtube_video_id IS NOT NULL)` | `idx_media_type_pub (type, is_published, is_featured, display_order)` |

#### ③ 상담 · 예약 · 동의 증적 도메인 (개인정보·민감정보 보호 대상)
| 테이블명 | 주요 컬럼 및 타입 | PK / FK / 제약 | 주요 인덱스 |
|---|---|---|---|
| **`consultation`** | `id` (UUID PK), `member_user_id` (UUID NOT NULL — `auth.users.id`), `category_slug` (TEXT), `title` (TEXT), `content` (TEXT), `contact_phone_enc` (TEXT NULL — AES-256-GCM 암호화), `status` (`'RECEIVED' \| 'IN_REVIEW' \| 'ANSWERED' \| 'CLOSED'`), `answer_content` (TEXT NULL), `answered_by_admin_id` (UUID FK → `admin_user.id` NULL), `answered_at` (TIMESTAMPTZ NULL), `admin_memo` (TEXT NULL), `retention_until` (TIMESTAMPTZ NOT NULL), `deleted_at` (TIMESTAMPTZ NULL), `created_at`, `updated_at` | `FK(answered_by_admin_id)` | `idx_consult_member (member_user_id, deleted_at, created_at DESC)`<br>`idx_consult_status (status, created_at DESC)`<br>`idx_consult_retention (retention_until)` |
| **`reservation`** | `id` (UUID PK), `department_category` (TEXT), `preferred_doctor_id` (UUID FK → `doctor.id` NULL), `preferred_date` (DATE NOT NULL), `preferred_time_slot` (TEXT NOT NULL), `patient_name` (TEXT NOT NULL), `patient_phone_enc` (TEXT NOT NULL — AES-256-GCM 암호화), `symptom_memo` (TEXT NULL), `status` (`'PENDING' \| 'CONFIRMED' \| 'RESCHEDULED' \| 'CANCELED' \| 'NO_SHOW'`), `handled_by_admin_id` (UUID FK → `admin_user.id` NULL), `confirmed_at` (TIMESTAMPTZ NULL), `admin_memo` (TEXT NULL), `retention_until` (TIMESTAMPTZ NOT NULL), `deleted_at` (TIMESTAMPTZ NULL), `created_at`, `updated_at` | `FK(preferred_doctor_id)`, `FK(handled_by_admin_id)` | `idx_resv_status_date (status, preferred_date, created_at DESC)`<br>`idx_resv_retention (retention_until)` |
| **`consent_record`** | `id` (UUID PK), `subject_type` (`'SIGNUP' \| 'RESERVATION' \| 'CONSULTATION'`), `subject_id` (UUID NOT NULL), `auth_user_id` (UUID NULL), `consent_type` (`'TERMS' \| 'PRIVACY' \| 'SENSITIVE_HEALTH'`), `policy_version` (TEXT NOT NULL — 예: `'2026-11-v1'`), `agreed` (BOOLEAN NOT NULL), `agreed_at` (TIMESTAMPTZ NOT NULL), `ip_hash` (TEXT NULL — SHA-256 단방향 해시), `user_agent` (TEXT NULL) | 불변(Append-Only) 증적 테이블 | `idx_consent_subject (subject_type, subject_id)`<br>`idx_consent_user (auth_user_id, agreed_at DESC)` |

#### ④ 공지 · FAQ · 팝업 · 비급여 도메인
| 테이블명 | 주요 컬럼 및 타입 | PK / FK / 제약 | 주요 인덱스 |
|---|---|---|---|
| **`popup_banner`** | `id` (UUID PK), `kind` (`'POPUP' \| 'TOP_BAR'`), `title` (TEXT), `image_path` (TEXT NULL — Supabase Storage 경로), `link_url` (TEXT NULL), `starts_at` (TIMESTAMPTZ), `ends_at` (TIMESTAMPTZ), `display_order` (INT), `is_active` (BOOLEAN), `created_at`, `updated_at` | `CHECK(ends_at >= starts_at)` | `idx_popup_active_period (kind, is_active, starts_at, ends_at)` |
| **`notice`** | `id` (UUID PK), `title` (TEXT), `content` (TEXT), `is_pinned` (BOOLEAN DEFAULT false), `is_published` (BOOLEAN DEFAULT true), `author_admin_id` (UUID FK → `admin_user.id`), `published_at` (TIMESTAMPTZ), `deleted_at` (TIMESTAMPTZ NULL), `created_at`, `updated_at` | `FK(author_admin_id)` | `idx_notice_pub (is_published, is_pinned DESC, published_at DESC)` |
| **`faq`** | `id` (UUID PK), `category_slug` (TEXT), `question` (TEXT), `answer` (TEXT), `display_order` (INT), `is_published` (BOOLEAN), `created_at`, `updated_at` | — | `idx_faq_cat_order (is_published, category_slug, display_order)` |
| **`nonbenefit_item`** | `id` (UUID PK), `category` (`'SURGERY' \| 'INJECTION' \| 'EXAM' \| 'CERTIFICATE' \| 'INPATIENT'`), `item_name` (TEXT), `detail` (TEXT NULL), `price_text` (TEXT), `display_order` (INT), `is_active` (BOOLEAN), `created_at`, `updated_at` | — | `idx_nonbenefit_cat_order (is_active, category, display_order)` |

### 3-3. Phase 2 확장 테이블 설계 포인트 (Phase 1 미구현)
- `branch` (다지점 정보), `admin_role` / `admin_permission` (5단계 RBAC), `content_page` / `content_category` (범용 풀 CMS), `audit_log` (개인정보 열람·수정 상세 감사 로그).
- **확장 대비 원칙:** Phase 1에서 `doctor`, `business_hour`, `reservation`, `consultation` 테이블은 향후 `branch_id` nullable FK 추가만으로 단일 지점 → 다지점 무중단 마이그레이션이 가능하도록 정규화 수준을 유지합니다.

### 3-4. 소프트 삭제 및 개인정보 보유기간 만료 파기 정책
- **보유기간 기본 기준 (법무 검토 후 최종 확정):**
  - `reservation`: 접수/처리 완료일 기준 **1년** (`retention_until = created_at + 1 year`)
  - `consultation`: 최종 답변 완료일(미답변 시 작성일) 기준 **1년** (또는 회원 탈퇴 시 즉시 파기)
  - `consent_record`: 관련 분쟁 대응 법정 기준에 맞춰 개인식별 정보 없이 동의 증적만 분리 보관 후 만료 파기
- **자동/수동 파기 메커니즘:**
  - 일일 크론(`/api/cron/retention`, `CRON_SECRET` 헤더 검증)이 `retention_until < NOW()` 레코드를 조회해 이름·암호화 연락처·증상 메모·상담 본문을 영구 파기(Hard Delete 또는 복구 불가 익명화) 처리.
  - **회원 탈퇴(`/account`) 시:** 트랜잭션으로 `member_profile.status = 'WITHDRAWN'`, `email`/`display_name` 비식별화, 본인 `consultation` 개인정보·본문 즉시 파기, 마지막으로 서버 Admin API(`SUPABASE_SERVICE_ROLE_KEY`)로 `auth.users` 계정 삭제 수행.

---

## 4. 보안 · RLS · 인증 아키텍처

### 4-1. RLS 전면 차단 + Next.js 서버 단일 접근 경로 패턴
1. **DB 레벨 차단 (Defense in Depth):**
   - 모든 13개 테이블에 `ALTER TABLE ... ENABLE ROW LEVEL SECURITY`를 마이그레이션에 포함합니다.
   - `anon` 및 `authenticated` 역할에 대한 `SELECT / INSERT / UPDATE / DELETE` 정책을 **단 하나도 생성하지 않음(Default Deny)**.
   - 결과적으로 브라우저에서 `NEXT_PUBLIC_SUPABASE_ANON_KEY`로 PostgREST API를 직접 호출하더라도 모든 테이블 접근이 100% 거부됩니다.
2. **서버 단일 경로 (Next.js → Drizzle ORM):**
   - Drizzle ORM은 서버 환경변수 `DATABASE_URL`(PostgreSQL 직접/풀러 연결)로 연결되며, 모든 접근은 `src/server/actions/*` 또는 Server Components에서 반드시 **인증·권한 가드(`guards.ts`)를 통과한 뒤** `services/` → `repositories/`를 통해서만 수행합니다.
3. **세션 검증 주의사항:**
   - 서버 인증 확인 시 쿠키만 읽는 `getSession()`을 단독 신뢰하지 않고, 반드시 Supabase Auth 서버와 서명을 재검증하는 **`supabase.auth.getUser()`**를 사용합니다.

### 4-2. 3단계 권한 격리(`SUPER_ADMIN` / `STAFF` / `MEMBER`) 및 IDOR 원천 차단

| 가드 함수 (`src/server/auth/guards.ts`) | 검증 로직 | 차단 대상 및 동작 |
|---|---|---|
| **`requireMember()`** | `supabase.auth.getUser()` 성공 + `member_profile`에서 `status = 'ACTIVE'` 확인 | 비로그인·탈퇴 회원 차단(`/auth/login` 리다이렉트 또는 `UNAUTHORIZED` 에러) |
| **`requireAdmin(roles?)`** | `supabase.auth.getUser()` 성공 + **`admin_user` 테이블에 `auth_user_id` 존재 & `is_active = true`** + 요청 역할(`SUPER_ADMIN`/`STAFF`) 포함 여부 검증 | 일반 `MEMBER`가 `/admin/*` URL이나 관리자 Server Action을 직접 호출해도 **100% 차단(`FORBIDDEN`)** |
| **`assertConsultationOwner(consultationId, userId)`** | `consultation` 조회 쿼리에 **`WHERE id = :consultationId AND member_user_id = :userId AND deleted_at IS NULL`** 조건을 강제 | 타인 `consultation.id` UUID를 알더라도 조회·열람 불가(**IDOR 원천 차단**, 존재 여부 노출 방지를 위해 `404 Not Found` 반환) |

- **이중 방어선:** Next.js 요청 인터셉터(미들웨어/프록시)에서 `/admin/*`(로그인 제외) 및 `/consultation/new`, `/account`의 비인증 접근을 1차 차단하고, 각 페이지 Server Component와 모든 Server Action 내부에서 `requireAdmin()` / `requireMember()`를 2차 강제 실행합니다.

### 4-3. Supabase 기본 SMTP 한계 대응 전략 (회원가입 · 비밀번호 재설정)

Supabase 기본 내장 이메일 서비스는 시간당 발송 한도가 매우 낮고(개발·테스트 전용) 수신함 스팸 분류 위험이 높습니다. Phase 1 운영 안정성을 위해 아래 정책을 채택합니다.

| 항목 | 설계 결정 및 근거 |
|---|---|
| **회원가입 흐름** | **가입 즉시 로그인 허용 (Supabase `Confirm Email` OFF 권장)** — 비뇨기과 비밀상담 진입 시 이메일 인증 대기 이탈을 줄이고, 가입 시점의 SMTP 한도 초과 장애를 원천 제거. 대신 IP Rate Limit + Honeypot + 이메일 형식 검증으로 자동 가입 봇을 차단 |
| **비밀번호 재설정 메일** | **커스텀 SMTP 연결 필수 (Resend 무료 티어: 월 3,000건 / 일 100건, 또는 병원 Naver Works SMTP)** — Supabase 대시보드 Auth SMTP 설정에 커스텀 SMTP를 연동해 `noreply@manclinic.com`(도메인 SPF/DKIM 인증 후)으로 안정적 재설정 링크 발송 |
| **Phase 2 확장 옵션** | 추후 스팸 증가 시 커스텀 SMTP 기반 위에서 `Confirm Email`을 토글만으로 즉시 활성화 가능 |

### 4-4. 개인정보 암호화 · Storage 보안 · 로깅 금지 원칙
- **연락처 암호화:** `reservation.patient_phone_enc`, `consultation.contact_phone_enc`는 서버 전용 `PII_ENCRYPTION_KEY`(32바이트) 기반 **AES-256-GCM**으로 암호화 저장하고, 관리자 화면 조회 시에만 서버에서 복호화(목록에서는 `010-****-1234` 마스킹, 상세 열람 시 전체 표시).
- **Supabase Storage 보안:** Phase 1 공개 이미지(팝업·배너·시설 사진)는 `public-media` 버킷에 저장하되, **업로드는 관리자 Server Action에서만** 허용(MIME 화이트리스트 `image/jpeg, image/png, image/webp`, 최대 `5MB`, 파일명 UUID 치환). 향후 환자 첨부파일(Phase 2)은 별도 비공개 버킷 + 단기 Signed URL로 격리.
- **민감정보 로깅 금지:** 서버 에러 핸들러 및 로거에서 요청 본문(`patient_name`, `phone`, `content`, `symptom_memo`)을 절대 출력하지 않으며, 에러 코드와 상관 ID만 기록.

---

## 5. Server Actions vs Route Handlers 명세표

- **Server Actions (`src/server/actions/*`):** 내부 폼 제출, 회원 인증/탈퇴, 비밀상담 작성, 관리자 CRUD 전체 담당 (CSRF 기본 보호 + End-to-End TypeScript 타입 안전성).
- **Route Handlers (`src/app/api/*`):** 외부 콜백(Auth PKCE), 배포 헬스체크, 스케줄러 크론(보유기간 파기) 등 HTTP 엔드포인트가 필수인 경우로 최소화.

### 5-1. 주요 Server Actions 명세

| 도메인 | Action 명 | 권한 | Zod 입력 핵심 | 스팸/보안 처리 | 반환 / 에러 표준 |
|---|---|---|---|---|---|
| **예약** | `createReservationAction` | Public (비회원) | 진료분야, 원장ID(선택), 희망일(휴진일 서버 재검증), 시간대, 성함, 연락처, 메모(선택), 일반동의(필수), 민감동의(메모 입력 시 필수) | Honeypot + IP Rate Limit(분당 5회), 연락처 AES-256-GCM 암호화, `reservation` + `consent_record` 단일 트랜잭션 | `{ ok, data: { status: 'PENDING', preferredDate, preferredTimeSlot } }` / 필드별 검증 에러 |
| **인증** | `signUpMemberAction` | Public | 이메일, 비밀번호(8자+ 영문·숫자), 이름/닉네임, 약관·개인정보 동의(필수) | Honeypot + IP Rate Limit(시간당 10회), Supabase Auth 생성 + `member_profile` + `consent_record` | `{ ok, redirectTo: '/consultation' }` / 중복 이메일·약관 미동의 에러 |
| **인증** | `signInMemberAction` / `signOutAction` | Public / Member | 이메일, 비밀번호 | 브루트포스 방어(Rate Limit), HTTP-only 쿠키 세션 발급 | `{ ok, redirectTo }` / 통일된 인증 실패 메시지(계정 존재 여부 비노출) |
| **인증** | `requestPasswordResetAction` / `updatePasswordAction` | Public / Auth | 이메일 / 새 비밀번호 | Rate Limit, 이메일 존재 여부 무관하게 동일 성공 응답 반환(계정 열거 방어) | `{ ok, message }` |
| **계정** | `withdrawMemberAction` | `MEMBER` | 현재 비밀번호 재확인, 탈퇴 확인 체크 | `requireMember()` + 비밀번호 재검증 + 개인정보/상담 즉시 파기 + `auth.users` 삭제 | `{ ok, redirectTo: '/' }` |
| **비밀상담** | `createConsultationAction` | `MEMBER` | 카테고리, 제목, 내용(10자+), 연락처(선택), 일반동의(필수), **민감정보 동의(필수)** | `requireMember()`, `member_user_id`를 클라이언트 입력이 아닌 **세션에서 강제 주입**, `consultation` + `consent_record` 트랜잭션 | `{ ok, data: { id } }` |
| **관리자 인증** | `signInAdminAction` | Public | 이메일, 비밀번호 | Supabase 로그인 직후 `admin_user` 활성화 여부 검증; 일반 `MEMBER` 계정이면 즉시 세션 파기 후 거부 | `{ ok, redirectTo: '/admin' }` |
| **관리자 예약** | `updateReservationStatusAction` | `STAFF`, `SUPER_ADMIN` | `reservationId`, `status`, `adminMemo` | `requireAdmin()`, 상태 전이 유효성 검증(`CONFIRMED` 시 `confirmed_at` 기록) | `{ ok }` + `revalidatePath('/admin/reservations')` |
| **관리자 상담** | `answerConsultationAction` | `STAFF`, `SUPER_ADMIN` | `consultationId`, `answerContent`, `status`, `adminMemo` | `requireAdmin()`, `answered_by_admin_id` 세션 주입 + `answered_at` 기록 | `{ ok }` + `revalidatePath` |
| **관리자 콘텐츠** | `upsertScheduleAction` / `upsertMediaAction` / `upsertNoticeAction` / `upsertFaqAction` / `upsertPopupAction` / `upsertNonbenefitAction` | `STAFF`, `SUPER_ADMIN` | 도메인별 Zod 스키마 (유튜브 URL→Video ID 파싱, 팝업 이미지 MIME/용량 검증) | `requireAdmin()`, HTML 본문 XSS 새니타이즈(또는 순수 텍스트/제한 마크다운) | `{ ok }` + 공개 경로 ISR/캐시 `revalidatePath` |
| **관리자 계정** | `manageStaffAction` | **`SUPER_ADMIN` 전용** | 이메일, 이름, 역할, 활성 토글 | `requireAdmin(['SUPER_ADMIN'])`, 자기 자신 비활성화 차단 | `{ ok }` |

### 5-2. Route Handlers 명세 (최소 3개)

| HTTP & 경로 | 권한 / 인증 | 역할 |
|---|---|---|
| `GET /api/auth/callback` | Supabase PKCE Code | 비밀번호 재설정 이메일 링크 클릭 시 세션 코드 교환 후 `/auth/reset-password`로 안전 리다이렉트(Open Redirect 차단) |
| `GET /api/health` | Public | 서비스 기동 및 DB 경량 `SELECT 1` 헬스체크 (민감 정보 미포함) |
| `POST /api/cron/retention` | `Authorization: Bearer ${CRON_SECRET}` | 보유기간(`retention_until`) 경과 예약·상담 개인정보 자동 파기 배치 실행 |

---

## 6. 환경변수 · 마이그레이션 · 백업 · 배포 전략

### 6-1. 환경변수 관리 기준 (클라이언트 노출 엄격 차단)

| 변수명 | 노출 범위 | 용도 및 보안 규칙 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 공개 | Canonical URL, OpenGraph, 비밀번호 재설정 콜백 기준 URL (`https://www.manclinic.com`) |
| `NEXT_PUBLIC_SUPABASE_URL` | 공개 | Supabase 프로젝트 URL (서울 리전 `ap-northeast-2`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 공개 | `@supabase/ssr` Auth 세션 처리 전용 (DB RLS 차단으로 직접 데이터 접근 불가) |
| `NEXT_PUBLIC_KAKAO_MAP_KEY` | 공개 | 오시는 길 카카오맵 JS 키 (도메인 화이트리스트 등록 필수) |
| `DATABASE_URL` | **서버 전용** | Supabase Transaction Pooler 연결 문자열 (Drizzle 런타임 쿼리용, `prepare: false`) |
| `DIRECT_URL` | **서버 전용** | Supabase Direct DB 연결 문자열 (Drizzle Kit 마이그레이션 전용) |
| `SUPABASE_SERVICE_ROLE_KEY` | **서버 전용** | 회원 탈퇴 시 `auth.users` 삭제 및 관리자 Storage 업로드 전용 (클라이언트 번들 절대 금지) |
| `PII_ENCRYPTION_KEY` | **서버 전용** | 연락처 AES-256-GCM 암호화 32바이트 키 (정기 로테이션 대비 버전 접두사 포함 저장) |
| `CRON_SECRET` | **서버 전용** | `/api/cron/retention` 크론 엔드포인트 호출 인증 토큰 |

### 6-2. 환경 분리 및 Drizzle Kit 마이그레이션 전략
- **환경 분리:** `Local (로컬 개발용 별도 Supabase/Docker PG)` → `Staging (Vercel Preview + 스테이징 DB)` → `Production (운영 서울 리전 DB)`. 개발·스테이징 DB에 실제 환자 데이터 반입 금지.
- **마이그레이션 워크플로우:**
  1. `src/server/db/schema/*` 수정 → `pnpm drizzle-kit generate`로 버전 SQL 생성
  2. 생성된 SQL에 **신규 테이블 RLS 활성화 구문(`ENABLE ROW LEVEL SECURITY`) 포함 여부 수동 리뷰**
  3. Git 커밋 후 배포 파이프라인에서 `DIRECT_URL`로 `pnpm drizzle-kit migrate` 실행 (**운영 DB에 `drizzle-kit push` 사용 금지**)

### 6-3. 백업 · 복구 및 향후 자체 PostgreSQL 이전 전략
- **백업:** Supabase Pro 일일 자동 백업(7일+ 보관, PITR 권장) + 주간 `pg_dump` 암호화 백업 보관.
- **자체 PostgreSQL 이전 대비:** 모든 DB 접근이 `src/server/repositories/`(표준 PostgreSQL + Drizzle ORM)에만 국한되어 있어, Supabase 외부 자체 PostgreSQL로 이전 시 `DATABASE_URL` 교체만으로 DB 레이어 무수정 이관 가능(Auth·Storage만 추후 어댑터 교체).

### 6-4. 배포 · SSL · 301 리다이렉트 구성
- **호스팅:** Vercel(서울 엣지 리전 `icn1` 지정) + Cloudflare DNS/WAF.
- **보안 헤더 (`next.config.ts`):** `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, CSP(YouTube `youtube-nocookie.com` 및 카카오맵 도메인만 허용), 운영 안정화 후 HSTS 적용.
- **301 리다이렉트 이중 구성:**
  - **Cloudflare Redirect Rules:** `http://` → `https://`, `manclinic.com` → `www.manclinic.com`, `m.manclinic.com/*` → `docs/02_prd_ia.md` 3-3 매핑표 적용(`m.manclinic.com` SAN SSL 포함).
  - **`next.config.ts` `redirects()`:** `/@2018/*` 및 `/main.html` → `docs/02_prd_ia.md` 3-2 매핑표 적용 (`permanent: true`).
  - 기존 네이버 서치어드바이저 소유권 메타태그(`naver-site-verification`) 루트 `layout.tsx` 유지.

---

## 7. STEP 4 종료 체크리스트 (마스터 프롬프트 13번 기준)

### 1. 완료된 작업
- npm 공식 레지스트리 및 로컬 런타임(`Node.js v24.15.0`, `pnpm 11.1.1`) 직접 조회로 전 핵심 패키지 최신 안정 버전 및 `peerDependencies` 호환성 확정 완료
- Next.js App Router 4개 라우트 그룹(`(public)`, `(auth)`, `(member)`, `(admin)`) 및 `actions → services → repositories → db` 계층 분리 디렉터리 구조 설계 완료
- Phase 1 MVP 13개 테이블 ERD, PK/FK/인덱스, `department` 5개↔7개 유연 전환 구조, 소프트 삭제 및 개인정보 1년 보유·파기 정책 명세 완료
- 전 테이블 RLS Default Deny + Next.js 서버 `getUser()` 검증 → Drizzle 단일 접근 패턴, 3단계 권한 격리(`SUPER_ADMIN`/`STAFF`/`MEMBER`) 및 IDOR 차단 가드, Supabase SMTP 한계 대응 전략 수립 완료
- Server Actions(11개 그룹) 및 Route Handlers(3개) 입출력·보안 명세, 환경변수·Drizzle Kit 마이그레이션·백업·배포(Vercel + Cloudflare + 301) 전략 작성 완료 (코드 작성 0건)

### 2. 결정된 사항
- **패키지·버전 기준:** `next@16.4.6`, `react@19.3.1`, `tailwindcss@4.3.5`, `drizzle-orm@0.45.4`, `@supabase/ssr@0.12.7`, `zod@4.6.7`, `pnpm@11.1.1` (TS `7.0.2` 호환 이슈 시 `5.9.x` 폴백)
- **단일 DB 접근 & 보안:** 전 테이블 RLS 활성화 + 클라이언트 정책 미부여, 연락처 AES-256-GCM 암호화, `consultation` 서버 측 `member_user_id` 강제 조건으로 IDOR 원천 차단
- **회원가입·SMTP 정책:** 가입 즉시 로그인 허용(`Confirm Email` OFF) + 비밀번호 재설정용 커스텀 SMTP(Resend 또는 Naver Works) 연동
- **개인정보 보유·파기:** 예약·상담 기본 1년 보유 후 자동 파기 크론(`/api/cron/retention`) + 회원 탈퇴 시 즉시 비식별화/파기

### 3. 미확정 사항 (개발 착수 전/중 확인 필요)
- Supabase 프로젝트(서울 리전 `ap-northeast-2`) 및 커스텀 SMTP(Resend 등) 계정 생성 주체(병원 명의 vs 개발용 선구축 후 이관)
- 개인정보 보유기간(`1년` 임시 기준안)에 대한 병원·법무 최종 확인
- STEP 1 고객사 확인 항목(`C-03`~`C-12`: 2인 원장 원본 사진·약력, 확정 진료시각, 심평원 최신 비급여표, 유튜브 선별 영상 목록, 카카오맵 API 키)

### 4. 위험 요소
- **TypeScript 7.0 메이저 초기 호환성 리스크:** 최신 `typescript@7.0.2`와 일부 ESLint/Drizzle Kit 플러그인 간 호환 이슈 가능 → STEP 5 초기화 직후 `tsc --noEmit` 및 `next build` 검증 후 이상 시 `5.9.x`로 즉시 안전 고정
- **Supabase Transaction Pooler와 Drizzle 준비문(Prepared Statement) 충돌:** Transaction 모드 풀러 사용 시 `prepare: false` 누락하면 런타임 오류 발생 → `src/server/db/index.ts` 초기화 시 필수 명시 및 `DIRECT_URL` 분리
- **Server Action 권한 가드 누락 위험:** 미들웨어만 믿고 개별 Action에 `requireAdmin()`/`requireMember()`를 누락하면 우회 가능 → 모든 Action 1행에 가드 호출 강제 및 STEP 7 Playwright 우회 테스트 검증

### 5. 다음 단계
- **STEP 5. 프론트엔드 개발:** Next.js 프로젝트 초기화(확정 버전 설치 · Tailwind v4 토큰 · shadcn/ui 세팅) → 공통 레이아웃(헤더/GNB/푸터/모바일 4버튼 고정바) → 메인 페이지(히어로·2인 전문의·5대 센터 가로 슬라이드·유튜브 모달·2인 진료시간표) → 서브/진료 상세/미디어/예약/경량 회원/비밀상담 화면 구현 및 PC(`1440px`)·모바일(`390px`) 반응형 검증

### 6. 사용자 승인 필요 여부
- **승인 필요:** [04_architecture_db.md](file:///c:/jun/강남j비뇨기과/docs/04_architecture_db.md)의 버전·디렉터리 구조·13개 테이블 ERD·보안/RLS·SMTP·Server Actions 설계를 확정하고, **STEP 5(프론트엔드 개발 — 프로젝트 초기화 및 핵심 UI 구현)**로 착수할지 승인해 주세요.
  - *(※ 착수 전 확인 사항: 신규 Next.js 앱을 현재 워크스페이스 하위 별도 폴더 예: `web/`에 생성할지, 아니면 루트에 바로 구성할지 희망 경로를 함께 지정해 주시면 기존 시안 `site_a`/`site_b` 및 `docs/`와 충돌 없이 안전하게 세팅하겠습니다.)*
