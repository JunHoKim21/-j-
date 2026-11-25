"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  CLINIC_FAQ_CATEGORIES,
  CLINIC_FAQ_ENTRIES,
  type ClinicFaqCategory,
} from "@/data/clinic-community";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { cn } from "@/lib/cn";

export default function FaqPage() {
  const [category, setCategory] = useState<"전체" | ClinicFaqCategory>("전체");
  const [keyword, setKeyword] = useState("");
  const [openId, setOpenId] = useState<string | null>(CLINIC_FAQ_ENTRIES[0].id);

  const filtered = CLINIC_FAQ_ENTRIES.filter((entry) => {
    const catOk = category === "전체" || entry.category === category;
    const kwOk =
      !keyword.trim() ||
      `${entry.question} ${entry.answer}`
        .toLowerCase()
        .includes(keyword.trim().toLowerCase());
    return catOk && kwOk;
  });

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="FREQUENTLY ASKED QUESTIONS"
        title="자주 묻는 질문 (FAQ)"
        description="전립선, 요로결석, 음경임플란트·성기능, 남성수술 분야에서 환자분들이 자주 문의하시는 핵심 내용을 정리했습니다."
        breadcrumbs={[{ label: "자주 묻는 질문" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[960px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {(["전체", ...CLINIC_FAQ_CATEGORIES] as const).map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-bold transition",
                      active
                        ? "bg-black text-white"
                        : "bg-[#f6f6f6] text-gj-muted hover:text-black"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex h-11 items-center rounded-full border border-gj-line bg-[#f6f6f6] px-4 sm:w-[260px]">
              <Search className="h-4 w-4 text-gj-muted" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="질문 키워드 검색"
                className="w-full bg-transparent px-2.5 text-sm text-black focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-8 divide-y divide-gj-line border-y border-gj-line">
            {filtered.map((faq) => {
              const open = openId === faq.id;
              return (
                <article key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : faq.id)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-gj-brass">
                        Q
                      </span>
                      <div>
                        <span className="text-xs font-bold text-gj-brass-deep">
                          {faq.category}
                        </span>
                        <h2 className="mt-0.5 text-[15.5px] font-bold text-black sm:text-base">
                          {faq.question}
                        </h2>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-gj-muted transition-transform",
                        open && "rotate-180 text-black"
                      )}
                    />
                  </button>

                  {open && (
                    <div className="bg-[#f6f6f6] px-6 py-5 text-sm leading-[1.8] text-black/80 sm:pl-14">
                      {faq.answer}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </GjSubPageShell>
  );
}
