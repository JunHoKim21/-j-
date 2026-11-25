"use client";

import { useState } from "react";
import { ChevronDown, Pin } from "lucide-react";
import { CLINIC_NOTICES } from "@/data/clinic-community";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { cn } from "@/lib/cn";

export default function NoticePage() {
  const [openId, setOpenId] = useState<string | null>(CLINIC_NOTICES[0].id);

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="CLINIC NOTICE"
        title="공지사항"
        description="강남J비뇨기과의원 2인 전문의 진료 일정, 휴진 안내 및 주요 병원 소식을 전해드립니다."
        breadcrumbs={[{ label: "공지사항" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[960px]">
          <div className="divide-y divide-gj-line border-y border-gj-line">
            {CLINIC_NOTICES.map((notice) => {
              const open = openId === notice.id;
              return (
                <article key={notice.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : notice.id)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 py-6 text-left transition hover:bg-[#f6f6f6]/60 sm:items-center sm:px-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        {notice.pinned && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black px-2.5 py-0.5 text-[11px] font-bold text-gj-brass">
                            <Pin className="h-3 w-3" />
                            고정
                          </span>
                        )}
                        <span className="rounded-full bg-[#f6f6f6] px-2.5 py-0.5 text-xs font-bold text-gj-brass-deep">
                          {notice.tag}
                        </span>
                        <span className="text-xs tabular-nums text-gj-muted">
                          {notice.publishedAt}
                        </span>
                      </div>
                      <h2 className="text-base font-bold text-black sm:text-lg">
                        {notice.title}
                      </h2>
                    </div>

                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-gj-muted transition-transform",
                        open && "rotate-180 text-black"
                      )}
                    />
                  </button>

                  {open && (
                    <div className="space-y-3 bg-[#f6f6f6] px-5 py-6 text-sm leading-[1.85] text-black/80 sm:px-8 sm:text-[15px]">
                      {notice.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
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
