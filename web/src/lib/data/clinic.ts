export type ScheduleStatus = "OPEN" | "SURGERY_OPEN" | "CLOSED" | "NONE";

export interface DaySchedule {
  day: "월" | "화" | "수" | "목" | "금" | "토";
  am: ScheduleStatus;
  pm: ScheduleStatus;
}

export interface DoctorProfile {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  specialtySummary: string;
  imagePath: string | null;
  imagePlaceholderNote: string;
  highlights: string[];
  schedule: DaySchedule[];
}

export const CLINIC_INFO = {
  name: "강남J비뇨기과의원",
  englishName: "GANGNAM J UROLOGY CLINIC",
  since: "1999",
  representative: "박천진",
  businessNumber: "120-90-16660",
  address: "서울시 강남구 학동로 203 4F",
  subwayGuide: "7호선 학동역 8번·9번 출구 사이",
  phone: "02-3018-7575",
  phoneHref: "tel:02-3018-7575",
  mobileConsultPhone: "010-9190-7575",
  fax: "02-516-2030",
  kakaoId: "gnjurology",
  consultHours: {
    weekday: "평일 09:00 ~ 18:00",
    saturday: "토요일 09:00 ~ 13:00",
    note: "일요일·공휴일 휴진 / 상담시간 외 문자 문의 시 순차 안내",
  },
  youtube: {
    handle: "@uroj",
    url: "https://www.youtube.com/@uroj",
    channelName: "Operation Ceremony Dr. Park's - 박천진",
    subscribersLabel: "5.2만+",
    videosLabel: "780+",
  },
} as const;

export const DOCTORS: DoctorProfile[] = [
  {
    slug: "park-cheon-jin",
    name: "박천진",
    title: "대표원장",
    credentials: "비뇨기과 전문의 · 연세대학교 의학과",
    specialtySummary: "전립선 HoLEP · 음경임플란트 · 남성재건수술 · 요로결석",
    imagePath: "/assets/sample/doctor-park.jpg.png",
    imagePlaceholderNote: "[샘플 보정본 - 오픈 전 실제 촬영본 확정 필요]",
    highlights: [
      "대한비뇨기과학회 학술위원 · 정회원(KUA)",
      "미국비뇨기과학회 정회원(AUA) · 연세대·한림대 비뇨기과학 외래교수",
      "Proctorship in penile implant Boston Scientific Korea · Expert in HoLEP",
      "전 수도통합병원 비뇨기과 과장 역임",
    ],
    // 2026.08.24 팝업 공식 진료시간표 기준
    schedule: [
      { day: "월", am: "SURGERY_OPEN", pm: "CLOSED" },
      { day: "화", am: "SURGERY_OPEN", pm: "OPEN" },
      { day: "수", am: "SURGERY_OPEN", pm: "OPEN" },
      { day: "목", am: "SURGERY_OPEN", pm: "CLOSED" },
      { day: "금", am: "SURGERY_OPEN", pm: "OPEN" },
      { day: "토", am: "OPEN", pm: "NONE" },
    ],
  },
  {
    slug: "lee-woong-hee",
    name: "이웅희",
    title: "원장",
    credentials: "비뇨의학과 전문의 · 연세의대 의학박사 (M.D., Ph.D.)",
    specialtySummary: "전립선 질환 · 성기능장애 · 비뇨기 정밀 진단 및 협진",
    imagePath: "/assets/sample/doctor-lee.jpg.png",
    imagePlaceholderNote: "[샘플 보정본 - 오픈 전 실제 촬영본 확정 필요]",
    highlights: [
      "연세의대 비뇨의학교실 교수 역임",
      "현 연세대학교 의과대학 외래교수",
      "2000 아시아 성학회 사무총장 역임",
      "대한 비뇨의학과 의사회 학술이사",
    ],
    // 2026.08.24 팝업 공식 진료시간표 기준
    schedule: [
      { day: "월", am: "OPEN", pm: "OPEN" },
      { day: "화", am: "OPEN", pm: "OPEN" },
      { day: "수", am: "OPEN", pm: "OPEN" },
      { day: "목", am: "CLOSED", pm: "CLOSED" },
      { day: "금", am: "OPEN", pm: "OPEN" },
      { day: "토", am: "OPEN", pm: "NONE" },
    ],
  },
];

export const THREE_S_PRINCIPLES = [
  {
    code: "SAFE",
    title: "안전 중심 마취·모니터링",
    description:
      "최소한의 국소 신경 마취와 실시간 생체 활력 증후 모니터링, 자체 설계 소독 시스템을 갖춘 2개 수술실에서 안전을 최우선으로 집도합니다.",
  },
  {
    code: "SIMPLE",
    title: "치밀한 사전 계획과 간결한 술기",
    description:
      "수술 전 충분한 전문의 상담을 통해 개인별 해부학적 조건에 맞춘 술기를 설계하여 불필요한 조직 손상을 줄입니다.",
  },
  {
    code: "SPEED",
    title: "회복 부담을 낮추는 팀워크",
    description:
      "원장이 직접 교육한 베테랑 남자 간호팀과 5개 독립 개인진료실, 수술 중 음악요법(IOM)으로 프라이버시와 편안한 회복을 돕습니다.",
  },
] as const;
