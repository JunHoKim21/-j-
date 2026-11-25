export interface DepartmentSubItem {
  slug: string;
  title: string;
  legacyCategorySlug: string;
}

export interface DepartmentCenter {
  order: string;
  categorySlug: string;
  categoryName: string;
  englishLabel: string;
  summary: string;
  highlightNote: string;
  imagePath: string;
  items: DepartmentSubItem[];
}

export const DEPARTMENT_CENTERS: DepartmentCenter[] = [
  {
    order: "01",
    categorySlug: "prostate",
    categoryName: "전립선 센터",
    englishLabel: "PROSTATE CENTER",
    summary:
      "전립선비대증의 표준 수술법인 HoLEP과 유로리프트부터 전립선염·전립선암·전립선통까지 단계별 정밀 진단과 맞춤 치료를 제공합니다.",
    highlightNote: "HoLEP · 유로리프트 · 전립선 정밀검사",
    imagePath: "/assets/sample/center-prostate.jpg.png",
    items: [
      { slug: "overview", title: "전립선 개요", legacyCategorySlug: "prostate" },
      { slug: "bph", title: "전립선비대증", legacyCategorySlug: "prostate" },
      { slug: "holep", title: "HoLEP 수술", legacyCategorySlug: "prostate" },
      { slug: "urolift", title: "유로리프트", legacyCategorySlug: "prostate" },
      { slug: "prostatitis", title: "전립선염", legacyCategorySlug: "prostate" },
      { slug: "cancer", title: "전립선암", legacyCategorySlug: "prostate" },
      { slug: "prostatodynia", title: "전립선통", legacyCategorySlug: "prostate" },
    ],
  },
  {
    order: "02",
    categorySlug: "stone",
    categoryName: "요로결석 센터",
    englishLabel: "URINARY STONE CENTER",
    summary:
      "갑작스러운 옆구리 통증과 혈뇨를 유발하는 요로결석의 정확한 원인·위치 진단부터 체외충격파쇄석술 및 내시경 치료까지 원스톱으로 대응합니다.",
    highlightNote: "원인·증상 · 정밀 진단 · 맞춤 결석 치료",
    imagePath: "/assets/sample/center-stone.jpg",
    items: [
      { slug: "symptoms", title: "요로결석 원인·증상", legacyCategorySlug: "stone" },
      { slug: "diagnosis", title: "요로결석 진단", legacyCategorySlug: "stone" },
      { slug: "treatment", title: "요로결석 치료", legacyCategorySlug: "stone" },
    ],
  },
  {
    order: "03",
    categorySlug: "sexual-implant",
    categoryName: "음경임플란트 · 성기능 센터",
    englishLabel: "IMPLANT & SEXUAL HEALTH",
    summary:
      "약물치료에 반응하지 않는 발기부전의 수술적 대안인 음경보형물 삽입술과 정밀 성기능검사, 조루증 원인별 치료를 2인 전문의 협진으로 진행합니다.",
    highlightNote: "음경임플란트 · 발기부전 · 성기능검사 · 조루증",
    imagePath: "/assets/sample/center-implant.jpg",
    items: [
      { slug: "penile-implant", title: "음경임플란트", legacyCategorySlug: "implant" },
      { slug: "ed", title: "발기부전", legacyCategorySlug: "sexual" },
      { slug: "ed-test", title: "성기능검사", legacyCategorySlug: "sexual" },
      { slug: "ed-treatment", title: "발기부전 치료", legacyCategorySlug: "sexual" },
      { slug: "pe", title: "조루증 (개요·진단·치료)", legacyCategorySlug: "sexual" },
    ],
  },
  {
    order: "04",
    categorySlug: "reconstruction",
    categoryName: "남성성형 · 재건 센터",
    englishLabel: "RECONSTRUCTION CENTER",
    summary:
      "음경만곡증(기하학적 백막이식)과 바세린·필러 등 음경이물질 제거, 함몰음경 교정 및 해부학적 근거에 기반한 남성성형 수술을 시행합니다.",
    highlightNote: "음경만곡증 · 이물질제거 · 함몰음경 · 남성성형",
    imagePath: "/assets/sample/center-reconstruction.jpg",
    items: [
      { slug: "peyronie", title: "음경만곡증", legacyCategorySlug: "plastic" },
      { slug: "foreign-body", title: "음경이물질제거", legacyCategorySlug: "plastic" },
      { slug: "glans", title: "귀두확대술", legacyCategorySlug: "plastic" },
      { slug: "girth", title: "음경굵기확대술", legacyCategorySlug: "plastic" },
      { slug: "length", title: "음경길이연장술", legacyCategorySlug: "plastic" },
      { slug: "buried-penis", title: "함몰음경", legacyCategorySlug: "plastic" },
    ],
  },
  {
    order: "05",
    categorySlug: "vasectomy-circumcision",
    categoryName: "정관 · 포경 센터",
    englishLabel: "VASECTOMY & CIRCUMCISION",
    summary:
      "흉터와 통증 부담을 줄인 무도정관수술, 현미경 기반 미세정관복원수술, 연령과 상태에 맞춘 디자인 레이저포경수술을 안전하게 진행합니다.",
    highlightNote: "무도정관수술 · 미세정관복원 · 레이저포경",
    imagePath: "/assets/sample/center-vasectomy.jpg",
    items: [
      { slug: "vasectomy", title: "정관수술 · 무도정관수술", legacyCategorySlug: "vasectomy" },
      { slug: "reversal", title: "미세정관복원수술", legacyCategorySlug: "vasectomy" },
      { slug: "circumcision", title: "레이저포경수술", legacyCategorySlug: "circumcision" },
    ],
  },
];
