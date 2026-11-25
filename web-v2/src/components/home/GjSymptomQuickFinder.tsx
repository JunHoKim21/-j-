"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import {
  ALL_UROLOGY_TREATMENT_INDEX,
  QUICK_SEARCH_KEYWORDS,
} from "@/data/urology-centers";

export function GjSymptomQuickFinder() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();

  const matches = useMemo(() => {
    if (!trimmed) return [];
    return ALL_UROLOGY_TREATMENT_INDEX.filter((item) =>
      [item.name, item.centerTitle, ...item.keywords]
        .join(" ")
        .toLowerCase()
        .includes(trimmed)
    ).slice(0, 6);
  }, [trimmed]);

  return (
    <section
      aria-label="증상 및 진료 검색"
      className="bg-[#101010] pt-28 pb-16 text-white lg:pt-[180px] lg:pb-24"
    >
      <div className="gj-container">
        <div data-gj-reveal className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.3] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            무엇을 도와드릴까요?
          </h2>
          <p className="mt-3 text-[20px] font-bold leading-[1.35] tracking-[-0.025em] text-white sm:text-[28px] lg:text-[36px]">
            강남J <span className="text-gj-brass">5대 핵심 센터 · 24개 진료</span>에서 바로 찾아보세요
          </p>

          {/* 레퍼런스 규격 화이트 라운드 검색창 (max-w 1000px, radius 15px, 22px 입력) */}
          <div className="relative mt-10">
            <div className="flex h-[58px] items-center rounded-[15px] bg-white px-5 shadow-2xl sm:h-[70px] sm:px-7">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="증상이나 시술명을 입력해 주세요 (예: HoLEP, 요로결석, 음경임플란트)"
                aria-label="증상 및 진료 항목 검색"
                className="w-full bg-transparent text-[16px] font-medium text-black placeholder:text-black/40 focus:outline-none sm:text-[21px]"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="검색어 지우기"
                  className="ml-2 text-black/45 hover:text-black"
                >
                  <X className="h-6 w-6" />
                </button>
              ) : (
                <Search className="ml-2 h-7 w-7 shrink-0 text-black" />
              )}
            </div>

            {trimmed.length > 0 && (
              <div className="mt-3 overflow-hidden rounded-[15px] border border-white/15 bg-[#191919] text-left shadow-2xl">
                {matches.length > 0 ? (
                  <ul className="divide-y divide-white/10">
                    {matches.map((item) => (
                      <li key={`${item.centerSlug}-${item.slug}`}>
                        <Link
                          href={item.href}
                          onClick={() => setQuery("")}
                          className="flex items-center justify-between px-6 py-4 transition hover:bg-white/[0.06]"
                        >
                          <div>
                            <span className="text-xs font-bold text-gj-brass">
                              {item.centerTitle}
                            </span>
                            <p className="mt-0.5 text-base font-bold text-white">
                              {item.name}
                            </p>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-gj-brass" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-5 text-sm text-white/70">
                    일치하는 항목이 없습니다.{" "}
                    <Link
                      href="/#quick-reservation"
                      className="font-bold text-gj-brass underline"
                    >
                      1:1 비밀상담 또는 온라인 예약
                    </Link>
                    을 이용해 주세요.
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {QUICK_SEARCH_KEYWORDS.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => setQuery(kw)}
                className="rounded-full border border-white/18 bg-white/[0.05] px-4 py-1.5 text-[13px] font-medium text-white/80 transition hover:border-gj-brass hover:text-gj-brass"
              >
                #{kw}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
