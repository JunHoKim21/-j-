import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { ConsultationClient } from "@/components/forms/ConsultationClient";

export const metadata: Metadata = {
  title: "1:1 비밀상담",
  description:
    "강남J비뇨기과의원 1:1 비공개 비밀상담입니다. 본인과 담당 의료진만 열람할 수 있도록 안전하게 보호됩니다.",
};

export default function ConsultationPage() {
  return (
    <>
      <SubHero
        kicker="PRIVATE 1:1 CONSULTATION"
        title="1:1 비밀상담"
        description="환자 프라이버시 보호를 위해 로그인한 본인과 담당 의료진만 열람할 수 있는 1:1 비공개 상담실입니다."
        breadcrumbs={[{ label: "1:1 비밀상담" }]}
      />
      <ConsultationClient />
    </>
  );
}
