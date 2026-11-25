import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { NOTICES } from "@/lib/data/community";
import { SubHero } from "@/components/layout/SubHero";

interface NoticeDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return NOTICES.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: NoticeDetailProps): Promise<Metadata> {
  const { id } = await params;
  const notice = NOTICES.find((n) => n.id === id);
  if (!notice) return { title: "공지사항" };
  return {
    title: notice.title,
    description: notice.summary,
  };
}

export default async function NoticeDetailPage({ params }: NoticeDetailProps) {
  const { id } = await params;
  const notice = NOTICES.find((n) => n.id === id);
  if (!notice) notFound();

  return (
    <>
      <SubHero
        kicker={`NOTICE · ${notice.category}`}
        title={notice.title}
        description={`게시일 ${notice.publishedAt}`}
        breadcrumbs={[
          { label: "고객안내", href: "/notice" },
          { label: "공지사항", href: "/notice" },
          { label: "상세" },
        ]}
      />

      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page max-w-[840px]">
          <article className="space-y-5 text-[16px] leading-[1.82] text-ink-primary">
            {notice.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line-subtle pt-8">
            <Link
              href="/notice"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-surface-1 px-5 text-[14px] font-semibold text-brand-navy hover:bg-surface-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>공지사항 목록</span>
            </Link>
            <Link
              href="/reservation"
              className="inline-flex h-11 items-center rounded-lg bg-brand-navy px-5 text-[14px] font-semibold text-white hover:bg-brand-blue"
            >
              온라인 예약 바로가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
