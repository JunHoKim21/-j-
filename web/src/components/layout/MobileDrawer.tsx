"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Lock, Phone, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { DEPARTMENT_CENTERS } from "@/lib/data/departments";
import { PRIMARY_NAV_ITEMS } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>("진료센터");

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="모바일 전체 메뉴">
      <button
        type="button"
        aria-label="메뉴 닫기"
        onClick={onClose}
        className="absolute inset-0 bg-surface-dark/60 backdrop-blur-[2px]"
      />
      <aside className="absolute right-0 top-0 flex h-dvh w-[min(88vw,360px)] flex-col bg-surface-0 shadow-2xl">
        <div className="flex h-[60px] items-center justify-between border-b border-line-subtle px-5">
          <span className="text-[15px] font-bold tracking-tight text-brand-navy">
            {CLINIC_INFO.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="메뉴 닫기"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-primary hover:bg-surface-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 경량 회원 유틸 바 */}
        <div className="flex items-center justify-between bg-surface-1 px-5 py-3.5">
          <div className="flex items-center gap-2 text-[13px] font-medium text-ink-secondary">
            <Lock className="h-3.5 w-3.5 text-brand-blue" />
            <span>1:1 비밀상담 회원</span>
          </div>
          <div className="flex items-center gap-3 text-[13px] font-semibold">
            <Link href="/auth/login" onClick={onClose} className="text-brand-navy hover:underline">
              로그인
            </Link>
            <span className="text-line-subtle">|</span>
            <Link href="/auth/signup" onClick={onClose} className="text-brand-blue hover:underline">
              회원가입
            </Link>
          </div>
        </div>

        {/* 아코디언 GNB */}
        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="모바일 내비게이션">
          <ul className="divide-y divide-line-subtle/70">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isExpandable = item.type !== "link";
              const isOpen = expanded === item.label;

              if (!isExpandable) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex min-h-[52px] items-center justify-between text-[16px] font-semibold text-ink-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className="flex min-h-[52px] w-full items-center justify-between text-left text-[16px] font-semibold text-ink-primary"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-ink-secondary transition-transform duration-200",
                        isOpen && "rotate-180 text-brand-blue"
                      )}
                    />
                  </button>

                  {isOpen && item.type === "dropdown" && item.children && (
                    <ul className="space-y-1 pb-4 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2.5 text-[14.5px] font-medium text-ink-secondary hover:bg-surface-1 hover:text-brand-navy"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {isOpen && item.type === "mega-departments" && (
                    <div className="space-y-4 pb-4 pl-2">
                      {DEPARTMENT_CENTERS.map((center) => (
                        <div key={center.categorySlug} className="space-y-1.5">
                          <Link
                            href={`/departments/${center.categorySlug}`}
                            onClick={onClose}
                            className="inline-flex items-center gap-2 text-[14px] font-bold text-brand-navy"
                          >
                            <span className="text-[11px] font-semibold text-brand-brass">
                              {center.order}
                            </span>
                            {center.categoryName}
                          </Link>
                          <div className="flex flex-wrap gap-1.5 pl-5">
                            {center.items.map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/departments/${center.categorySlug}/${sub.slug}`}
                                onClick={onClose}
                                className="rounded-md bg-surface-1 px-2.5 py-1.5 text-[12.5px] text-ink-secondary hover:bg-surface-2 hover:text-brand-navy"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 하단 빠른 액션 */}
        <div className="border-t border-line-subtle bg-surface-1 p-5 space-y-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href="/reservation"
              onClick={onClose}
              className="flex h-11 items-center justify-center rounded-lg bg-brand-navy text-[14px] font-semibold text-white"
            >
              온라인 예약
            </Link>
            <Link
              href="/nonbenefit"
              onClick={onClose}
              className="flex h-11 items-center justify-center rounded-lg bg-surface-0 text-[14px] font-semibold text-brand-navy"
            >
              비급여 안내
            </Link>
          </div>
          <a
            href={CLINIC_INFO.phoneHref}
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-surface-2 text-[14px] font-semibold tabular-nums text-brand-navy"
          >
            <Phone className="h-4 w-4 text-brand-blue" />
            대표전화 {CLINIC_INFO.phone}
          </a>
        </div>
      </aside>
    </div>
  );
}
