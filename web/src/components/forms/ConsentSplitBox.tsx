"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConsentSplitBoxProps {
  privacyChecked: boolean;
  onPrivacyChange: (checked: boolean) => void;
  privacyError?: string;
  sensitiveChecked: boolean;
  onSensitiveChange: (checked: boolean) => void;
  sensitiveError?: string;
  /** 상담 폼에서는 필수(true), 예약 폼에서는 증상 메모 입력 시 조건부 필수(false) */
  sensitiveRequired?: boolean;
  purposeLabel: string;
}

/**
 * 일반 개인정보 + 민감정보(건강정보) 분리 동의 박스
 * [법무 검토 후 최종 확정]
 */
export function ConsentSplitBox({
  privacyChecked,
  onPrivacyChange,
  privacyError,
  sensitiveChecked,
  onSensitiveChange,
  sensitiveError,
  sensitiveRequired = true,
  purposeLabel,
}: ConsentSplitBoxProps) {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openSensitive, setOpenSensitive] = useState(false);

  return (
    <div className="rounded-xl bg-surface-1 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-[13.5px] font-bold text-brand-navy">
        <ShieldCheck className="h-4 w-4 text-brand-gold-deep" />
        <span>개인정보 및 민감정보(건강정보) 분리 동의</span>
      </div>

      <div className="divide-y divide-line-subtle">
        {/* ① 일반 개인정보 수집·이용 동의 */}
        <div className="pb-4">
          <div className="flex items-start justify-between gap-3">
            <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-[14px] font-semibold text-ink-primary">
              <input
                type="checkbox"
                checked={privacyChecked}
                onChange={(e) => onPrivacyChange(e.target.checked)}
                className="h-5 w-5 shrink-0 rounded accent-brand-navy"
              />
              <span>
                <span className="mr-1 font-bold text-brand-blue">[필수]</span>
                일반 개인정보 수집·이용 동의
              </span>
            </label>
            <button
              type="button"
              onClick={() => setOpenPrivacy((v) => !v)}
              aria-expanded={openPrivacy}
              className="mt-2 inline-flex shrink-0 items-center gap-1 text-[12.5px] font-semibold text-ink-secondary hover:text-brand-navy"
            >
              <span>전문 보기</span>
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", openPrivacy && "rotate-180")}
              />
            </button>
          </div>

          {openPrivacy && (
            <div className="mt-2 rounded-lg bg-surface-0 p-4 text-[13px] leading-relaxed text-ink-secondary">
              <p>
                <strong>수집 항목:</strong> 성함(또는 닉네임), 연락처(또는 이메일), 희망 일정
              </p>
              <p className="mt-1">
                <strong>수집 목적:</strong> {purposeLabel}
              </p>
              <p className="mt-1">
                <strong>보유 기간:</strong> 처리·답변 완료 후 1년 보관 후 지체 없이 영구 파기 (동의 거부 시 서비스 이용이 제한될 수 있습니다.)
              </p>
            </div>
          )}

          {privacyError && (
            <p role="alert" className="mt-1.5 pl-8 text-[13px] font-semibold text-red-700">
              {privacyError}
            </p>
          )}
        </div>

        {/* ② 민감정보(건강정보) 별도 동의 */}
        <div className="pt-4">
          <div className="flex items-start justify-between gap-3">
            <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-[14px] font-semibold text-ink-primary">
              <input
                type="checkbox"
                checked={sensitiveChecked}
                onChange={(e) => onSensitiveChange(e.target.checked)}
                className="h-5 w-5 shrink-0 rounded accent-brand-navy"
              />
              <span>
                <span className="mr-1 font-bold text-brand-gold-deep">
                  {sensitiveRequired ? "[필수]" : "[증상 입력 시 필수]"}
                </span>
                민감정보(건강·증상정보) 수집·이용 별도 동의
              </span>
            </label>
            <button
              type="button"
              onClick={() => setOpenSensitive((v) => !v)}
              aria-expanded={openSensitive}
              className="mt-2 inline-flex shrink-0 items-center gap-1 text-[12.5px] font-semibold text-ink-secondary hover:text-brand-navy"
            >
              <span>전문 보기</span>
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", openSensitive && "rotate-180")}
              />
            </button>
          </div>

          {openSensitive && (
            <div className="mt-2 rounded-lg bg-surface-0 p-4 text-[13px] leading-relaxed text-ink-secondary">
              <p>
                <strong>수집 항목:</strong> 사용자가 직접 기재한 비뇨기과 증상, 병력, 수술 관련 건강 문의 내용
              </p>
              <p className="mt-1">
                <strong>수집 목적:</strong> 전문의 사전 확인 및 정확한 진료·상담 안내 (외부 AI 서비스 미전송)
              </p>
              <p className="mt-1">
                <strong>보유 기간:</strong> 목적 달성 후 1년 보관 후 영구 파기 (회원 탈퇴 시 즉시 파기)
              </p>
            </div>
          )}

          {sensitiveError && (
            <p role="alert" className="mt-1.5 pl-8 text-[13px] font-semibold text-red-700">
              {sensitiveError}
            </p>
          )}
        </div>
      </div>

      {/* [법무 검토 후 최종 확정] */}
      <p className="mt-3 text-[11.5px] text-ink-secondary/80">
        ※ 동의 이력은 법령 준수를 위해 서버에 안전하게 기록됩니다. (법무 검토 후 최종 확정)
      </p>
    </div>
  );
}
