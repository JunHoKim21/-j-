export interface CuratedYouTubeVideo {
  id: string;
  videoId: string;
  category: string;
  title: string;
  description: string;
  /** 자극적 수술 장면·환자 인터뷰 제외 검수 플래그 */
  isSafeVerified: boolean;
  /** 비로그인 외부 iframe(youtube-nocookie) 임베드 가능 여부 (false 시 유튜브 새 탭 연결) */
  embeddable: boolean;
}

/**
 * 공식 유튜브(@uroj) 선별 영상 (비로그인 연령 제한 미적용 검증 완료, 초기 iframe 0개 Facade 적용)
 * - embeddable: true → 모달 재생 / embeddable: false → YouTube ↗ 새 탭 바로가기
 */
export const FEATURED_YOUTUBE_VIDEOS: CuratedYouTubeVideo[] = [
  {
    id: "yt-1",
    videoId: "7Kkpg3a_LMU",
    category: "전립선 · 행복한 배뇨",
    title: "정상 크기의 전립선도 전립선비대증 수술이 필요한가?",
    description:
      "전립선 크기뿐만 아니라 요도 압박 형태와 배뇨 증상에 따른 수술적 치료 판단 기준을 전문의가 직접 설명합니다.",
    isSafeVerified: true,
    embeddable: true,
  },
  {
    id: "yt-2",
    videoId: "JBmQy0HCsWc",
    category: "성기능 · QnA",
    title: "[QnA : 음경임플란트편] 탈모약을 먹으면 발기부전이 오나요?",
    description:
      "약물 복용과 성기능 저하의 연관성에 대한 궁금증과 단계별 성기능 평가·치료 기준을 알기 쉽게 정리했습니다.",
    isSafeVerified: true,
    embeddable: true,
  },
  {
    id: "yt-3",
    videoId: "kauJae1TL-U",
    category: "남성재건 · 컬럼",
    title: "성적 좌절감의 원인 '음경만곡증' — 박천진 원장의 읽어주는 컬럼",
    description:
      "선천적·후천적 음경만곡증의 원인과 정확한 각도 평가, 안전한 교정 원리를 전문의 칼럼으로 안내합니다.",
    isSafeVerified: true,
    embeddable: true,
  },
  {
    id: "yt-4",
    videoId: "-n-wm_lgbj8",
    category: "요로결석 · 가이드",
    title: "작은 요로결석, 방치하면 위험하다! Silent Stone의 진실",
    description:
      "통증이 적은 작은 결석이라도 방치 시 신장 기능에 영향을 줄 수 있는 이유와 조기 진단 기준을 알려드립니다.",
    isSafeVerified: true,
    embeddable: true,
  },
];
