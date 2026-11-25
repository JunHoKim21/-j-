export interface ClinicVideoItem {
  id: string;
  videoId: string;
  category: string;
  durationLabel: string;
  title: string;
  summary: string;
  tags: string[];
  /** 수술 원색 장면 비노출용 안전 커버 썸네일 */
  safeCoverSrc: string;
  isSafeVerified: boolean;
}

export interface ClinicPressRecord {
  id: string;
  outlet: string;
  kind: "학술활동" | "언론칼럼" | "방송출연";
  title: string;
}

/**
 * 강남J비뇨기과 공식 유튜브(@uroj) 선별 의학 설명 영상
 * - 페이지 초기 렌더링 시 iframe 0개 유지
 * - 카드 클릭 시에만 youtube-nocookie.com 모달 플레이어 마운트
 * - 자극적 수술 장면·환자 인터뷰 영상 제외
 */
export const UROLOGY_VIDEO_GALLERY: ClinicVideoItem[] = [
  {
    id: "uroj-holep-urolift",
    videoId: "1af5dsLjxi4",
    category: "전립선 · HoLEP",
    durationLabel: "의학 가이드",
    title: "전립선비대증 수술적 치료, HoLEP과 유로리프트의 차이점",
    summary:
      "약물치료로 호전되지 않는 전립선비대증의 수술 판단 기준과 두 술식의 적응증·회복 과정을 전문의가 직접 설명합니다.",
    tags: ["#HoLEP", "#유로리프트", "#전립선비대증"],
    safeCoverSrc: "/assets/sample/center-prostate.jpg.png",
    isSafeVerified: true,
  },
  {
    id: "uroj-penile-implant",
    videoId: "P0Hb0QXFELI",
    category: "음경임플란트",
    durationLabel: "전문의 QnA",
    title: "음경임플란트의 오해와 진실, 제원 및 선택 기준 안내",
    summary:
      "굴곡형·팽창형 보형물의 구조적 특징과 수술 전 반드시 확인해야 할 해부학적·의학적 기준을 정리했습니다.",
    tags: ["#음경임플란트", "#발기부전", "#보형물비교"],
    safeCoverSrc: "/assets/sample/center-implant.jpg",
    isSafeVerified: true,
  },
  {
    id: "uroj-reconstruction-qna",
    videoId: "cyUSfApV_vI",
    category: "남성재건 · QnA",
    durationLabel: "질환 해설",
    title: "음경만곡증·이물질제거, 정확한 진단과 재건 원칙",
    summary:
      "선천적·후천적 만곡증과 과거 이물질 주입 후 합병증을 안전하게 교정하는 재건 원리를 안내합니다.",
    tags: ["#음경만곡증", "#이물질제거", "#남성재건"],
    safeCoverSrc: "/assets/sample/center-reconstruction.jpg",
    isSafeVerified: true,
  },
  {
    id: "uroj-combi-guide",
    videoId: "eJs24POPee8",
    category: "협진 진료 가이드",
    durationLabel: "진료 안내",
    title: "전립선비대증과 발기부전, 단계별 진료 및 상담 가이드",
    summary:
      "중장년 남성에게 함께 나타나기 쉬운 배뇨장애와 성기능 저하의 정밀 검사 및 단계별 치료 순서를 알려드립니다.",
    tags: ["#배뇨장애", "#성기능검사", "#2인협진"],
    safeCoverSrc: "/assets/sample/center-stone.jpg",
    isSafeVerified: true,
  },
];

export const CLINIC_PRESS_RECORDS: ClinicPressRecord[] = [
  {
    id: "press-kua",
    outlet: "대한비뇨기과학회",
    kind: "학술활동",
    title: "학술위원 활동 및 홀렙(HoLEP) 전문의 인터뷰",
  },
  {
    id: "press-aua",
    outlet: "미국비뇨기과학회 (AUA)",
    kind: "학술활동",
    title: "정회원 학술 교류 및 최신 비뇨의학 술기 연구",
  },
  {
    id: "press-hankyung",
    outlet: "한경비즈니스",
    kind: "언론칼럼",
    title: "박천진의 남성 upgrade — 전립선비대증·갱년기·정관복원 연재",
  },
  {
    id: "press-mk-tv",
    outlet: "매경TV · 한경TV",
    kind: "방송출연",
    title: "전립선비대증 및 발기부전 치료 의학 자문 출연",
  },
  {
    id: "press-mbc-radio",
    outlet: "MBC 라디오",
    kind: "방송출연",
    title: "황선숙의 건강한 아침 — 비뇨기과 주치의 상담 패널",
  },
  {
    id: "press-shindonga",
    outlet: "월간 신동아",
    kind: "언론칼럼",
    title: "발기부전증의 치료 — 3-piece 음경보형물 의학 칼럼",
  },
  {
    id: "press-donga",
    outlet: "주간동아",
    kind: "언론칼럼",
    title: "남성의학 건강 칼럼 30회 연재",
  },
  {
    id: "press-yonsei",
    outlet: "연세대학교 의과대학",
    kind: "학술활동",
    title: "비뇨의학교실 교수 역임 · 외래교수 협진 네트워크",
  },
];
