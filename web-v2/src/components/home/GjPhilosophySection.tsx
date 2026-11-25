"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CLINIC_3S_PILLARS,
  CLINIC_FACILITY_GALLERY,
  CLINIC_PROFILE,
} from "@/data/clinic-profile";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GjPhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      const track = trackRef.current;
      if (!root || !track) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          track,
          { xPercent: 0 },
          {
            xPercent: -24,
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: "top 85%",
              end: "bottom 15%",
              scrub: 0.7,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="clinic-philosophy"
      aria-label="단일 프리미엄 본원 및 3S 철학"
      className="relative scroll-mt-24 overflow-hidden bg-[#101010] py-24 text-white lg:py-[160px]"
    >
      {/* 레퍼런스 시그니처 초대형 키네틱 영문 디스플레이 (13vw) */}
      <div className="mx-auto max-w-[1600px] px-4 text-center">
        <div
          data-gj-reveal
          className="select-none font-[var(--font-display)] text-[14vw] font-semibold leading-[0.95] tracking-[-0.04em] text-white/90 lg:text-[12.5vw]"
        >
          GANGNAM J 3S
        </div>

        <div data-gj-reveal className="mx-auto mt-10 max-w-3xl lg:mt-14">
          <p className="text-[28px] font-bold leading-[1.24] tracking-[-0.03em] sm:text-[42px] lg:text-[56px]">
            단일 본원의 깊이,
            <br />
            <span className="text-gj-brass">Safe · Simple · Speed</span>
          </p>
          <p className="mt-5 text-[15px] font-medium leading-[1.75] text-white/75 sm:text-[18px]">
            강남 학동역 단일 프리미엄 본원에{" "}
            <strong className="text-white">{CLINIC_PROFILE.facilitySummary}</strong>과
            전원 남성 간호팀, 수술 중 음악요법(IOM)을 집중했습니다.
          </p>
        </div>
      </div>

      {/* 3S 원칙 3컬럼 미니멀 디바이더 블록 */}
      <div className="gj-container mt-16 lg:mt-24">
        <div className="grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {CLINIC_3S_PILLARS.map((pillar, idx) => (
            <article
              key={pillar.code}
              data-gj-reveal
              data-gj-delay={String(idx * 0.08)}
              className="py-8 md:px-7 md:py-10 first:md:pl-0 last:md:pr-0"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[32px] font-extrabold tracking-tight text-gj-brass lg:text-[40px]">
                  {pillar.code}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-white/40 tabular-nums">
                  {pillar.index}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white lg:text-[21px]">
                {pillar.koreanTitle}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-white/65 lg:text-[15px]">
                {pillar.summary}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* 1:1 정방형 시설 사진 가로 스크롤 연동 트랙 */}
      <div className="mt-20 overflow-hidden lg:mt-28">
        <div
          ref={trackRef}
          className="gj-no-scrollbar flex gap-5 overflow-x-auto px-5 pb-2 lg:w-[135%] lg:gap-9 lg:overflow-visible lg:px-10"
        >
          {CLINIC_FACILITY_GALLERY.map((item, idx) => (
            <figure
              key={item.src}
              className="w-[74vw] max-w-[340px] shrink-0 lg:w-[22%]"
            >
              <div className="aspect-square overflow-hidden rounded-[18px] bg-[#1b1b1b]">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-4">
                <span className="text-[11px] font-bold tracking-[0.18em] text-gj-brass">
                  0{idx + 1} · {item.en}
                </span>
                <p className="mt-1 text-lg font-bold tracking-tight text-white lg:text-[22px]">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
