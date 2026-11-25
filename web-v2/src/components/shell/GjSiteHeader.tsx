"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Lock,
  Phone,
  Search,
  User,
  X,
} from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { CLINIC_GNB_ENTRIES } from "@/data/clinic-navigation";
import {
  ALL_UROLOGY_TREATMENT_INDEX,
  UROLOGY_CENTERS,
} from "@/data/urology-centers";
import { cn } from "@/lib/cn";

export function GjSiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [channelMenuOpen, setChannelMenuOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("prostate");
  const [quickQuery, setQuickQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sitemapOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSitemapOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [sitemapOpen]);

  const floatingMatches = useMemo(() => {
    const q = quickQuery.trim().toLowerCase();
    if (!q) return [];
    return ALL_UROLOGY_TREATMENT_INDEX.filter((item) =>
      [item.name, item.centerTitle, ...item.keywords]
        .join(" ")
        .toLowerCase()
        .includes(q)
    ).slice(0, 5);
  }, [quickQuery]);

  // scrollY >= 100 또는 GNB 호버 시 완전 불투명 화이트 전환 + 미세 그림자
  const isSolidWhite = isScrolled || hoveredId !== null;

  const getDropdownLinks = (entryId: string) => {
    const entry = CLINIC_GNB_ENTRIES.find((item) => item.id === entryId);
    if (!entry) return [];
    if (entry.centerSlug) {
      const center = UROLOGY_CENTERS.find((c) => c.slug === entry.centerSlug);
      return (
        center?.treatments.map((t) => ({
          label: t.name,
          href: `/departments/${center.slug}/${t.slug}`,
        })) ?? []
      );
    }
    return entry.subLinks ?? [];
  };

  return (
    <>
      <header
        data-gj-header={isSolidWhite ? "solid" : "frosted"}
        onMouseLeave={() => {
          setHoveredId(null);
          setChannelMenuOpen(false);
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isSolidWhite
            ? "bg-white text-black shadow-[0_0_8px_rgba(0,0,0,0.1)]"
            : "bg-[#f8f8f8]/72 text-black backdrop-blur-[15px]"
        )}
      >
        {/* PC 2단 통합 바 (총 높이 110px: 좌 로고 수직중앙 + 우 2단 스택) */}
        <div className="mx-auto hidden h-[110px] max-w-[1530px] items-center justify-between px-5 lg:flex xl:px-8">
          {/* 좌측 컬러 로고 */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label={`${CLINIC_PROFILE.clinicName} 홈으로 이동`}
          >
            <img
              src="/assets/brand/logo.png"
              alt={CLINIC_PROFILE.clinicName}
              className="h-[34px] w-auto object-contain xl:h-[38px]"
            />
          </Link>

          {/* 우측 2단 스택 (1단 유틸 필·아이콘 / 2단 8열 클린 GNB) */}
          <div className="flex h-full flex-col items-end justify-between pt-3">
            {/* 상단 유틸 행 */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/about/location"
                className="inline-flex h-[32px] items-center rounded-full bg-gj-brass px-4 text-[12.5px] font-bold text-white transition hover:bg-gj-brass-deep"
              >
                학동역 본원안내
              </Link>

              {/* 강남J 채널 드롭다운 필 */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setChannelMenuOpen((v) => !v)}
                  onMouseEnter={() => setChannelMenuOpen(true)}
                  className="inline-flex h-[32px] items-center gap-1 rounded-full bg-gj-brass px-4 text-[12.5px] font-bold text-white transition hover:bg-gj-brass-deep"
                >
                  <span>강남J 채널</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      channelMenuOpen && "rotate-180"
                    )}
                  />
                </button>

                {channelMenuOpen && (
                  <div
                    onMouseLeave={() => setChannelMenuOpen(false)}
                    className="absolute right-0 top-full z-50 pt-2"
                  >
                    <div className="w-[215px] rounded-xl border border-gj-line bg-white p-1.5 shadow-xl">
                      <a
                        href={CLINIC_PROFILE.youtubeChannel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-semibold text-black hover:bg-gj-cool hover:text-gj-brass-deep"
                      >
                        <span>공식 유튜브 @uroj</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                      </a>
                      <a
                        href={CLINIC_PROFILE.mainPhoneHref}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-semibold tabular-nums text-black hover:bg-gj-cool hover:text-gj-brass-deep"
                      >
                        <span>대표전화 {CLINIC_PROFILE.mainPhone}</span>
                        <Phone className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={CLINIC_PROFILE.mainPhoneHref}
                aria-label="대표전화 연결"
                className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-black/80 transition hover:bg-black/5 hover:text-black"
              >
                <Phone className="h-[18px] w-[18px] stroke-[1.7]" />
              </a>

              <Link
                href="/consultation"
                aria-label="1:1 비밀상담 로그인"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-black/80 transition hover:bg-black/5 hover:text-black"
              >
                <User className="h-[19px] w-[19px] stroke-[1.7]" />
              </Link>

              {/* 레퍼런스 2-bar 미니멀 햄버거 */}
              <button
                type="button"
                onClick={() => setSitemapOpen(true)}
                aria-label="전체 메뉴 열기"
                className="ml-1 inline-flex h-8 w-8 flex-col items-center justify-center gap-[6px] rounded-md transition hover:bg-black/5"
              >
                <span className="h-[2px] w-[22px] bg-black" />
                <span className="h-[2px] w-[22px] bg-black" />
              </button>
            </div>

            {/* 하단 메인 GNB 행 (높이 56px, 클린 8열 텍스트) */}
            <nav aria-label="주 메뉴" className="flex items-center">
              {CLINIC_GNB_ENTRIES.map((item) => {
                const active = hoveredId === item.id;
                const subItems = getDropdownLinks(item.id);
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoveredId(item.id)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative inline-flex h-[56px] items-center px-3 text-[14.5px] font-semibold tracking-[-0.02em] text-black transition-colors xl:px-[18px] xl:text-[15px]",
                        active && "text-gj-brass-deep"
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={cn(
                          "absolute inset-x-3 bottom-0 h-[2.5px] bg-gj-brass transition-transform duration-200",
                          active ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </Link>

                    {/* 컬럼형 다크 블러 드롭다운 */}
                    {active && subItems.length > 0 && (
                      <div className="absolute left-1/2 top-full z-50 min-w-[176px] -translate-x-1/2 bg-[#101010]/96 py-5 text-center backdrop-blur-[15px] shadow-2xl">
                        <ul className="space-y-1">
                          {subItems.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                onClick={() => setHoveredId(null)}
                                className="block px-5 py-2 text-[13.5px] font-medium whitespace-nowrap text-white/65 transition hover:text-white"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* 모바일 단일 헤더 (60px) */}
        <div className="flex h-[60px] items-center justify-between px-4 lg:hidden">
          <Link href="/" className="flex items-center" aria-label={CLINIC_PROFILE.clinicName}>
            <img
              src="/assets/brand/logo.png"
              alt={CLINIC_PROFILE.clinicName}
              className="h-[24px] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-1">
            <a
              href={CLINIC_PROFILE.mainPhoneHref}
              aria-label="대표전화 연결"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black"
            >
              <Phone className="h-[18px] w-[18px]" />
            </a>
            <Link
              href="/#quick-reservation"
              aria-label="1:1 비밀상담"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black"
            >
              <User className="h-[19px] w-[19px]" />
            </Link>
            <button
              type="button"
              onClick={() => setSitemapOpen(true)}
              aria-label="모바일 전체 메뉴 열기"
              className="inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
              <span className="h-[2px] w-[20px] bg-black" />
              <span className="h-[2px] w-[20px] bg-black" />
            </button>
          </div>
        </div>
      </header>

      {/* 헤더 우측 하단 플로팅 빠른 진료 검색 필 (레퍼런스 시그니처 460x48px) */}
      <div className="pointer-events-none fixed inset-x-0 top-[70px] z-40 px-4 lg:top-[122px] lg:px-8">
        <div className="mx-auto flex max-w-[1530px] justify-end">
          <div className="pointer-events-auto relative w-full max-w-[360px] lg:max-w-[440px]">
            <div className="flex h-[44px] items-center gap-2.5 rounded-xl bg-white/95 px-3 shadow-[0_8px_28px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur-md lg:h-[48px]">
              <span className="inline-flex h-7 shrink-0 items-center rounded-md bg-gradient-to-br from-gj-brass to-[#7B6135] px-2 text-[11px] font-extrabold tracking-tight text-white">
                진료
              </span>
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="증상이나 시술명을 입력해 주세요"
                aria-label="상단 빠른 진료 검색"
                className="w-full bg-transparent text-[13.5px] font-medium text-black placeholder:text-black/45 focus:outline-none lg:text-[14px]"
              />
              {quickQuery ? (
                <button
                  type="button"
                  onClick={() => setQuickQuery("")}
                  aria-label="검색어 지우기"
                  className="text-black/45 hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <Search className="h-[18px] w-[18px] shrink-0 text-black/75" />
              )}
            </div>

            {floatingMatches.length > 0 && (
              <ul className="mt-1.5 divide-y divide-gj-line overflow-hidden rounded-xl border border-gj-line bg-white shadow-2xl">
                {floatingMatches.map((m) => (
                  <li key={`${m.centerSlug}-${m.slug}`}>
                    <Link
                      href={m.href}
                      onClick={() => setQuickQuery("")}
                      className="flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gj-cool"
                    >
                      <div>
                        <span className="text-[11px] font-semibold text-gj-brass-deep">
                          {m.centerTitle}
                        </span>
                        <p className="font-bold text-black">{m.name}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-gj-brass-deep" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* 풀뷰포트 다크 사이트맵 오버레이 (PC 6열 / 모바일 아코디언) */}
      {sitemapOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="강남J비뇨기과 전체 사이트맵"
          className="fixed inset-0 z-[80] flex flex-col bg-[#101010] text-white"
        >
          <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/15 px-5 lg:h-[90px] lg:px-10">
            <Link href="/" onClick={() => setSitemapOpen(false)}>
              <img
                src="/assets/brand/logo-white.png"
                alt={CLINIC_PROFILE.clinicName}
                className="h-7 w-auto lg:h-9"
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/#clinic-location"
                onClick={() => setSitemapOpen(false)}
                className="rounded-full bg-gj-brass px-3.5 py-1.5 text-xs font-bold text-white"
              >
                학동역 본원안내
              </Link>
              <button
                type="button"
                onClick={() => setSitemapOpen(false)}
                aria-label="전체 메뉴 닫기"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-8 lg:px-10 lg:py-14">
            {/* PC 6컬럼 사이트맵 */}
            <div className="mx-auto hidden max-w-[1400px] grid-cols-6 divide-x divide-white/12 lg:grid">
              <div className="pr-6">
                <h2 className="text-lg font-bold text-gj-brass">강남J 스토리</h2>
                <ul className="mt-5 space-y-3 text-[15px] text-white/75">
                  <li>
                    <Link href="/about/greeting" onClick={() => setSitemapOpen(false)} className="hover:text-white">
                      단일 본원 · 3S 철학
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/doctors" onClick={() => setSitemapOpen(false)} className="hover:text-white">
                      박천진·이웅희 2인 협진
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/facilities" onClick={() => setSitemapOpen(false)} className="hover:text-white">
                      시설 · 전용 수술실
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/location" onClick={() => setSitemapOpen(false)} className="hover:text-white">
                      진료시간 · 오시는 길
                    </Link>
                  </li>
                  <li>
                    <Link href="/media" onClick={() => setSitemapOpen(false)} className="hover:text-white">
                      Video Gallery (@uroj)
                    </Link>
                  </li>
                  <li>
                    <Link href="/notice" onClick={() => setSitemapOpen(false)} className="hover:text-white">
                      공지사항 · FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation" onClick={() => setSitemapOpen(false)} className="text-gj-brass-light hover:text-white">
                      비회원 온라인 예약
                    </Link>
                  </li>
                  <li>
                    <Link href="/consultation" onClick={() => setSitemapOpen(false)} className="text-gj-brass-light hover:text-white">
                      1:1 비밀상담
                    </Link>
                  </li>
                </ul>
              </div>

              {UROLOGY_CENTERS.map((center) => (
                <div key={center.slug} className="px-6">
                  <Link
                    href={`/departments/${center.slug}`}
                    onClick={() => setSitemapOpen(false)}
                    className="text-lg font-bold text-white hover:text-gj-brass"
                  >
                    {center.title}
                  </Link>
                  <ul className="mt-5 space-y-3 text-[14.5px] text-white/70">
                    {center.treatments.map((tr) => (
                      <li key={tr.slug}>
                        <Link
                          href={`/departments/${center.slug}/${tr.slug}`}
                          onClick={() => setSitemapOpen(false)}
                          className="hover:text-gj-brass-light"
                        >
                          {tr.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 모바일 아코디언 */}
            <div className="space-y-2.5 lg:hidden">
              {UROLOGY_CENTERS.map((center) => {
                const open = mobileAccordion === center.slug;
                return (
                  <div
                    key={center.slug}
                    className="overflow-hidden rounded-xl border border-white/15 bg-white/[0.04]"
                  >
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(open ? null : center.slug)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-[15px] font-bold"
                    >
                      <span>
                        <span className="mr-2 text-xs text-gj-brass">{center.order}</span>
                        {center.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-gj-brass transition-transform",
                          open && "rotate-180"
                        )}
                      />
                    </button>
                    {open && (
                      <ul className="border-t border-white/10 px-4 py-2.5">
                        {center.treatments.map((tr) => (
                          <li key={tr.slug}>
                            <Link
                              href={`/departments/${center.slug}/${tr.slug}`}
                              onClick={() => setSitemapOpen(false)}
                              className="block py-2 text-sm text-white/75"
                            >
                              {tr.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

              <div className="grid grid-cols-2 gap-2.5 pt-4">
                <Link
                  href="/reservation"
                  onClick={() => setSitemapOpen(false)}
                  className="flex h-12 items-center justify-center gap-1.5 rounded-xl bg-gj-brass text-sm font-bold text-white"
                >
                  <Lock className="h-4 w-4" />
                  온라인 예약
                </Link>
                <Link
                  href="/consultation"
                  onClick={() => setSitemapOpen(false)}
                  className="flex h-12 items-center justify-center gap-1.5 rounded-xl border border-white/25 text-sm font-bold text-white"
                >
                  <Lock className="h-4 w-4 text-gj-brass" />
                  1:1 비밀상담
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
