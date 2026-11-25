import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { ConsultationNewForm } from "@/components/forms/ConsultationNewForm";

export const metadata: Metadata = {
  title: "새 1:1 비밀상담 작성",
};

export default function ConsultationNewPage() {
  return (
    <>
      <SubHero
        kicker="PRIVATE 1:1 CONSULTATION"
        title="새 비밀상담 작성"
        description="작성하신 내용은 외부에 공개되지 않으며, 전문의 확인 후 순차적으로 답변드립니다."
        breadcrumbs={[
          { label: "1:1 비밀상담", href: "/consultation" },
          { label: "새 상담 작성" },
        ]}
      />
      <section className="bg-surface-0 py-12 lg:py-20">
        <div className="container-page max-w-[820px]">
          <ConsultationNewForm />
        </div>
      </section>
    </>
  );
}
