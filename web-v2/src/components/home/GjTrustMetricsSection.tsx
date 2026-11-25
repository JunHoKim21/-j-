"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CLINIC_PROFILE, CLINIC_TRUST_METRICS } from "@/data/clinic-profile";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GjTrustMetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!bgRef.current || !sectionRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        bgRef.current,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="숫자로 보는 강남J비뇨기과"
      className="relative overflow-hidden bg-[#101010] py-24 text-white lg:py-[160px]"
    >
      {/* 풀블리드 배경 스케일 */}
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src="/assets/sample/trust-bg.jpg"
          alt="강남J비뇨기과의원 임상 신뢰"
          loading="lazy"
          className="h-full w-full object-cover opacity-38"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-[#101010]/60 to-[#101010]" />
      </div>

      <div className="gj-container relative z-10">
        <div data-gj-reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-gj-brass">
            CLINICAL HERITAGE · {CLINIC_PROFILE.clinicName}
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.28] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            27년의 시간,
            <br />
            사실로 증명하는 신뢰
          </h2>
        </div>

        {/* 레퍼런스 우측 정렬 대형 수치 행 (90px 숫자 + 30px 타이틀 + 1px 하단선) */}
        <div className="mt-14 ml-auto max-w-[875px] divide-y divide-white/40 border-b border-white/40 lg:mt-20">
          {CLINIC_TRUST_METRICS.map((metric, idx) => (
            <div
              key={metric.code}
              data-gj-reveal
              data-gj-delay={String(idx * 0.06)}
              className="flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-end lg:pt-[52px] lg:pb-[26px]"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="text-[46px] font-semibold leading-none tracking-[-0.04em] tabular-nums text-white sm:text-[68px] lg:text-[88px]">
                  {metric.figure}
                </span>
                <span className="text-base font-bold text-gj-brass sm:text-xl">
                  {metric.unit}
                </span>
              </div>

              <div className="sm:max-w-[440px] sm:text-right">
                <h3 className="text-[18px] font-bold text-white sm:text-[24px] lg:text-[28px]">
                  {metric.label}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70 sm:text-[15px]">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
