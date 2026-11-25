"use client";

import Link from "next/link";
import {
  ArrowUp,
  CalendarCheck,
  Clock,
  HelpCircle,
  Lock,
  MapPin,
  PlaySquare,
} from "lucide-react";
import { CLINIC_QUICK_BAR_ITEMS } from "@/data/clinic-navigation";
import { cn } from "@/lib/cn";

const QUICK_ICONS = {
  secret: Lock,
  reserve: CalendarCheck,
  hours: Clock,
  location: MapPin,
  faq: HelpCircle,
  video: PlaySquare,
} as const;

export function GjFloatingQuickBar() {
  return (
    <aside
      aria-label="우측 퀵 메뉴"
      className="fixed right-6 bottom-12 z-40 hidden flex-col gap-2 lg:flex"
    >
      {CLINIC_QUICK_BAR_ITEMS.map((item) => {
        const Icon = QUICK_ICONS[item.id];
        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "group flex h-[74px] w-[74px] flex-col items-center justify-center gap-1.5 rounded-[13px] px-1 text-center shadow-[0_0_15px_rgba(0,0,0,0.16)] transition-transform duration-200 hover:-translate-x-1",
              item.accent
                ? "bg-gradient-to-br from-[#FCA400] via-[#B48539] to-[#6D6A65] text-white"
                : "bg-white text-black"
            )}
          >
            <Icon
              className={cn(
                "h-[22px] w-[22px] stroke-[1.7] transition-transform duration-200 group-hover:scale-110",
                item.accent ? "text-white" : "text-gj-brass"
              )}
            />
            <span className="text-[11.5px] font-semibold leading-tight tracking-[-0.04em]">
              {item.label}
            </span>
          </Link>
        );
      })}

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="페이지 최상단으로 이동"
        className="flex h-[68px] w-[74px] items-center justify-center rounded-[13px] bg-white text-black shadow-[0_0_15px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:text-gj-brass-deep"
      >
        <ArrowUp className="h-5 w-5 stroke-[2]" />
      </button>
    </aside>
  );
}
