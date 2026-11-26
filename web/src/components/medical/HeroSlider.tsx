"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarCheck, Lock } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    id: "slide-1",
    image: "/assets/sample/hero-01.jpg.png",
    kicker: `SINCE ${CLINIC_INFO.since} · ${CLINIC_INFO.englishName}`,
    headlineTop: "빠른 길이 아닌,",
    headlineBottom: "안전하고 바른 진료.",
    subcopy: [
      "박천진 대표원장 · 이웅희 원장 2인 전문의 협진.",
      "5개 독립 개인진료실과 3S 수술 원칙으로",
      "27년의 임상 신뢰를 이어갑니다.",
    ],
  },
  {
    id: "slide-2",
    image: "/assets/sample/hero-02.jpg.png",
    kicker: "PRIVATE UROLOGY · 3S PRINCIPLE",
    headlineTop: "프라이버시를 지키는,",
    headlineBottom: "정통 비뇨의학의 기준.",
    subcopy: [
      "전립선 HoLEP · 요로결석 · 음경임플란트 · 남성재건.",
      "전원 남성 간호팀과 1:1 독립 진료 공간에서",
      "편안하고 정확한 진료를 약속합니다.",
    ],
  },
] as const;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, []);

  const current = HERO_SLIDES[active];

  return (
    <section
      className="relative flex h-[100svh] min-h-[640px] max-h-[960px] items-end overflow-hidden bg-surface-dark pb-12 pt-[60px] text-white lg:pb-20 lg:pt-[104px]"
    >
      {/* 배경 크로스페이드 슬라이드 */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          aria-hidden={idx !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            idx === active ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt="강남J비뇨기과의원 프리미엄 진료 공간"
            className={cn(
              "h-full w-full object-cover object-center transition-transform duration-[6500ms] ease-out",
              idx === active ? "scale-105" : "scale-100"
            )}
          />
        </div>
      ))}

      {/* 하단·좌측 비네팅 그라데이션 (텍스트 가독성 확보) */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/45 to-surface-dark/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/65 via-transparent to-surface-dark/35" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          {/* 좌하단 초대형 헤드라인 + 미니멀 페이지네이션 */}
          <div className="lg:col-span-7">
            <p className="text-[12px] font-bold tracking-[0.2em] text-brand-gold sm:text-[13px]">
              {current.kicker}
            </p>
            <h1 className="mt-3.5 text-[32px] font-bold leading-[1.16] tracking-[-0.035em] text-white sm:text-[48px] lg:text-[60px]">
              {current.headlineTop}
              <br />
              {current.headlineBottom}
            </h1>

            {/* 슬라이드 컨트롤 */}
            <div className="mt-7 flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setActive((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                }
                aria-label="이전 히어로 슬라이드"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`${idx + 1}번 슬라이드`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === active ? "w-10 bg-brand-gold" : "w-2.5 bg-white/35 hover:bg-white/60"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActive((prev) => (prev + 1) % HERO_SLIDES.length)}
                aria-label="다음 히어로 슬라이드"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              <span className="text-[12px] font-semibold tabular-nums text-white/60">
                0{active + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>
          </div>

          {/* 우하단 에디토리얼 서브카피 + CTA */}
          <div className="space-y-6 lg:col-span-5 lg:pb-1 lg:text-right">
            <p className="text-[15px] leading-[1.78] text-white/85 sm:text-[17px]">
              {current.subcopy[0]}
              <br />
              {current.subcopy[1]}
              <br className="hidden sm:inline" /> {current.subcopy[2]}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/reservation"
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-brand-gold px-7 text-[14.5px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
              >
                <CalendarCheck className="h-4 w-4" />
                <span>온라인 예약하기</span>
              </Link>
              <Link
                href="/consultation"
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-[14.5px] font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white hover:text-surface-dark"
              >
                <Lock className="h-4 w-4" />
                <span>1:1 비밀상담</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
