"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Lock, Menu, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { DEPARTMENT_CENTERS } from "@/lib/data/departments";
import { PRIMARY_NAV_ITEMS } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { MobileDrawer } from "./MobileDrawer";

/**
 * 상단 고정 화이트 헤더 (PC 84px / 모바일 60px)
 * - 6개 1차 메뉴(1280px 줄바꿈 0%) + 우측 골드/다크 필 CTA
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        onMouseLeave={() => setActiveMenu(null)}
        className="fixed inset-x-0 top-0 z-40 border-b border-line-subtle bg-surface-0/95 text-ink-primary backdrop-blur-md"
      >
        <div className="container-page flex h-[60px] items-center justify-between gap-4 lg:h-[84px]">
          {/* 로고 */}
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${CLINIC_INFO.name} 홈`}>
            <img
              src="/assets/brand/logo.png"
              alt={CLINIC_INFO.name}
              className="h-[28px] w-auto object-contain lg:h-[34px]"
            />
          </Link>

          {/* PC GNB (6개 1차 메뉴, whitespace-nowrap) */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="주 메뉴">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isOpen = activeMenu === item.label;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("/").slice(0, 2).join("/"));

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setActiveMenu(item.type === "link" ? null : item.label)
                  }
                >
                  <Link
                    href={item.href}
                    onFocus={() =>
                      setActiveMenu(item.type === "link" ? null : item.label)
                    }
                    className={cn(
                      "inline-flex h-11 items-center gap-1 whitespace-nowrap rounded-lg px-3 text-[15px] font-semibold tracking-tight transition-colors xl:px-4",
                      isActive
                        ? "text-brand-gold-deep"
                        : "text-ink-primary hover:text-brand-gold-deep"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.type !== "link" && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
                          isOpen && "rotate-180 text-brand-gold-deep opacity-100"
                        )}
                      />
                    )}
                  </Link>

                  {/* 일반 드롭다운 */}
                  {isOpen && item.type === "dropdown" && item.children && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-[260px] rounded-xl bg-surface-0 p-2 shadow-2xl ring-1 ring-line-subtle">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveMenu(null)}
                            className="block rounded-lg px-3.5 py-2.5 transition-colors hover:bg-surface-1"
                          >
                            <div className="text-[14px] font-semibold text-ink-primary">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="mt-0.5 text-[12px] text-ink-secondary">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* PC 우측 유틸 (로그인 + 골드/다크 필 CTA) */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <Link
              href="/auth/login"
              className="whitespace-nowrap px-2 py-2 text-[13.5px] font-semibold text-ink-secondary transition-colors hover:text-ink-primary"
            >
              로그인
            </Link>
            <Link
              href="/consultation"
              className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-gold px-4 text-[13.5px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>비밀상담</span>
            </Link>
            <Link
              href="/reservation"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-surface-dark px-4 text-[13.5px] font-bold text-white transition-colors hover:bg-brand-navy"
            >
              온라인 예약
            </Link>
          </div>

          {/* 모바일 우측 액션 (전화 + 햄버거) */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={CLINIC_INFO.phoneHref}
              aria-label={`대표전화 ${CLINIC_INFO.phone} 걸기`}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-primary hover:bg-surface-1"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="전체 메뉴 열기"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-primary hover:bg-surface-1"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* 5대 진료센터 PC 메가 메뉴 */}
        {activeMenu === "진료센터" && (
          <div className="hidden border-t border-line-subtle bg-surface-0 shadow-2xl lg:block">
            <div className="container-page py-8">
              <div className="grid grid-cols-5 gap-6">
                {DEPARTMENT_CENTERS.map((center) => (
                  <div key={center.categorySlug} className="space-y-3">
                    <Link
                      href={`/departments/${center.categorySlug}`}
                      onClick={() => setActiveMenu(null)}
                      className="group block"
                    >
                      <span className="text-[11px] font-bold tracking-[0.12em] text-brand-gold-deep">
                        {center.order} · {center.englishLabel}
                      </span>
                      <div className="mt-1 text-[16px] font-bold text-ink-primary group-hover:text-brand-gold-deep">
                        {center.categoryName}
                      </div>
                    </Link>
                    <ul className="space-y-1.5 border-t border-line-subtle pt-3">
                      {center.items.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/departments/${center.categorySlug}/${sub.slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="block py-1 text-[13.5px] font-medium text-ink-secondary transition-colors hover:text-brand-gold-deep"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
