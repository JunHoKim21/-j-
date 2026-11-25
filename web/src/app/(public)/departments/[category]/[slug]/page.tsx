import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Lock,
  Phone,
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import {
  getDepartmentCenter,
  getProcedureDetail,
  PROCEDURE_DETAILS,
} from "@/lib/data/department-details";
import { SubHero } from "@/components/layout/SubHero";
import { MedicalDisclaimerBox } from "@/components/medical/MedicalDisclaimerBox";
import { RelatedYouTubeStrip } from "@/components/medical/RelatedYouTubeStrip";
import { cn } from "@/lib/utils";

interface DetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PROCEDURE_DETAILS.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const detail = getProcedureDetail(category, slug);
  const center = getDepartmentCenter(category);
  if (!detail || !center) return { title: "진료 안내" };
  return {
    title: `${detail.title} | ${center.categoryName}`,
    description: detail.leadSummary,
  };
}

export default async function DepartmentDetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const center = getDepartmentCenter(category);
  const detail = getProcedureDetail(category, slug);
  if (!center || !detail) notFound();

  const siblingIndex = center.items.findIndex((i) => i.slug === slug);
  const prevItem = siblingIndex > 0 ? center.items[siblingIndex - 1] : null;
  const nextItem =
    siblingIndex >= 0 && siblingIndex < center.items.length - 1
      ? center.items[siblingIndex + 1]
      : null;

  return (
    <>
      <SubHero
        kicker={`${center.order} · ${center.categoryName}`}
        title={detail.title}
        description={detail.leadSummary}
        breadcrumbs={[
          { label: "진료센터", href: "/departments" },
          { label: center.categoryName, href: `/departments/${category}` },
          { label: detail.title },
        ]}
      />

      {/* 동일 센터 하위 세부 시술 탭 (모바일 가로 스와이프, overflow-x: 0%) */}
      <nav aria-label={`${center.categoryName} 세부 메뉴`} className="border-b border-line-subtle bg-surface-1">
        <div className="container-page">
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-3.5">
            {center.items.map((sub) => (
              <Link
                key={sub.slug}
                href={`/departments/${category}/${sub.slug}`}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
                  sub.slug === slug
                    ? "bg-brand-navy text-white"
                    : "bg-surface-0 text-ink-secondary hover:bg-surface-2 hover:text-brand-navy"
                )}
              >
                {sub.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 본문 2단 레이아웃 (PC: 8fr + 4fr Sticky / 모바일: 1단 스택) */}
      <section className="bg-surface-0 py-12 lg:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* 좌측 의학 본문 영역 */}
            <article className="min-w-0 space-y-12 lg:col-span-8">
              {/* 1. 질환/시술 개요 */}
              <div className="space-y-4">
                <h2 className="text-[22px] font-bold tracking-[-0.02em] text-brand-navy sm:text-[25px]">
                  {detail.title} 개요
                </h2>
                <div className="space-y-4 text-[15.5px] leading-[1.82] text-ink-secondary sm:text-[16px]">
                  {detail.overview.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              {/* 검증 의학 도식 이미지 (모바일 390px 가로 스크롤 0%) */}
              {detail.illustrations.length > 0 && (
                <div className="space-y-6">
                  {detail.illustrations.map((fig) => (
                    <figure
                      key={fig.src}
                      className="overflow-hidden rounded-xl bg-surface-1 p-4 sm:p-6"
                    >
                      <div className="overflow-hidden rounded-lg bg-surface-0">
                        <img
                          src={fig.src}
                          alt={fig.caption}
                          loading="lazy"
                          className="mx-auto h-auto max-w-full object-contain"
                        />
                      </div>
                      <figcaption className="mt-3 text-center text-[13px] font-medium text-ink-secondary">
                        {fig.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {/* 2. 주요 증상 / 적응증 */}
              <div className="rounded-xl bg-surface-1 p-6 sm:p-8">
                <h2 className="text-[19px] font-bold text-brand-navy sm:text-[21px]">
                  {detail.symptomsTitle}
                </h2>
                <ul className="mt-4 space-y-3 text-[15px] leading-[1.7] text-ink-primary">
                  {detail.symptoms.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. 진단 및 치료 방법 */}
              <div className="space-y-4">
                <h2 className="text-[20px] font-bold text-brand-navy sm:text-[23px]">
                  {detail.treatmentTitle}
                </h2>
                <ol className="space-y-3">
                  {detail.treatments.map((step, idx) => (
                    <li
                      key={step}
                      className="flex items-start gap-3.5 rounded-xl bg-surface-1 p-5 text-[15px] leading-[1.7] text-ink-secondary"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[12px] font-bold tabular-nums text-white">
                        0{idx + 1}
                      </span>
                      <span className="pt-0.5 text-ink-primary">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 핵심 확인 포인트 */}
              {detail.keyPoints.length > 0 && (
                <div className="space-y-2.5 rounded-xl bg-surface-2/70 p-6">
                  <h3 className="text-[15px] font-bold text-brand-navy">전문의 핵심 안내</h3>
                  <ul className="space-y-1.5 text-[14.5px] leading-[1.7] text-ink-secondary">
                    {detail.keyPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-brass" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4. 관련 @uroj 유튜브 영상 (Facade + 모달) */}
              <RelatedYouTubeStrip videoIds={detail.relatedVideoIds} />

              {/* 5. 의료법 부작용·주의사항 공통 고지 박스 (의무 배치) */}
              <MedicalDisclaimerBox />

              {/* 이전 / 다음 세부 시술 이동 */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line-subtle pt-8">
                {prevItem ? (
                  <Link
                    href={`/departments/${category}/${prevItem.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-surface-1 px-4 py-2.5 text-[13.5px] font-semibold text-brand-navy hover:bg-surface-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>{prevItem.title}</span>
                  </Link>
                ) : (
                  <Link
                    href={`/departments/${category}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-surface-1 px-4 py-2.5 text-[13.5px] font-semibold text-brand-navy hover:bg-surface-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>{center.categoryName} 목록</span>
                  </Link>
                )}

                {nextItem && (
                  <Link
                    href={`/departments/${category}/${nextItem.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-surface-1 px-4 py-2.5 text-[13.5px] font-semibold text-brand-navy hover:bg-surface-2"
                  >
                    <span>{nextItem.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>

            {/* 우측 Sticky 사이드바 (PC) / 하단 카드 (모바일) */}
            <aside className="space-y-5 lg:sticky lg:top-[104px] lg:col-span-4">
              <div className="rounded-2xl bg-brand-navy p-6 text-white sm:p-7">
                <p className="text-[11.5px] font-bold tracking-[0.14em] text-brand-brass">
                  PRIVATE CONSULTATION
                </p>
                <h3 className="mt-2 text-[20px] font-bold leading-snug">
                  {detail.title}
                  <br />
                  전문의 진료 예약 · 상담
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/75">
                  온라인 예약 접수 후 병원 담당자가 확인 전화를 드리며, 1:1 비밀상담은 본인과 의료진만 열람할 수 있습니다.
                </p>

                <div className="mt-6 space-y-2.5">
                  <Link
                    href="/reservation"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white text-[14.5px] font-bold text-brand-navy hover:bg-surface-1"
                  >
                    <CalendarCheck className="h-4 w-4 text-brand-blue" />
                    <span>온라인 예약 신청</span>
                  </Link>
                  <Link
                    href="/consultation"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white/12 text-[14.5px] font-semibold text-white hover:bg-white/20"
                  >
                    <Lock className="h-4 w-4 text-brand-brass" />
                    <span>1:1 비밀상담 작성</span>
                  </Link>
                </div>

                <div className="mt-6 border-t border-white/15 pt-5">
                  <div className="text-[12px] text-white/60">대표전화 상담</div>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="mt-1 inline-flex items-center gap-2 text-[22px] font-bold tabular-nums text-white hover:text-brand-brass"
                  >
                    <Phone className="h-4 w-4 text-brand-brass" />
                    <span>{CLINIC_INFO.phone}</span>
                  </a>
                  <p className="mt-1 text-[12px] text-white/60">
                    {CLINIC_INFO.consultHours.weekday} · {CLINIC_INFO.consultHours.saturday}
                  </p>
                </div>
              </div>

              <Link
                href="/nonbenefit"
                className="flex items-center justify-between rounded-xl bg-surface-1 p-5 transition-colors hover:bg-surface-2"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-[14.5px] font-bold text-brand-navy">
                      비급여 진료비용 안내
                    </div>
                    <div className="text-[12.5px] text-ink-secondary">
                      의료법 제45조 비급여 항목 확인
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-secondary" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
