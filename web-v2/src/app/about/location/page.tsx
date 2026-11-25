import type { Metadata } from "next";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { AboutSubNav } from "@/components/clinic/AboutSubNav";
import { ClinicScheduleGrid } from "@/components/clinic/ClinicScheduleGrid";
import { GjLocationSection } from "@/components/home/GjLocationSection";

export const metadata: Metadata = {
  title: "진료시간 · 오시는 길",
  description: `${CLINIC_PROFILE.streetAddress} (${CLINIC_PROFILE.transitGuide}), 2인 전문의 요일별 진료시간표 및 주차 안내.`,
};

export default function AboutLocationPage() {
  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="HOURS & LOCATION"
        title="진료시간 · 오시는 길"
        description={`${CLINIC_PROFILE.streetAddress} (${CLINIC_PROFILE.transitGuide}) · 대표전화 ${CLINIC_PROFILE.mainPhone}`}
        breadcrumbs={[
          { label: "강남J 스토리", href: "/about/greeting" },
          { label: "진료시간 · 오시는 길" },
        ]}
        imageSrc="/assets/sample/hero-01.jpg.png"
      />
      <AboutSubNav currentPath="/about/location" />

      <section className="bg-white pt-16 pb-6 lg:pt-24">
        <div className="gj-container">
          <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
            WEEKLY SCHEDULE · 2 DOCTORS
          </p>
          <h2 className="mt-2 mb-7 text-2xl font-bold text-black sm:text-3xl">
            2인 전문의 요일별 진료시간표
          </h2>
          <ClinicScheduleGrid />
        </div>
      </section>

      <GjLocationSection />
    </GjSubPageShell>
  );
}
