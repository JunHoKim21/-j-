# 강남J비뇨기과 반응형 HTML 디자인 시안 — 2단계: 에셋 분류 및 디자인 시스템 설계서

- **대상 프로젝트:** 강남J비뇨기과 단일 반응형 HTML 디자인 시안 (`HTML / CSS / Vanilla JS` 정적 시안 전용)
- **기준 문서:** `as_is_inventory.md` (1단계 완료) 및 `G1-01`~`G1-11` 시안 제작용 임시 기준안
- **레퍼런스 열람 근거:** `assets/reference/ref_layout.jpg.png` (레이아웃 구조 5종만 차용, 색상·문구·사진 미복사)

---

## 1. 공통 에셋 폴더 분류 및 경로 매핑

### 1-1. 표준 에셋 폴더 구조 및 다중 시안 참조 규칙
추후 복수의 디자인 시안 폴더(`site_a/`, `site_b/` 등) 또는 루트 단일 시안에서 동일 에셋을 중복 없이 참조할 수 있도록 최상위 `assets/` 하위를 6개 표준 폴더로 분리 구성했습니다.

| 폴더 경로 | 용도 | 분류 완료 건수 | 시안 내 참조 상대경로 |
|---|---|---:|---|
| `assets/real-hospital/` | 병원 외관, 대기실, 수술실, 상담실 시설 사진 (`visual_01~30`, `vs_1_3`, `depth6_bg` 등) | **31건** | 루트 기준 `./assets/real-hospital/...` (하위 시안 폴더 기준 `../assets/real-hospital/...`) |
| `assets/real-doctors/` | 의료진 수술 집도, 라이브서저리·심포지엄 교육 사진, 2026.08 공지 팝업 (`vs_1_2`, `hp12_*`, `20260810/24_popup`) | **11건** | `./assets/real-doctors/...` (`../assets/real-doctors/...`) |
| `assets/medical-illustration/` | PC 서브 페이지(`clinic_02`~`clinic_08`) 본문 해부학 도식·시술 안내 이미지 전량 | **89건** | `./assets/medical-illustration/...` (`../assets/medical-illustration/...`) |
| `assets/brand-visual/` | 병원 로고(컬러/화이트/모바일), 메인·모바일 진료 비주얼 배너, 서브 상단 배너 | **78건** | `./assets/brand-visual/...` (`../assets/brand-visual/...`) |
| `assets/icons-infographics/` | 3S/No3 인포그래픽 배너, 진료안내/비뇨기 도표·안내 이미지 | **8건** | `./assets/icons-infographics/...` (`../assets/icons-infographics/...`) |
| `assets/reference/` | 레퍼런스 레이아웃(`ref_layout.jpg.png`) 및 기존 원본 전체 보관(`legacy_images/`, 320건) | 참고 보관 | 시안 직접 참조 금지 (백업·대조 전용) |

### 1-2. `[임시 이미지 - 실제 촬영본 교체 필요]` 지정 위치 목록
공통 Rules(AI 이미지 생성 금지, 실제 사진 미확보 시 레이아웃 위치만 구성 후 교체 표시)에 따라 아래 4개 영역은 `[저해상도 경고]` 또는 원본 미확보 영역으로 지정합니다.

| 적용 페이지 / 영역 | 현황 및 사유 | 시안 내 처리 방식 |
|---|---|---|
| **의료진 소개 (`doctors.html`) & 메인 의료진 카드 — 박천진 원장 프로필** | 기존 `hp1_0101.jpg`가 `500×524px` 저해상도 | 반응형 카드 슬롯 구성 후 `[임시 이미지 - 실제 촬영본 교체 필요]` 배지·안내 표기 (수술 집도 사진은 `assets/real-doctors/pc_main_vs_1_2.png` 고해상도 활용) |
| **의료진 소개 (`doctors.html`) & 메인 의료진 카드 — 이웅희 원장 프로필** | `20260810_popup.jpg`(`600×660px`) 합성 팝업 내 일부로만 존재, 단독 원본 사진 미확보 | 동일 비율 프로필 슬롯 구성 후 `[임시 이미지 - 실제 촬영본 교체 필요]` 명시 |
| **오시는 길 (`location.html`) & 메인 하단 지도 영역** | 기존 `hp_08.html`은 카카오맵 외부 JS API 의존(정적 시안 독립 실행 시 API 키/도메인 제한 가능), `depth7_bg.png`는 구형 약도 | `assets/real-hospital/pc_main_depth7_bg.png` 참고 + 깔끔한 SVG/CSS 정적 약도 목업 또는 `[임시 이미지 - 실제 지도 API/최신 약도 교체 필요]` 표시 |
| **Video Gallery / 언론보도 썸네일 영역** | 기존 썸네일 `320×170px` / `92×118px` 저해상도 | YouTube 고유 ID 기반 깔끔한 16:9 카드 레이아웃 + 텍스트 중심 언론 리스트로 재구성(저해상도 스캔본 확대 금지) |

---

## 2. 통일된 공통 UI 및 반응형 내비게이션 설계

### 2-1. 레퍼런스(`ref_layout.jpg.png`) 레이아웃 차용 및 제외 원칙 매핑

| 구분 | 레퍼런스 요소 | 강남J비뇨기과 적용 설계 |
|---|---|---|
| **차용 1** | 밝은 화이트 배경 기반 넓은 섹션 여백 | 섹션 간 `88px~120px`(모바일 `56px~72px`) 여백, 눈의 피로도를 낮춘 밝은 베이스 |
| **차용 2** | 비대칭 Bento 그리드 (좌측 대형 + 우측 2+1) | 강남J비뇨기과 핵심 강점·신뢰 지표(1999년 개원, 3S/No3 수술 원칙, 보스턴사이언티픽 라이브서저리 교육기관, 독립된 5개 개인진료실·남자 간호팀) 배치 |
| **차용 3** | 진료 분야 좌측 탭 + 우측 세부 시술 버튼 카드 | 7개 핵심 진료 분야(요로결석·음경임플란트·전립선·남성성형·성기능장애·정관수술·포경수술) 좌측 탭 클릭 시 우측 카드에 개요 + 세부 시술 바로가기 버튼 동적 전환 |
| **차용 4** | 2단 미디어 박스 | 좌측: **Video Gallery** (유튜브 대표 영상 리스트) / 우측: **교육자 박천진·대외활동·Thanks Letter** 2단 정보 박스 |
| **차용 5** | 정돈된 다크 푸터 | 다크 배경 위에 로고, 사업자 정보, **2026.08.24 기준 2인 진료시간 요약**, 대표번호·상담번호·카톡, 약관/비급여 링크 정돈 |
| **제외 1** | 히어로 대형 모델 화보 | **완전 제외** → 병원 실제 시설 사진(`assets/real-hospital/pc_01_hp_visual_*.jpg`, `pc_main_vs_1_3.png`) + 절제된 신뢰 중심 타이포그래피로 재구성 |
| **제외 2** | `BEFORE & AFTER` 전후 비교 슬라이더 | **완전 삭제** (비뇨기과 환자 프라이버시 보호 및 의료광고 심의 기준 준수) |
| **변경 3** | 전국 지점 지도 섹션 | **강남 단일 지점 오시는 길**(학동역 8·9번 출구, 서울시 강남구 학동로 203 4F) + **2026.08.24 기준 2인 요일별 진료시간표**로 변경 |
| **제외 4** | 레퍼런스 색상·문구·사진 | **절대 미복사** — 강남J비뇨기과 고유 컬러 시스템 및 1단계 수집 원문만 사용 |

### 2-2. 단일 반응형 통합 메뉴(IA) 구조 (9개 대메뉴 + 복구 하위 메뉴 전체 수용)
PC와 모바일이 100% 동일한 메뉴 계층을 공유하며, 1단계에서 발견된 PC GNB 오류(`c6_0201`, `c6_0301`)·하위 페이지(`c8_030101/02`)·모바일 누락(`요로결석`)·오기재(`남성확대수술`)를 모두 정상화합니다.

| 1차 대메뉴 (9개) | 2차 하위 메뉴 (복구 항목 포함) | 비고 |
|---|---|---|
| **1. 병원소개** | 의료진 소개(2인 체제) / 진료안내(2026.08.24 시간표) / 병원 둘러보기(시설 30장) / 교육자 박천진 / 언론보도자료 / 대외활동 / VIDEO GALLERY(7개 탭) / Thanks Letter / 오시는 길 / 비급여비용안내 | 기존 `hp_09.html` 라벨 정상화, `hp_03`/`hp_06` 제외 |
| **2. 요로결석** | 요로결석 원인·증상 / 요로결석 진단 / 요로결석 치료 *(하위: 체외충격파·요관내시경 등 `c8_030101`, `c8_030102` 탭 통합)* | 모바일 드로어 누락 복구 |
| **3. 음경임플란트** | 음경임플란트 (3S-DTC / AMS 700 LGX 등 원문 전체) | 단일 핵심 진료 대메뉴 유지 |
| **4. 전립선** | 전립선 개요 / 전립선비대증 / HoLEP 시술 / 유로리프트 / 전립선염 / 전립선암 / 전립선통 | 모바일 누락 5개 하위 메뉴 복구 |
| **5. 남성성형** | 귀두확대술 / 음경굵기확대술 / 음경길이연장술 / 음경이물질제거 / 음경만곡증 / 함몰음경 | 모바일 `landing5` 메뉴명 오기재 수정 |
| **6. 성기능장애** | 조루증이란 / **조루증 원인·진단 (`c6_0201` 복구)** / **조루증의 치료 (`c6_0301` 복구)** / 발기부전 / 성기능검사 / 발기부전치료 | PC GNB 링크 오류 수정 |
| **7. 정관수술** | 정관수술 개요 / 무도정관수술 / 미세정관복원수술 | 모바일 누락 복구 |
| **8. 포경수술** | 레이저포경수술 | 모바일 누락 복구 |
| **9. 상담/예약** | Meet the expert (수술상담) / 온라인예약 / FAQ (주제별 재분류) | 구 `qna1.html` 폐지, 민감정보 별도 동의 적용 |

### 2-3. 전 페이지 100% 공통 UI 컴포넌트 7종 명세
공통 `css/common.css` 및 `js/common.js`로 모든 페이지에서 동일한 마크업·스타일·동작을 보장합니다.

1. **헤더 (`<header class="site-header">`)**
   - **PC (`1280px`~`1920px`):** 높이 `84px` 스티키(Sticky) 고정. 좌측 병원 로고(`pc_common_logo.png`) / 중앙 9개 대메뉴 GNB / 우측 핵심 액션(`02-3018-7575` 전화 표시 + `온라인 예약` 강조 버튼). 상단 얇은 유틸 바(`32px`)에 상담시간(`평일 09:00~18:00 · 토 09:00~13:00`), 카톡 ID(`gnjurology`), 비급여비용안내·오시는길 빠른 링크 배치.
   - **모바일 (`375px`~`390px`):** 높이 `60px` 고정. 좌측 병원 로고(비율 유지, 아이콘 겹침 방지) / 우측 `전화걸기` 아이콘 + `햄버거 메뉴` 버튼. 가로 스크롤 `0px`.
2. **PC GNB 메가/드롭다운 메뉴 (`<nav class="gnb">`)**
   - 9개 대메뉴가 `1280px` 해상도에서도 줄바꿈이나 잘림 없이 1줄 정렬되도록 폰트 크기(`15px`)·간격(`gap: clamp(14px, 1.5vw, 28px)`) 유동 설계.
   - 호버 및 키보드 포커스(`:focus-within`) 시 해당 대메뉴 하위 메뉴 패널이 부드럽게 열리며, 현재 페이지가 속한 대메뉴·하위 메뉴에 `is-active` 상태 표시.
3. **서브 페이지 상단 배너 (`<section class="sub-hero">`)**
   - 높이 `220px~260px`(모바일 `160px`), 자극적 비주얼을 배제한 절제된 톤의 배경 + 브레드크럼(`홈 > 대메뉴 > 현재 페이지`) + 명확한 `<h1>` 페이지 제목 + 1줄 진료 요약.
4. **서브 페이지 카테고리 탭 (`<nav class="sub-tabs">`)**
   - 같은 대메뉴 내 2차 하위 메뉴를 가로 탭(Pill/Underline)으로 상단 고정 제공. 모바일(`375/390px`)에서는 `overflow-x: auto; scroll-snap-type: x proximity;` 가로 스와이프 지원 및 활성 탭 자동 중앙 스크롤.
5. **통합 다크 푸터 (`<footer class="site-footer">`)**
   - 상단 바: `개인정보처리방침` | `이용약관` | `비급여비용안내` | `오시는 길` | `FAQ`
   - 본문 3단 그리드(모바일 1단 스택): ① 화이트 로고(`pc_common_footer_logo.png`) + 사업자 정보(상호: 강남J비뇨기과의원 / 원장: 박천진 / 주소: 서울시 강남구 학동로 203 4F / 사업자등록번호: 120-90-16660) ② **2026.08.24 기준 2인 진료시간 요약**(이웅희 원장 목 휴진 / 박천진 원장 월·목 오후 휴진 / 토 오전 진료 / `[병원 최종 확인 후 확정]`) ③ 대표번호 `02-3018-7575`, 상담/문자 `010-9190-7575`, FAX `02-516-2030`, 카카오톡 `gnjurology`, 상담시간 `평일 09:00~18:00 · 토 09:00~13:00`.
6. **모바일 드로어 메뉴 (`<aside class="mobile-drawer">`)**
   - 우측(또는 좌측) 풀하이트 오프캔버스(`width: min(86vw, 360px)`). 상단에 닫기 버튼 + 빠른 연락처(`전화`·`카톡`), 본문에 **9개 대메뉴 아코디언(클릭 시 하위 메뉴 펼침)**, 하단에 `온라인 예약` / `비급여비용안내` 퀵버튼 배치. 배경 딤드 + 바디 스크롤 잠금 + ESC 닫기 지원.
7. **모바일 하단 고정 CTA 바 (`<div class="mobile-sticky-cta">`)**
   - `768px` 미만에서만 노출, 높이 `64px + env(safe-area-inset-bottom)`. 3분할 균등 버튼: ① `전화상담` (`tel:0230187575`) ② `카톡상담` (`gnjurology` 안내 모달/복사) ③ `온라인 예약` (강조 컬러, 예약 페이지 이동). `footer` 하단에 `padding-bottom: 84px` 확보해 푸터 가림 원천 차단.

> **상담·예약 폼 공통 컴플라이언스 규칙:** 모든 상담·예약 페이지(`qna.html`, `rev.html`)는 실제 서버 전송 없이 Vanilla JS 유효성 검사 + **"시안용 접수 완료 안내 모달"**로 동작하며, 체크박스를 **① 일반 개인정보 수집·이용 동의(필수)**와 **② 민감정보(건강정보) 수집·이용 별도 동의(필수)**로 분리 배치하고 `<!-- [법무 검토 후 최종 확정] -->` 주석을 명시합니다.

---

## 3. 상용 병원 수준 디자인 방향 3안 비교 제안

### 3-1. 3안 핵심 비교표

| 항목 | 방향 A: 전문·신뢰 중심 (Clinical Authority) | 방향 B: 모던·프리미엄 중심 (Private Prestige) | 방향 C: 환자 친화·정보 중심 (Calm Care & Clarity) |
|---|---|---|---|
| **브랜드 인상** | 대학병원급 정통 비뇨의학 전문성, 27년 임상 권위, 단정하고 신뢰감 있는 블루-네이비 톤 | 강남권 프라이빗 클리닉의 절제된 품격, 1인 독립 진료실·보안성 강조, 차콜-웜샌드 톤 | 민감한 고민을 편안하게 탐색할 수 있는 차분한 의료 가이드, 높은 가독성의 틸-아이보리 톤 |
| **추천 타깃** | 음경임플란트·HoLEP 등 고난도 수술의 안전성과 전문성을 최우선으로 보는 환자 | 프라이버시와 프라이빗한 강남권 클리닉 경험을 중시하는 중장년·VIP 환자 | 요로결석·전립선·성기능 등 방대한 의학 정보를 쉽고 부담 없이 읽고 싶은 환자 |
| **메인 컬러** | Deep Navy `#0F2744` / Trust Blue `#1D5B9B` | Deep Charcoal `#1C2026` / Warm Bronze `#9A7B56` | Deep Teal `#0F4C5C` / Calm Cyan `#1F7A8C` |
| **배경 / 서피스** | Pure White `#FFFFFF` / Cool Tint `#F4F7FA` | Warm White `#FDFCFA` / Soft Stone `#F4F2EE` | Clean White `#FFFFFF` / Mist Gray `#F5F8F8` |
| **포인트 / CTA** | Crisp Cobalt `#2563EB` (호버 `#1D4ED8`) | Muted Gold-Bronze `#8C6B43` (호버 `#735634`) | Deep Emerald-Teal `#0D6E6E` (호버 `#095252`) |
| **다크 푸터** | `#0B192C` | `#14171C` | `#102329` |
| **카드/버튼 스타일** | `radius: 12px`, `1px solid #E2E8F0`, 깔끔한 직선형·미세 그림자 | `radius: 8px`, `1px solid #E5E0D8`, 미니멀 보더·여백 강조 | `radius: 16px`, `1px solid #DCE6E8`, 부드러운 필(Pill) 버튼·친근한 배지 |
| **타이포 느낌** | Pretendard Bold + 또렷한 수치 강조(Tabular Nums) | Pretendard Medium + 넉넉한 자간·에디토리얼 위계 | Pretendard Regular/SemiBold + 큰 행간(`1.75`)·정보 스캔 최적화 |

### 3-2. 각 방향별 상세 디자인 토큰 및 레이아웃 명세

#### [방향 A] 전문·신뢰 중심 (Clinical Authority) — 추천안
- **CSS 컬러 변수 (`:root`)**:
  ```css
  --color-primary: #0F2744;        /* 딥 네이비: 헤더 강조, 메인 헤딩, 신뢰 지표 */
  --color-primary-accent: #1D5B9B; /* 트러스트 블루: 활성 탭, 주요 CTA, 링크 */
  --color-cta-hover: #144375;      /* CTA 호버 */
  --color-bg-base: #FFFFFF;        /* 밝은 화이트 베이스 */
  --color-bg-subtle: #F4F7FA;      /* 교차 섹션 / Bento 보조 카드 */
  --color-border: #DDE5EF;         /* 1px 정돈된 구분선 */
  --color-text-main: #111827;      /* 본문 진한 텍스트 (대비율 15:1+) */
  --color-text-muted: #4B5563;     /* 보조 설명 텍스트 */
  --color-footer-bg: #0B192C;      /* 다크 네이비 푸터 */
  ```
- **타이포그래피 (본문 16~18px 기준):**
  - Font: `'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif`
  - `H1 (히어로)`: `clamp(30px, 3.6vw, 48px)`, `weight: 700`, `line-height: 1.25`, `letter-spacing: -0.025em`
  - `H2 (섹션 제목)`: `clamp(24px, 2.5vw, 36px)`, `weight: 700`, `line-height: 1.3`
  - `H3 (카드/서브 소제목)`: `clamp(18px, 1.5vw, 22px)`, `weight: 600`
  - `Body`: PC `17px` / 모바일 `16px`, `line-height: 1.7` (의료 설명 장문 가독성 최적화)
- **카드·버튼·여백 규칙:** 최대 컨텐츠 폭 `1280px`(좌우 패딩 PC `32px`, 모바일 `20px`), 섹션 상하 여백 PC `104px` / 모바일 `64px`, 카드 `border-radius: 12px; padding: 28px`, 버튼 높이 `48px~52px`, `border-radius: 8px`.
- **메인 페이지 섹션 구성 (8단계):**
  1. **신뢰 히어로:** 병원 실제 시설 사진(`vs_1_3.png` / `visual_01.jpg`) + 좌측/중앙 절제된 신뢰 타이포("1999년부터 이어온 정통 비뇨의학, 프라이버시를 지키는 독립된 진료") + 바로가기 CTA(`온라인 예약` / `진료과목 안내`)
  2. **연혁·철학 스테이트먼트:** `SINCE 1999` + 3S(Safe·Simple·Speed) / No3(No pain·No bleeding·No complication) 핵심 진료 철학
  3. **핵심 강점·지표 Bento 그리드 (레퍼런스 차용 2):** 좌측 대형 카드(박천진 원장 수술 집도 사진 `vs_1_2.png` + 보스턴사이언티픽 교육기관) / 우측 상단 2카드(1999년 개원 27년 임상 경험 · 독립된 5개 개인진료실) / 우측 하단 와이드 카드(2인 전문의 협진 + 전원 남자 간호팀 프라이버시 시스템)
  4. **진료 분야 인터랙티브 탭 & 카드 (레퍼런스 차용 3):** 좌측 7개 진료 분야 탭 ↔ 우측 네이비 강조 카드(질환 요약 + 세부 시술 바로가기 버튼 2~7개, 예: 전립선 선택 시 `HoLEP`, `유로리프트`, `전립선비대증`, `전립선염`, `전립선암`, `전립선통` 버튼 즉시 표시)
  5. **2단 미디어 박스 (레퍼런스 차용 4):** 좌측 `Video Gallery` (유튜브 대표 영상 4건 + 전체보기) / 우측 `교육자 박천진 · 대외활동 · Thanks Letter` 주요 소식 리스트
  6. **의료진 2인 소개 & 병원 둘러보기 프리뷰:** 박천진·이웅희 원장 2인 카드(`[임시 이미지 - 실제 촬영본 교체 필요]` 슬롯) + 실제 시설 사진(`visual_01~06.jpg`) 가로 갤러리
  7. **강남 단일 지점 오시는 길 & 2026.08.24 진료시간표:** 좌측 2인 요일별 진료시간표(표 형식, 휴진일 명확 구분) + 상담시간·전화·카톡 / 우측 학동역 8·9번 출구 오시는 길 안내
  8. **다크 푸터 (레퍼런스 차용 5)** + 모바일 하단 3분할 고정 CTA 바

#### [방향 B] 모던·프리미엄 중심 (Private Prestige)
- **CSS 컬러 변수 (`:root`)**:
  ```css
  --color-primary: #1C2026;        /* 딥 차콜: 절제된 프리미엄 베이스 */
  --color-primary-accent: #8C6B43; /* 웜 브론즈 골드: 포인트 라인, 배지, 강조 CTA */
  --color-cta-hover: #6E5231;      /* CTA 호버 */
  --color-bg-base: #FDFCFA;        /* 웜 화이트 */
  --color-bg-subtle: #F4F2EE;      /* 소프트 스톤 */
  --color-border: #E5E0D8;         /* 웜 그레이 보더 */
  --color-text-main: #18181B;      /* 진한 차콜 텍스트 */
  --color-text-muted: #52525B;     /* 보조 텍스트 */
  --color-footer-bg: #14171C;      /* 다크 차콜 푸터 */
  ```
- **타이포그래피:** 본문 PC `17px` / 모바일 `16px`, 행간 `1.7`, 영문 카테고리 라벨(`UPPERCASE`, `letter-spacing: 0.12em`, `12px`)을 섹션 상단에 일관 배치해 고급 매거진·프라이빗 클리닉 감성 구현.
- **카드·버튼·여백 규칙:** `border-radius: 6px~8px`의 날렵한 직선미, 그림자 최소화(`1px` 보더 중심), 섹션 여백 `112px`(모바일 `68px`)로 여유로운 호흡.
- **메인 섹션 차별점:** 8단계 골격은 동일하되, 히어로에 어두운 오버레이를 입힌 수술실/독립진료실 톤 다운 비주얼과 브론즈 라인 포인트를 사용하고, 진료 분야 우측 카드를 딥 차콜 배경 + 브론즈 아웃라인 버튼으로 구성.

#### [방향 C] 환자 친화·정보 중심 (Calm Care & Clarity)
- **CSS 컬러 변수 (`:root`)**:
  ```css
  --color-primary: #0F4C5C;        /* 딥 틸: 안정감 있는 메디컬 틸 */
  --color-primary-accent: #1F7A8C; /* 캄 시안: 활성 탭, 정보 강조 */
  --color-cta-hover: #145966;      /* CTA 호버 */
  --color-bg-base: #FFFFFF;        /* 클린 화이트 */
  --color-bg-subtle: #F3F8F8;      /* 미스트 민트-그레이 */
  --color-border: #D8E6E8;         /* 부드러운 보더 */
  --color-text-main: #132A2E;      /* 딥 슬레이트 본문 */
  --color-text-muted: #4E666B;     /* 보조 설명 */
  --color-footer-bg: #102329;      /* 다크 틸 푸터 */
  ```
- **타이포그래피:** 본문 PC `18px` / 모바일 `16px`, 행간 `1.75`로 중장년층 환자도 돋보기 없이 편하게 읽을 수 있는 최상급 가독성 중심.
- **카드·버튼·여백 규칙:** `border-radius: 16px`의 부드러운 라운드 카드, 필(Pill) 형태 태그/버튼, 핵심 요약 박스(콜아웃)와 체크리스트 아이콘을 적극 활용해 긴 의학 원문을 구조화.
- **메인 섹션 차별점:** 8단계 골격은 동일하되, 상단 히어로 아래에 '증상별 빠른 찾기' 칩(배뇨장애 / 옆구리 통증 / 발기·성기능 / 남성성형 / 정관·포경)을 추가 배치해 환자가 의학 용어를 몰라도 해당 서브 페이지로 즉시 진입 가능.

### 3-3. 서브 진료 페이지 공통 레이아웃 틀 (원본 본문·의학 도식 100% 보존형)
3개 방향(A/B/C) 모두 아래의 **원문 보존형 서브 아티클 구조**를 공통 적용하여 기존 40여 개 서브 페이지의 의료 원문과 `assets/medical-illustration/` 도식을 누락 없이 수용합니다.
1. **Sub Hero:** 브레드크럼 + 페이지 `<h1>` + 진료 분야 배지
2. **Sub Category Tabs:** 동일 대메뉴 하위 시술 전체 탭 (예: 전립선 7개 탭, 남성성형 6개 탭)
3. **본문 2단 레이아웃 (`PC: 본문 8.5fr + 우측 스티키 사이드바 3.5fr` / `모바일: 1단 스택`):**
   - **좌측 아티클 영역 (`max-width: 820px`):** 기존 원문 텍스트를 단락·소제목·표·콜아웃 카드로 가독성 있게 조판(원문 임의 축약·창작 금지) + `assets/medical-illustration/` 원본 해부학 도식·시술 안내 이미지를 반응형 `figure` + `figcaption`으로 선명하게 배치(저해상도 도식은 과도한 확대 방지를 위해 `max-width: min(100%, 원본px)` 적용).
   - **우측 스티키 사이드바 (PC) / 본문 하단 카드 (모바일):** 해당 진료 분야 빠른 상담/예약 CTA(`Meet the expert 수술상담` · `온라인 예약` · `전화 02-3018-7575`) + 관련 비급여비용안내 바로가기 + 관련 Video Gallery 링크.

---

## 4. 공통 에셋 분류 완료 매핑표 (총 217건)

`assets/reference/legacy_images/`에서 5개 표준 폴더로 복사·분류된 전체 217건의 경로 매핑표입니다.

### 4-1. `assets/real-hospital/` — 실제 병원 외관·시설 사진 (31건)

| 새 상대경로 | 해상도 (px) | 용량 (KB) | 상태 | 사용 페이지 |
|---|---:|---:|---|---|
| `./assets/real-hospital/pc_01_hp_visual_01.jpg` | 950×630 | 604.2 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_02.jpg` | 950×630 | 604.8 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_03.jpg` | 950×630 | 613.0 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_04.jpg` | 950×630 | 513.1 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_05.jpg` | 950×630 | 453.6 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_06.jpg` | 950×630 | 481.9 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_07.jpg` | 950×630 | 526.4 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_08.jpg` | 950×630 | 449.0 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_09.jpg` | 950×630 | 442.0 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_10.jpg` | 950×630 | 561.0 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_11.jpg` | 950×630 | 395.3 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_12.jpg` | 950×630 | 462.6 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_13.jpg` | 950×630 | 464.8 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_14.jpg` | 950×630 | 437.7 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_15.jpg` | 950×630 | 418.7 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_16.jpg` | 950×630 | 411.6 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_17.jpg` | 950×630 | 473.7 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_18.jpg` | 950×630 | 433.3 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_19.jpg` | 950×630 | 446.4 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_20.jpg` | 950×630 | 390.7 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_21.jpg` | 950×630 | 417.2 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_22.jpg` | 950×630 | 531.2 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_23.jpg` | 950×630 | 518.2 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_24.jpg` | 950×630 | 512.7 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_25.jpg` | 950×630 | 553.3 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_26.jpg` | 950×630 | 558.7 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_27.jpg` | 950×630 | 475.9 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_28.jpg` | 950×630 | 535.0 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_29.jpg` | 950×630 | 457.3 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_01_hp_visual_30.jpg` | 950×630 | 401.0 | [원본 유지 가능] | PC:01_hp/hp_11.html |
| `./assets/real-hospital/pc_main_vs_1_3.png` | 2000×730 | 1185.6 | [원본 유지 가능] | PC:index.html |

### 4-2. `assets/real-doctors/` — 의료진 수술 집도·교육·공지 자산 (11건)

| 새 상대경로 | 해상도 (px) | 용량 (KB) | 상태 | 사용 페이지 |
|---|---:|---:|---|---|
| `./assets/real-doctors/m_20260824_popup.jpg` | 900×660 | 551.4 | [원본 유지 가능] | 모바일 메인 팝업(진료시간표) |
| `./assets/real-doctors/pc_01_hp_hp12_01.jpg` | 2000×1080 | 1253.6 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_01_hp_hp12_02.jpg` | 2000×1758 | 1599.5 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_01_hp_hp12_03.jpg` | 2000×1380 | 1243.7 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_01_hp_hp12_04.jpg` | 2000×948 | 1068.6 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_01_hp_hp12_05.jpg` | 2000×1168 | 1217.8 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_01_hp_hp12_06.jpg` | 2000×1090 | 829.4 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_01_hp_hp12_07.jpg` | 2000×1846 | 1287.0 | [원본 유지 가능] | PC:01_hp/hp_12.html |
| `./assets/real-doctors/pc_main_vs_1_2.png` | 2000×730 | 889.3 | [원본 유지 가능] | PC:index.html |
| `./assets/real-doctors/pc_popup_20260810_popup.jpg` | 600×660 | 255.8 | [원본 유지 가능] | PC/모바일 메인 팝업(이웅희 원장) |
| `./assets/real-doctors/pc_popup_20260824_popup.jpg` | 900×660 | 551.4 | [원본 유지 가능] | PC/모바일 메인 팝업(진료시간표) |

### 4-3. `assets/medical-illustration/` — 서브 페이지 본문 의학 도식·시술 안내 이미지 (89건)

| 새 상대경로 | 해상도 (px) | 용량 (KB) | 상태 | 사용 페이지 |
|---|---:|---:|---|---|
| `./assets/medical-illustration/pc_clinic_02_contxt_0101.png` | 1100×414 | 375.6 | [원본 유지 가능] | PC:clinic_02/c2_0101.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0201.png` | 1100×310 | 261.3 | [원본 유지 가능] | PC:clinic_02/c2_0201.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0202.png` | 1100×310 | 112.4 | [원본 유지 가능] | PC:clinic_02/c2_0201.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0301.png` | 2000×200 | 32.2 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0302.png` | 1100×417 | 140.0 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0303.png` | 2000×481 | 202.1 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0304.png` | 1100×357 | 70.9 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0305.png` | 1100×357 | 123.7 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0306.png` | 1098×357 | 258.4 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0307.jpg` | 520×393 | 45.4 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0308.png` | 1200×280 | 330.5 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0309.png` | 1200×295 | 216.4 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0310.png` | 1200×301 | 244.2 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0311.png` | 860×280 | 140.3 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0312.png` | 570×265 | 135.3 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0313.png` | 280×232 | 97.1 | [저해상도 경고] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0314.png` | 2000×1200 | 2298.7 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0315.png` | 639×475 | 198.4 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0316.png` | 559×271 | 94.5 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0317.png` | 559×233 | 95.8 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0318.png` | 559×193 | 84.9 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0319.png` | 1200×344 | 28.5 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0320.png` | 1200×135 | 18.9 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0321.png` | 1920×650 | 1109.1 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0401.png` | 1100×311 | 109.3 | [원본 유지 가능] | PC:clinic_02/c2_0401.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0701.png` | 1200×1020 | 260.9 | [원본 유지 가능] | PC:clinic_02/c2_0701.html |
| `./assets/medical-illustration/pc_clinic_02_contxt_0702.png` | 1200×371 | 365.4 | [원본 유지 가능] | PC:clinic_02/c2_0701.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0101.png` | 1920×680 | 536.1 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0102.png` | 1920×1157 | 610.3 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0103.png` | 1920×909 | 1131.2 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0104.png` | 1920×745 | 187.1 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0105.png` | 1920×1207 | 144.3 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0106.png` | 1920×730 | 61.3 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0107.png` | 1920×1034 | 147.5 | [원본 유지 가능] | PC:clinic_03/c3_0101.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0201.png` | 1200×275 | 135.3 | [원본 유지 가능] | PC:clinic_03/c3_0201.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0202.png` | 1200×400 | 46.9 | [원본 유지 가능] | PC:clinic_03/c3_0201.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0203.png` | 1200×156 | 58.8 | [원본 유지 가능] | PC:clinic_03/c3_0201.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0204.png` | 1200×400 | 32.8 | [원본 유지 가능] | PC:clinic_03/c3_0201.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0301.png` | 1200×246 | 96.2 | [원본 유지 가능] | PC:clinic_03/c3_0301.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0302.png` | 1200×400 | 33.6 | [원본 유지 가능] | PC:clinic_03/c3_0301.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0303.png` | 1200×400 | 35.5 | [원본 유지 가능] | PC:clinic_03/c3_0301.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0401.png` | 1200×799 | 1628.1 | [원본 유지 가능] | PC:clinic_03/c3_0401.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0501.png` | 1200×211 | 86.0 | [원본 유지 가능] | PC:clinic_03/c3_0501.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0502.png` | 1200×400 | 35.2 | [원본 유지 가능] | PC:clinic_03/c3_0501.html |
| `./assets/medical-illustration/pc_clinic_03_contxt_0601.png` | 1200×400 | 32.7 | [원본 유지 가능] | PC:clinic_03/c3_0601.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0101.png` | 591×319 | 24.5 | [원본 유지 가능] | PC:clinic_04/c4_0101.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0102.png` | 880×310 | 398.9 | [원본 유지 가능] | PC:clinic_04/c4_0101.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0103.png` | 840×326 | 392.7 | [원본 유지 가능] | PC:clinic_04/c4_0101.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0104.png` | 761×319 | 65.5 | [원본 유지 가능] | PC:clinic_04/c4_0101.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0201.png` | 1100×286 | 298.1 | [원본 유지 가능] | PC:clinic_04/c4_0201.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0202.png` | 1100×1264 | 328.4 | [원본 유지 가능] | PC:clinic_04/c4_0201.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0301.jpg` | 2000×1357 | 788.7 | [원본 유지 가능] | PC:clinic_04/c4_0301.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0321.png` | 1920×650 | 1109.1 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0401.png` | 1920×453 | 141.3 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0402.png` | 1920×1298 | 480.4 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0403.png` | 1920×366 | 360.6 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0404.png` | 1920×686 | 1364.6 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0405.png` | 1920×518 | 96.7 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0406.png` | 1920×456 | 93.6 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0407.png` | 339×146 | 56.5 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_04_contxt_0408.png` | 450×187 | 104.1 | [원본 유지 가능] | PC:clinic_04/c4_0401.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0101.png` | 1100×310 | 153.5 | [원본 유지 가능] | PC:clinic_05/c5_0101.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0102.png` | 1100×360 | 270.9 | [원본 유지 가능] | PC:clinic_05/c5_0101.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0201.png` | 1100×310 | 176.6 | [원본 유지 가능] | PC:clinic_05/c5_0201.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0301.png` | 1100×310 | 163.6 | [원본 유지 가능] | PC:clinic_05/c5_0301.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0302.png` | 1100×310 | 98.9 | [원본 유지 가능] | PC:clinic_05/c5_0301.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0303.png` | 400×200 | 50.2 | [원본 유지 가능] | PC:clinic_05/c5_0301.html |
| `./assets/medical-illustration/pc_clinic_05_contxt_0304.png` | 1100×262 | 23.0 | [원본 유지 가능] | PC:clinic_05/c5_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0301.png` | 1920×600 | 1296.1 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0302.png` | 1920×798 | 65.4 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0303.png` | 1920×843 | 1713.1 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0304.png` | 1920×843 | 1024.1 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0305.png` | 1920×843 | 1964.3 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0306.png` | 1920×843 | 624.5 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0307.png` | 1920×843 | 1277.8 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_06_contxt_0308.png` | 1920×843 | 1629.1 | [원본 유지 가능] | PC:clinic_06/c6_0301.html |
| `./assets/medical-illustration/pc_clinic_07_contxt_0101_bg.jpg` | 2000×680 | 236.3 | [원본 유지 가능] | PC:clinic_07/c7_0101.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0101.png` | 1100×530 | 90.1 | [원본 유지 가능] | PC:clinic_08/c8_0101.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0301.png` | 800×530 | 81.6 | [원본 유지 가능] | PC:clinic_08/c8_030101.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0302.png` | 800×720 | 107.6 | [원본 유지 가능] | PC:clinic_08/c8_030102.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0303.png` | 800×720 | 109.6 | [원본 유지 가능] | PC:clinic_08/c8_030102.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0305.png` | 791×380 | 73.2 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0306.png` | 791×380 | 64.0 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0307.png` | 791×380 | 52.1 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0308.png` | 791×380 | 94.8 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0309.png` | 791×380 | 89.0 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0310.png` | 791×380 | 86.1 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0311.png` | 791×380 | 85.3 | [원본 유지 가능] | PC:clinic_08/c8_0301.html |
| `./assets/medical-illustration/pc_clinic_08_contxt_0312.png` | 1000×833 | 283.8 | [원본 유지 가능] | PC:clinic_08/c8_030101.html |

### 4-4. `assets/brand-visual/` — 병원 로고 및 브랜드 비주얼 배너 (78건)

| 새 상대경로 | 해상도 (px) | 용량 (KB) | 상태 | 사용 페이지 |
|---|---:|---:|---|---|
| `./assets/brand-visual/m_footer_bg.jpg` | 800×296 | 11.5 | [원본 유지 가능] | 모바일 공통 푸터(배경) |
| `./assets/brand-visual/m_landing1_img1.jpg` | 800×630 | 308.1 | [원본 유지 가능] | M:landing1.html |
| `./assets/brand-visual/m_landing1_img2.jpg` | 800×590 | 180.3 | [원본 유지 가능] | M:landing1.html |
| `./assets/brand-visual/m_landing1_img3.jpg` | 800×450 | 221.9 | [원본 유지 가능] | M:landing1.html |
| `./assets/brand-visual/m_landing1_img4.jpg` | 800×572 | 93.8 | [원본 유지 가능] | M:landing1.html |
| `./assets/brand-visual/m_landing1_img_00.jpg` | 800×650 | 292.7 | [원본 유지 가능] | M:landing1.html |
| `./assets/brand-visual/m_landing2_img_00.jpg` | 800×650 | 267.3 | [원본 유지 가능] | M:landing2.html |
| `./assets/brand-visual/m_landing2_img_01.jpg` | 800×630 | 361.2 | [원본 유지 가능] | M:landing2.html |
| `./assets/brand-visual/m_landing2_img_02.jpg` | 800×630 | 316.9 | [원본 유지 가능] | M:landing2.html |
| `./assets/brand-visual/m_landing2_img_03.jpg` | 800×700 | 185.5 | [원본 유지 가능] | M:landing2.html |
| `./assets/brand-visual/m_landing2_img_04.jpg` | 800×651 | 109.8 | [원본 유지 가능] | M:landing2.html |
| `./assets/brand-visual/m_landing3_img_00.jpg` | 800×650 | 212.1 | [원본 유지 가능] | M:landing3.html |
| `./assets/brand-visual/m_landing3_img_01.jpg` | 800×726 | 340.1 | [원본 유지 가능] | M:landing3.html |
| `./assets/brand-visual/m_landing3_img_02.jpg` | 800×630 | 288.2 | [원본 유지 가능] | M:landing3.html |
| `./assets/brand-visual/m_landing3_img_03.jpg` | 800×627 | 274.2 | [원본 유지 가능] | M:landing3.html |
| `./assets/brand-visual/m_landing3_img_04.jpg` | 800×534 | 93.7 | [원본 유지 가능] | M:landing3.html |
| `./assets/brand-visual/m_landing4_img_00.jpg` | 800×650 | 259.1 | [원본 유지 가능] | M:landing4.html |
| `./assets/brand-visual/m_landing4_img_01.jpg` | 800×726 | 331.8 | [원본 유지 가능] | M:landing4.html |
| `./assets/brand-visual/m_landing4_img_02.jpg` | 800×450 | 207.9 | [원본 유지 가능] | M:landing4.html |
| `./assets/brand-visual/m_landing4_img_03.jpg` | 800×675 | 303.3 | [원본 유지 가능] | M:landing4.html |
| `./assets/brand-visual/m_landing4_img_04.jpg` | 800×539 | 99.7 | [원본 유지 가능] | M:landing4.html |
| `./assets/brand-visual/m_landing5_img_00.jpg` | 800×650 | 283.0 | [원본 유지 가능] | M:landing5.html |
| `./assets/brand-visual/m_landing5_img_01.jpg` | 800×568 | 207.1 | [원본 유지 가능] | M:landing5.html |
| `./assets/brand-visual/m_landing5_img_02.jpg` | 800×314 | 156.5 | [원본 유지 가능] | M:landing5.html |
| `./assets/brand-visual/m_landing5_img_03.jpg` | 800×728 | 36.7 | [원본 유지 가능] | M:landing5.html |
| `./assets/brand-visual/m_landing5_img_03_btn.jpg` | 650×366 | 129.9 | [원본 유지 가능] | M:landing5.html |
| `./assets/brand-visual/m_landing5_img_04.jpg` | 800×540 | 87.9 | [원본 유지 가능] | M:landing5.html |
| `./assets/brand-visual/m_landing6_img_00.jpg` | 800×650 | 207.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_01.jpg` | 800×1200 | 567.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_02.jpg` | 800×800 | 344.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_0201.jpg` | 800×1000 | 305.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_0202.jpg` | 800×1175 | 300.8 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_03.jpg` | 800×1080 | 310.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_04.jpg` | 800×1080 | 318.8 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_05.jpg` | 800×1140 | 300.3 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_06.jpg` | 800×1080 | 210.1 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_07.jpg` | 800×300 | 52.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_08.jpg` | 800×180 | 39.0 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_0901.jpg` | 800×836 | 180.0 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_1001.jpg` | 800×673 | 144.9 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_1101.jpg` | 800×1079 | 192.6 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_landing6_img_12.jpg` | 800×591 | 151.4 | [원본 유지 가능] | M:landing6.html |
| `./assets/brand-visual/m_logo.png` | 318×58 | 4.2 | [원본 유지 가능] | 모바일 공통 헤더(로고) |
| `./assets/brand-visual/m_vs1.jpg` | 800×650 | 299.6 | [원본 유지 가능] | M:index.html |
| `./assets/brand-visual/m_vs2.jpg` | 800×650 | 297.2 | [원본 유지 가능] | M:index.html |
| `./assets/brand-visual/m_vs3.jpg` | 800×650 | 217.8 | [원본 유지 가능] | M:index.html |
| `./assets/brand-visual/m_vs4.jpg` | 800×650 | 317.5 | [원본 유지 가능] | M:index.html |
| `./assets/brand-visual/m_vs5.jpg` | 800×650 | 292.5 | [원본 유지 가능] | M:index.html |
| `./assets/brand-visual/m_vs6.jpg` | 800×650 | 222.3 | [원본 유지 가능] | M:index.html |
| `./assets/brand-visual/pc_01_hp_sub_topimg.jpg` | 2000×250 | 282.9 | [원본 유지 가능] | PC:01_hp/hp_01.html, PC:01_hp/hp_04.html 외 15건 |
| `./assets/brand-visual/pc_02_coun_sub_topimg.jpg` | 2000×250 | 97.8 | [원본 유지 가능] | PC:02_coun/qna1.html, PC:02_coun/rev.html |
| `./assets/brand-visual/pc_02_coun_sub_topimg2.jpg` | 2000×250 | 124.0 | [원본 유지 가능] | PC:02_coun/qna.html, M:nonbenefit.html 외 1건 |
| `./assets/brand-visual/pc_04_member_sub_topimg.jpg` | 2000×250 | 97.8 | [원본 유지 가능] | PC:04_member/login.html, PC:04_member/join1.html 외 2건 |
| `./assets/brand-visual/pc_clinic_02_sub_topimg.jpg` | 2000×250 | 106.8 | [원본 유지 가능] | PC:clinic_02/c2_0101.html, PC:clinic_02/c2_0201.html 외 3건 |
| `./assets/brand-visual/pc_clinic_02_sub_topimg3.jpg` | 2000×550 | 393.5 | [원본 유지 가능] | PC:clinic_02/c2_0301.html |
| `./assets/brand-visual/pc_clinic_02_sub_topimg7.jpg` | 2000×550 | 360.2 | [원본 유지 가능] | PC:clinic_02/c2_0701.html |
| `./assets/brand-visual/pc_clinic_03_sub_topimg.jpg` | 2000×250 | 161.1 | [원본 유지 가능] | PC:clinic_03/c3_0101.html, PC:clinic_03/c3_0201.html 외 4건 |
| `./assets/brand-visual/pc_clinic_04_sub_topimg.jpg` | 2000×250 | 198.3 | [원본 유지 가능] | PC:clinic_04/c4_0401.html, PC:clinic_04/c4_0101.html 외 2건 |
| `./assets/brand-visual/pc_clinic_05_sub_topimg.jpg` | 2000×250 | 195.3 | [원본 유지 가능] | PC:clinic_05/c5_0101.html, PC:clinic_05/c5_0201.html 외 1건 |
| `./assets/brand-visual/pc_clinic_06_sub_topimg.jpg` | 2000×250 | 297.8 | [원본 유지 가능] | PC:clinic_06/c6_0101.html, PC:clinic_06/c6_0201.html 외 1건 |
| `./assets/brand-visual/pc_clinic_07_sub_topimg.jpg` | 2000×250 | 229.0 | [원본 유지 가능] | PC:clinic_07/c7_0101.html |
| `./assets/brand-visual/pc_clinic_08_sub_topimg.jpg` | 2000×250 | 144.3 | [원본 유지 가능] | PC:clinic_08/c8_0101.html, PC:clinic_08/c8_0201.html 외 3건 |
| `./assets/brand-visual/pc_common_footer_logo.png` | 282×53 | 4.0 | [원본 유지 가능] | PC 공통 푸터(화이트 로고) |
| `./assets/brand-visual/pc_common_logo.png` | 282×53 | 7.3 | [원본 유지 가능] | PC 공통 헤더(로고) |
| `./assets/brand-visual/pc_main_depth11_1.jpg` | 2000×730 | 448.7 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth11_2.jpg` | 2000×730 | 458.5 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth11_3.jpg` | 2000×730 | 509.6 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth2_1.jpg` | 2000×730 | 592.3 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth2_2.jpg` | 2000×730 | 562.7 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth2_3.jpg` | 2000×730 | 552.5 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth3_1.jpg` | 2000×730 | 637.4 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth3_2.jpg` | 2000×730 | 544.8 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth3_3.jpg` | 2000×730 | 473.0 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth4_1.jpg` | 2000×730 | 547.4 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth4_2.jpg` | 2000×730 | 916.7 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_depth4_3.jpg` | 2000×730 | 1452.8 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_main_vs_1_1.png` | 2000×730 | 1260.2 | [원본 유지 가능] | PC:index.html |
| `./assets/brand-visual/pc_mobile_footer_coun.jpg` | 800×152 | 67.6 | [원본 유지 가능] | 모바일 공통 푸터(핫라인 배너) |

### 4-5. `assets/icons-infographics/` — 인포그래픽·안내 도표 (8건)

| 새 상대경로 | 해상도 (px) | 용량 (KB) | 상태 | 사용 페이지 |
|---|---:|---:|---|---|
| `./assets/icons-infographics/ext_files_1440037807.jpg` | 2552×3510 | 925.2 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/ext_files_1502680902.jpg` | 803×2230 | 594.4 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/ext_files_1508828228.jpg` | 1668×2276 | 197.0 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/ext_files_1518511940.jpg` | 2525×3431 | 1704.8 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/ext_files_1520045011.jpg` | 871×2260 | 771.3 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/ext_files_1541644235.jpg` | 1242×2208 | 295.8 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/ext_files_1545379216.jpg` | 793×1122 | 26.2 | [원본 유지 가능] | PC:01_hp/hp_09.html |
| `./assets/icons-infographics/pc_01_hp_hp1_0103.gif` | 504×75 | 5.3 | [저해상도 경고] | PC:01_hp/hp_01.html |
