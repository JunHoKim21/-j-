export interface NavChildItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  type: "dropdown" | "mega-departments" | "link";
  children?: NavChildItem[];
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    label: "병원소개",
    href: "/about/greeting",
    type: "dropdown",
    children: [
      { label: "병원 철학 · 3S 원칙", href: "/about/greeting", description: "Safe · Simple · Speed 진료 철학" },
      { label: "2인 전문의 협진", href: "/about/doctors", description: "박천진 대표원장 · 이웅희 원장" },
      { label: "시설 · 수술센터", href: "/about/facilities", description: "독립 5개 진료실 · 전용 수술실" },
      { label: "진료시간 · 오시는 길", href: "/about/location", description: "2인 시간표 · 학동역 8·9번 출구" },
    ],
  },
  {
    label: "진료센터",
    href: "/departments",
    type: "mega-departments",
  },
  {
    label: "미디어",
    href: "/media",
    type: "link",
  },
  {
    label: "온라인 예약",
    href: "/reservation",
    type: "link",
  },
  {
    label: "1:1 비밀상담",
    href: "/consultation",
    type: "link",
  },
  {
    label: "고객안내",
    href: "/notice",
    type: "dropdown",
    children: [
      { label: "공지사항", href: "/notice", description: "진료 일정 및 병원 소식" },
      { label: "자주 묻는 질문 (FAQ)", href: "/faq", description: "질환·수술별 핵심 Q&A" },
      { label: "비급여 진료비용 안내", href: "/nonbenefit", description: "의료법 제45조 비급여 고지" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "개인정보처리방침", href: "/privacy", emphasized: true },
  { label: "이용약관", href: "/terms", emphasized: false },
  { label: "비급여 진료비용 안내", href: "/nonbenefit", emphasized: true },
  { label: "오시는 길", href: "/about/location", emphasized: false },
  { label: "FAQ", href: "/faq", emphasized: false },
] as const;
