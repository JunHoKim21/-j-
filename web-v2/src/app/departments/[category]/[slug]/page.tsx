import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, Lock, Phone } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import {
  findUrologyCenter,
  findUrologyTreatment,
  UROLOGY_TREATMENT_SPECS,
} from "@/data/urology-treatments";
import { UROLOGY_VIDEO_GALLERY } from "@/data/urology-media";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { UrologyDisclaimerBox } from "@/components/clinic/UrologyDisclaimerBox";
import { ClinicRelatedVideoStrip } from "@/components/clinic/ClinicRelatedVideoStrip";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return UROLOGY_TREATMENT_SPECS.map((item) => ({
    category: item.centerSlug,
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const treatment = findUrologyTreatment(category, slug);
  if (!treatment) return { title: "진료 안내" };
  return {
    title: treatment.title,
    description: treatment.leadSummary,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const center = findUrologyCenter(category);
  const treatment = findUrologyTreatment(category, slug);
  if (!center || !treatment) notFound();

  const relatedVideos = UROLOGY_VIDEO_GALLERY.filter((video) =>
    treatment.relatedVideoIds.includes(video.id)
  );

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker={`${center.title} · ${center.englishLabel}`}
        title={treatment.title}
        description={treatment.leadSummary}
        breadcrumbs={[
          { label: "진료센터", href: "/departments" },
          { label: center.title, href: `/departments/${center.slug}` },
          { label: treatment.title },
        ]}
        imageSrc={center.visualSrc}
      />

      {/* 동일 센터 하위 세부 진료 탭 */}
      <div className="border-b border-gj-line bg-[#f6f6f6]">
        <div className="gj-container gj-no-scrollbar flex gap-2 overflow-x-auto py-3">
          {center.treatments.map((tr) => {
            const active = tr.slug === treatment.slug;
            return (
              <Link
                key={tr.slug}
                href={`/departments/${center.slug}/${tr.slug}`}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-bold transition",
                  active
                    ? "bg-black text-white"
                    : "bg-white text-gj-muted hover:text-black"
                )}
              >
                {tr.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* 본문 8fr + Sticky 사이드 4fr */}
      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* 좌측 의학 본문 */}
          <article className="space-y-12 lg:col-span-8">
            {/* 1. 질환 개요 */}
            <div data-gj-reveal>
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                01 · OVERVIEW
              </p>
              <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                질환 및 시술 개요
              </h2>
              <div className="mt-5 space-y-4 text-[15.5px] leading-[1.85] text-gj-muted">
                {treatment.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 의학 도식 */}
            {treatment.diagrams.length > 0 && (
              <div data-gj-reveal className="space-y-4">
                {treatment.diagrams.map((diagram) => (
                  <figure
                    key={diagram.src}
                    className="overflow-hidden rounded-2xl border border-gj-line bg-[#f6f6f6]"
                  >
                    <div className="flex items-center justify-center bg-white p-6">
                      <img
                        src={diagram.src}
                        alt={diagram.caption}
                        className="max-h-[420px] w-auto max-w-full object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-gj-line px-5 py-3 text-xs font-semibold text-gj-muted">
                      {diagram.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {/* 2. 주요 증상 / 고려 대상 */}
            <div data-gj-reveal className="rounded-2xl bg-[#f6f6f6] p-7 sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                02 · INDICATIONS &amp; SIGNALS
              </p>
              <h2 className="mt-2 text-xl font-bold text-black sm:text-2xl">
                {treatment.signalsHeading}
              </h2>
              <ul className="mt-5 space-y-3">
                {treatment.signals.map((sig) => (
                  <li
                    key={sig}
                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-black/85"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gj-brass-deep" />
                    <span>{sig}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. 진단 및 치료 원칙 */}
            <div data-gj-reveal>
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                03 · DIAGNOSIS &amp; TREATMENT
              </p>
              <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                {treatment.protocolHeading}
              </h2>
              <ol className="mt-5 space-y-3.5">
                {treatment.protocols.map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-gj-line p-5"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-gj-brass">
                      0{idx + 1}
                    </span>
                    <p className="text-[15px] leading-relaxed text-black/85">{step}</p>
                  </li>
                ))}
              </ol>

              {treatment.clinicalNotes.length > 0 && (
                <div className="mt-6 rounded-2xl bg-[#101010] p-6 text-white">
                  <p className="text-xs font-bold tracking-[0.18em] text-gj-brass">
                    SPECIALIST NOTES
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
                    {treatment.clinicalNotes.map((note) => (
                      <li key={note}>• {note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 4. 관련 @uroj 유튜브 설명 영상 */}
            {relatedVideos.length > 0 && (
              <div data-gj-reveal>
                <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                  04 · VIDEO GUIDE (@uroj)
                </p>
                <h2 className="mt-2 mb-5 text-2xl font-bold text-black">
                  관련 전문의 설명 영상
                </h2>
                <ClinicRelatedVideoStrip videos={relatedVideos} />
              </div>
            )}

            {/* 5. 필수 컴플라이언스: 부작용·주의사항 공통 고지 박스 */}
            <UrologyDisclaimerBox />
          </article>

          {/* 우측 Sticky 빠른 진료 연결 */}
          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-2xl bg-[#101010] p-7 text-white">
                <p className="text-xs font-bold tracking-[0.18em] text-gj-brass">
                  FAST CONSULTATION
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  {treatment.title} 상담 · 예약
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  박천진 대표원장 · 이웅희 원장 2인 전문의 협진으로 개인별 상태에 맞는
                  진료 계획을 안내해 드립니다.
                </p>

                <div className="mt-6 space-y-2.5">
                  <Link
                    href="/reservation"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gj-brass text-sm font-bold text-white transition hover:bg-gj-brass-deep"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    비회원 온라인 예약
                  </Link>
                  <Link
                    href="/consultation"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/25 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    <Lock className="h-4 w-4 text-gj-brass" />
                    1:1 비밀상담
                  </Link>
                </div>

                <div className="mt-6 border-t border-white/15 pt-5">
                  <p className="text-xs text-white/55">대표 상담 전화</p>
                  <a
                    href={CLINIC_PROFILE.mainPhoneHref}
                    className="mt-1 inline-flex items-center gap-2 text-2xl font-bold tabular-nums text-white hover:text-gj-brass"
                  >
                    <Phone className="h-5 w-5 text-gj-brass" />
                    {CLINIC_PROFILE.mainPhone}
                  </a>
                  <p className="mt-1 text-xs text-white/60">
                    {CLINIC_PROFILE.operatingHours.weekdayConsult} ·{" "}
                    {CLINIC_PROFILE.operatingHours.saturdayConsult}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#f6f6f6] p-6">
                <p className="text-xs font-bold text-gj-brass-deep">
                  의료법 제45조 고지
                </p>
                <p className="mt-1.5 text-sm font-bold text-black">
                  비급여 진료비용 안내
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gj-muted">
                  수술·검사·주사 및 제증명 비급여 항목을 투명하게 확인하실 수 있습니다.
                </p>
                <Link
                  href="/nonbenefit"
                  className="mt-4 inline-block text-xs font-bold text-black underline hover:text-gj-brass-deep"
                >
                  비급여 비용표 바로가기 →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </GjSubPageShell>
  );
}
