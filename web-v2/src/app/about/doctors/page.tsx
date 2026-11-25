import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Lock } from "lucide-react";
import { CLINIC_PHYSICIANS } from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { AboutSubNav } from "@/components/clinic/AboutSubNav";
import { ClinicScheduleGrid } from "@/components/clinic/ClinicScheduleGrid";

export const metadata: Metadata = {
  title: "2인 전문의 협진 소개",
  description:
    "연세의대 출신 박천진 대표원장 · 이웅희 원장 2인 비뇨의학과 전문의 약력 및 요일별 진료시간표 안내.",
};

const PARK_MEDIA_CAREERS = [
  "주간동아 '알콩달콩 섹스파일' 30회 연재 · 스포츠투데이 16회 연재",
  "월간 신동아(3-piece 음경보형물), 한경비즈니스 '박천진의 남성 upgrade' 칼럼 연재",
  "MBC 라디오 '황선숙의 건강한 아침' 비뇨기과 주치의 · SBS 라디오 고정패널",
  "매경TV · 한경TV 전립선비대증·발기부전 의학 자문 · 공식 유튜브 @uroj(5.2만+) 운영",
];

export default function AboutDoctorsPage() {
  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="MEDICAL TEAM · 2 UROLOGY SPECIALISTS"
        title="2인 전문의 협진"
        description="박천진 대표원장과 연세의대 교수를 역임한 이웅희 원장이 정확한 진단부터 고난도 수술·회복까지 직접 협진합니다."
        breadcrumbs={[
          { label: "강남J 스토리", href: "/about/greeting" },
          { label: "2인 전문의 협진" },
        ]}
        imageSrc="/assets/sample/hero-02.jpg.png"
      />
      <AboutSubNav currentPath="/about/doctors" />

      <section className="bg-white py-20 lg:py-28">
        <div className="gj-container space-y-12">
          {CLINIC_PHYSICIANS.map((doc) => (
            <article
              key={doc.id}
              data-gj-reveal
              className="overflow-hidden rounded-3xl bg-[#f6f6f6]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative aspect-[5/6] bg-[#181818] lg:col-span-4 lg:aspect-auto lg:min-h-[460px]">
                  <img
                    src={doc.portraitSrc}
                    alt={`${doc.name} ${doc.roleTitle}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-8">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                      {doc.englishRole}
                    </p>
                    <div className="mt-2 flex flex-wrap items-baseline gap-3">
                      <h2 className="text-3xl font-bold text-black sm:text-4xl">
                        {doc.name}
                      </h2>
                      <span className="text-lg font-bold text-gj-muted">
                        {doc.roleTitle}
                      </span>
                      <span className="rounded-full bg-black px-3.5 py-1 text-xs font-bold text-white">
                        {doc.offDaySummary}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-medium text-gj-muted">
                      {doc.credentials}
                    </p>

                    <div className="mt-5 rounded-2xl bg-white p-5">
                      <p className="text-xs font-bold text-gj-brass-deep">
                        전문 진료 영역
                      </p>
                      <p className="mt-1 text-base font-bold text-black">
                        {doc.specialtyFocus}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-bold text-black">주요 학력 및 경력</h3>
                      <ul className="mt-3 space-y-2.5">
                        {doc.careerHighlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-black/80 sm:text-[15px]"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gj-brass-deep" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {doc.id === "park-cheon-jin" && (
                      <div className="mt-6 border-t border-black/10 pt-5">
                        <h3 className="text-sm font-bold text-black">
                          주요 언론 기고 · 방송 활동
                        </h3>
                        <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-gj-muted">
                          {PARK_MEDIA_CAREERS.map((line) => (
                            <li key={line}>• {line}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/reservation"
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-6 text-sm font-bold text-white transition hover:bg-gj-brass"
                    >
                      <CalendarCheck className="h-4 w-4" />
                      {doc.name} {doc.roleTitle} 진료 예약
                    </Link>
                    <Link
                      href="/consultation"
                      className="inline-flex h-12 items-center gap-2 rounded-full border border-black/20 bg-white px-6 text-sm font-bold text-black transition hover:border-black"
                    >
                      <Lock className="h-4 w-4 text-gj-brass-deep" />
                      1:1 비밀상담
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 2인 요일별 진료시간표 */}
        <div data-gj-reveal className="gj-container mt-20 border-t border-gj-line pt-16">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            2인 전문의 요일별 진료시간표
          </h2>
          <ClinicScheduleGrid />
        </div>
      </section>
    </GjSubPageShell>
  );
}
