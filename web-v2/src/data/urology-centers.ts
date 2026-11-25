export interface UrologyTreatmentLink {
  slug: string;
  name: string;
  keywords: string[];
}

export interface UrologyCenterSpec {
  order: string;
  slug: string;
  title: string;
  shortTitle: string;
  englishLabel: string;
  headline: string;
  description: string;
  visualSrc: string;
  treatments: UrologyTreatmentLink[];
}

export interface UrologyConditionGuide {
  id: string;
  order: string;
  centerSlug: string;
  treatmentSlug: string;
  centerLabel: string;
  title: string;
  summary: string;
  illustrationSrc: string;
}

export const UROLOGY_CENTERS: UrologyCenterSpec[] = [
  {
    order: "01",
    slug: "prostate",
    title: "전립선 센터",
    shortTitle: "전립선",
    englishLabel: "PROSTATE CENTER",
    headline: "HoLEP 레이저 · 유로리프트 · 정밀 전립선 케어",
    description:
      "거대 전립선비대증의 표준 내시경 수술인 HoLEP과 사정기능 보존을 고려한 유로리프트부터 전립선염·전립선암·전립선통까지 단계별 맞춤 진료를 시행합니다.",
    visualSrc: "/assets/sample/center-prostate.jpg.png",
    treatments: [
      { slug: "overview", name: "전립선 개요", keywords: ["전립선", "해부학", "PSA"] },
      { slug: "bph", name: "전립선비대증", keywords: ["전립선비대증", "배뇨장애", "야간뇨", "잔뇨감"] },
      { slug: "holep", name: "HoLEP 수술", keywords: ["홀렙", "HoLEP", "레이저수술", "거대전립선"] },
      { slug: "urolift", name: "유로리프트", keywords: ["유로리프트", "UroLift", "결찰술", "사정보존"] },
      { slug: "prostatitis", name: "전립선염", keywords: ["전립선염", "회음부통증", "만성전립선염"] },
      { slug: "cancer", name: "전립선암", keywords: ["전립선암", "PSA검사", "정기검진"] },
      { slug: "prostatodynia", name: "전립선통", keywords: ["전립선통", "골반통증"] },
    ],
  },
  {
    order: "02",
    slug: "stone",
    title: "요로결석 센터",
    shortTitle: "요로결석",
    englishLabel: "URINARY STONE CENTER",
    headline: "급성 옆구리 통증 · 정밀 영상진단 · 원스톱 치료",
    description:
      "갑작스러운 옆구리·하복부 통증과 혈뇨를 동반하는 요로결석의 위치와 크기를 정밀 진단하고, 대기요법·체외충격파쇄석술·내시경 치료로 신속히 대응합니다.",
    visualSrc: "/assets/sample/center-stone.jpg",
    treatments: [
      { slug: "symptoms", name: "요로결석 원인·증상", keywords: ["요로결석", "옆구리통증", "혈뇨", "신장결석"] },
      { slug: "diagnosis", name: "요로결석 진단", keywords: ["초음파", "KUB", "소변검사", "결석진단"] },
      { slug: "treatment", name: "요로결석 치료", keywords: ["체외충격파", "쇄석술", "요관내시경", "결석제거"] },
    ],
  },
  {
    order: "03",
    slug: "sexual-implant",
    title: "성기능 · 보형물 센터",
    shortTitle: "성기능·보형물",
    englishLabel: "IMPLANT & SEXUAL HEALTH",
    headline: "음경보형물 삽입술 · 정밀 도플러 검사 · 조루증 치료",
    description:
      "약물치료에 반응하지 않는 기질성 발기부전의 수술적 대안인 음경임플란트(팽창형·굴곡형)와 음경혈관 도플러 성기능검사, 원인별 조루증 치료를 협진합니다.",
    visualSrc: "/assets/sample/center-implant.jpg",
    treatments: [
      { slug: "penile-implant", name: "음경임플란트", keywords: ["음경임플란트", "보형물", "팽창형", "굴곡형", "AMS"] },
      { slug: "ed", name: "발기부전", keywords: ["발기부전", "당뇨발기부전", "혈관성"] },
      { slug: "ed-test", name: "성기능검사", keywords: ["성기능검사", "도플러검사", "남성호르몬"] },
      { slug: "ed-treatment", name: "발기부전 치료", keywords: ["약물치료", "자가주사", "단계별치료"] },
      { slug: "pe", name: "조루증 (개요·진단·치료)", keywords: ["조루증", "진동각검사", "조루치료"] },
    ],
  },
  {
    order: "04",
    slug: "reconstruction",
    title: "음경재건 · 확대 센터",
    shortTitle: "음경재건·확대",
    englishLabel: "RECONSTRUCTION CENTER",
    headline: "기하학적 음경만곡증 · 이물질 제거 · 해부학적 재건",
    description:
      "선천성·페이로니 음경만곡증의 기하학적 백막이식술, 바세린·필러 이물질 제거 및 피판재건술, 함몰음경 교정과 해부학적 남성성형을 안전하게 집도합니다.",
    visualSrc: "/assets/sample/center-reconstruction.jpg",
    treatments: [
      { slug: "peyronie", name: "음경만곡증", keywords: ["음경만곡증", "페이로니병", "백막이식", "주름법"] },
      { slug: "foreign-body", name: "음경이물질제거", keywords: ["바세린제거", "파라핀", "필러제거", "음낭피판술"] },
      { slug: "glans", name: "귀두확대술", keywords: ["귀두확대", "남성성형"] },
      { slug: "girth", name: "음경굵기확대술", keywords: ["음경확대", "동종진피", "굵기확대"] },
      { slug: "length", name: "음경길이연장술", keywords: ["길이연장", "현수인대"] },
      { slug: "buried-penis", name: "함몰음경", keywords: ["함몰음경", "근막고정", "치골지방"] },
    ],
  },
  {
    order: "05",
    slug: "vasectomy-circumcision",
    title: "정관 · 포경 센터",
    shortTitle: "정관·포경",
    englishLabel: "VASECTOMY & CIRCUMCISION",
    headline: "무도정관수술 · 현미경 정관복원 · 디자인 레이저포경",
    description:
      "절개 부담을 줄인 무도정관수술, 정밀 현미경 미세정관복원수술, 개인별 해부학적 디자인을 적용한 레이저 포경수술을 3S 원칙으로 시행합니다.",
    visualSrc: "/assets/sample/center-vasectomy.jpg",
    treatments: [
      { slug: "vasectomy", name: "정관수술 · 무도정관수술", keywords: ["정관수술", "무도정관", "피임수술"] },
      { slug: "reversal", name: "미세정관복원수술", keywords: ["정관복원", "현미경수술", "임신준비"] },
      { slug: "circumcision", name: "레이저포경수술", keywords: ["포경수술", "레이저포경", "소매법", "포피소대"] },
    ],
  },
];

export const UROLOGY_CONDITION_GUIDES: UrologyConditionGuide[] = [
  {
    id: "guide-holep",
    order: "01",
    centerSlug: "prostate",
    treatmentSlug: "holep",
    centerLabel: "전립선 센터",
    title: "HoLEP 전립선비대증 레이저 수술",
    summary: "비대해진 전립선 선종을 홀뮴 레이저로 분리·적출하는 내시경 표준 치료 원리",
    illustrationSrc: "/assets/medical/pc_clinic_02_contxt_0302.png",
  },
  {
    id: "guide-stone",
    order: "02",
    centerSlug: "stone",
    treatmentSlug: "treatment",
    centerLabel: "요로결석 센터",
    title: "요로결석 정밀 진단 및 단계별 제거",
    summary: "결석 위치·크기별 자연배출 유도부터 체외충격파·요관내시경 맞춤 프로토콜",
    illustrationSrc: "/assets/medical/pc_clinic_08_contxt_0101.png",
  },
  {
    id: "guide-implant",
    order: "03",
    centerSlug: "sexual-implant",
    treatmentSlug: "penile-implant",
    centerLabel: "성기능 · 보형물 센터",
    title: "음경보형물(임플란트) 삽입술 안내",
    summary: "굴곡형·팽창형 보형물 구조 차이와 약물 불응성 발기부전 수술 적응증",
    illustrationSrc: "/assets/medical/pc_clinic_04_contxt_0401.png",
  },
  {
    id: "guide-peyronie",
    order: "04",
    centerSlug: "reconstruction",
    treatmentSlug: "peyronie",
    centerLabel: "음경재건 · 확대 센터",
    title: "음경만곡증 · 기하학적 백막이식 교정",
    summary: "만곡 각도와 섬유화 결절 평가에 따른 주름법 및 백막이식 재건술 기준",
    illustrationSrc: "/assets/medical/pc_clinic_03_contxt_0501.png",
  },
  {
    id: "guide-foreign",
    order: "05",
    centerSlug: "reconstruction",
    treatmentSlug: "foreign-body",
    centerLabel: "음경재건 · 확대 센터",
    title: "바세린 · 필러 이물질 제거 및 피부 재건",
    summary: "침윤 범위 평가 후 안전한 이물질 제거와 피부 결손 대비 피판재건 원칙",
    illustrationSrc: "/assets/medical/pc_clinic_03_contxt_0401.png",
  },
  {
    id: "guide-vasectomy",
    order: "06",
    centerSlug: "vasectomy-circumcision",
    treatmentSlug: "vasectomy",
    centerLabel: "정관 · 포경 센터",
    title: "무도정관수술 · 미세정관복원수술",
    summary: "최소 절개 무도정관 술기와 현미경 기반 정관문합 복원 가능성 평가",
    illustrationSrc: "/assets/medical/pc_clinic_05_contxt_0201.png",
  },
];

export const QUICK_SEARCH_KEYWORDS = [
  "HoLEP",
  "유로리프트",
  "요로결석",
  "음경임플란트",
  "음경만곡증",
  "바세린제거",
  "무도정관",
] as const;

export const ALL_UROLOGY_TREATMENT_INDEX = UROLOGY_CENTERS.flatMap((center) =>
  center.treatments.map((item) => ({
    centerSlug: center.slug,
    centerTitle: center.title,
    slug: item.slug,
    name: item.name,
    href: `/departments/${center.slug}/${item.slug}`,
    keywords: item.keywords,
  }))
);
