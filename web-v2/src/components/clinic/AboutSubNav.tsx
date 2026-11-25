import Link from "next/link";
import { cn } from "@/lib/cn";

const ABOUT_TABS = [
  { href: "/about/greeting", label: "단일 본원 · 3S 철학" },
  { href: "/about/doctors", label: "2인 전문의 협진" },
  { href: "/about/facilities", label: "시설 · 전용 수술실" },
  { href: "/about/location", label: "진료시간 · 오시는 길" },
] as const;

export function AboutSubNav({ currentPath }: { currentPath: string }) {
  return (
    <div className="border-b border-gj-line bg-[#f6f6f6]">
      <div className="gj-container gj-no-scrollbar flex gap-2 overflow-x-auto py-3">
        {ABOUT_TABS.map((tab) => {
          const active = currentPath === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "shrink-0 rounded-full px-5 py-2 text-sm font-bold transition",
                active
                  ? "bg-black text-white"
                  : "bg-white text-gj-muted hover:text-black"
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
