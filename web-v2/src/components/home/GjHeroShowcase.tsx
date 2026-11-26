"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CLINIC_HERO_SLIDES } from "@/data/clinic-profile";
import { cn } from "@/lib/cn";

export function GjHeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CLINIC_HERO_SLIDES.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [total]);

  const current = CLINIC_HERO_SLIDES[activeIndex];

  return (
    <section
      aria-label="강남J비뇨기과의원 메인 히어로"
      className="relative flex h-[100svh] min-h-[680px] max-h-[1080px] w-full flex-col justify-end overflow-hidden bg-[#101010]"
    >
      {/* 풀블리드 고해상도 배경 사진 (텍스트 없는 순수 건축·클리닉 사진만 사용) */}
      {CLINIC_HERO_SLIDES.map((slide, idx) => {
        const active = idx === activeIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!active}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              active ? "z-0 opacity-100" : "pointer-events-none z-0 opacity-0"
            )}
          >
            <img
              src={slide.imageSrc}
              alt={slide.imageAlt}
              className={cn(
                "h-full w-full object-cover object-center",
                active && "gj-hero-active-img"
              )}
            />
            {/* 전 슬라이드 통일 다크 스크림으로 하단 텍스트 명도 대비 극대화 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/88 via-[#101010]/42 to-black/15" />
          </div>
        );
      })}

      {/* 레퍼런스 시그니처 히어로 하단 수평 구도: 초대형 100px+ 영문 타이틀(좌) + 3줄 국문 철학(우) */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 text-white lg:px-14 lg:pb-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-14">
          <h1 className="text-[44px] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-[68px] lg:text-[92px] xl:text-[106px]">
            <span className="block">{current.displayTop}</span>
            <span className="block">{current.displayBottom}</span>
          </h1>

          <p className="max-w-[460px] pb-2 text-[15px] font-medium leading-[1.68] tracking-[-0.015em] text-white/90 sm:text-[18px] lg:text-[21px]">
            {current.subcopyLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* 플로팅 미니멀 슬라이드 컨트롤 (← 1 · ━ · 2 →) */}
        <div className="mt-8 flex items-center gap-4 lg:mt-9">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
            aria-label="이전 슬라이드"
            className="inline-flex h-8 w-8 items-center justify-center opacity-75 transition hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <span className="text-[14px] font-bold tabular-nums">
            {activeIndex + 1}
          </span>

          <div className="flex items-center gap-2">
            {CLINIC_HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`슬라이드 ${idx + 1}`}
                className={cn(
                  "h-[5px] rounded-full transition-all duration-300",
                  idx === activeIndex
                    ? "w-9 bg-white"
                    : "w-1.5 bg-white/35 hover:bg-white/65"
                )}
              />
            ))}
          </div>

          <span className="text-[14px] font-bold tabular-nums opacity-65">
            {total}
          </span>

          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
            aria-label="다음 슬라이드"
            className="inline-flex h-8 w-8 items-center justify-center opacity-75 transition hover:opacity-100"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
