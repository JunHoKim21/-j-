# v1 백업 체크포인트 및 작업 내역 가이드

- **백업 시점:** 2026-11-25 (GSAP ScrollTrigger 메인 모션 재구축 직전)
- **Git 백업 브랜치:** `backup/v1-static-editorial`
- **Git 백업 태그:** `v1-static-backup`
- **목적:** STEP 1~4 기획/설계 문서 및 STEP 5 1~3차(46개 정적·SSG 라우트 + 샘플 이미지 10장 적용 에디토리얼 메인) 상태를 완벽히 보존하여, GSAP 메인 모션 재구축 이후 언제든 즉시 비교·복원할 수 있도록 합니다.

---

## 1. 백업 시점까지 완료된 전체 작업 내역

| 단계 | 산출물 / 구현 내역 | 경로 |
|---|---|---|
| **STEP 1** | 기존 홈페이지(AS-IS) 분석서 + 고객사 확인 목록(`C-01`~`C-12`) | `docs/01_asis_analysis.md`, `docs/01_asis_analysis.pdf` |
| **STEP 2** | 신규 기획서(5대 진료센터 IA, 경량 회원제, 301 매핑표, User Flow, PRD) | `docs/02_prd_ia.md`, `docs/02_prd_ia.pdf` |
| **STEP 3** | UI/UX 디자인 시스템(컬러·타이포·토큰·컴포넌트·와이어프레임) | `docs/03_design_system.md`, `docs/03_design_system.pdf` |
| **STEP 4** | 시스템 및 데이터 설계(최신 버전 확정, 13개 테이블 ERD, RLS·IDOR 차단, SMTP) | `docs/04_architecture_db.md` |
| **STEP 5 (1차)** | `web/` Next.js `16.4.6` + React `19.3.1` + Tailwind v4 + TS `7.0.2` 초기화, 공통 헤더/푸터/모바일 고정바/플로팅 퀵바, 메인 페이지 | `web/src/components/layout/*`, `web/src/app/(public)/page.tsx` |
| **STEP 5 (2차)** | 병원소개(`/about/*`), 미디어(`/media`), 공지(`/notice/*`), FAQ(`/faq`), 비급여(`/nonbenefit`), 약관(`/privacy`, `/terms`) 11개 라우트 | `web/src/app/(public)/about/*`, `media`, `notice`, `faq`, `nonbenefit`, `privacy`, `terms` |
| **STEP 5 (3차)** | 5대 핵심 진료센터 허브(`/departments`), 5개 센터(`/departments/[category]`), 24개 시술 상세(`/departments/[category]/[slug]`, `MedicalDisclaimerBox` 의무 배치) | `web/src/app/(public)/departments/*`, `web/src/lib/data/department-details.ts` |
| **비주얼 1차** | 샘플 고해상도 이미지 10장 반영(`hero-01/02`, `center-*` 5장, `doctor-park/lee`, `trust-bg`), `HeroSlider`, 5대 센터 미니멀 포스터 카드 | `web/public/assets/sample/*`, `web/src/components/medical/HeroSlider.tsx` |

---

## 2. 백업 복원(되돌리기) 가이드

현재 v1 정적 에디토리얼 상태로 전체 프로젝트를 되돌리거나 비교하려면 아래 Git 명령어를 사용합니다.

```bash
# 1) 백업 브랜치/태그 확인
git branch -a
git tag -l

# 2) v1 백업 상태만 별도 브랜치로 열어 확인하기 (현재 작업 유지)
git checkout -b inspect-v1 v1-static-backup

# 3) 현재 브랜치의 메인 페이지 등 특정 파일만 v1으로 복원하기
git checkout v1-static-backup -- web/src/app/(public)/page.tsx

# 4) 전체를 v1 백업 상태로 완전히 되돌리기
git checkout backup/v1-static-editorial
```

---

## 3. 향후 진행 순서 (GSAP 재구축 이후)
1. **GSAP ScrollTrigger 메인 모션 전면 재구축** (`gsap` + `ScrollTrigger` + `gsap.matchMedia()`로 PC 시네마틱 핀/스크럽 모션 & 모바일 네이티브 무결성 동시 달성)
2. **STEP 5 (4차):** 비회원 온라인 예약(`/reservation`), 경량 회원 인증(`/auth/*`, `/account`), 1:1 비밀상담(`/consultation/*`) 프론트엔드 UI 구현
3. **STEP 6:** Supabase + Drizzle ORM(13개 테이블 마이그레이션 · RLS 차단 · 서버 가드 · AES-256-GCM 암호화) 및 경량 관리자(`/admin/*`) 구현
4. **STEP 7~8:** Playwright 반응형(`1440px`/`390px`)·권한·IDOR 자동화 QA → Vercel + Cloudflare SSL/301 배포 및 납품
