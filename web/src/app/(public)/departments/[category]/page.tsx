import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, Lock } from "lucide-react";
import { DEPARTMENT_CENTERS } from "@/lib/data/departments";
import { getDepartmentCenter, PROCEDURE_DETAILS } from "@/lib/data/department-details";
import { SubHero } from "@/components/layout/SubHero";
import { RelatedYouTubeStrip } from "@/components/medical/RelatedYouTubeStrip";
import { cn } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const CENTER_VIDEO_MAP: Record<string, string[]> = {
  prostate: ["yt-1", "yt-4"],
  stone: ["yt-4", "yt-1"],
  "sexual-implant": ["yt-2", "yt-4"],
  reconstruction: ["yt-3", "yt-2"],
  "vasectomy-circumcision": ["yt-4", "yt-3"],
};

export async function generateStaticParams() {
  return DEPARTMENT_CENTERS.map((c) => ({ category: c.categorySlug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const center = getDepartmentCenter(category);
  if (!center) return { title: "진료센터" };
  return {
    title: center.categoryName,
    description: center.summary,
  };
}

export default async function DepartmentCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const center = getDepartmentCenter(category);
  if (!center) notFound();

  const details = PROCEDURE_DETAILS.filter((p) => p.categorySlug === category);

  return (
    <>
      <SubHero
        kicker={`${center.order} · ${center.englishLabel}`}
        title={center.categoryName}
        description={center.summary}
        breadcrumbs={[{ label: "진료센터", href: "/departments" }, { label: center.categoryName }]}
      />

      {/* 5대 센터 빠른 전환 탭 (모바일 가로 스와이프) */}
      <nav aria-label="진료센터 전환" className="border-b border-line-subtle bg-surface-1">
        <div className="container-page">
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-3.5">
            {DEPARTMENT_CENTERS.map((c) => (
              <Link
                key={c.categorySlug}
                href={`/departments/${c.categorySlug}`}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
                  c.categorySlug === category
                    ? "bg-brand-navy text-white"
                    : "bg-surface-0 text-ink-secondary hover:bg-surface-2 hover:text-brand-navy"
                )}
              >
                {c.categoryName}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 세부 시술 카드 목록 */}
      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page space-y-14">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-brass">
              PROCEDURES · {details.length} ITEMS
            </p>
            <h2 className="mt-2 text-[22px] font-bold text-brand-navy lg:text-[28px]">
              {center.categoryName} 세부 진료 항목
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {details.map((item) => (
                <Link
                  key={item.slug}
                  href={`/departments/${category}/${item.slug}`}
                  className="group flex flex-col justify-between rounded-xl bg-surface-1 p-6 transition-colors hover:bg-surface-2"
                >
                  <div>
                    <h3 className="text-[18px] font-bold text-brand-navy group-hover:text-brand-blue">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.68] text-ink-secondary">
                      {item.leadSummary}
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand-blue">
                    <span>진료 안내 자세히 보기</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 관련 공식 유튜브(@uroj) Facade */}
          <RelatedYouTubeStrip
            videoIds={CENTER_VIDEO_MAP[category]}
            heading={`${center.categoryName} 관련 의학 영상 (@uroj)`}
          />

          {/* 하단 예약/비밀상담 전환 밴드 */}
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-navy p-7 text-white sm:flex-row sm:items-center sm:p-9">
            <div>
              <h3 className="text-[19px] font-bold sm:text-[21px]">
                {center.categoryName} 전문의 상담이 필요하신가요?
              </h3>
              <p className="mt-1.5 text-[14.5px] text-white/75">
                비회원 온라인 예약 또는 1:1 비공개 비밀상담으로 편리하게 문의하실 수 있습니다.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Link
                href="/reservation"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-white px-5 text-[14px] font-bold text-brand-navy hover:bg-surface-1"
              >
                <CalendarCheck className="h-4 w-4 text-brand-blue" />
                <span>온라인 예약</span>
              </Link>
              <Link
                href="/consultation"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-white/15 px-5 text-[14px] font-semibold text-white hover:bg-white/25"
              >
                <Lock className="h-4 w-4 text-brand-brass" />
                <span>1:1 비밀상담</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
