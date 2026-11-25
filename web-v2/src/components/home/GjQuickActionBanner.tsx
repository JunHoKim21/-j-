"use client";

import { useState, type FormEvent } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Lock,
  Phone,
  ShieldAlert,
  X,
} from "lucide-react";
import { CLINIC_PHYSICIANS, CLINIC_PROFILE } from "@/data/clinic-profile";
import { UROLOGY_CENTERS } from "@/data/urology-centers";
import { ClinicConsentSplit } from "@/components/clinic/ClinicConsentSplit";
import { cn } from "@/lib/cn";

interface SubmittedReservation {
  patientName: string;
  phone: string;
  center: string;
  doctorLabel: string;
  preferredDate: string;
  timeSlot: string;
}

function formatKoreanPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export function GjQuickActionBanner() {
  const [activeTab, setActiveTab] = useState<"reservation" | "secret">(
    "reservation"
  );
  const [center, setCenter] = useState(UROLOGY_CENTERS[0].title);
  const [doctorId, setDoctorId] = useState("any");
  const [preferredDate, setPreferredDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("오전 진료 (09:00~12:00)");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [memo, setMemo] = useState("");
  const [generalAgreed, setGeneralAgreed] = useState(false);
  const [sensitiveAgreed, setSensitiveAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [receipt, setReceipt] = useState<SubmittedReservation | null>(null);

  const [secretEmail, setSecretEmail] = useState("");
  const [secretPassword, setSecretPassword] = useState("");
  const [secretLoginNotice, setSecretLoginNotice] = useState<string | null>(
    null
  );

  const selectedDoctor = CLINIC_PHYSICIANS.find((d) => d.id === doctorId);

  const handleReservationSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!patientName.trim()) nextErrors.patientName = "성함을 입력해 주세요.";
    if (phone.replace(/\D/g, "").length < 10)
      nextErrors.phone = "연락 가능한 휴대폰 번호를 입력해 주세요.";
    if (!preferredDate) nextErrors.preferredDate = "희망 날짜를 선택해 주세요.";
    if (!generalAgreed)
      nextErrors.generalAgreed = "일반 개인정보 수집·이용에 동의해 주세요.";
    if (!sensitiveAgreed)
      nextErrors.sensitiveAgreed =
        "민감정보(건강·증상정보) 별도 수집·이용에 동의해 주세요.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setReceipt({
      patientName: patientName.trim(),
      phone,
      center,
      doctorLabel: selectedDoctor
        ? `${selectedDoctor.name} ${selectedDoctor.roleTitle}`
        : "의료진 무관 (가장 빠른 일정)",
      preferredDate,
      timeSlot,
    });
  };

  const handleSecretSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!secretEmail.includes("@") || secretPassword.length < 8) {
      setSecretLoginNotice(
        "이메일 형식과 8자 이상 비밀번호를 입력해 주세요. 비로그인 시 타인 상담 목록·제목은 일체 노출되지 않습니다."
      );
      return;
    }
    setSecretLoginNotice(
      "메인 시안 확인 단계입니다. 2단계 서브 페이지 구현 시 본인 전용 비밀상담 작성·답변 페이지(/consultation)로 즉시 연동됩니다."
    );
  };

  return (
    <section
      id="quick-reservation"
      aria-label="빠른 온라인 예약 및 1:1 비밀상담"
      className="scroll-mt-24 bg-[#101010] pb-24 pt-6 text-white lg:pb-[150px] lg:pt-10"
    >
      <div className="mx-auto max-w-[1380px] px-4 lg:px-10">
        {/* rounded-[30px] 풀폭 포토 카드 + 좌 타이틀 / 우 폼 */}
        <div
          data-gj-reveal
          className="relative overflow-hidden rounded-[18px] bg-[#1a1a1a] p-6 sm:p-10 lg:rounded-[30px] lg:px-[84px] lg:py-[76px]"
        >
          <img
            src="/assets/hospital/visual-04.jpg"
            alt="강남J비뇨기과 예약 상담 배경"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/82 to-black/75" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* 좌측 타이틀 + 탭 + 글래스 CTA */}
            <div className="flex flex-col justify-between lg:col-span-4">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-gj-brass">
                  QUICK RESERVATION
                </p>
                <h2 className="mt-3 text-[26px] font-bold leading-[1.35] tracking-[-0.025em] sm:text-[34px] lg:text-[37px]">
                  비회원 빠른 예약 ·
                  <br />
                  1:1 비밀상담
                </h2>
                <p className="mt-4 text-sm leading-[1.7] text-white/72">
                  접수 후 병원 담당자가 일정을 확인하여{" "}
                  <strong className="text-white tabular-nums">
                    {CLINIC_PROFILE.mainPhone}
                  </strong>
                  으로 확정 전화를 드립니다.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-2 rounded-xl bg-white/10 p-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("reservation")}
                    className={cn(
                      "flex h-11 items-center justify-center gap-1.5 rounded-lg text-xs font-bold transition sm:text-sm",
                      activeTab === "reservation"
                        ? "bg-gj-brass text-white"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    <CalendarCheck className="h-4 w-4" />
                    온라인 예약
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("secret")}
                    className={cn(
                      "flex h-11 items-center justify-center gap-1.5 rounded-lg text-xs font-bold transition sm:text-sm",
                      activeTab === "secret"
                        ? "bg-gj-brass text-white"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    <Lock className="h-4 w-4" />
                    1:1 비밀상담
                  </button>
                </div>
              </div>

              {/* 레퍼런스 하단 프로스트 글래스 CTA */}
              <div className="mt-8 hidden space-y-2.5 lg:block">
                <a
                  href={CLINIC_PROFILE.mainPhoneHref}
                  className="flex items-center justify-between rounded-xl border border-white/15 bg-black/45 px-5 py-4 backdrop-blur-[10px] transition hover:border-gj-brass"
                >
                  <span className="text-xs font-semibold text-white/70">
                    대표전화
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-lg font-bold tabular-nums text-white">
                    <Phone className="h-4 w-4 text-gj-brass" />
                    {CLINIC_PROFILE.mainPhone}
                  </span>
                </a>
              </div>
            </div>

            {/* 우측 2컬럼 폼 */}
            <div className="lg:col-span-8">
              {activeTab === "reservation" ? (
                <form
                  onSubmit={handleReservationSubmit}
                  noValidate
                  className="space-y-3.5"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <select
                      aria-label="진료 분야"
                      value={center}
                      onChange={(e) => setCenter(e.target.value)}
                      className="h-[48px] rounded-xl border border-white/18 bg-black/55 px-4 text-sm font-medium text-white focus:border-gj-brass focus:outline-none"
                    >
                      {UROLOGY_CENTERS.map((c) => (
                        <option key={c.slug} value={c.title} className="bg-[#181818]">
                          {c.title}
                        </option>
                      ))}
                      <option value="초진 상담 / 미정" className="bg-[#181818]">
                        초진 상담 / 진료과목 미정
                      </option>
                    </select>

                    <select
                      aria-label="희망 전문의"
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                      className="h-[48px] rounded-xl border border-white/18 bg-black/55 px-4 text-sm font-medium text-white focus:border-gj-brass focus:outline-none"
                    >
                      <option value="any" className="bg-[#181818]">
                        의료진 무관 (가장 빠른 일정)
                      </option>
                      {CLINIC_PHYSICIANS.map((doc) => (
                        <option key={doc.id} value={doc.id} className="bg-[#181818]">
                          {doc.name} {doc.roleTitle} ({doc.offDaySummary})
                        </option>
                      ))}
                    </select>

                    <div>
                      <input
                        type="date"
                        aria-label="희망 내원 날짜"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="h-[48px] w-full rounded-xl border border-white/18 bg-black/55 px-4 text-sm font-medium text-white focus:border-gj-brass focus:outline-none"
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-rose-400">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <select
                      aria-label="희망 시간대"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="h-[48px] rounded-xl border border-white/18 bg-black/55 px-4 text-sm font-medium text-white focus:border-gj-brass focus:outline-none"
                    >
                      <option value="오전 진료 (09:00~12:00)" className="bg-[#181818]">
                        오전 진료 (09:00 ~ 12:00)
                      </option>
                      <option value="오후 진료 (14:00~17:00)" className="bg-[#181818]">
                        오후 진료 (14:00 ~ 17:00)
                      </option>
                      <option value="토요일 오전 (09:00~12:30)" className="bg-[#181818]">
                        토요일 오전 (09:00 ~ 12:30)
                      </option>
                    </select>

                    <div>
                      <input
                        type="text"
                        aria-label="신청자 성함"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="성함 *"
                        className="h-[48px] w-full rounded-xl border border-white/18 bg-black/55 px-4 text-sm text-white placeholder:text-white/45 focus:border-gj-brass focus:outline-none"
                      />
                      {errors.patientName && (
                        <p className="mt-1 text-xs text-rose-400">
                          {errors.patientName}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        inputMode="numeric"
                        aria-label="연락처"
                        value={phone}
                        onChange={(e) => setPhone(formatKoreanPhone(e.target.value))}
                        placeholder="연락처 (010-0000-0000) *"
                        className="h-[48px] w-full rounded-xl border border-white/18 bg-black/55 px-4 text-sm tabular-nums text-white placeholder:text-white/45 focus:border-gj-brass focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <input
                    type="text"
                    aria-label="간단한 내원 목적"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    maxLength={200}
                    placeholder="간단한 증상·문의 메모 (선택)"
                    className="h-[48px] w-full rounded-xl border border-white/18 bg-black/55 px-4 text-sm text-white placeholder:text-white/45 focus:border-gj-brass focus:outline-none"
                  />

                  <ClinicConsentSplit
                    idPrefix="home-res"
                    theme="dark"
                    generalAgreed={generalAgreed}
                    sensitiveAgreed={sensitiveAgreed}
                    onGeneralChange={setGeneralAgreed}
                    onSensitiveChange={setSensitiveAgreed}
                    generalError={errors.generalAgreed}
                    sensitiveError={errors.sensitiveAgreed}
                  />

                  <button
                    type="submit"
                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gj-brass text-[15px] font-bold text-white transition hover:bg-gj-brass-deep"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    비회원 온라인 예약 신청하기
                  </button>
                </form>
              ) : (
                <div className="rounded-2xl border border-white/15 bg-black/45 p-6 backdrop-blur-md">
                  <div className="flex items-start gap-3 rounded-xl border border-gj-brass/40 bg-gj-brass/10 p-4">
                    <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-gj-brass" />
                    <div className="text-xs leading-relaxed text-white/85 sm:text-sm">
                      <p className="font-bold text-white">
                        1:1 비공개 회원 전용 비밀상담
                      </p>
                      <p className="mt-1 text-white/75">
                        환자 프라이버시 보호를 위해 비로그인 시 타인의 상담 목록·제목은 0건
                        노출됩니다. 본인 이메일 로그인 후 상담 작성과 답변 확인이 가능합니다.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSecretSubmit} className="mt-5 space-y-3.5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="email"
                        value={secretEmail}
                        onChange={(e) => setSecretEmail(e.target.value)}
                        placeholder="이메일 계정"
                        className="h-[48px] rounded-xl border border-white/18 bg-black/55 px-4 text-sm text-white placeholder:text-white/45 focus:border-gj-brass focus:outline-none"
                      />
                      <input
                        type="password"
                        value={secretPassword}
                        onChange={(e) => setSecretPassword(e.target.value)}
                        placeholder="비밀번호 (8자 이상)"
                        className="h-[48px] rounded-xl border border-white/18 bg-black/55 px-4 text-sm text-white placeholder:text-white/45 focus:border-gj-brass focus:outline-none"
                      />
                    </div>
                    {secretLoginNotice && (
                      <p className="rounded-lg bg-white/10 px-4 py-3 text-xs leading-relaxed text-gj-brass-light">
                        {secretLoginNotice}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gj-brass text-sm font-bold text-white transition hover:bg-gj-brass-deep"
                    >
                      <Lock className="h-4 w-4" />
                      1:1 비밀상담 로그인
                    </button>
                    <p className="text-center text-xs text-white/60">
                      전용 비밀상담실은{" "}
                      <a href="/consultation" className="font-bold text-gj-brass underline">
                        1:1 비밀상담 페이지
                      </a>
                      에서 바로 이용하실 수 있습니다.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 접수 완료 안내 모달 (즉시 확정 금지 → 확인 대기 배지 + 02-3018-7575 확정 전화 안내) */}
      {receipt && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gj-res-modal-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setReceipt(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 text-black shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                <Clock className="h-3.5 w-3.5" />
                확인 대기
              </span>
              <button
                type="button"
                onClick={() => setReceipt(null)}
                aria-label="닫기"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gj-muted hover:bg-gj-cool"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              <CheckCircle2 className="h-6 w-6 text-gj-brass-deep" />
              <h3 id="gj-res-modal-title" className="text-xl font-bold text-black">
                예약 신청이 접수되었습니다
              </h3>
            </div>

            <p className="mt-3 rounded-xl bg-[#f6f6f6] p-4 text-sm font-bold leading-relaxed text-black">
              병원 담당자 확인 후{" "}
              <span className="text-gj-brass-deep tabular-nums">02-3018-7575</span>{" "}
              번호로 확정 전화를 드립니다.
            </p>

            <dl className="mt-5 space-y-2 border-t border-gj-line pt-4 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-gj-muted">신청자</dt>
                <dd className="font-bold">{receipt.patientName} ({receipt.phone})</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gj-muted">진료 분야</dt>
                <dd className="font-bold">{receipt.center}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gj-muted">희망 전문의</dt>
                <dd className="font-bold">{receipt.doctorLabel}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gj-muted">희망 일시</dt>
                <dd className="font-bold tabular-nums">
                  {receipt.preferredDate} · {receipt.timeSlot}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => setReceipt(null)}
              className="mt-6 h-12 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:bg-gj-brass"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
