import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { FacilitiesGallery } from "@/components/medical/FacilitiesGallery";

export const metadata: Metadata = {
  title: "시설 · 수술센터",
  description: "독립된 5개 개인진료실, 자체 소독 시스템을 갖춘 2개 전용 수술실 및 강남J비뇨기과의원 내부 공간을 소개합니다.",
};

const HIGHLIGHTS = [
  { label: "독립 개인진료실", value: "5실", desc: "타 환자와의 동선·노출 부담을 줄인 프라이빗 상담·진료 공간" },
  { label: "전용 수술센터", value: "2실", desc: "자체 설계 소독기·자외선 소독 및 실시간 생체 활력 모니터링 구비" },
  { label: "접수·대기 공간", value: "2창구", desc: "신속한 접수와 차분하고 아늑한 대기 환경 구성" },
];

export default function FacilitiesPage() {
  return (
    <>
      <SubHero
        kicker="ABOUT · FACILITIES"
        title="프라이빗 진료실 · 수술센터"
        description="환자의 심리적 안정감과 철저한 감염 관리 기준에 맞춰 설계된 강남J비뇨기과의원 실제 공간입니다."
        breadcrumbs={[{ label: "병원소개", href: "/about/greeting" }, { label: "시설 · 수술센터" }]}
      />

      <section className="bg-surface-1 py-12 lg:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="rounded-xl bg-surface-0 p-6">
                <div className="text-[12.5px] font-semibold text-brand-brass">{item.label}</div>
                <div className="mt-1 text-[28px] font-bold text-brand-navy">{item.value}</div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page">
          <div className="mb-8">
            <h2 className="text-[22px] font-bold text-brand-navy lg:text-[28px]">병원 둘러보기</h2>
            <p className="mt-1.5 text-[14.5px] text-ink-secondary">
              사진을 클릭하시면 큰 화면으로 자세히 확인하실 수 있습니다.
            </p>
          </div>
          <FacilitiesGallery />
        </div>
      </section>
    </>
  );
}
