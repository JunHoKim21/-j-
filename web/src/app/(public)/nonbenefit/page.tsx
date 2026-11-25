import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { NonbenefitClient } from "@/components/medical/NonbenefitClient";

export const metadata: Metadata = {
  title: "비급여 진료비용 안내",
  description: "의료법 제45조에 따른 강남J비뇨기과의원 수술·주사·검사·제증명수수료·입원 비급여 진료비용 안내입니다.",
};

export default function NonbenefitPage() {
  return (
    <>
      <SubHero
        kicker="NON-BENEFIT PRICING"
        title="비급여 진료비용 안내"
        description="의료법 제45조에 따라 본원의 비급여 진료 항목 및 비용 기준을 안내드립니다."
        breadcrumbs={[{ label: "고객안내", href: "/notice" }, { label: "비급여 진료비용 안내" }]}
      />
      <NonbenefitClient />
    </>
  );
}
