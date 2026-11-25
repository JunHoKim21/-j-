"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Lock, Menu, Phone, User, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { DEPARTMENT_CENTERS } from "@/lib/data/departments";
import { PRIMARY_NAV_ITEMS } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { MobileDrawer } from "./MobileDrawer";

/**
 * 2단 프리미엄 글래스 헤더 (PC 104px / 모바일 60px)
 * - 좌측 로고(수직 중앙) + 우측 상단 골드 필 CTA·미니멀 아이콘 / 우측 하단 클린 GNB 6개 + 골드 언더라인
 * - 히어로 최상단 은은한 Frosted Glass → 스크롤 시 선명한 화이트 + 미세 그림자
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [channelOpen, setChannelOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sitemapOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSitemapOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sitemapOpen]);

  return (
    <>
      <header
        onMouseLeave={() => {
          setActiveMenu(null);
          setChannelOpen(false);
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isHome && !scrolled && !activeMenu
            ? "border-b border-white/30 bg-white/70 backdrop-blur-md"
            : "border-b border-line-subtle bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
        )}
      >
        {/* PC 2단 럭셔리 헤더 (>=1024px, 높이 104px) */}
        <div className="mx-auto hidden h-[104px] max-w-[1440px] items-center justify-between px-8 lg:flex xl:px-12">
          {/* 좌측: 브랜드 로고 */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label={`${CLINIC_INFO.name} 홈`}
          >
            <img
              src="/assets/brand/logo.png"
              alt={CLINIC_INFO.name}
              className="h-[36px] w-auto object-contain xl:h-[38px]"
            />
          </Link>

          {/* 우측: 2단 스택 (상단 유틸 필 + 아이콘 / 하단 클린 GNB) */}
          <div className="flex h-full flex-col items-end justify-between py-2.5">
            {/* 1단: 상단 골드 필 CTA + 미니멀 유틸 아이콘 */}
            <div className="flex items-center gap-2">
              <Link
                href="/about/location"
                className="inline-flex h-[30px] items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4A548] to-[#B88732] px-3.5 text-[12px] font-bold text-white shadow-xs transition-opacity hover:opacity-90"
              >
                진료안내 · 오시는 길
              </Link>

              {/* 강남J 채널 드롭다운 필 */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setChannelOpen((v) => !v)}
                  onMouseEnter={() => setChannelOpen(true)}
                  aria-expanded={channelOpen}
                  className="inline-flex h-[30px] items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-[#C89B4B] to-[#A6782B] px-3.5 text-[12px] font-bold text-white shadow-xs transition-opacity hover:opacity-90"
                >
                  <span>강남J 채널</span>
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      channelOpen && "rotate-180"
                    )}
                  />
                </button>

                {channelOpen && (
                  <div
                    onMouseLeave={() => setChannelOpen(false)}
                    className="absolute right-0 top-full z-50 pt-2"
                  >
                    <div className="w-[210px] rounded-xl bg-surface-0 p-1.5 shadow-2xl ring-1 ring-line-subtle">
                      <a
                        href={CLINIC_INFO.youtube.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-[13px] font-semibold text-ink-primary hover:bg-surface-1 hover:text-brand-gold-deep"
                      >
                        <span>공식 유튜브 {CLINIC_INFO.youtube.handle}</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                      </a>
                      <Link
                        href="/reservation"
                        onClick={() => setChannelOpen(false)}
                        className="block rounded-lg px-3 py-2 text-[13px] font-semibold text-ink-primary hover:bg-surface-1 hover:text-brand-gold-deep"
                      >
                        온라인 예약 신청
                      </Link>
                      <Link
                        href="/consultation"
                        onClick={() => setChannelOpen(false)}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-semibold text-ink-primary hover:bg-surface-1 hover:text-brand-gold-deep"
                      >
                        <Lock className="h-3.5 w-3.5 text-brand-gold-deep" />
                        <span>1:1 비밀상담</span>
                      </Link>
                      <a
                        href={CLINIC_INFO.phoneHref}
                        className="block rounded-lg px-3 py-2 text-[13px] font-bold tabular-nums text-brand-navy hover:bg-surface-1"
                      >
                        대표전화 {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="ml-1.5 flex items-center gap-1 text-ink-primary">
                <Link
                  href="/auth/login"
                  aria-label="회원 로그인"
                  title="회원 로그인 (1:1 비밀상담)"
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
                >
                  <User className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </Link>
                <button
                  type="button"
                  onClick={() => setSitemapOpen(true)}
                  aria-label="전체 메뉴 사이트맵 열기"
                  title="전체 메뉴"
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-surface-1 hover:text-brand-gold-deep"
                >
                  <span className="flex flex-col gap-[5px]">
                    <span className="block h-[1.6px] w-[18px] bg-current" />
                    <span className="block h-[1.6px] w-[18px] bg-current" />
                  </span>
                </button>
              </div>
            </div>

            {/* 2단: 클린 타이포그래피 GNB (화살표 제거 + 골드 언더라인) */}
            <nav className="flex items-center gap-6 xl:gap-9" aria-label="주 메뉴">
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
                    onMouseEnter={() => {
                      setChannelOpen(false);
                      setActiveMenu(item.type === "link" ? null : item.label);
                    }}
                  >
                    <Link
                      href={item.href}
                      onFocus={() =>
                        setActiveMenu(item.type === "link" ? null : item.label)
                      }
                      className={cn(
                        "relative inline-flex h-[42px] items-center whitespace-nowrap text-[15px] font-bold tracking-[-0.02em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:bg-brand-gold after:transition-transform after:duration-200",
                        isActive || isOpen
                          ? "text-brand-gold-deep after:scale-x-100"
                          : "text-ink-primary hover:text-brand-gold-deep after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {item.label}
                    </Link>

                    {/* 일반 드롭다운 */}
                    {isOpen && item.type === "dropdown" && item.children && (
                      <div className="absolute right-0 top-full pt-2.5">
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
          </div>
        </div>

        {/* 모바일 헤더 (<1024px, 높이 60px) */}
        <div className="container-page flex h-[60px] items-center justify-between lg:hidden">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${CLINIC_INFO.name} 홈`}>
            <img
              src="/assets/brand/logo.png"
              alt={CLINIC_INFO.name}
              className="h-[27px] w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-1">
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
          <div className="hidden border-t border-line-subtle bg-surface-0/98 shadow-2xl backdrop-blur-xl lg:block">
            <div className="mx-auto max-w-[1440px] px-8 py-9 xl:px-12">
              <div className="grid grid-cols-5 gap-7">
                {DEPARTMENT_CENTERS.map((center) => (
                  <div key={center.categorySlug} className="space-y-3">
                    <Link
                      href={`/departments/${center.categorySlug}`}
                      onClick={() => setActiveMenu(null)}
                      className="group block"
                    >
                      <span className="text-[11px] font-bold tracking-[0.14em] text-brand-gold-deep">
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

      {/* PC 전체 메뉴 풀스크린 사이트맵 오버레이 */}
      {sitemapOpen && (
        <div
          className="fixed inset-0 z-50 hidden bg-surface-dark/96 text-white backdrop-blur-xl lg:block"
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
        >
          <div className="mx-auto flex h-full max-w-[1440px] flex-col px-10 py-8 xl:px-12">
            <div className="flex items-center justify-between border-b border-white/12 pb-6">
              <img
                src="/assets/brand/logo-white.png"
                alt={CLINIC_INFO.name}
                className="h-[34px] w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setSitemapOpen(false)}
                aria-label="전체 메뉴 닫기"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid flex-1 grid-cols-5 gap-8 overflow-y-auto py-12">
              {DEPARTMENT_CENTERS.map((center) => (
                <div key={center.categorySlug} className="space-y-4">
                  <Link
                    href={`/departments/${center.categorySlug}`}
                    onClick={() => setSitemapOpen(false)}
                    className="block"
                  >
                    <span className="text-[11px] font-bold tracking-[0.16em] text-brand-gold">
                      {center.order}
                    </span>
                    <div className="mt-1 text-[19px] font-bold text-white hover:text-brand-gold">
                      {center.categoryName}
                    </div>
                  </Link>
                  <ul className="space-y-2 border-t border-white/12 pt-4">
                    {center.items.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/departments/${center.categorySlug}/${sub.slug}`}
                          onClick={() => setSitemapOpen(false)}
                          className="text-[14px] text-white/70 hover:text-brand-gold"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6 text-[14px]">
              <div className="flex flex-wrap gap-6 text-white/80">
                <Link href="/about/greeting" onClick={() => setSitemapOpen(false)} className="hover:text-brand-gold">
                  병원 철학 · 3S
                </Link>
                <Link href="/about/doctors" onClick={() => setSitemapOpen(false)} className="hover:text-brand-gold">
                  2인 전문의 협진
                </Link>
                <Link href="/about/facilities" onClick={() => setSitemapOpen(false)} className="hover:text-brand-gold">
                  시설 · 수술센터
                </Link>
                <Link href="/media" onClick={() => setSitemapOpen(false)} className="hover:text-brand-gold">
                  유튜브 · 언론보도
                </Link>
                <Link href="/notice" onClick={() => setSitemapOpen(false)} className="hover:text-brand-gold">
                  공지사항
                </Link>
                <Link href="/faq" onClick={() => setSitemapOpen(false)} className="hover:text-brand-gold">
                  FAQ
                </Link>
                <Link href="/nonbenefit" onClick={() => setSitemapOpen(false)} className="font-bold text-brand-gold">
                  비급여 진료비용
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/reservation"
                  onClick={() => setSitemapOpen(false)}
                  className="rounded-full bg-brand-gold px-5 py-2.5 text-[13.5px] font-bold text-white hover:bg-brand-gold-deep"
                >
                  온라인 예약
                </Link>
                <Link
                  href="/consultation"
                  onClick={() => setSitemapOpen(false)}
                  className="rounded-full border border-white/25 px-5 py-2.5 text-[13.5px] font-semibold text-white hover:border-brand-gold hover:text-brand-gold"
                >
                  1:1 비밀상담
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
