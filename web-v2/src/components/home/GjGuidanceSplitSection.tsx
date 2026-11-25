"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  CLINIC_FAQ_CATEGORIES,
  CLINIC_FAQ_ENTRIES,
  type ClinicFaqCategory,
} from "@/data/clinic-community";
import { UROLOGY_CONDITION_GUIDES } from "@/data/urology-centers";
import { cn } from "@/lib/cn";

export function GjGuidanceSplitSection() {
  const [selectedFaqTab, setSelectedFaqTab] =
    useState<ClinicFaqCategory>("전립선");
  const [openFaqId, setOpenFaqId] = useState<string | null>("gj-faq-p1");
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const visibleFaqs = CLINIC_FAQ_ENTRIES.filter(
    (entry) => entry.category === selectedFaqTab
  );
  const activeGuide = UROLOGY_CONDITION_GUIDES[hoveredIdx];

  return (
    <>
      {/* Part A: #E9E9E9 라이트 그레이 + #8F5900 활성 탭 언더라인 + 화이트 카드 */}
      <section
        id="clinic-faq"
        aria-label="질환별 자주 묻는 질문"
        className="scroll-mt-24 bg-[#e9e9e9] py-24 text-black lg:py-[150px]"
      >
        <div className="gj-container">
          <div data-gj-reveal className="text-center">
            <p className="text-[20px] font-bold leading-[1.45] text-black sm:text-[30px] lg:text-[36px]">
              내원 전 가장 궁금한 의학 질문
            </p>
            <div className="mt-4 inline-flex items-center rounded-full bg-white px-6 py-2 text-base font-bold text-black shadow-xs sm:text-xl">
              #{selectedFaqTab} 핵심 Q&amp;A
            </div>

            {/* 탭 바 (#8F5900 언더라인) */}
            <div
              role="tablist"
              aria-label="FAQ 분야 선택"
              className="mt-10 flex flex-wrap items-center justify-center gap-6 border-b border-black/10 pb-3 sm:gap-10"
            >
              {CLINIC_FAQ_CATEGORIES.map((category) => {
                const active = selectedFaqTab === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setSelectedFaqTab(category);
                      const first = CLINIC_FAQ_ENTRIES.find(
                        (item) => item.category === category
                      );
                      setOpenFaqId(first?.id ?? null);
                    }}
                    className={cn(
                      "relative pb-2 text-[17px] font-bold transition sm:text-[24px]",
                      active
                        ? "text-black after:absolute after:inset-x-0 after:-bottom-[13px] after:h-[3px] after:bg-gj-brass-deep"
                        : "text-black/35 hover:text-black/75"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 레퍼런스 4열(PC) / 2열(모바일) 화이트 카드 (radius 15px, gap 22px) */}
          <div
            data-gj-reveal
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[22px]"
          >
            {visibleFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <article
                  key={faq.id}
                  className="flex flex-col justify-between rounded-[15px] bg-white p-6 shadow-xs transition hover:shadow-lg lg:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#f6f6f6] px-3 py-1 text-xs font-bold text-gj-brass-deep">
                        {faq.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        aria-expanded={isOpen}
                        aria-label="답변 펼치기"
                        className="text-black/45 hover:text-black"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="mt-4 text-left"
                    >
                      <h3 className="text-[16px] font-bold leading-[1.45] text-black">
                        {faq.question}
                      </h3>
                    </button>

                    <p
                      className={cn(
                        "mt-3 text-[13.5px] leading-[1.7] text-gj-muted",
                        !isOpen && "line-clamp-3"
                      )}
                    >
                      {faq.answer}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="mt-5 self-start text-xs font-bold text-gj-brass-deep hover:underline"
                  >
                    {isOpen ? "간략히 보기" : "전문의 답변 전체 보기 →"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part B: #101010 좌측 대형 워터마크+플로팅 프리뷰 / 우측 50% 인터랙티브 리스트 */}
      <section
        id="clinic-guides"
        aria-label="대표 질환 의학 가이드"
        className="relative scroll-mt-24 overflow-hidden bg-[#101010] pt-24 pb-16 text-white lg:pt-[180px] lg:pb-24"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 lg:grid-cols-12 lg:px-14">
          {/* 좌측: 대형 반투명 워터마크 + 호버 플로팅 프리뷰 카드(345x225px) */}
          <div className="relative lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span
              aria-hidden="true"
              className="pointer-events-none hidden select-none text-[120px] font-extrabold leading-none tracking-[-0.04em] text-white/[0.05] lg:block"
            >
              GUIDE
            </span>

            <div data-gj-reveal className="lg:-mt-10">
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass">
                CLINICAL DIAGRAMS
              </p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.26] tracking-[-0.03em] sm:text-[42px] lg:text-[50px]">
                대표 질환
                <br />
                의학 가이드
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-white/70">
                항목에 마우스를 올리면 해당 질환의 의학 도식과 핵심 치료 기준을 바로 확인하실 수 있습니다.
              </p>

              {/* PC 전용 345x225px 플로팅 프리뷰 */}
              <div className="mt-9 hidden w-[345px] overflow-hidden rounded-[16px] border border-white/15 bg-white shadow-2xl lg:block">
                <div className="flex h-[225px] items-center justify-center bg-white p-4">
                  <img
                    src={activeGuide.illustrationSrc}
                    alt={activeGuide.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="bg-[#1a1a1a] px-5 py-3.5 text-white">
                  <p className="text-[11px] font-bold text-gj-brass">
                    {activeGuide.centerLabel}
                  </p>
                  <p className="mt-0.5 text-sm font-bold">{activeGuide.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 50% 폭 리스트 (행 높이 ~160px, border-b white/30, 48px 화이트 원형 화살표) */}
          <div className="divide-y divide-white/30 border-b border-white/30 lg:col-span-7">
            {UROLOGY_CONDITION_GUIDES.map((guide, index) => {
              const active = hoveredIdx === index;
              return (
                <Link
                  key={guide.id}
                  href={`/departments/${guide.centerSlug}/${guide.treatmentSlug}`}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onFocus={() => setHoveredIdx(index)}
                  data-gj-reveal
                  data-gj-delay={String(index * 0.04)}
                  className={cn(
                    "group flex items-center justify-between gap-4 py-6 transition-colors lg:px-8 lg:py-9",
                    active ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {/* 모바일 인라인 썸네일 */}
                    <div className="flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 lg:hidden">
                      <img
                        src={guide.illustrationSrc}
                        alt={guide.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-[0.14em] text-gj-brass">
                        {guide.order} · {guide.centerLabel}
                      </span>
                      <h3 className="mt-1.5 text-[19px] font-bold tracking-[-0.025em] text-white transition group-hover:text-gj-brass sm:text-[26px] lg:text-[34px]">
                        {guide.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/65 sm:text-[15px]">
                        {guide.summary}
                      </p>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition",
                      active
                        ? "bg-gj-brass text-white"
                        : "bg-white text-black group-hover:bg-gj-brass group-hover:text-white"
                    )}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
