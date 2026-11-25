"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UROLOGY_CENTERS } from "@/data/urology-centers";
import { cn } from "@/lib/cn";

export function GjCentersAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="clinic-centers"
      aria-label="강남J 5대 핵심 진료센터"
      className="scroll-mt-24 bg-[#101010] py-24 text-white lg:py-[180px]"
    >
      {/* 상단 1230px 스플릿 타이틀 */}
      <div className="gj-container">
        <div
          data-gj-reveal
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <h2 className="text-[32px] font-bold leading-[1.3] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
            강남J 핵심 진료센터
          </h2>
          <p className="max-w-[520px] text-[15px] font-medium leading-[1.7] text-white/75 lg:text-[18px]">
            전립선 · 요로결석 · 성기능 보형물 · 음경재건 확대 · 정관 포경까지
            총 24개 세부 진료 항목을 2인 전문의 협진으로 정밀하게 다룹니다.
          </p>
        </div>
      </div>

      {/* PC: 풀블리드 호버 확장 아코디언 (flex: 1 → flex: 2.15, h 440px, gap 15px) */}
      <div
        data-gj-reveal
        className="mx-auto mt-12 hidden w-full max-w-[1520px] gap-[15px] px-4 lg:flex"
      >
        {UROLOGY_CENTERS.map((center, idx) => {
          const expanded = activeIndex === idx;
          return (
            <article
              key={center.slug}
              onMouseEnter={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              tabIndex={0}
              className={cn(
                "relative flex h-[430px] cursor-pointer flex-col justify-between overflow-hidden rounded-[12px] transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none xl:h-[460px]",
                expanded ? "flex-[2.15]" : "flex-1"
              )}
            >
              <img
                src={center.visualSrc}
                alt={center.title}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
                  expanded ? "scale-105" : "scale-100 brightness-[0.72]"
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 transition-colors duration-500",
                  expanded
                    ? "bg-gradient-to-t from-black/85 via-black/45 to-black/20"
                    : "bg-gradient-to-t from-black/80 via-black/35 to-black/35"
                )}
              />

              {/* 상단 넘버 */}
              <div className="relative z-10 flex items-center justify-between p-6">
                <span className="text-sm font-bold tracking-[0.16em] text-gj-brass">
                  {center.order}
                </span>
                <span className="text-xs font-semibold text-white/70">
                  {center.treatments.length}개 세부진료
                </span>
              </div>

              {/* 하단 제목 및 확장 상세 */}
              <div className="relative z-10 p-6 xl:p-7">
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-white xl:text-[26px]">
                  {center.title}
                </h3>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    expanded
                      ? "mt-3 max-h-[260px] opacity-100"
                      : "mt-0 max-h-0 opacity-0"
                  )}
                >
                  <p className="text-[15px] font-semibold text-gj-brass">
                    {center.headline}
                  </p>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-white/85">
                    {center.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {center.treatments.map((tr) => (
                      <Link
                        key={tr.slug}
                        href={`/departments/${center.slug}/${tr.slug}`}
                        className="rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-gj-brass"
                      >
                        {tr.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 flex justify-end">
                    <Link
                      href={`/departments/${center.slug}`}
                      aria-label={`${center.title} 상세 보기`}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-gj-brass hover:text-white"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* 모바일(390px): 가로 스와이프 83% 5:6 카드 */}
      <div className="gj-no-scrollbar mt-10 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-2 lg:hidden">
        {UROLOGY_CENTERS.map((center) => (
          <article
            key={center.slug}
            className="relative flex w-[83vw] max-w-[330px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[12px] aspect-[5/6]"
          >
            <img
              src={center.visualSrc}
              alt={center.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />

            <div className="relative z-10 flex items-center justify-between p-5">
              <span className="text-xs font-bold tracking-[0.16em] text-gj-brass">
                {center.order}
              </span>
              <span className="text-[11px] font-semibold text-white/75">
                {center.treatments.length} ITEMS
              </span>
            </div>

            <div className="relative z-10 p-5">
              <h3 className="text-xl font-bold text-white">{center.title}</h3>
              <p className="mt-1.5 text-xs font-semibold text-gj-brass">
                {center.headline}
              </p>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/80">
                {center.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
