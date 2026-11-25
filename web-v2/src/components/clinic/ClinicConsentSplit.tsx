"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface ClinicConsentSplitProps {
  generalAgreed: boolean;
  sensitiveAgreed: boolean;
  onGeneralChange: (checked: boolean) => void;
  onSensitiveChange: (checked: boolean) => void;
  generalError?: string;
  sensitiveError?: string;
  theme?: "dark" | "light";
  idPrefix: string;
}

/**
 * 비뇨기과 민감정보 UI 컴플라이언스 모듈
 * - 일반 개인정보 수집·이용 동의와 민감정보(건강정보) 별도 동의 2종 분리
 * - [법무 검토 후 최종 확정]
 */
export function ClinicConsentSplit({
  generalAgreed,
  sensitiveAgreed,
  onGeneralChange,
  onSensitiveChange,
  generalError,
  sensitiveError,
  theme = "dark",
  idPrefix,
}: ClinicConsentSplitProps) {
  const [openDetail, setOpenDetail] = useState<"general" | "sensitive" | null>(
    null
  );

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "divide-y rounded-xl border",
        isDark
          ? "divide-white/12 border-white/15 bg-white/[0.04]"
          : "divide-gj-line border-gj-line bg-gj-cool"
      )}
    >
      {/* 1. 일반 개인정보 수집·이용 동의 */}
      <div className="p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <label
            htmlFor={`${idPrefix}-general`}
            className="flex min-h-[28px] cursor-pointer items-center gap-2.5 text-xs font-medium sm:text-sm"
          >
            <input
              id={`${idPrefix}-general`}
              type="checkbox"
              checked={generalAgreed}
              onChange={(e) => onGeneralChange(e.target.checked)}
              className="h-4 w-4 shrink-0 rounded accent-gj-brass"
            />
            <span className={isDark ? "text-white/90" : "text-gj-ink"}>
              <strong className={isDark ? "text-gj-brass-light" : "text-gj-blue"}>
                [필수]
              </strong>{" "}
              일반 개인정보 수집·이용 동의
            </span>
          </label>

          <button
            type="button"
            onClick={() =>
              setOpenDetail(openDetail === "general" ? null : "general")
            }
            className={cn(
              "inline-flex shrink-0 items-center gap-0.5 text-[11px] font-semibold",
              isDark
                ? "text-white/60 hover:text-white"
                : "text-gj-muted hover:text-gj-navy"
            )}
          >
            전문
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                openDetail === "general" && "rotate-180"
              )}
            />
          </button>
        </div>

        {openDetail === "general" && (
          <p
            className={cn(
              "mt-2.5 rounded-lg p-3 text-[11.5px] leading-relaxed",
              isDark
                ? "bg-black/35 text-white/70"
                : "bg-white text-gj-muted"
            )}
          >
            수집 항목: 성함, 연락처, 희망 진료일시 · 목적: 온라인 예약 접수 확인 및
            확정 전화 안내 · 보유기간: 목적 달성 후 1년 이내 파기(법령에 따른 보관
            의무 제외). 동의를 거부할 수 있으나 예약 접수가 제한됩니다.
          </p>
        )}

        {generalError && (
          <p className="mt-1.5 text-xs font-medium text-rose-400">
            {generalError}
          </p>
        )}
      </div>

      {/* 2. 민감정보(건강정보) 별도 동의 */}
      <div className="p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <label
            htmlFor={`${idPrefix}-sensitive`}
            className="flex min-h-[28px] cursor-pointer items-center gap-2.5 text-xs font-medium sm:text-sm"
          >
            <input
              id={`${idPrefix}-sensitive`}
              type="checkbox"
              checked={sensitiveAgreed}
              onChange={(e) => onSensitiveChange(e.target.checked)}
              className="h-4 w-4 shrink-0 rounded accent-gj-brass"
            />
            <span className={isDark ? "text-white/90" : "text-gj-ink"}>
              <strong className={isDark ? "text-gj-brass-light" : "text-gj-blue"}>
                [필수]
              </strong>{" "}
              민감정보(건강·증상정보) 수집·이용 별도 동의
            </span>
          </label>

          <button
            type="button"
            onClick={() =>
              setOpenDetail(openDetail === "sensitive" ? null : "sensitive")
            }
            className={cn(
              "inline-flex shrink-0 items-center gap-0.5 text-[11px] font-semibold",
              isDark
                ? "text-white/60 hover:text-white"
                : "text-gj-muted hover:text-gj-navy"
            )}
          >
            전문
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                openDetail === "sensitive" && "rotate-180"
              )}
            />
          </button>
        </div>

        {openDetail === "sensitive" && (
          <p
            className={cn(
              "mt-2.5 rounded-lg p-3 text-[11.5px] leading-relaxed",
              isDark
                ? "bg-black/35 text-white/70"
                : "bg-white text-gj-muted"
            )}
          >
            개인정보보호법 제23조에 따라 선택하신 진료 분야 및 기재하신 건강·증상
            정보는 의료진 사전 확인 및 진료 안내 목적으로만 안전하게 이용되며 제3자에게
            제공되지 않습니다.
          </p>
        )}

        {sensitiveError && (
          <p className="mt-1.5 text-xs font-medium text-rose-400">
            {sensitiveError}
          </p>
        )}
      </div>
    </div>
  );
}
