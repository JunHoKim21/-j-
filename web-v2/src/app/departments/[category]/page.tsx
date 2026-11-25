import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CalendarCheck, Lock } from "lucide-react";
import { UROLOGY_CENTERS } from "@/data/urology-centers";
import {
  findUrologyCenter,
  UROLOGY_TREATMENT_SPECS,
} from "@/data/urology-treatments";
import { UROLOGY_VIDEO_GALLERY } from "@/data/urology-media";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { ClinicRelatedVideoStrip } from "@/components/clinic/ClinicRelatedVideoStrip";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return UROLOGY_CENTERS.map((center) => ({ category: center.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const center = findUrologyCenter(category);
  if (!center) return { title: "진료센터" };
  return {
    title: center.title,
    description: center.description,
  };
}

export default async function DepartmentCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const center = findUrologyCenter(category);
  if (!center) notFound();

  const items = UROLOGY_TREATMENT_SPECS.filter(
    (spec) => spec.centerSlug === center.slug
  );
  const videoIdSet = new Set(items.flatMap((i) => i.relatedVideoIds));
  const relatedVideos = UROLOGY_VIDEO_GALLERY.filter((v) =>
    videoIdSet.has(v.id)
  );

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker={`CENTER ${center.order} · ${center.englishLabel}`}
        title={center.title}
        description={center.description}
        breadcrumbs={[
          { label: "진료센터", href: "/departments" },
          { label: center.title },
        ]}
        imageSrc={center.visualSrc}
      />

      {/* 5대 센터 전환 탭 */}
      <div className="border-b border-gj-line bg-[#f6f6f6]">
        <div className="gj-container gj-no-scrollbar flex gap-2 overflow-x-auto py-3">
          {UROLOGY_CENTERS.map((c) => {
            const active = c.slug === center.slug;
            return (
              <Link
                key={c.slug}
                href={`/departments/${c.slug}`}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2 text-sm font-bold transition",
                  active
                    ? "bg-black text-white"
                    : "bg-white text-gj-muted hover:text-black"
                )}
              >
                {c.order} {c.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* 세부 진료 항목 카드 리스트 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="gj-container">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                DETAILED TREATMENTS · {items.length} ITEMS
              </p>
              <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                {center.title} 세부 진료 안내
              </h2>
            </div>
            <div className="flex gap-2.5">
              <Link
                href="/reservation"
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-black px-5 text-sm font-bold text-white hover:bg-gj-brass"
              >
                <CalendarCheck className="h-4 w-4" />
                온라인 예약
              </Link>
              <Link
                href="/consultation"
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-[#f6f6f6] px-5 text-sm font-bold text-black hover:bg-[#e9e9e9]"
              >
                <Lock className="h-4 w-4 text-gj-brass-deep" />
                1:1 비밀상담
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/departments/${center.slug}/${item.slug}`}
                data-gj-reveal
                className="group flex flex-col justify-between rounded-2xl border border-gj-line bg-[#f6f6f6] p-7 transition hover:-translate-y-1 hover:border-gj-brass hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gj-brass-deep">
                      0{idx + 1}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-gj-brass group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gj-muted">
                    {item.leadSummary}
                  </p>
                </div>

                <span className="mt-6 inline-block text-xs font-bold text-gj-brass-deep">
                  상세 의학 안내 보기 →
                </span>
              </Link>
            ))}
          </div>

          {relatedVideos.length > 0 && (
            <div className="mt-20 border-t border-gj-line pt-14">
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                OFFICIAL YOUTUBE · @uroj
              </p>
              <h3 className="mt-2 mb-7 text-2xl font-bold text-black">
                {center.title} 관련 전문의 설명 영상
              </h3>
              <ClinicRelatedVideoStrip videos={relatedVideos} />
            </div>
          )}
        </div>
      </section>
    </GjSubPageShell>
  );
}
