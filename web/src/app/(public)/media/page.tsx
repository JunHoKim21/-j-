import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { MediaArchiveClient } from "@/components/medical/MediaArchiveClient";

export const metadata: Metadata = {
  title: "미디어 · 유튜브(@uroj)",
  description: "강남J비뇨기과 공식 유튜브(@uroj) 전문의 설명 영상 가이드와 주요 언론보도·방송 출연 아카이브입니다.",
};

export default function MediaPage() {
  return (
    <>
      <SubHero
        kicker="MEDIA ARCHIVE"
        title="유튜브 의학 가이드 · 언론보도"
        description="공식 유튜브 채널(@uroj)의 선별 의학 설명 영상과 주요 언론 칼럼·방송 자문 이력을 확인하실 수 있습니다."
        breadcrumbs={[{ label: "미디어" }]}
      />
      <MediaArchiveClient />
    </>
  );
}
