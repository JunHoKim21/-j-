export type ClinicShiftState = "OPEN" | "SURGERY_OPEN" | "CLOSED" | "NONE";

export interface ClinicDayShift {
  day: "월" | "화" | "수" | "목" | "금" | "토";
  am: ClinicShiftState;
  pm: ClinicShiftState;
}

export interface ClinicPhysician {
  id: string;
  name: string;
  roleTitle: string;
  englishRole: string;
  credentials: string;
  specialtyFocus: string;
  portraitSrc: string;
  offDaySummary: string;
  careerHighlights: string[];
  shifts: ClinicDayShift[];
}

export interface ClinicPhilosophyPillar {
  index: string;
  code: string;
  koreanTitle: string;
  summary: string;
}

export interface ClinicTrustMetric {
  code: string;
  figure: string;
  unit: string;
  label: string;
  detail: string;
}

export const CLINIC_PROFILE = {
  clinicName: "강남J비뇨기과의원",
  englishBrand: "GANGNAM J UROLOGY",
  foundedYear: "1999",
  yearsOfHistory: "27년",
  headquartersLabel: "강남 학동역 단일 프리미엄 본원",
  facilitySummary: "5개 독립 개인진료실 · 2개 전용 수술실",
  representative: "박천진",
  businessRegistration: "120-90-16660",
  streetAddress: "서울시 강남구 학동로 203 4층",
  transitGuide: "지하철 7호선 학동역 8번·9번 출구 사이 (도보 1분)",
  parkingGuide: "병원 빌딩 내 전용 지하 주차장 완비",
  mainPhone: "02-3018-7575",
  mainPhoneHref: "tel:02-3018-7575",
  consultMobile: "010-9190-7575",
  consultMobileHref: "tel:010-9190-7575",
  faxNumber: "02-516-2030",
  operatingHours: {
    weekdayConsult: "평일 09:00 ~ 18:00",
    saturdayConsult: "토요일 09:00 ~ 13:00",
    lunchBreak: "점심시간 13:00 ~ 14:00",
    closedNotice: "일요일·공휴일 휴진 / 예약 우선제 운영",
  },
  youtubeChannel: {
    handle: "@uroj",
    url: "https://www.youtube.com/@uroj",
    name: "Operation Ceremony Dr. Park's - 박천진",
    subscribers: "5.2만+",
    totalVideos: "780+",
  },
} as const;

export const CLINIC_HERO_SLIDES = [
  {
    id: "slide-signature",
    tone: "light" as const,
    displayTop: "GANGNAM J",
    displayBottom: "UROLOGY",
    subcopyLines: [
      "1999년부터 이어온 27년 정통 비뇨의학,",
      "박천진·이웅희 2인 전문의 협진과 5개 독립 개인진료실이",
      "환자의 프라이버시와 안전한 회복을 끝까지 지킵니다.",
    ],
    imageSrc: "/assets/sample/hero-01.jpg.png",
    imageAlt: "강남J비뇨기과의원 학동역 프리미엄 본원 로비",
  },
  {
    id: "slide-private",
    tone: "dark" as const,
    displayTop: "3S CLINICAL",
    displayBottom: "AUTHORITY",
    subcopyLines: [
      "전립선 HoLEP · 요로결석 · 음경임플란트 · 남성재건까지,",
      "Safe · Simple · Speed 수술 철학과 2개 전용 수술실로",
      "결과로 신뢰받는 비뇨의학의 기준을 세웁니다.",
    ],
    imageSrc: "/assets/sample/hero-02.jpg.png",
    imageAlt: "강남J비뇨기과의원 프라이빗 1인 상담 및 진료 공간",
  },
] as const;

export const CLINIC_PHYSICIANS: ClinicPhysician[] = [
  {
    id: "park-cheon-jin",
    name: "박천진",
    roleTitle: "대표원장",
    englishRole: "CHIEF DIRECTOR · M.D.",
    credentials: "비뇨의학과 전문의 · 연세대학교 의학과",
    specialtyFocus: "전립선 HoLEP · 음경임플란트 · 남성재건수술 · 요로결석",
    // 운영 전 실제 촬영본 확정 예정
    portraitSrc: "/assets/sample/doctor-park.jpg.png",
    offDaySummary: "월·목 오후 휴진 (오전 수술·진료)",
    careerHighlights: [
      "대한비뇨기과학회 학술위원 · 정회원(KUA #1032)",
      "미국비뇨기과학회 정회원(AUA #98112) · 연세대·한림대 외래교수",
      "Proctorship in Penile Implant (Boston Scientific Korea) · Expert in HoLEP",
      "전 수도통합병원 비뇨기과 과장 역임 · 공식 유튜브 @uroj 운영",
    ],
    shifts: [
      { day: "월", am: "SURGERY_OPEN", pm: "CLOSED" },
      { day: "화", am: "SURGERY_OPEN", pm: "OPEN" },
      { day: "수", am: "SURGERY_OPEN", pm: "OPEN" },
      { day: "목", am: "SURGERY_OPEN", pm: "CLOSED" },
      { day: "금", am: "SURGERY_OPEN", pm: "OPEN" },
      { day: "토", am: "OPEN", pm: "NONE" },
    ],
  },
  {
    id: "lee-woong-hee",
    name: "이웅희",
    roleTitle: "원장",
    englishRole: "DIRECTOR · M.D., Ph.D.",
    credentials: "비뇨의학과 전문의 · 연세의대 의학박사",
    specialtyFocus: "전립선 질환 · 성기능장애 · 비뇨기 정밀 진단 및 협진",
    // 운영 전 실제 촬영본 확정 예정
    portraitSrc: "/assets/sample/doctor-lee.jpg.png",
    offDaySummary: "목요일 종일 휴진",
    careerHighlights: [
      "전 연세대학교 의과대학 비뇨의학교실 교수 역임",
      "현 연세대학교 의과대학 외래교수",
      "2000 아시아 성학회 사무총장 역임",
      "대한 비뇨의학과 의사회 학술이사",
    ],
    shifts: [
      { day: "월", am: "OPEN", pm: "OPEN" },
      { day: "화", am: "OPEN", pm: "OPEN" },
      { day: "수", am: "OPEN", pm: "OPEN" },
      { day: "목", am: "CLOSED", pm: "CLOSED" },
      { day: "금", am: "OPEN", pm: "OPEN" },
      { day: "토", am: "OPEN", pm: "NONE" },
    ],
  },
];

export const CLINIC_3S_PILLARS: ClinicPhilosophyPillar[] = [
  {
    index: "01",
    code: "SAFE",
    koreanTitle: "안전 중심 마취 · 실시간 모니터링",
    summary:
      "최소한의 국소 신경 마취와 실시간 활력징후 모니터링, 자체 설계 첨단 소독 시스템을 갖춘 2개 전용 수술실에서 안전을 최우선으로 집도합니다.",
  },
  {
    index: "02",
    code: "SIMPLE",
    koreanTitle: "치밀한 사전 설계 · 간결한 술기",
    summary:
      "수술 전 전문의와의 충분한 상담과 정밀 검사를 바탕으로 개인별 해부학적 조건에 맞춘 술기를 설계해 불필요한 조직 손상을 줄입니다.",
  },
  {
    index: "03",
    code: "SPEED",
    koreanTitle: "프라이버시 보장 · IOM 회복 팀워크",
    summary:
      "5개 독립 개인진료실, 전자차트 보안 시스템, 전원 남성 베테랑 간호팀, 수술 중 음악요법(IOM)으로 심리적 안정과 빠른 회복을 돕습니다.",
  },
];

export const CLINIC_TRUST_METRICS: ClinicTrustMetric[] = [
  {
    code: "HERITAGE",
    figure: "1999",
    unit: "SINCE",
    label: "27년 정통 비뇨의학 단일 프리미엄 본원",
    detail: "분점 확장보다 한 자리에서의 임상 깊이에 집중해 온 강남 학동역 본원",
  },
  {
    code: "COLLABORATION",
    figure: "02",
    unit: "인 협진",
    label: "연세의대 출신 비뇨의학과 전문의 2인 체제",
    detail: "박천진 대표원장과 연세의대 교수 역임 이웅희 원장의 정밀 협진",
  },
  {
    code: "INFRASTRUCTURE",
    figure: "5 · 2",
    unit: "독립 공간",
    label: "5개 독립 개인진료실 · 2개 전용 수술실",
    detail: "타 환자 동선 노출을 차단하는 프라이빗 진료실과 첨단 멸균 수술센터",
  },
  {
    code: "EDUCATION",
    figure: "5.2",
    unit: "만+ 구독자",
    label: "공식 유튜브 @uroj 의학 정보 아카이브",
    detail: "780편 이상의 비뇨의학 QnA·질환 해설 영상으로 쌓아온 투명한 신뢰",
  },
  {
    code: "SPECIALTY",
    figure: "24",
    unit: "세부 진료",
    label: "5대 핵심 센터 · 24개 체계적 비뇨기 진료",
    detail: "전립선·요로결석·성기능·보형물·음경재건·정관포경 전 영역 정밀 대응",
  },
];

export const CLINIC_FACILITY_GALLERY = [
  { src: "/assets/hospital/visual-02.jpg", caption: "독립 접수 · 프라이빗 안내 데스크", en: "PRIVATE RECEPTION" },
  { src: "/assets/hospital/visual-03.jpg", caption: "5개 독립 개인진료실", en: "5 PRIVATE CONSULT ROOMS" },
  { src: "/assets/hospital/visual-04.jpg", caption: "2개 전용 수술센터", en: "2 DEDICATED OR SUITES" },
  { src: "/assets/hospital/visual-05.jpg", caption: "비뇨기 정밀 진단 장비실", en: "PRECISION DIAGNOSTICS" },
  { src: "/assets/hospital/visual-06.jpg", caption: "수술 후 프라이빗 회복 공간", en: "RECOVERY LOUNGE" },
  { src: "/assets/hospital/visual-07.jpg", caption: "자체 설계 멸균·소독 시스템", en: "STERILIZATION SYSTEM" },
] as const;
