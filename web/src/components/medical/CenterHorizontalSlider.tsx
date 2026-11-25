"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DEPARTMENT_CENTERS } from "@/lib/data/departments";

/**
 * 5대 핵심 진료센터 미니멀 포스터형 다크 쇼케이스
 * - PC(>=1024px): 5열 3:4 세로형 풀블리드 포스터 카드 (텍스트·칩 과밀 배제, 비주얼+타이틀 중심)
 * - 모바일(<1024px): 네이티브 터치 가로 스와이프(scroll-snap), body 가로 스크롤 0%
 */
export function CenterHorizontalSlider() {
  return (
    <section
      aria-labelledby="centers-heading"
      className="bg-surface-dark py-20 text-white lg:py-28"
    >
      <div className="container-page">
        {/* 상단 스플릿 헤더 */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[12px] font-bold tracking-[0.18em] text-brand-gold">
              SPECIALIZED CENTERS
            </p>
            <h2
              id="centers-heading"
              className="mt-3 text-[28px] font-bold leading-[1.24] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]"
            >
              차원이 다른 전문성,
              <br />
              강남J 5대 핵심 진료센터
            </h2>
          </div>

          <div className="max-w-[420px] space-y-4">
            <p className="text-[14.5px] leading-[1.72] text-white/65 lg:text-[15.5px]">
              전립선·요로결석부터 고난도 음경임플란트·남성재건까지, 2인 전문의 협진과
              정밀 진단 장비로 근본적인 치료 방향을 제시합니다.
            </p>
            <Link
              href="/departments"
              className="inline-flex items-center gap-1.5 text-[14px] font-bold text-brand-gold transition-colors hover:text-white"
            >
              <span>전체 진료센터 보기</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* PC 5열 3:4 미니멀 포스터 카드 */}
        <div className="mt-12 hidden grid-cols-5 gap-4 lg:grid xl:gap-5">
          {DEPARTMENT_CENTERS.map((center) => (
            <Link
              key={center.categorySlug}
              href={`/departments/${center.categorySlug}`}
              className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-2xl bg-surface-dark-soft p-6"
            >
              <img
                src={center.imagePath}
                alt={center.categoryName}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/25 to-surface-dark/15 transition-opacity duration-300 group-hover:via-surface-dark/40" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[0.16em] text-brand-gold">
                  {center.order}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs transition-all duration-300 group-hover:bg-brand-gold group-hover:text-surface-dark">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="relative z-10 space-y-1.5">
                <p className="text-[10.5px] font-semibold tracking-[0.14em] text-white/60">
                  {center.englishLabel}
                </p>
                <h3 className="text-[21px] font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-brand-gold xl:text-[23px]">
                  {center.categoryName}
                </h3>
                <p className="text-[12.5px] text-white/65 transition-opacity duration-300 group-hover:text-white/90">
                  {center.highlightNote}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 모바일/태블릿(<1024px): 네이티브 터치 가로 스와이프 포스터 */}
      <div className="mt-8 lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
          {DEPARTMENT_CENTERS.map((center) => (
            <Link
              key={center.categorySlug}
              href={`/departments/${center.categorySlug}`}
              className="relative flex aspect-[3/4] w-[72vw] max-w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-surface-dark-soft p-5"
            >
              <img
                src={center.imagePath}
                alt={center.categoryName}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/30 to-surface-dark/15" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[0.14em] text-brand-gold">
                  {center.order}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="relative z-10 space-y-1">
                <p className="text-[10px] font-semibold tracking-[0.12em] text-white/60">
                  {center.englishLabel}
                </p>
                <h3 className="text-[20px] font-bold text-white">{center.categoryName}</h3>
                <p className="text-[12px] text-white/75">{center.highlightNote}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
