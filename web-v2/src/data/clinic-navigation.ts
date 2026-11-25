export interface ClinicNavSubLink {
  label: string;
  href: string;
  caption?: string;
}

export interface ClinicNavEntry {
  id: string;
  label: string;
  href: string;
  centerSlug?: string;
  subLinks?: ClinicNavSubLink[];
}

export const CLINIC_GNB_ENTRIES: ClinicNavEntry[] = [
  {
    id: "about",
    label: "강남J 스토리",
    href: "/about/greeting",
    subLinks: [
      { label: "단일 본원 · 3S 철학", href: "/about/greeting" },
      { label: "2인 전문의 협진", href: "/about/doctors" },
      { label: "시설 · 전용 수술실", href: "/about/facilities" },
      { label: "진료시간 · 오시는 길", href: "/about/location" },
    ],
  },
  {
    id: "prostate",
    label: "전립선 클리닉",
    href: "/departments/prostate",
    centerSlug: "prostate",
  },
  {
    id: "stone",
    label: "요로결석 클리닉",
    href: "/departments/stone",
    centerSlug: "stone",
  },
  {
    id: "sexual-implant",
    label: "성기능·보형물",
    href: "/departments/sexual-implant",
    centerSlug: "sexual-implant",
  },
  {
    id: "reconstruction",
    label: "음경재건·확대",
    href: "/departments/reconstruction",
    centerSlug: "reconstruction",
  },
  {
    id: "vasectomy-circumcision",
    label: "정관·포경",
    href: "/departments/vasectomy-circumcision",
    centerSlug: "vasectomy-circumcision",
  },
  {
    id: "media",
    label: "Video Gallery",
    href: "/media",
    subLinks: [
      { label: "공식 유튜브 @uroj", href: "/media" },
      { label: "공지사항", href: "/notice" },
      { label: "자주 묻는 질문 (FAQ)", href: "/faq" },
    ],
  },
  {
    id: "support",
    label: "예약·비밀상담",
    href: "/reservation",
    subLinks: [
      { label: "비회원 온라인 예약", href: "/reservation" },
      { label: "1:1 비밀상담", href: "/consultation" },
      { label: "2인 진료시간표", href: "/about/location#clinic-hours" },
      { label: "비급여 진료비용 안내", href: "/nonbenefit" },
    ],
  },
];

export const CLINIC_FOOTER_POLICY_LINKS = [
  { label: "개인정보처리방침", href: "/privacy", highlight: true },
  { label: "이용약관", href: "/terms", highlight: false },
  { label: "비급여 진료비용 안내", href: "/nonbenefit", highlight: true },
  { label: "오시는 길", href: "/about/location", highlight: false },
  { label: "FAQ", href: "/faq", highlight: false },
] as const;

export const CLINIC_QUICK_BAR_ITEMS = [
  { id: "secret", label: "1:1 비밀상담", shortLabel: "비밀상담", href: "/consultation", accent: true },
  { id: "reserve", label: "온라인 예약", shortLabel: "온라인 예약", href: "/reservation", accent: false },
  { id: "hours", label: "진료시간", shortLabel: "진료시간", href: "/about/location#clinic-hours", accent: false },
  { id: "location", label: "오시는 길", shortLabel: "오시는 길", href: "/about/location", accent: false },
  { id: "faq", label: "FAQ", shortLabel: "FAQ", href: "/faq", accent: false },
  { id: "video", label: "Video Gallery", shortLabel: "Video", href: "/media", accent: false },
] as const;
