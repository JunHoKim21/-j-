import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DEPARTMENT_CENTERS } from "@/lib/data/departments";
import { SubHero } from "@/components/layout/SubHero";

export const metadata: Metadata = {
  title: "5대 핵심 진료센터",
  description:
    "전립선, 요로결석, 음경임플란트·성기능, 남성성형·재건, 정관·포경까지 강남J비뇨기과의원 5대 핵심 진료센터와 24개 세부 진료 안내입니다.",
};

export default function DepartmentsHubPage() {
  return (
    <>
      <SubHero
        kicker="SPECIALIZED CENTERS"
        title="5대 핵심 진료센터"
        description="박천진 대표원장·이웅희 원장 2인 전문의 협진으로 정밀 진단부터 고난도 수술·재건까지 체계적으로 진료합니다."
        breadcrumbs={[{ label: "진료센터" }]}
      />

      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page space-y-8">
          {DEPARTMENT_CENTERS.map((center) => (
            <article
              key={center.categorySlug}
              className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl bg-surface-1 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <div className="lg:col-span-4">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-dark">
                  <img
                    src={center.imagePath}
                    alt={center.categoryName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 lg:col-span-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[12px] font-bold tracking-[0.14em] text-brand-brass">
                    {center.order} · {center.englishLabel}
                  </span>
                  <Link
                    href={`/departments/${center.categorySlug}`}
                    className="inline-flex items-center gap-1 text-[13.5px] font-bold text-brand-blue hover:text-brand-navy"
                  >
                    <span>센터 전체 보기</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <h2 className="text-[22px] font-bold text-brand-navy sm:text-[26px]">
                  {center.categoryName}
                </h2>
                <p className="text-[15px] leading-[1.7] text-ink-secondary">{center.summary}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {center.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/departments/${center.categorySlug}/${item.slug}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-surface-0 px-3.5 py-2 text-[13.5px] font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
