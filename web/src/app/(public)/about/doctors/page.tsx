import type { Metadata } from "next";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { DOCTORS } from "@/lib/data/clinic";
import { SubHero } from "@/components/layout/SubHero";
import { DoctorScheduleTable } from "@/components/medical/DoctorScheduleTable";

export const metadata: Metadata = {
  title: "2인 전문의 협진",
  description: "강남J비뇨기과의원 박천진 대표원장, 이웅희 원장의 학력·경력 및 요일별 진료시간표를 안내합니다.",
};

const PARK_FULL_CAREERS = [
  "비뇨기과 전문의",
  "연세대학교 의학과",
  "대한비뇨기과학회 학술위원",
  "대한 비뇨기과학회 정회원(KUA)(#1032)",
  "미국 비뇨기과학회 정회원(AUA)(#98112)",
  "연세대학교 비뇨기과학 외래교수",
  "한림대학교 비뇨기과학 외래교수",
  "대한 남성과학회 정회원 · 대한 요로감염학회 정회원",
  "대한 전립선학회 정회원 · 대한 성학회 정회원",
  "전 수도통합병원 비뇨기과 과장 역임",
  "Proctorship in penile implant Boston Scientific Korea",
  "Expert in HoLEP, Lumenis USA",
];

const PARK_MEDIA_CAREERS = [
  "주간동아 「알콩달콩 섹스파일」 30회 연재 · 한경비즈니스 「남성 upgrade」 연재",
  "월간 신동아 「발기부전증의 치료(3-piece 음경보형물)」 · 스포츠투데이 16회 연재",
  "MBC 라디오 「황선숙의 건강한 아침」 비뇨기과 주치의 상담",
  "MBC TV 9시 뉴스데스크 · 매경TV · 한경TV 전립선비대증·발기부전 의학 자문",
];

const LEE_FULL_CAREERS = [
  "비뇨의학과 전문의",
  "연세의대 의학박사 (M.D., Ph.D.)",
  "연세의대 비뇨의학교실 교수 역임",
  "2000 아시아 성학회 사무총장 역임",
  "현 연세대학교 의과대학 외래교수",
  "대한 비뇨의학과 의사회 학술이사",
];

export default function DoctorsPage() {
  const [park, lee] = DOCTORS;

  return (
    <>
      <SubHero
        kicker="ABOUT · MEDICAL STAFF"
        title="2인 전문의 협진 소개"
        description="풍부한 수술·임상 경험을 갖춘 두 비뇨의학과 전문의가 정밀 진단부터 수술·회복까지 직접 협진합니다."
        breadcrumbs={[{ label: "병원소개", href: "/about/greeting" }, { label: "2인 전문의 협진" }]}
      />

      {/* 박천진 대표원장 (Surface 0) */}
      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page space-y-14 lg:space-y-20">
          <article className="grid grid-cols-1 gap-8 rounded-2xl bg-surface-1 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-2">
                {park.imagePath ? (
                  <img
                    src={park.imagePath}
                    alt={`${park.name} ${park.title}`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                    <UserRound className="h-20 w-20 text-brand-navy/30" strokeWidth={1.4} />
                    <span className="mt-4 text-[16px] font-bold text-brand-navy">
                      {park.name} {park.title}
                    </span>
                    <span className="mt-1.5 text-[12px] text-ink-secondary">
                      {park.imagePlaceholderNote}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6 lg:col-span-8">
              <div>
                <span className="text-[12px] font-bold tracking-[0.14em] text-brand-brass">
                  DIRECTOR · REPRESENTATIVE
                </span>
                <h2 className="mt-1.5 text-[28px] font-bold text-brand-navy sm:text-[32px]">
                  {park.name}{" "}
                  <span className="text-[18px] font-semibold text-brand-blue">{park.title}</span>
                </h2>
                <p className="mt-1 text-[15px] font-medium text-ink-secondary">{park.credentials}</p>
                <p className="mt-3 inline-block rounded-lg bg-surface-0 px-4 py-2 text-[13.5px] font-semibold text-brand-navy">
                  전문 분야: {park.specialtySummary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-bold text-brand-navy">주요 약력 및 학회 활동</h3>
                  <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-ink-secondary">
                    {PARK_FULL_CAREERS.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-brass" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[14px] font-bold text-brand-navy">주요 언론 · 방송 · 칼럼</h3>
                  <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-ink-secondary">
                    {PARK_MEDIA_CAREERS.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* 이웅희 원장 */}
          <article className="grid grid-cols-1 gap-8 rounded-2xl bg-surface-1 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-2">
                {lee.imagePath ? (
                  <img
                    src={lee.imagePath}
                    alt={`${lee.name} ${lee.title}`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                    <UserRound className="h-20 w-20 text-brand-navy/30" strokeWidth={1.4} />
                    <span className="mt-4 text-[16px] font-bold text-brand-navy">
                      {lee.name} {lee.title}
                    </span>
                    <span className="mt-1.5 text-[12px] text-ink-secondary">
                      {lee.imagePlaceholderNote}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6 lg:col-span-8">
              <div>
                <span className="text-[12px] font-bold tracking-[0.14em] text-brand-brass">
                  SPECIALIST · M.D., PH.D.
                </span>
                <h2 className="mt-1.5 text-[28px] font-bold text-brand-navy sm:text-[32px]">
                  {lee.name}{" "}
                  <span className="text-[18px] font-semibold text-brand-blue">{lee.title}</span>
                </h2>
                <p className="mt-1 text-[15px] font-medium text-ink-secondary">{lee.credentials}</p>
                <p className="mt-3 inline-block rounded-lg bg-surface-0 px-4 py-2 text-[13.5px] font-semibold text-brand-navy">
                  전문 분야: {lee.specialtySummary}
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-brand-navy">주요 약력 및 학회 활동</h3>
                <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink-secondary">
                  {LEE_FULL_CAREERS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-brass" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 2인 진료시간표 (Surface 1) */}
      <section className="bg-surface-1 py-14 lg:py-24">
        <div className="container-page">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-brass">
                WEEKLY SCHEDULE
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-brand-navy lg:text-[30px]">
                전문의별 진료시간표
              </h2>
            </div>
            <Link
              href="/reservation"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-navy px-5 text-[14px] font-bold text-white hover:bg-brand-blue"
            >
              희망 전문의 온라인 예약
            </Link>
          </div>
          <DoctorScheduleTable />
        </div>
      </section>
    </>
  );
}
