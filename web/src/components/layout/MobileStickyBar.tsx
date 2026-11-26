"use client";

import Link from "next/link";
import { CalendarCheck, Lock, MapPin, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

/**
 * 모바일 전용(<768px) 하단 고정 4버튼 액션바
 * - 전화상담 / 온라인 예약 / 1:1 비밀상담 / 오시는 길
 * - safe-area-inset-bottom 대응
 */
export function MobileStickyBar() {
  return (
    <nav
      aria-label="모바일 빠른 메뉴"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line-subtle bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_rgba(15,37,62,0.1)] md:hidden"
    >
      <div className="grid h-[64px] grid-cols-4">
        <a
          href={CLINIC_INFO.phoneHref}
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-[11px] font-semibold text-ink-primary active:bg-surface-1"
        >
          <Phone className="h-[18px] w-[18px] text-brand-navy" />
          <span>전화상담</span>
        </a>

        <Link
          href="/reservation"
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 bg-brand-navy text-[11px] font-semibold text-white active:bg-brand-blue"
        >
          <CalendarCheck className="h-[18px] w-[18px]" />
          <span>온라인 예약</span>
        </Link>

        <Link
          href="/consultation"
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-[11px] font-semibold text-ink-primary active:bg-surface-1"
        >
          <Lock className="h-[18px] w-[18px] text-brand-blue" />
          <span>1:1 비밀상담</span>
        </Link>

        <Link
          href="/about/location"
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-[11px] font-semibold text-ink-primary active:bg-surface-1"
        >
          <MapPin className="h-[18px] w-[18px] text-brand-navy" />
          <span>오시는 길</span>
        </Link>
      </div>
    </nav>
  );
}
