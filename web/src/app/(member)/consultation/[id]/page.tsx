import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { ConsultationDetailClient } from "@/components/forms/ConsultationDetailClient";

export const metadata: Metadata = {
  title: "내 비밀상담 상세",
};

export default async function ConsultationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <SubHero
        kicker="PRIVATE 1:1 CONSULTATION"
        title="내 비밀상담 상세"
        description="본인이 작성한 1:1 비공개 상담 내용과 강남J비뇨기과 공식 답변입니다."
        breadcrumbs={[
          { label: "1:1 비밀상담", href: "/consultation" },
          { label: "상담 상세" },
        ]}
      />
      <ConsultationDetailClient id={id} />
    </>
  );
}
