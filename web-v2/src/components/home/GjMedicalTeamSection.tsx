"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CLINIC_PHYSICIANS } from "@/data/clinic-profile";
import { ClinicScheduleGrid } from "@/components/clinic/ClinicScheduleGrid";
import { cn } from "@/lib/cn";

export function GjMedicalTeamSection() {
  const [focusedIdx, setFocusedIdx] = useState(0);

  const toggleFocus = () => {
    setFocusedIdx((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section
      id="clinic-doctors"
      aria-label="2인 전문의 협진 팀"
      className="scroll-mt-24 bg-white py-24 text-black lg:py-[180px]"
    >
      <div className="gj-container">
        {/* 상단 타이틀 (순백 화이트 브레이크) */}
        <div
          data-gj-reveal
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
              MEDICAL SPECIALISTS · 2 DOCTORS
            </p>
            <h2 className="mt-3 text-[32px] font-bold leading-[1.28] tracking-[-0.03em] text-black sm:text-[44px] lg:text-[52px]">
              강남J 2인 전문의 협진
            </h2>
          </div>
          <p className="max-w-[480px] text-[15px] font-medium leading-[1.7] text-gj-muted lg:text-[18px]">
            연세의대 출신 박천진 대표원장과 이웅희 원장이
            초진 진단부터 고난도 수술·회복까지 직접 협진합니다.
          </p>
        </div>

        {/* 레퍼런스 5:6 포트레이트 스포트라이트 2인 카드 (활성 카드 scale-100 vs 보조 scale-[0.95]) */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {CLINIC_PHYSICIANS.map((doctor, idx) => {
            const active = focusedIdx === idx;
            return (
              <article
                key={doctor.id}
                onMouseEnter={() => setFocusedIdx(idx)}
                onClick={() => setFocusedIdx(idx)}
                data-gj-reveal
                data-gj-delay={String(idx * 0.08)}
                className={cn(
                  "group cursor-pointer overflow-hidden rounded-[22px] bg-[#f6f6f6] transition-all duration-500",
                  active
                    ? "scale-100 shadow-[0_24px_60px_rgba(0,0,0,0.12)] ring-2 ring-gj-brass/50"
                    : "lg:scale-[0.96] lg:opacity-85 hover:opacity-100"
                )}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12">
                  {/* 5:6 대형 인물 사진 */}
                  <div className="relative aspect-[5/6] overflow-hidden bg-[#181818] sm:col-span-5 sm:aspect-auto sm:min-h-[410px]">
                    <img
                      src={doctor.portraitSrc}
                      alt={`${doctor.name} ${doctor.roleTitle}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* 약력 영역 */}
                  <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-8">
                    <div>
                      <p className="text-[12px] font-bold tracking-[0.16em] text-gj-brass-deep">
                        {doctor.englishRole}
                      </p>
                      <div className="mt-1.5 flex items-baseline gap-2">
                        <h3 className="text-[28px] font-bold tracking-[-0.025em] text-black sm:text-[34px]">
                          {doctor.name}
                        </h3>
                        <span className="text-base font-bold text-gj-muted">
                          {doctor.roleTitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gj-muted">
                        {doctor.credentials}
                      </p>

                      <div className="mt-4 rounded-xl bg-white px-4 py-3">
                        <p className="text-[11px] font-bold text-gj-brass-deep">
                          전문 진료 분야
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-black">
                          {doctor.specialtyFocus}
                        </p>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {doctor.careerHighlights.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-[13.5px] leading-relaxed text-black/80"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gj-brass-deep" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-xs">
                      <span className="font-semibold text-gj-muted">휴진 안내</span>
                      <span className="rounded-full bg-black px-3 py-1 font-bold text-white">
                        {doctor.offDaySummary}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 레퍼런스 시그니처 중앙 블랙 180x60px 듀얼 화살표 컨트롤 바 */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex h-[56px] w-[176px] items-center divide-x divide-white/20 overflow-hidden rounded-full bg-black text-white shadow-lg">
            <button
              type="button"
              onClick={toggleFocus}
              aria-label="이전 의료진 포커스"
              className="flex h-full flex-1 items-center justify-center transition hover:bg-gj-brass hover:text-black"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={toggleFocus}
              aria-label="다음 의료진 포커스"
              className="flex h-full flex-1 items-center justify-center transition hover:bg-gj-brass hover:text-black"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 2인 요일별 진료시간표 (모바일 390px 7컬럼 무결성) */}
        <div data-gj-reveal className="mt-20 border-t border-black/10 pt-16">
          <div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                WEEKLY SCHEDULE · 2 DOCTORS
              </p>
              <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-black sm:text-[32px]">
                2인 전문의 요일별 진료시간표
              </h3>
            </div>
            <p className="text-sm font-medium text-gj-muted">
              평일 상담 09:00 ~ 18:00 · 토요일 09:00 ~ 13:00
            </p>
          </div>
          <ClinicScheduleGrid />
        </div>
      </div>
    </section>
  );
}
