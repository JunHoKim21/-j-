"use client";

import Link from "next/link";
import {
  ArrowUp,
  CalendarCheck,
  Clock,
  HelpCircle,
  Lock,
  MapPin,
  Phone,
} from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";

export function GjMobileBottomBar() {
  return (
    <div className="lg:hidden">
      {/* 하단바 위 우측 플로팅 전화(62px 골드) + TOP(40px 화이트) */}
      <div className="fixed right-4 bottom-[92px] z-40 flex flex-col items-end gap-2">
        <a
          href={CLINIC_PROFILE.mainPhoneHref}
          aria-label="전화 걸기"
          className="flex h-[58px] w-[58px] flex-col items-center justify-center rounded-full bg-gj-brass text-white shadow-[0_6px_20px_rgba(0,0,0,0.28)] active:scale-95"
        >
          <Phone className="h-5 w-5" />
          <span className="mt-0.5 text-[9.5px] font-bold">전화걸기</span>
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="최상단으로 이동"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_14px_rgba(0,0,0,0.18)] active:scale-95"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      {/* 레퍼런스 5분할 화이트 하단 고정바 (높이 76px, 점선 구분, 골드 아이콘) */}
      <nav
        aria-label="모바일 하단 퀵바"
        className="fixed inset-x-0 bottom-0 z-40 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_0_15px_rgba(0,0,0,0.08)]"
      >
        <div className="grid h-[74px] grid-cols-5 divide-x divide-dashed divide-[#e8e8e8] py-2.5">
          <Link
            href="/consultation"
            className="flex flex-col items-center justify-center gap-1 text-black"
          >
            <Lock className="h-5 w-5 text-gj-brass stroke-[1.7]" />
            <span className="text-[11px] font-semibold tracking-[-0.06em]">
              1:1 비밀상담
            </span>
          </Link>
          <Link
            href="/reservation"
            className="flex flex-col items-center justify-center gap-1 text-black"
          >
            <CalendarCheck className="h-5 w-5 text-gj-brass stroke-[1.7]" />
            <span className="text-[11px] font-semibold tracking-[-0.06em]">
              온라인 예약
            </span>
          </Link>
          <Link
            href="/about/location#clinic-hours"
            className="flex flex-col items-center justify-center gap-1 text-black"
          >
            <Clock className="h-5 w-5 text-gj-brass stroke-[1.7]" />
            <span className="text-[11px] font-semibold tracking-[-0.06em]">
              진료시간
            </span>
          </Link>
          <Link
            href="/about/location"
            className="flex flex-col items-center justify-center gap-1 text-black"
          >
            <MapPin className="h-5 w-5 text-gj-brass stroke-[1.7]" />
            <span className="text-[11px] font-semibold tracking-[-0.06em]">
              오시는 길
            </span>
          </Link>
          <Link
            href="/faq"
            className="flex flex-col items-center justify-center gap-1 text-black"
          >
            <HelpCircle className="h-5 w-5 text-gj-brass stroke-[1.7]" />
            <span className="text-[11px] font-semibold tracking-[-0.06em]">
              FAQ
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
