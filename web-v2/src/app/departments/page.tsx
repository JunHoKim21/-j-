import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UROLOGY_CENTERS } from "@/data/urology-centers";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";

export const metadata: Metadata = {
  title: "5대 핵심 진료센터",
  description:
    "강남J비뇨기과의원 5대 핵심 진료센터(전립선, 요로결석, 성기능·보형물, 음경재건·확대, 정관·포경)와 24개 세부 진료 항목 안내.",
};

export default function DepartmentsHubPage() {
  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="FIVE SPECIALTY CENTERS · 24 TREATMENTS"
        title="강남J 5대 핵심 진료센터"
        description="전립선, 요로결석, 성기능·보형물, 음경재건·확대, 정관·포경까지 24개 세부 질환을 2인 전문의 협진으로 체계적으로 진단·치료합니다."
        breadcrumbs={[{ label: "진료센터" }]}
        imageSrc="/assets/sample/hero-02.jpg.png"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="gj-container space-y-10">
          {UROLOGY_CENTERS.map((center) => (
            <article
              key={center.slug}
              data-gj-reveal
              className="overflow-hidden rounded-3xl bg-[#f6f6f6]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative min-h-[240px] bg-black lg:col-span-4">
                  <img
                    src={center.visualSrc}
                    alt={center.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <span className="text-xs font-bold tracking-[0.18em] text-gj-brass">
                      CENTER {center.order}
                    </span>
                    <h2 className="mt-1 text-2xl font-bold">{center.title}</h2>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 lg:col-span-8 lg:p-9">
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-gj-brass-deep">
                      {center.englishLabel}
                    </p>
                    <p className="mt-2 text-lg font-bold text-black">
                      {center.headline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gj-muted">
                      {center.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {center.treatments.map((tr) => (
                        <Link
                          key={tr.slug}
                          href={`/departments/${center.slug}/${tr.slug}`}
                          className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-xs transition hover:bg-black hover:text-white"
                        >
                          {tr.name}
                          <ArrowUpRight className="h-3.5 w-3.5 text-gj-brass-deep" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end border-t border-black/10 pt-4">
                    <Link
                      href={`/departments/${center.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-black hover:text-gj-brass-deep"
                    >
                      {center.title} 전체 보기
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </GjSubPageShell>
  );
}
