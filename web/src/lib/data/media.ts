export interface CuratedYouTubeVideo {
  id: string;
  videoId: string;
  category: string;
  title: string;
  description: string;
  /** 자극적 수술 장면·환자 인터뷰 제외 검수 플래그 */
  isSafeVerified: boolean;
}

/**
 * 공식 유튜브(@uroj) 선별 영상 (AS-IS 메인 공식 임베드 ID 기반, 초기 iframe 0개 Facade 적용)
 * ※ 최종 운영 전 고객사 검수 목록(C-07) 확정 시 DB media_item으로 교체 관리
 */
export const FEATURED_YOUTUBE_VIDEOS: CuratedYouTubeVideo[] = [
  {
    id: "yt-1",
    videoId: "1af5dsLjxi4",
    category: "전립선 · HoLEP",
    title: "전립선비대증 수술적 치료, HoLEP과 유로리프트의 차이점",
    description: "약물치료로 호전되지 않는 전립선비대증의 수술 기준과 회복 과정을 전문의가 직접 설명합니다.",
    isSafeVerified: true,
  },
  {
    id: "yt-2",
    videoId: "P0Hb0QXFELI",
    category: "음경임플란트",
    title: "음경임플란트의 오해와 진실, 제원 및 선택 기준 안내",
    description: "굴곡형·팽창형 보형물의 구조적 특징과 수술 전 반드시 확인해야 할 사항을 정리했습니다.",
    isSafeVerified: true,
  },
  {
    id: "yt-3",
    videoId: "cyUSfApV_vI",
    category: "남성재건 · QnA",
    title: "음경만곡증·이물질제거, 정확한 진단과 재건 원칙",
    description: "잘못된 시술 후 부작용이나 선천적·후천적 만곡증의 안전한 교정 원리를 안내합니다.",
    isSafeVerified: true,
  },
  {
    id: "yt-4",
    videoId: "eJs24POPee8",
    category: "동시수술 · 가이드",
    title: "전립선비대증과 발기부전, 단계별 진료 및 상담 가이드",
    description: "중장년 남성에게 함께 나타나기 쉬운 배뇨장애와 성기능 저하의 진단 순서를 알려드립니다.",
    isSafeVerified: true,
  },
];
