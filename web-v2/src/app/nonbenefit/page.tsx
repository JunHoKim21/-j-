"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  CLINIC_FEE_CATEGORIES,
  CLINIC_NONBENEFIT_ITEMS,
  type ClinicFeeCategory,
} from "@/data/clinic-community";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { cn } from "@/lib/cn";

export default function NonbenefitPage() {
  const [category, setCategory] = useState<"전체" | ClinicFeeCategory>("전체");
  const [query, setQuery] = useState("");

  const rows = CLINIC_NONBENEFIT_ITEMS.filter((row) => {
    const catOk = category === "전체" || row.category === category;
    const qOk =
      !query.trim() ||
      `${row.name} ${row.detail} ${row.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());
    return catOk && qOk;
  });

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="MEDICAL LAW ART. 45 · TRANSPARENT FEES"
        title="비급여 진료비용 안내"
        description="의료법 제45조에 따라 강남J비뇨기과의원의 비급여 진료비용 항목을 투명하게 고지합니다."
        breadcrumbs={[{ label: "비급여 진료비용 안내" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[1040px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {(["전체", ...CLINIC_FEE_CATEGORIES] as const).map((cat) => {
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

            <div className="flex h-11 items-center rounded-full border border-gj-line bg-[#f6f6f6] px-4 sm:w-[250px]">
              <Search className="h-4 w-4 text-gj-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="항목명 검색"
                className="w-full bg-transparent px-2.5 text-sm text-black focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gj-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gj-line bg-[#f6f6f6] text-xs font-bold text-black">
                  <th className="px-4 py-3.5 sm:px-6">분류</th>
                  <th className="px-4 py-3.5 sm:px-6">항목명</th>
                  <th className="px-4 py-3.5 sm:px-6">세부 구분</th>
                  <th className="px-4 py-3.5 text-right sm:px-6">비용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gj-line">
                {rows.map((row) => (
                  <tr key={row.id} className="hover:bg-[#f6f6f6]/50">
                    <td className="px-4 py-3.5 whitespace-nowrap sm:px-6">
                      <span className="rounded-full bg-[#f6f6f6] px-2.5 py-1 text-xs font-bold text-gj-brass-deep">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-black sm:px-6">
                      {row.name}
                    </td>
                    <td className="px-4 py-3.5 text-gj-muted sm:px-6">
                      {row.detail}
                    </td>
                    <td className="px-4 py-3.5 text-right font-bold tabular-nums whitespace-nowrap text-black sm:px-6">
                      {row.feeLabel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-gj-muted">
            * 비급여 항목 및 비용은 환자 개인의 해부학적 조건, 수술 범위 및 사용 재료에
            따라 달라질 수 있으며, 정확한 비용은 전문의 진찰 후 사전에 상세히 안내해
            드립니다.
          </p>
        </div>
      </section>
    </GjSubPageShell>
  );
}
