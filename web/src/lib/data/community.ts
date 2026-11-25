export interface NoticeItem {
  id: string;
  title: string;
  category: "진료안내" | "병원소식" | "휴진안내";
  isPinned: boolean;
  publishedAt: string;
  summary: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  category: "전립선" | "요로결석" | "임플란트·성기능" | "남성수술·기타";
  question: string;
  answer: string;
}

export type NonbenefitCategory = "수술" | "주사" | "검사" | "제증명수수료" | "입원";

export interface NonbenefitItem {
  id: string;
  category: NonbenefitCategory;
  itemName: string;
  detail?: string;
  priceText: string;
}

export interface PressItem {
  id: string;
  source: string;
  date: string;
  title: string;
  category: "언론칼럼" | "방송출연" | "학술활동";
}

export const NOTICES: NoticeItem[] = [
  {
    id: "2026-two-doctors-schedule",
    title: "2인 전문의 협진 체제(박천진·이웅희 원장) 진료시간 안내",
    category: "진료안내",
    isPinned: true,
    publishedAt: "2026-08-24",
    summary: "이웅희 원장 합류에 따른 2인 전문의 요일별 진료시간표를 안내드립니다.",
    content: [
      "강남J비뇨기과의원은 보다 세밀하고 전문적인 비뇨의학 진료를 제공하기 위해 박천진 대표원장과 세브란스 교수 출신 이웅희 원장의 2인 전문의 협진 체제로 운영됩니다.",
      "박천진 대표원장은 월~금 오전 수술·진료, 화·수·금 오후 진료, 토요일 오전 진료를 담당하며 월·목 오후는 휴진입니다.",
      "이웅희 원장은 월·화·수·금 오전·오후 진료 및 토요일 오전 진료를 담당하며 목요일은 종일 휴진입니다.",
      "강남J비뇨기과는 예약 우선제로 운영되고 있어, 내원 전 대표전화(02-3018-7575) 또는 온라인 예약으로 일정을 확인해 주시면 대기 시간을 줄이실 수 있습니다.",
    ],
  },
  {
    id: "2026-new-doctor-lee",
    title: "신규 의료진 영입 안내 — 이웅희 원장(M.D., Ph.D.) 진료 시작",
    category: "병원소식",
    isPinned: true,
    publishedAt: "2026-08-10",
    summary: "연세의대 비뇨의학교실 교수 역임 이웅희 원장이 2026년 8월 21일부터 진료를 시작합니다.",
    content: [
      "2026년 8월 21일부터 이웅희 원장(비뇨의학과 전문의 · 연세의대 의학박사)이 강남J비뇨기과에서 진료를 시작합니다.",
      "이웅희 원장은 연세의대 비뇨의학교실 교수, 2000 아시아 성학회 사무총장을 역임하였으며 현재 연세대학교 의과대학 외래교수 및 대한 비뇨의학과 의사회 학술이사로 활동하고 있습니다.",
      "앞으로 두 전문의의 협진을 통해 전립선 질환, 요로결석, 성기능장애 및 남성재건 분야에서 더욱 신뢰받는 진료를 제공하겠습니다.",
    ],
  },
  {
    id: "reservation-guide",
    title: "온라인 예약 및 1:1 비밀상담 이용 안내",
    category: "진료안내",
    isPinned: false,
    publishedAt: "2026-11-01",
    summary: "온라인 예약은 접수 후 병원 확인 전화를 통해 최종 확정되며, 1:1 비밀상담은 회원 비공개로 운영됩니다.",
    content: [
      "홈페이지 온라인 예약은 비회원도 신청 가능하며, 희망 일정 접수 후 병원 담당자가 일정을 확인하여 대표번호(02-3018-7575)로 확정 전화를 드립니다.",
      "민감한 증상이나 수술 관련 상세 문의는 환자 프라이버시 보호를 위해 1:1 비밀상담(간편 이메일 로그인)을 이용해 주시기 바랍니다.",
      "상담 가능 시간은 평일 09:00 ~ 18:00, 토요일 09:00 ~ 13:00이며 일요일과 공휴일은 휴진입니다.",
    ],
  },
];

/**
 * AS-IS FAQ(faq_01~04) 오분류 정정 및 주제별 재정비
 */
export const FAQS: FaqItem[] = [
  {
    id: "faq-p1",
    category: "전립선",
    question: "전립선비대증 수술적 치료에는 어떤 방법들이 있나요?",
    answer:
      "전립선의 크기, 모양, 환자의 연령 및 사정 기능 보존 희망 여부에 따라 홀렙(HoLEP) 레이저 수술과 유로리프트(전립선 결찰술) 등 다양한 치료법을 선택할 수 있습니다. 정밀 초음파 및 요속 검사 후 전문의 상담을 통해 본인에게 적합한 방법을 결정합니다.",
  },
  {
    id: "faq-p2",
    category: "전립선",
    question: "전립선 크기가 90g 이상으로 큰 경우에도 HoLEP 수술이 가능한가요?",
    answer:
      "홀뮴 레이저를 이용한 HoLEP 수술은 비대해진 전립선 선종을 통째로 분리·적출하는 방식으로, 거대 전립선비대증에서도 개복 수술 없이 내시경으로 시행할 수 있는 대표적인 표준 수술법입니다.",
  },
  {
    id: "faq-p3",
    category: "전립선",
    question: "역행성 사정을 피하려면 어떤 치료를 고려해야 하나요?",
    answer:
      "전립선 조직을 절제하지 않고 임플란트 결찰사로 요도 공간을 확보하는 유로리프트(UroLift) 시술은 사정 기능 보존에 유리합니다. 다만 전립선 중엽 비대 여부와 크기에 따라 적응증이 다르므로 사전 검사가 필요합니다.",
  },
  {
    id: "faq-p4",
    category: "전립선",
    question: "전립선 절제술을 받으면 이후 전립선암 검사를 받지 않아도 되나요?",
    answer:
      "아니요. 전립선비대증 수술은 비대해진 내선(이행대)을 제거하는 수술이며 전립선 피막(외선)은 남아 있으므로, 수술 후에도 정기적인 PSA 혈액검사 등 전립선암 추적 관찰이 필요합니다.",
  },
  {
    id: "faq-s1",
    category: "요로결석",
    question: "갑작스러운 옆구리 통증이 생겼는데 요로결석인지 어떻게 확인하나요?",
    answer:
      "요로결석은 옆구리·하복부의 극심한 통증, 혈뇨, 빈뇨·잔뇨감 등을 동반하는 경우가 많습니다. 소변검사, 초음파, 엑스레이(KUB) 또는 정밀 영상 검사를 통해 결석의 위치와 크기를 정확히 진단합니다.",
  },
  {
    id: "faq-s2",
    category: "요로결석",
    question: "요로결석은 모두 수술이 필요한가요?",
    answer:
      "결석의 크기가 작고 요로 폐색이나 감염이 동반되지 않은 경우에는 수분 섭취 및 약물 보조를 통한 자연 배출을 기대할 수 있습니다. 크기가 크거나 통증이 심한 경우에는 체외충격파쇄석술이나 요관내시경 제거술을 시행합니다.",
  },
  {
    id: "faq-i1",
    category: "임플란트·성기능",
    question: "음경보형물(임플란트) 수술은 어떤 경우에 고려하게 되나요?",
    answer:
      "경구용 발기부전 약물치료나 주사요법에 반응하지 않거나 부작용으로 사용이 어려운 경우, 또는 당뇨·전립선암 수술 후 기질성 발기부전이 지속되는 경우에 고려하는 수술적 치료 방법입니다.",
  },
  {
    id: "faq-i2",
    category: "임플란트·성기능",
    question: "음경보형물 삽입술 후 감각이나 사정 기능은 어떻게 되나요?",
    answer:
      "보형물은 발기를 담당하는 음경해면체 내부에 위치하므로 귀두의 감각신경과 요도·사정 경로는 보존됩니다. 수술 후 회복 기간과 성관계 가능 시기는 개인 회복 상태에 따라 전문의 경과 확인 후 안내드립니다.",
  },
  {
    id: "faq-i3",
    category: "임플란트·성기능",
    question: "당뇨가 있으면 발기부전이 동반될 수 있나요?",
    answer:
      "네. 당뇨병은 말초 혈관과 신경 기능에 영향을 미쳐 기질성 발기부전의 주요 원인이 됩니다. 혈당 조절과 함께 음경혈관 도플러검사 등 정밀 성기능검사를 통해 단계별 치료 계획을 세우는 것이 중요합니다.",
  },
  {
    id: "faq-m1",
    category: "남성수술·기타",
    question: "선천적 음경만곡증과 페이로니병(후천적 만곡증)은 치료가 다른가요?",
    answer:
      "원인과 휘어진 각도, 백막 섬유화(결절) 유무에 따라 주름법 교정술 또는 기하학적 백막이식수술 등 수술 방식이 달라집니다. 발기 시 각도 평가와 정밀 진찰 후 개인별 맞춤 수술법을 결정합니다.",
  },
  {
    id: "faq-m2",
    category: "남성수술·기타",
    question: "바세린·파라핀 등 이물질 제거 후 피부 결손이 걱정됩니다.",
    answer:
      "이물질의 침윤 범위와 피부 탄력도에 따라 단순 제거부터 음낭터널피판술 등 재건 술식을 적용할 수 있습니다. 염증이나 피부 괴사가 진행되기 전에 전문의 진찰을 받는 것이 안전합니다.",
  },
  {
    id: "faq-m3",
    category: "남성수술·기타",
    question: "정관수술 후 오랜 시간이 지나도 정관복원수술이 가능한가요?",
    answer:
      "수술 경과 기간이 길수록 난이도가 높아지지만, 현미경을 이용한 미세 정관복원수술로 복원을 시도할 수 있습니다. 내원 시 신체 진찰과 상담을 통해 복원 가능성과 경과를 자세히 안내해 드립니다.",
  },
];

/**
 * 의료법 제45조 비급여 진료비용 고지 (AS-IS nonbenefit.html 전 항목 보존)
 * ※ 최종 운영 전 건강보험심사평가원(심평원) 현행 신고 단가 일치 여부 확인 필요(C-06)
 */
export const NONBENEFIT_ITEMS: NonbenefitItem[] = [
  // 수술
  { id: "nb-s01", category: "수술", itemName: "음경만곡증교정술", detail: "주름법", priceText: "300~600만원" },
  { id: "nb-s02", category: "수술", itemName: "음경만곡증교정술", detail: "기하학적 백막이식수술", priceText: "600~1200만원" },
  { id: "nb-s03", category: "수술", itemName: "음경보형물삽입수술", detail: "굴곡형", priceText: "700만원" },
  { id: "nb-s04", category: "수술", itemName: "음경보형물삽입수술", detail: "팽창형", priceText: "1500만원" },
  { id: "nb-s05", category: "수술", itemName: "전립선비대증 결찰수술", detail: "유로리프트", priceText: "400~1600만원" },
  { id: "nb-s06", category: "수술", itemName: "음경이물질제거수술", detail: "바세린/파라핀", priceText: "500~1000만원" },
  { id: "nb-s07", category: "수술", itemName: "음경이물질제거수술", detail: "지방/진피/필러", priceText: "300~600만원" },
  { id: "nb-s08", category: "수술", itemName: "피판술", detail: "상/하부 물갈퀴음경교정술", priceText: "200만원" },
  { id: "nb-s09", category: "수술", itemName: "피판술", detail: "음낭터널피판술", priceText: "300만원" },
  { id: "nb-s10", category: "수술", itemName: "피판술", detail: "피부결손으로 인한 피판술", priceText: "300만원" },
  { id: "nb-s11", category: "수술", itemName: "음경확대수술", detail: "국산 동종진피", priceText: "350만원" },
  { id: "nb-s12", category: "수술", itemName: "음경확대수술", detail: "수입 동종진피", priceText: "700만원" },
  { id: "nb-s13", category: "수술", itemName: "음경확대수술", detail: "히알루론산필러", priceText: "150만원" },
  { id: "nb-s14", category: "수술", itemName: "귀두직하확대수술", detail: "-", priceText: "300만원" },
  { id: "nb-s15", category: "수술", itemName: "함몰음경교정술", detail: "외부근막고정술", priceText: "150만원" },
  { id: "nb-s16", category: "수술", itemName: "함몰음경교정술", detail: "치골지방제거술", priceText: "300~500만원" },
  { id: "nb-s17", category: "수술", itemName: "배부신경차단술", detail: "-", priceText: "80만원" },
  { id: "nb-s18", category: "수술", itemName: "포경수술", detail: "소매법 디자인 포경수술", priceText: "80만원" },
  { id: "nb-s19", category: "수술", itemName: "포경수술", detail: "귀두포피유착박리 특수포경수술", priceText: "80만원" },
  { id: "nb-s20", category: "수술", itemName: "포경수술", detail: "포피소대성형술", priceText: "80만원" },
  { id: "nb-s21", category: "수술", itemName: "포경수술", detail: "베이스라인 포경수술", priceText: "150만원" },
  { id: "nb-s22", category: "수술", itemName: "무도정관수술", detail: "-", priceText: "50만원" },
  { id: "nb-s23", category: "수술", itemName: "실리콘링", detail: "C자형", priceText: "60만원" },
  { id: "nb-s24", category: "수술", itemName: "실리콘링", detail: "T자형", priceText: "120만원" },
  // 주사
  { id: "nb-i01", category: "주사", itemName: "IVC / IVNT (회복/면역주사)", detail: "-", priceText: "50~100만원" },
  { id: "nb-i02", category: "주사", itemName: "남성호르몬 보충요법(센비도)", detail: "-", priceText: "30만원" },
  { id: "nb-i03", category: "주사", itemName: "가다실 9", detail: "회당", priceText: "20만원" },
  { id: "nb-i04", category: "주사", itemName: "요도마취(11ml)", detail: "-", priceText: "6만원" },
  // 검사
  { id: "nb-e01", category: "검사", itemName: "성기능검사", detail: "-", priceText: "35만원" },
  { id: "nb-e02", category: "검사", itemName: "음경혈관 도플러검사", detail: "-", priceText: "20만원" },
  { id: "nb-e03", category: "검사", itemName: "PHI (Prostate Health Index)", detail: "-", priceText: "20만원" },
  { id: "nb-e04", category: "검사", itemName: "HPV 항원검사", detail: "-", priceText: "16만원" },
  { id: "nb-e05", category: "검사", itemName: "남성호르몬 종합혈액검사", detail: "-", priceText: "10만원" },
  { id: "nb-e06", category: "검사", itemName: "혈액검사", detail: "-", priceText: "5~10만원" },
  { id: "nb-e07", category: "검사", itemName: "인공발기", detail: "-", priceText: "5만원" },
  { id: "nb-e08", category: "검사", itemName: "Testosterone 검사", detail: "-", priceText: "3만원" },
  { id: "nb-e09", category: "검사", itemName: "진동각검사", detail: "-", priceText: "3만원" },
  { id: "nb-e10", category: "검사", itemName: "정액검사", detail: "-", priceText: "3만원" },
  // 제증명수수료
  { id: "nb-c01", category: "제증명수수료", itemName: "진단서 / 소견서 / CD / 일반처방전", detail: "-", priceText: "1만원" },
  { id: "nb-c02", category: "제증명수수료", itemName: "수술확인서 / 입퇴원확인서", detail: "-", priceText: "3천원" },
  { id: "nb-c03", category: "제증명수수료", itemName: "진료기록사본", detail: "-", priceText: "1천원" },
  // 입원
  { id: "nb-h01", category: "입원", itemName: "상급병실(1인실)", detail: "-", priceText: "40만원" },
];

export const PRESS_ARCHIVE: PressItem[] = [
  { id: "pr-1", source: "대한비뇨기과학회", date: "학술활동", title: "홀렙(HoLEP) 수술 전문의 박천진 원장 인터뷰 및 학술위원 활동", category: "학술활동" },
  { id: "pr-2", source: "한경비즈니스", date: "칼럼 연재", title: "박천진의 남성 upgrade — 전립선비대증의 새로운 수술법", category: "언론칼럼" },
  { id: "pr-3", source: "한경비즈니스", date: "칼럼 연재", title: "박천진의 남성 upgrade — 중년의 불청객 ‘남성 갱년기’", category: "언론칼럼" },
  { id: "pr-4", source: "한경비즈니스", date: "칼럼 연재", title: "박천진의 남성 upgrade — 소변 색깔과 내 몸의 건강 상태", category: "언론칼럼" },
  { id: "pr-5", source: "한경비즈니스", date: "칼럼 연재", title: "박천진의 남성 upgrade — 시간과 정성이 필요한 정관 복원 수술", category: "언론칼럼" },
  { id: "pr-6", source: "매경TV · 한경TV", date: "방송출연", title: "전립선비대증 및 발기부전 치료(음경보형물) 의학 자문 출연", category: "방송출연" },
  { id: "pr-7", source: "MBC 라디오", date: "방송출연", title: "황선숙의 건강한 아침 — 비뇨기과 주치의 상담 패널", category: "방송출연" },
  { id: "pr-8", source: "월간 신동아", date: "언론기고", title: "발기부전증의 치료 — 3-piece 음경보형물 의학 칼럼", category: "언론칼럼" },
];
