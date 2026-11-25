"use client";

import Link from "next/link";
import {
  ArrowUp,
  CalendarCheck,
  Clock,
  HelpCircle,
  Lock,
  MapPin,
  PlayCircle,
} from "lucide-react";

/**
 * PC 우측 고정 7칸 세로형 플로팅 퀵바 (lg 이상 노출, <1024px 숨김)
 * 1) 1:1 비밀상담  2) 온라인 예약(골드 강조)  3) 진료시간  4) 오시는 길
 * 5) FAQ          6) Video Gallery(하단 포인트 카드)      7) TOP
 */
export function FloatingQuickBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="빠른 메뉴"
      className="fixed right-2.5 top-1/2 z-30 hidden w-[68px] -translate-y-1/2 flex-col gap-1.5 lg:flex xl:right-4 xl:w-[74px] 2xl:right-6"
    >
      {/* 상단 5칸: 상담 · 예약(포인트 강조) · 진료시간 · 오시는 길 · FAQ */}
      <div className="flex flex-col divide-y divide-line-subtle overflow-hidden rounded-xl bg-surface-0/95 shadow-lg ring-1 ring-black/6 backdrop-blur-sm">
        <Link
          href="/consultation"
          className="flex flex-col items-center justify-center gap-1 px-1.5 py-2.5 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <Lock className="h-[17px] w-[17px]" />
          <span className="text-[10px] font-semibold leading-tight tracking-[-0.02em]">
            1:1 비밀상담
          </span>
        </Link>

        <Link
          href="/reservation"
          className="flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-brand-gold to-brand-gold-deep px-1.5 py-3 text-center text-white transition-opacity hover:opacity-95"
        >
          <CalendarCheck className="h-[18px] w-[18px]" />
          <span className="text-[10.5px] font-bold leading-tight tracking-[-0.02em]">
            온라인 예약
          </span>
        </Link>

        <Link
          href="/about/location#schedule"
          className="flex flex-col items-center justify-center gap-1 px-1.5 py-2.5 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <Clock className="h-[17px] w-[17px]" />
          <span className="text-[10px] font-semibold leading-tight tracking-[-0.02em]">
            진료시간
          </span>
        </Link>

        <Link
          href="/about/location#map"
          className="flex flex-col items-center justify-center gap-1 px-1.5 py-2.5 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <MapPin className="h-[17px] w-[17px]" />
          <span className="text-[10px] font-semibold leading-tight tracking-[-0.02em]">
            오시는 길
          </span>
        </Link>

        <Link
          href="/faq"
          className="flex flex-col items-center justify-center gap-1 px-1.5 py-2.5 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <HelpCircle className="h-[17px] w-[17px]" />
          <span className="text-[10px] font-semibold leading-tight tracking-[-0.02em]">
            FAQ
          </span>
        </Link>
      </div>

      {/* 6번: Video Gallery 하단 포인트 카드 */}
      <Link
        href="/media"
        className="flex flex-col items-center justify-center gap-1 rounded-xl border border-brand-gold/35 bg-gradient-to-b from-brand-navy to-surface-dark px-1.5 py-2.5 text-center text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:border-brand-gold"
      >
        <PlayCircle className="h-[18px] w-[18px] text-brand-gold" />
        <span className="text-[9.5px] font-bold leading-[1.2] tracking-[0.02em] text-white/95">
          Video
          <br />
          Gallery
        </span>
      </Link>

      {/* 7번: TOP 버튼 */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
        className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-surface-dark px-1.5 py-2 text-center text-white shadow-md ring-1 ring-white/10 transition-colors hover:bg-brand-navy"
      >
        <ArrowUp className="h-3.5 w-3.5 text-brand-gold" />
        <span className="text-[9.5px] font-bold tracking-[0.12em]">TOP</span>
      </button>
    </aside>
  );
}
