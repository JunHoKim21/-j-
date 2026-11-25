import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { FaqAccordionClient } from "@/components/medical/FaqAccordionClient";

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ)",
  description: "전립선비대증, 요로결석, 음경임플란트, 남성성형 등 환자분들이 자주 문의하시는 질문을 정리했습니다.",
};

export default function FaqPage() {
  return (
    <>
      <SubHero
        kicker="COMMUNITY · FAQ"
        title="자주 묻는 질문"
        description="진료 분야별로 자주 문의하시는 핵심 질문과 전문의 답변을 확인하실 수 있습니다."
        breadcrumbs={[{ label: "고객안내", href: "/notice" }, { label: "자주 묻는 질문" }]}
      />
      <FaqAccordionClient />
    </>
  );
}
