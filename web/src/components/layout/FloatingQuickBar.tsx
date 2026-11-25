"use client";

import Link from "next/link";
import { ArrowUp, CalendarCheck, Lock, MapPin, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

/**
 * PC 우측 고정 플로팅 퀵바 (xl 이상 노출)
 * - 최상단 골드 강조 CTA + 화이트 둥근 타일 4종 + TOP
 */
export function FloatingQuickBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="빠른 메뉴"
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
    >
      <Link
        href="/reservation"
        className="flex w-[74px] flex-col items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-brand-gold to-brand-gold-deep px-2 py-3.5 text-center text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <CalendarCheck className="h-5 w-5" />
        <span className="text-[11px] font-bold leading-tight">
          온라인
          <br />
          예약
        </span>
      </Link>

      <div className="flex w-[74px] flex-col divide-y divide-line-subtle overflow-hidden rounded-xl bg-surface-0 shadow-lg ring-1 ring-black/5">
        <Link
          href="/consultation"
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <Lock className="h-4 w-4" />
          <span className="text-[10.5px] font-semibold">비밀상담</span>
        </Link>

        <a
          href={CLINIC_INFO.phoneHref}
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <Phone className="h-4 w-4" />
          <span className="text-[10.5px] font-semibold">전화상담</span>
        </a>

        <Link
          href="/about/location"
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-ink-primary transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-[10.5px] font-semibold">오시는 길</span>
        </Link>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="flex flex-col items-center justify-center gap-1 bg-surface-dark px-2 py-2.5 text-center text-white transition-colors hover:bg-brand-navy"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="text-[10px] font-bold tracking-wider">TOP</span>
        </button>
      </div>
    </aside>
  );
}
