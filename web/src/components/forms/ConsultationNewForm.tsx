"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Lock } from "lucide-react";
import { formatKoreanPhone } from "@/lib/format";
import {
  CONSULTATION_CATEGORIES,
  consultationSchema,
  type ConsultationFormValues,
} from "@/lib/validations/consultation";
import { ConsentSplitBox } from "./ConsentSplitBox";
import { cn } from "@/lib/utils";

export function ConsultationNewForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      categorySlug: CONSULTATION_CATEGORIES[0],
      title: "",
      content: "",
      contactPhone: "",
      privacyAgreed: false,
      sensitiveAgreed: false,
    },
  });

  const selectedCat = useWatch({ control, name: "categorySlug" });
  const privacyAgreed = useWatch({ control, name: "privacyAgreed" });
  const sensitiveAgreed = useWatch({ control, name: "sensitiveAgreed" });

  const onSubmit = async () => {
    // STEP 6에서 createConsultationAction(requireMember + Zod + consent_record 트랜잭션)으로 교체 예정
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("gnj_preview_member", "1");
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-surface-1 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-blue" />
        <h2 className="mt-4 text-[24px] font-bold text-brand-navy">
          1:1 비밀상담이 정상 접수되었습니다
        </h2>
        <p className="mx-auto mt-2.5 max-w-[460px] text-[14.5px] leading-relaxed text-ink-secondary">
          작성하신 글은 본인과 담당 의료진만 열람할 수 있습니다.
          전문의 확인 후 순차적으로 답변을 등록해 드립니다.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link
            href="/consultation"
            className="inline-flex h-11 items-center justify-center rounded-full bg-surface-dark px-6 text-[14px] font-bold text-white hover:bg-brand-gold-deep"
          >
            내 비밀상담 목록 보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* 카테고리 */}
      <fieldset className="space-y-3">
        <legend className="text-[15.5px] font-bold text-brand-navy">
          상담 분야 <span className="text-brand-blue">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {CONSULTATION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setValue("categorySlug", cat, { shouldValidate: true })}
              className={cn(
                "min-h-[44px] rounded-xl px-3 py-2 text-[13.5px] font-semibold transition-colors",
                selectedCat === cat
                  ? "bg-surface-dark text-white"
                  : "bg-surface-1 text-ink-secondary hover:bg-surface-2 hover:text-ink-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </fieldset>

      {/* 제목 */}
      <div>
        <label htmlFor="consult-title" className="mb-1.5 block text-[14px] font-bold text-brand-navy">
          제목 <span className="text-brand-blue">*</span>
        </label>
        <input
          id="consult-title"
          type="text"
          placeholder="예: 전립선비대증 검사 및 수술 상담 문의"
          {...register("title")}
          className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] focus:border-brand-blue focus:outline-none"
        />
        {errors.title && (
          <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* 상담 내용 */}
      <div>
        <label htmlFor="consult-content" className="mb-1.5 block text-[14px] font-bold text-brand-navy">
          상담 내용 (10자 이상) <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="consult-content"
          rows={7}
          placeholder="현재 불편하신 증상, 기간, 궁금하신 사항을 편하게 작성해 주세요. 작성 내용은 비공개로 안전하게 보호됩니다."
          {...register("content")}
          className="w-full rounded-xl border border-line-subtle bg-surface-0 p-4 text-[15px] leading-[1.75] focus:border-brand-blue focus:outline-none"
        />
        {errors.content && (
          <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
            {errors.content.message}
          </p>
        )}
      </div>

      {/* 선택 회신 연락처 */}
      <div>
        <label htmlFor="consult-phone" className="mb-1.5 block text-[14px] font-bold text-brand-navy">
          회신 연락처 (선택 — 전화 안내를 함께 원하시는 경우에만 입력)
        </label>
        <input
          id="consult-phone"
          type="tel"
          placeholder="010-0000-0000"
          {...register("contactPhone", {
            onChange: (e) => {
              setValue("contactPhone", formatKoreanPhone(e.target.value), { shouldValidate: true });
            },
          })}
          className="h-12 w-full max-w-[320px] rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] tabular-nums focus:border-brand-blue focus:outline-none"
        />
        {errors.contactPhone && (
          <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
            {errors.contactPhone.message}
          </p>
        )}
      </div>

      {/* 일반 개인정보 + 민감정보(건강정보) 별도 필수 동의 2종 */}
      <ConsentSplitBox
        privacyChecked={Boolean(privacyAgreed)}
        onPrivacyChange={(checked) => setValue("privacyAgreed", checked, { shouldValidate: true })}
        privacyError={errors.privacyAgreed?.message}
        sensitiveChecked={Boolean(sensitiveAgreed)}
        onSensitiveChange={(checked) =>
          setValue("sensitiveAgreed", checked, { shouldValidate: true })
        }
        sensitiveError={errors.sensitiveAgreed?.message}
        sensitiveRequired={true}
        purposeLabel="1:1 비밀상담 접수, 본인 확인 및 전문의 답변 제공"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Link
          href="/consultation"
          className="inline-flex h-12 items-center justify-center rounded-full bg-surface-1 px-6 text-[14.5px] font-semibold text-ink-secondary hover:bg-surface-2"
        >
          취소
        </Link>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-surface-dark px-8 text-[15px] font-bold text-white hover:bg-brand-gold-deep disabled:opacity-60"
        >
          <Lock className="h-4 w-4 text-brand-gold" />
          <span>1:1 비밀상담 등록</span>
        </button>
      </div>
    </form>
  );
}
