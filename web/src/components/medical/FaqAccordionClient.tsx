"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQS, type FaqItem } from "@/lib/data/community";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<"전체" | FaqItem["category"]> = [
  "전체",
  "전립선",
  "요로결석",
  "임플란트·성기능",
  "남성수술·기타",
];

export function FaqAccordionClient() {
  const [activeCategory, setActiveCategory] = useState<"전체" | FaqItem["category"]>("전체");
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const filtered =
    activeCategory === "전체" ? FAQS : FAQS.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-surface-0 py-14 lg:py-24">
      <div className="container-page max-w-[920px]">
        {/* 카테고리 필터 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
                activeCategory === cat
                  ? "bg-brand-navy text-white"
                  : "bg-surface-1 text-ink-secondary hover:bg-surface-2 hover:text-brand-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 아코디언 리스트 */}
        <div className="divide-y divide-line-subtle border-y border-line-subtle">
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <div className="space-y-1">
                    <span className="text-[12px] font-semibold text-brand-blue">
                      {item.category}
                    </span>
                    <h2 className="text-[16px] font-bold leading-snug text-brand-navy sm:text-[17px]">
                      Q. {item.question}
                    </h2>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-ink-secondary transition-transform duration-200",
                      isOpen && "rotate-180 text-brand-blue"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="mb-5 rounded-xl bg-surface-1 px-5 py-4 text-[15px] leading-[1.75] text-ink-secondary">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 하단 비밀상담 연결 */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl bg-surface-1 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-[17px] font-bold text-brand-navy">
              찾으시는 답변이 없으신가요?
            </h3>
            <p className="mt-1 text-[14px] text-ink-secondary">
              본인과 의료진만 열람 가능한 1:1 비밀상담으로 상세한 답변을 받아보세요.
            </p>
          </div>
          <Link
            href="/consultation"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy px-5 text-[14px] font-bold text-white hover:bg-brand-blue"
          >
            1:1 비밀상담 이용하기
          </Link>
        </div>
      </div>
    </section>
  );
}
