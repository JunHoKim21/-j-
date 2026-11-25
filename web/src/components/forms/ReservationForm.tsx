"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { formatKoreanPhone } from "@/lib/format";
import {
  getDayAvailability,
  PREFERRED_DOCTORS,
  RESERVATION_CENTERS,
  reservationSchema,
  TIME_SLOTS,
  type PreferredDoctorId,
  type ReservationFormValues,
} from "@/lib/validations/reservation";
import { ConsentSplitBox } from "./ConsentSplitBox";
import { cn } from "@/lib/utils";

function getTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function ReservationForm() {
  const [submittedSummary, setSubmittedSummary] = useState<{
    departmentCategory: string;
    doctorLabel: string;
    preferredDate: string;
    timeSlotLabel: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      departmentCategory: RESERVATION_CENTERS[0],
      preferredDoctorId: "any",
      preferredDate: "",
      preferredTimeSlot: "",
      patientName: "",
      patientPhone: "",
      symptomMemo: "",
      privacyAgreed: false,
      sensitiveAgreed: false,
      website: "",
    },
  });

  const selectedCenter = useWatch({ control, name: "departmentCategory" });
  const selectedDoctor = useWatch({ control, name: "preferredDoctorId" }) as PreferredDoctorId;
  const selectedDate = useWatch({ control, name: "preferredDate" });
  const selectedSlot = useWatch({ control, name: "preferredTimeSlot" });
  const privacyAgreed = useWatch({ control, name: "privacyAgreed" });
  const sensitiveAgreed = useWatch({ control, name: "sensitiveAgreed" });

  const availability = getDayAvailability(selectedDate, selectedDoctor);

  const onSubmit = async (data: ReservationFormValues) => {
    // STEP 6에서 createReservationAction(Server Action)으로 교체 예정
    const doctorObj = PREFERRED_DOCTORS.find((d) => d.id === data.preferredDoctorId);
    const slotObj = TIME_SLOTS.find((s) => s.value === data.preferredTimeSlot);
    setSubmittedSummary({
      departmentCategory: data.departmentCategory,
      doctorLabel: doctorObj?.label ?? "의료진 무관",
      preferredDate: data.preferredDate,
      timeSlotLabel: slotObj?.label ?? data.preferredTimeSlot,
    });
  };

  if (submittedSummary) {
    return (
      <div className="rounded-2xl bg-surface-1 p-7 text-center sm:p-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-status-received-bg px-3.5 py-1 text-[12.5px] font-bold text-status-received-fg">
          <CheckCircle2 className="h-3.5 w-3.5" />
          확인 대기 (예약 접수 완료)
        </span>

        <h2 className="mt-4 text-[24px] font-bold tracking-tight text-brand-navy sm:text-[28px]">
          온라인 예약 신청이 접수되었습니다
        </h2>

        <div className="mx-auto mt-5 max-w-[540px] rounded-xl bg-surface-0 p-5 text-[14.5px] leading-relaxed text-ink-secondary">
          <strong className="text-brand-navy">아직 예약이 확정되지 않았습니다.</strong>
          <br />
          병원 담당자가 진료 일정을 확인한 후{" "}
          <strong className="tabular-nums text-brand-blue">{CLINIC_INFO.phone}</strong> 번호로{" "}
          <strong className="text-brand-navy">확정 전화</strong>를 드립니다.
        </div>

        <dl className="mx-auto mt-6 max-w-[460px] divide-y divide-line-subtle rounded-xl bg-surface-0 px-5 text-left text-[14px]">
          <div className="flex justify-between py-3">
            <dt className="text-ink-secondary">진료 분야</dt>
            <dd className="font-semibold text-ink-primary">{submittedSummary.departmentCategory}</dd>
          </div>
          <div className="flex justify-between py-3">
            <dt className="text-ink-secondary">희망 의료진</dt>
            <dd className="font-semibold text-ink-primary">{submittedSummary.doctorLabel}</dd>
          </div>
          <div className="flex justify-between py-3">
            <dt className="text-ink-secondary">희망 일시</dt>
            <dd className="font-bold tabular-nums text-brand-navy">
              {submittedSummary.preferredDate} · {submittedSummary.timeSlotLabel}
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-surface-dark px-6 text-[14.5px] font-bold tabular-nums text-white hover:bg-brand-gold-deep"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            <span>대표전화 {CLINIC_INFO.phone}</span>
          </a>
          <Link
            href="/about/location"
            className="inline-flex h-12 items-center justify-center rounded-full bg-surface-0 px-6 text-[14.5px] font-bold text-ink-primary hover:bg-surface-2"
          >
            오시는 길 확인
          </Link>
          <button
            type="button"
            onClick={() => {
              reset();
              setSubmittedSummary(null);
            }}
            className="inline-flex h-12 items-center justify-center rounded-full px-5 text-[14px] font-semibold text-ink-secondary hover:text-ink-primary"
          >
            새 예약 신청
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-9" noValidate>
      {/* Honeypot (스팸 봇 방어) */}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      {/* 1. 진료 분야 선택 */}
      <fieldset className="space-y-3">
        <legend className="text-[16px] font-bold text-brand-navy">
          1. 진료 분야 선택 <span className="text-brand-blue">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {RESERVATION_CENTERS.map((center) => (
            <button
              key={center}
              type="button"
              onClick={() => setValue("departmentCategory", center, { shouldValidate: true })}
              className={cn(
                "min-h-[46px] rounded-xl px-3 py-2.5 text-[13.5px] font-semibold transition-colors",
                selectedCenter === center
                  ? "bg-surface-dark text-white"
                  : "bg-surface-1 text-ink-secondary hover:bg-surface-2 hover:text-ink-primary"
              )}
            >
              {center}
            </button>
          ))}
        </div>
        {errors.departmentCategory && (
          <p role="alert" className="text-[13px] font-semibold text-red-700">
            {errors.departmentCategory.message}
          </p>
        )}
      </fieldset>

      {/* 2. 희망 의료진 선택 */}
      <fieldset className="space-y-3">
        <legend className="text-[16px] font-bold text-brand-navy">
          2. 희망 의료진 선택 <span className="text-brand-blue">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {PREFERRED_DOCTORS.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => {
                setValue("preferredDoctorId", doc.id, { shouldValidate: true });
                if (selectedDate) {
                  const nextAvail = getDayAvailability(selectedDate, doc.id);
                  const curSlot = TIME_SLOTS.find((s) => s.value === selectedSlot);
                  if (nextAvail.dayDisabled || (nextAvail.pmDisabled && curSlot?.period === "PM")) {
                    setValue("preferredTimeSlot", "", { shouldValidate: true });
                  }
                }
              }}
              className={cn(
                "min-h-[54px] rounded-xl px-4 py-3 text-left text-[13.5px] font-semibold transition-colors",
                selectedDoctor === doc.id
                  ? "bg-surface-dark text-white"
                  : "bg-surface-1 text-ink-primary hover:bg-surface-2"
              )}
            >
              {doc.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* 3. 희망 날짜 및 시간대 선택 (휴진 요일 자동 비활성화) */}
      <div className="space-y-4">
        <h2 className="text-[16px] font-bold text-brand-navy">
          3. 희망 날짜 및 시간대 <span className="text-brand-blue">*</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="preferredDate" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
              희망 날짜
            </label>
            <input
              id="preferredDate"
              type="date"
              min={getTodayIso()}
              {...register("preferredDate", {
                onChange: (e) => {
                  const nextAvail = getDayAvailability(e.target.value, selectedDoctor);
                  const curSlot = TIME_SLOTS.find((s) => s.value === selectedSlot);
                  if (nextAvail.dayDisabled || (nextAvail.pmDisabled && curSlot?.period === "PM")) {
                    setValue("preferredTimeSlot", "", { shouldValidate: false });
                  }
                },
              })}
              className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] tabular-nums text-ink-primary focus:border-brand-blue focus:outline-none"
            />
            {errors.preferredDate && (
              <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
                {errors.preferredDate.message}
              </p>
            )}
          </div>
        </div>

        {/* 휴진 요일 / 오후 휴진 자동 사유 안내 */}
        {availability.reason && (
          <div
            role="status"
            className="flex items-start gap-2.5 rounded-xl bg-status-review-bg px-4 py-3.5 text-[13.5px] font-medium text-status-review-fg"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{availability.reason}</span>
          </div>
        )}

        <div>
          <span className="mb-2 block text-[13.5px] font-semibold text-ink-secondary">
            희망 시간대
          </span>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {TIME_SLOTS.map((slot) => {
              const disabled =
                availability.dayDisabled || (availability.pmDisabled && slot.period === "PM");
              return (
                <button
                  key={slot.value}
                  type="button"
                  disabled={disabled}
                  onClick={() => setValue("preferredTimeSlot", slot.value, { shouldValidate: true })}
                  className={cn(
                    "min-h-[46px] rounded-xl px-3 py-2.5 text-[14px] font-semibold tabular-nums transition-colors",
                    disabled
                      ? "cursor-not-allowed bg-status-off-bg text-status-off-fg line-through opacity-60"
                      : selectedSlot === slot.value
                        ? "bg-brand-navy text-white"
                        : "bg-surface-1 text-ink-primary hover:bg-surface-2"
                  )}
                >
                  {slot.label}
                </button>
              );
            })}
          </div>
          {errors.preferredTimeSlot && (
            <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
              {errors.preferredTimeSlot.message}
            </p>
          )}
        </div>
      </div>

      {/* 4. 신청자 정보 */}
      <div className="space-y-4">
        <h2 className="text-[16px] font-bold text-brand-navy">
          4. 신청자 정보 <span className="text-brand-blue">*</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="patientName" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
              성함
            </label>
            <input
              id="patientName"
              type="text"
              autoComplete="name"
              placeholder="홍길동"
              {...register("patientName")}
              className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] text-ink-primary focus:border-brand-blue focus:outline-none"
            />
            {errors.patientName && (
              <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
                {errors.patientName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="patientPhone" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
              휴대폰 번호 (확정 전화 수신용)
            </label>
            <input
              id="patientPhone"
              type="tel"
              autoComplete="tel"
              placeholder="010-0000-0000"
              {...register("patientPhone", {
                onChange: (e) => {
                  setValue("patientPhone", formatKoreanPhone(e.target.value), {
                    shouldValidate: true,
                  });
                },
              })}
              className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] tabular-nums text-ink-primary focus:border-brand-blue focus:outline-none"
            />
            {errors.patientPhone && (
              <p role="alert" className="mt-1.5 text-[13px] font-semibold text-red-700">
                {errors.patientPhone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="symptomMemo" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            간단한 내원 목적 · 증상 메모 (선택, 300자 이내)
          </label>
          <textarea
            id="symptomMemo"
            rows={3}
            placeholder="예: 전립선 초음파 검진 희망 / 요로결석 상담 등 (입력 시 하단 민감정보 별도 동의 필요)"
            {...register("symptomMemo")}
            className="w-full rounded-xl border border-line-subtle bg-surface-0 p-4 text-[14.5px] leading-relaxed text-ink-primary focus:border-brand-blue focus:outline-none"
          />
          {errors.symptomMemo && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.symptomMemo.message}
            </p>
          )}
        </div>
      </div>

      {/* 5. 일반 개인정보 + 민감정보 분리 동의 */}
      <ConsentSplitBox
        privacyChecked={Boolean(privacyAgreed)}
        onPrivacyChange={(checked) => setValue("privacyAgreed", checked, { shouldValidate: true })}
        privacyError={errors.privacyAgreed?.message}
        sensitiveChecked={Boolean(sensitiveAgreed)}
        onSensitiveChange={(checked) =>
          setValue("sensitiveAgreed", checked, { shouldValidate: true })
        }
        sensitiveError={errors.sensitiveAgreed?.message}
        sensitiveRequired={false}
        purposeLabel="온라인 진료 예약 접수 확인 및 병원 확정 전화 안내"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-surface-dark text-[15.5px] font-bold text-white transition-colors hover:bg-brand-gold-deep disabled:opacity-60"
      >
        <CalendarCheck className="h-4 w-4 text-brand-gold" />
        <span>{isSubmitting ? "접수 처리 중..." : "온라인 예약 신청하기"}</span>
      </button>

      <p className="text-center text-[13px] text-ink-secondary">
        ※ 온라인 예약은 접수 후 병원 담당자 확인 전화({CLINIC_INFO.phone})를 통해 최종 확정됩니다.
      </p>
    </form>
  );
}
