"use client";

import { useState } from "react";
import { NONBENEFIT_ITEMS, type NonbenefitCategory } from "@/lib/data/community";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<"전체" | NonbenefitCategory> = [
  "전체",
  "수술",
  "주사",
  "검사",
  "제증명수수료",
  "입원",
];

export function NonbenefitClient() {
  const [category, setCategory] = useState<"전체" | NonbenefitCategory>("전체");

  const filtered =
    category === "전체"
      ? NONBENEFIT_ITEMS
      : NONBENEFIT_ITEMS.filter((item) => item.category === category);

  return (
    <section className="bg-surface-0 py-14 lg:py-24">
      <div className="container-page max-w-[1000px]">
        <div className="mb-6 rounded-xl bg-surface-1 p-5 text-[14px] leading-relaxed text-ink-secondary">
          의료법 제45조 및 동법 시행규칙에 따라 비급여 진료비용을 투명하게 고지합니다.
          실제 비용은 환자의 상태, 수술 범위 및 사용 재료에 따라 달라질 수 있으며, 정확한 비용은 진료 상담 시 안내드립니다.
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
                category === cat
                  ? "bg-brand-navy text-white"
                  : "bg-surface-1 text-ink-secondary hover:bg-surface-2 hover:text-brand-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 반응형 비급여 표 (모바일 390px 가로 스크롤 0%) */}
        <div className="overflow-hidden rounded-xl bg-surface-0 ring-1 ring-line-subtle">
          <table className="w-full table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[20%] sm:w-[16%]" />
              <col className="w-[52%] sm:w-[58%]" />
              <col className="w-[28%] sm:w-[26%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-line-subtle bg-surface-1 text-[12.5px] font-bold text-brand-navy sm:text-[13.5px]">
                <th scope="col" className="px-3 py-3.5 sm:px-5">
                  구분
                </th>
                <th scope="col" className="px-3 py-3.5 sm:px-5">
                  항목 및 세부명칭
                </th>
                <th scope="col" className="px-3 py-3.5 text-right sm:px-5">
                  비용 안내
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line-subtle/70 text-[13.5px] sm:text-[14.5px]">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-surface-1/50">
                  <td className="px-3 py-3.5 align-top font-semibold text-brand-blue sm:px-5">
                    {item.category}
                  </td>
                  <td className="px-3 py-3.5 align-top sm:px-5">
                    <div className="font-semibold text-ink-primary">{item.itemName}</div>
                    {item.detail && item.detail !== "-" && (
                      <div className="mt-0.5 text-[12.5px] text-ink-secondary">{item.detail}</div>
                    )}
                  </td>
                  <td className="px-3 py-3.5 text-right align-top font-bold tabular-nums text-brand-navy sm:px-5">
                    {item.priceText}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
