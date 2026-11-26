export interface ClinicVideoItem {
  id: string;
  videoId: string;
  category: string;
  durationLabel: string;
  title: string;
  summary: string;
  tags: string[];
  /** 자극적 수술 장면·환자 인터뷰 제외 검수 플래그 */
  isSafeVerified: boolean;
  /** 비로그인 외부 iframe(youtube-nocookie) 임베드 가능 여부 (false 시 유튜브 새 탭 연결) */
  embeddable: boolean;
  /** 수술 원색 장면 비노출용 안전 커버 썸네일 */
  safeCoverSrc: string;
}

export interface ClinicPressRecord {
  id: string;
  outlet: string;
  kind: "학술활동" | "언론칼럼" | "방송출연";
  title: string;
}

/**
 * 강남J비뇨기과 공식 유튜브(@uroj) 선별 의학 설명 영상
 * - 전 항목 비로그인(시크릿) youtube-nocookie.com 임베드 및 연령 제한 미적용 검증 완료
 * - 페이지 초기 렌더링 시 iframe 0개 유지
 * - embeddable: true → 클릭 시 모달 재생 / embeddable: false → YouTube ↗ 새 탭 연결
 */
export const UROLOGY_VIDEO_GALLERY: ClinicVideoItem[] = [
  {
    id: "uroj-holep-urolift",
    videoId: "7Kkpg3a_LMU",
    category: "전립선 · 행복한 배뇨",
    durationLabel: "전문의 해설",
    title: "정상 크기의 전립선도 전립선비대증 수술이 필요한가?",
    summary:
      "전립선 용적뿐만 아니라 요도 압박 형태와 배뇨 증상에 따른 수술적 치료 판단 기준을 전문의가 직접 설명합니다.",
    tags: ["#전립선비대증", "#행복한배뇨", "#수술기준"],
    safeCoverSrc: "/assets/sample/center-prostate.jpg.png",
    isSafeVerified: true,
    embeddable: true,
  },
  {
    id: "uroj-penile-implant",
    videoId: "JBmQy0HCsWc",
    category: "성기능 · QnA",
    durationLabel: "전문의 QnA",
    title: "[QnA : 음경임플란트편] 탈모약을 먹으면 발기부전이 오나요?",
    summary:
      "약물 복용과 발기부전의 연관성에 대한 궁금증과 단계별 성기능 평가·치료 기준을 알기 쉽게 정리했습니다.",
    tags: ["#발기부전", "#음경임플란트", "#전문의QnA"],
    safeCoverSrc: "/assets/sample/center-implant.jpg",
    isSafeVerified: true,
    embeddable: true,
  },
  {
    id: "uroj-reconstruction-qna",
    videoId: "kauJae1TL-U",
    category: "남성재건 · 컬럼",
    durationLabel: "읽어주는 컬럼",
    title: "성적 좌절감의 원인 '음경만곡증' — 박천진 원장의 읽어주는 컬럼",
    summary:
      "선천적·후천적 음경만곡증의 원인과 정확한 각도 평가, 안전한 교정 원칙을 전문의 칼럼으로 안내합니다.",
    tags: ["#음경만곡증", "#남성재건", "#읽어주는컬럼"],
    safeCoverSrc: "/assets/sample/center-reconstruction.jpg",
    isSafeVerified: true,
    embeddable: true,
  },
  {
    id: "uroj-combi-guide",
    videoId: "-n-wm_lgbj8",
    category: "요로결석 · 가이드",
    durationLabel: "질환 해설",
    title: "작은 요로결석, 방치하면 위험하다! Silent Stone의 진실",
    summary:
      "통증이 적거나 크기가 작은 결석이라도 방치 시 신장 기능에 영향을 줄 수 있는 이유와 조기 진단 기준을 알려드립니다.",
    tags: ["#요로결석", "#신장결석", "#조기진단"],
    safeCoverSrc: "/assets/sample/center-stone.jpg",
    isSafeVerified: true,
    embeddable: true,
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
