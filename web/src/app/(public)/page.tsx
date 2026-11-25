import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { HeroSlider } from "@/components/medical/HeroSlider";
import { GsapKineticBanner } from "@/components/medical/GsapKineticBanner";
import { CenterHorizontalSlider } from "@/components/medical/CenterHorizontalSlider";
import { GsapPinnedStory } from "@/components/medical/GsapPinnedStory";
import { GsapDoctorSpotlight } from "@/components/medical/GsapDoctorSpotlight";
import { SymptomGuideSection } from "@/components/medical/SymptomGuideSection";
import { YouTubeSection } from "@/components/medical/YouTubeSection";
import { GoldQuickBanner } from "@/components/medical/GoldQuickBanner";
import { DoctorScheduleTable } from "@/components/medical/DoctorScheduleTable";

export default function HomePage() {
  return (
    <>
      {/* [SEC 1] 시네마틱 풀블리드 다중 슬라이드 히어로 */}
      <HeroSlider />

      {/* [SEC 2] GSAP 키네틱 영문 타이포 트랜지션 */}
      <GsapKineticBanner />

      {/* [SEC 3] 와이드 풀블리드 5대 핵심 진료센터 (5열 3:4 포스터 + GSAP Stagger/패럴랙스) */}
      <CenterHorizontalSlider />

      {/* [SEC 4] GSAP Pinned 2단 스플릿 스토리텔링 (3S 원칙 & 신뢰 지표 포커스) */}
      <GsapPinnedStory />

      {/* [SEC 5] 화이트 브레이크 — 화보형 2인 전문의 스포트라이트 */}
      <GsapDoctorSpotlight />

      {/* [SEC 6] 다크 워터마크 증상별 맞춤 진료 탐색 */}
      <SymptomGuideSection />

      {/* [SEC 7] 다크 미디어 밴드 — 공식 유튜브(@uroj) 순백 화이트 카드 4열 */}
      <YouTubeSection />

      {/* [SEC 8] 시그니처 골드-브래스 인라인 빠른 예약 배너 */}
      <GoldQuickBanner />

      {/* [SEC 9] 화이트 브레이크 — 2인 진료시간표 & 학동역 오시는 길 */}
      <section aria-labelledby="schedule-heading" className="bg-surface-0 py-20 lg:py-28">
        <div className="container-page">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] font-bold tracking-[0.2em] text-brand-gold-deep">
                HOURS &amp; LOCATION
              </p>
              <h2
                id="schedule-heading"
                className="mt-3 text-[28px] font-bold leading-[1.26] tracking-[-0.03em] text-ink-primary sm:text-[38px]"
              >
                진료시간표 및 오시는 길
              </h2>
            </div>
            <Link
              href="/about/location"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-ink-primary hover:text-brand-gold-deep"
            >
              <span>오시는 길 · 주차 안내 자세히</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="rounded-2xl bg-surface-1 p-5 sm:p-7 lg:col-span-7">
              <DoctorScheduleTable />
            </div>

            <div className="space-y-6 rounded-2xl bg-surface-1 p-6 sm:p-8 lg:col-span-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-dark px-3 py-1 text-[12px] font-bold text-brand-gold">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{CLINIC_INFO.subwayGuide}</span>
                </div>
                <h3 className="pt-1 text-[22px] font-bold text-ink-primary">
                  {CLINIC_INFO.address}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-secondary">
                  병원 빌딩 내 지하 주차장을 이용하실 수 있으며, 예약 우선제로 운영됩니다.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-surface-0 p-5">
                <div className="text-[12.5px] font-semibold text-ink-secondary">
                  대표 상담 · 예약 전화
                </div>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-[28px] font-extrabold tracking-tight tabular-nums text-ink-primary hover:text-brand-gold-deep"
                >
                  <Phone className="h-5 w-5 text-brand-gold-deep" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <p className="text-[13.5px] text-ink-secondary">
                  {CLINIC_INFO.consultHours.weekday} · {CLINIC_INFO.consultHours.saturday}
                </p>
                <p className="text-[13px] tabular-nums text-ink-secondary">
                  문자·상담 {CLINIC_INFO.mobileConsultPhone}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/reservation"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-surface-dark text-[14px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
                >
                  온라인 예약
                </Link>
                <Link
                  href="/about/location"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-surface-0 text-[14px] font-bold text-ink-primary transition-colors hover:bg-surface-2"
                >
                  지도 · 주차 안내
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
