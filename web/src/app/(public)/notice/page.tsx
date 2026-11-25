import type { Metadata } from "next";
import Link from "next/link";
import { Pin } from "lucide-react";
import { NOTICES } from "@/lib/data/community";
import { SubHero } from "@/components/layout/SubHero";

export const metadata: Metadata = {
  title: "공지사항",
  description: "강남J비뇨기과의원 진료 일정, 휴진 안내 및 병원 소식을 확인하세요.",
};

export default function NoticeListPage() {
  return (
    <>
      <SubHero
        kicker="COMMUNITY · NOTICE"
        title="공지사항"
        description="진료시간 변경, 휴진 일정 및 강남J비뇨기과의 주요 소식을 안내드립니다."
        breadcrumbs={[{ label: "고객안내", href: "/notice" }, { label: "공지사항" }]}
      />

      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page max-w-[960px]">
          <div className="divide-y divide-line-subtle border-y border-line-subtle">
            {NOTICES.map((notice) => (
              <Link
                key={notice.id}
                href={`/notice/${notice.id}`}
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-surface-1/70 sm:flex-row sm:items-center sm:justify-between sm:px-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[12px]">
                    {notice.isPinned && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-navy px-2.5 py-0.5 font-semibold text-white">
                        <Pin className="h-3 w-3" />
                        중요
                      </span>
                    )}
                    <span className="rounded-full bg-surface-1 px-2.5 py-0.5 font-semibold text-brand-blue">
                      {notice.category}
                    </span>
                  </div>
                  <h2 className="text-[16.5px] font-bold text-ink-primary group-hover:text-brand-blue sm:text-[18px]">
                    {notice.title}
                  </h2>
                  <p className="text-[14px] text-ink-secondary">{notice.summary}</p>
                </div>
                <time className="shrink-0 text-[13.5px] tabular-nums text-ink-secondary">
                  {notice.publishedAt}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
