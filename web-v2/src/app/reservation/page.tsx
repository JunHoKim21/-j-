"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { CLINIC_PHYSICIANS, CLINIC_PROFILE } from "@/data/clinic-profile";
import { UROLOGY_CENTERS } from "@/data/urology-centers";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { ClinicScheduleGrid } from "@/components/clinic/ClinicScheduleGrid";
import { ClinicConsentSplit } from "@/components/clinic/ClinicConsentSplit";
import { cn } from "@/lib/cn";

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 7) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

export default function ReservationPage() {
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
  const [submitted, setSubmitted] = useState(false);

  const selectedDoctor = CLINIC_PHYSICIANS.find((d) => d.id === doctorId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!patientName.trim()) next.patientName = "성함을 입력해 주세요.";
    if (phone.replace(/\D/g, "").length < 10)
      next.phone = "연락 가능한 휴대폰 번호를 정확히 입력해 주세요.";
    if (!preferredDate) next.preferredDate = "희망 내원 날짜를 선택해 주세요.";
    if (!generalAgreed)
      next.generalAgreed = "일반 개인정보 수집·이용에 동의해 주세요.";
    if (!sensitiveAgreed)
      next.sensitiveAgreed =
        "민감정보(건강·증상정보) 별도 수집·이용에 동의해 주세요.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="NON-MEMBER ONLINE RESERVATION"
        title="비회원 온라인 예약"
        description="회원가입 없이 간편하게 희망 일정을 접수하실 수 있습니다. 접수 후 병원 담당자 확인을 거쳐 02-3018-7575 번호로 확정 전화를 드립니다."
        breadcrumbs={[{ label: "온라인 예약" }]}
        imageSrc="/assets/hospital/visual-02.jpg"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* 좌측 7fr: 예약 폼 또는 접수 완료(확인 대기) 안내 */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl border border-gj-line bg-[#f6f6f6] p-8 sm:p-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1.5 text-xs font-bold text-amber-800">
                  <Clock className="h-3.5 w-3.5" />
                  확인 대기
                </span>

                <div className="mt-5 flex items-center gap-2.5">
                  <CheckCircle2 className="h-7 w-7 text-gj-brass-deep" />
                  <h2 className="text-2xl font-bold text-black sm:text-3xl">
                    온라인 예약 신청이 접수되었습니다
                  </h2>
                </div>

                <div className="mt-5 rounded-2xl border border-gj-brass/40 bg-white p-5">
                  <p className="text-base font-bold leading-relaxed text-black">
                    병원 담당자 확인 후{" "}
                    <span className="text-gj-brass-deep tabular-nums">
                      02-3018-7575
                    </span>{" "}
                    번호로 확정 전화를 드립니다.
                  </p>
                  <p className="mt-1.5 text-xs text-gj-muted">
                    아직 예약이 최종 확정된 상태가 아니며, 통화 확인 후 일정이 확정됩니다.
                  </p>
                </div>

                <dl className="mt-6 space-y-2.5 border-t border-black/10 pt-5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gj-muted">신청자</dt>
                    <dd className="font-bold">
                      {patientName} ({phone})
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gj-muted">진료 분야</dt>
                    <dd className="font-bold">{center}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gj-muted">희망 전문의</dt>
                    <dd className="font-bold">
                      {selectedDoctor
                        ? `${selectedDoctor.name} ${selectedDoctor.roleTitle}`
                        : "의료진 무관"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gj-muted">희망 일시</dt>
                    <dd className="font-bold tabular-nums">
                      {preferredDate} · {timeSlot}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={CLINIC_PROFILE.mainPhoneHref}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-6 text-sm font-bold text-white hover:bg-gj-brass"
                  >
                    <Phone className="h-4 w-4" />
                    대표전화 {CLINIC_PROFILE.mainPhone}
                  </a>
                  <Link
                    href="/about/location"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-black/20 bg-white px-6 text-sm font-bold text-black hover:border-black"
                  >
                    <MapPin className="h-4 w-4" />
                    오시는 길 보기
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold text-gj-muted hover:text-black"
                  >
                    새로 신청하기
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8 rounded-3xl border border-gj-line bg-white p-6 sm:p-9"
              >
                {/* 1. 진료 분야 선택 */}
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-gj-brass-deep">
                    STEP 01
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-black">
                    진료 분야 선택
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {[
                      ...UROLOGY_CENTERS.map((c) => c.title),
                      "초진 상담 / 미정",
                    ].map((title) => {
                      const active = center === title;
                      return (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setCenter(title)}
                          className={cn(
                            "rounded-xl border px-3 py-3 text-xs font-bold transition sm:text-sm",
                            active
                              ? "border-black bg-black text-white"
                              : "border-gj-line bg-[#f6f6f6] text-black hover:border-black/40"
                          )}
                        >
                          {title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. 희망 의료진 */}
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-gj-brass-deep">
                    STEP 02
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-black">
                    희망 전문의 선택
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      {
                        id: "any",
                        name: "의료진 무관",
                        note: "가장 빠른 일정 배정",
                      },
                      ...CLINIC_PHYSICIANS.map((d) => ({
                        id: d.id,
                        name: `${d.name} ${d.roleTitle}`,
                        note: d.offDaySummary,
                      })),
                    ].map((opt) => {
                      const active = doctorId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setDoctorId(opt.id)}
                          className={cn(
                            "rounded-xl border p-4 text-left transition",
                            active
                              ? "border-gj-brass bg-[#101010] text-white"
                              : "border-gj-line bg-[#f6f6f6] text-black hover:border-black/40"
                          )}
                        >
                          <p className="text-sm font-bold">{opt.name}</p>
                          <p
                            className={cn(
                              "mt-1 text-xs",
                              active ? "text-gj-brass" : "text-gj-muted"
                            )}
                          >
                            {opt.note}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. 희망 일시 */}
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-gj-brass-deep">
                    STEP 03
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-black">
                    희망 내원 날짜 및 시간대
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="sub-res-date"
                        className="mb-1.5 block text-xs font-bold text-gj-muted"
                      >
                        희망 날짜 *
                      </label>
                      <input
                        id="sub-res-date"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm font-medium text-black focus:border-black focus:bg-white focus:outline-none"
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs font-medium text-rose-600">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="sub-res-slot"
                        className="mb-1.5 block text-xs font-bold text-gj-muted"
                      >
                        희망 시간대
                      </label>
                      <select
                        id="sub-res-slot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm font-medium text-black focus:border-black focus:bg-white focus:outline-none"
                      >
                        <option value="오전 진료 (09:00~12:00)">
                          오전 진료 (09:00 ~ 12:00)
                        </option>
                        <option value="오후 진료 (14:00~17:00)">
                          오후 진료 (14:00 ~ 17:00)
                        </option>
                        <option value="토요일 오전 (09:00~12:30)">
                          토요일 오전 (09:00 ~ 12:30)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. 신청자 정보 */}
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-gj-brass-deep">
                    STEP 04
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-black">
                    신청자 정보 입력
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="sub-res-name"
                        className="mb-1.5 block text-xs font-bold text-gj-muted"
                      >
                        성함 *
                      </label>
                      <input
                        id="sub-res-name"
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="홍길동"
                        className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                      />
                      {errors.patientName && (
                        <p className="mt-1 text-xs font-medium text-rose-600">
                          {errors.patientName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="sub-res-phone"
                        className="mb-1.5 block text-xs font-bold text-gj-muted"
                      >
                        휴대폰 번호 *
                      </label>
                      <input
                        id="sub-res-phone"
                        type="tel"
                        inputMode="numeric"
                        value={phone}
                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                        placeholder="010-0000-0000"
                        className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm tabular-nums text-black focus:border-black focus:bg-white focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs font-medium text-rose-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="sub-res-memo"
                      className="mb-1.5 block text-xs font-bold text-gj-muted"
                    >
                      간단한 내원 목적 / 증상 메모 (선택, 300자 이내)
                    </label>
                    <textarea
                      id="sub-res-memo"
                      rows={3}
                      maxLength={300}
                      value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                      placeholder="증상이나 상담 원하시는 항목을 간단히 남겨주시면 사전 준비에 도움이 됩니다."
                      className="w-full rounded-xl border border-gj-line bg-[#f6f6f6] p-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* 5. 일반 개인정보 + 민감정보(건강정보) 분리 동의 2종 */}
                <ClinicConsentSplit
                  idPrefix="page-res"
                  theme="light"
                  generalAgreed={generalAgreed}
                  sensitiveAgreed={sensitiveAgreed}
                  onGeneralChange={setGeneralAgreed}
                  onSensitiveChange={setSensitiveAgreed}
                  generalError={errors.generalAgreed}
                  sensitiveError={errors.sensitiveAgreed}
                />

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-black text-base font-bold text-white transition hover:bg-gj-brass"
                >
                  <CalendarCheck className="h-5 w-5" />
                  비회원 온라인 예약 신청하기
                </button>
              </form>
            )}
          </div>

          {/* 우측 5fr: 2인 진료시간표 & 안내 */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl bg-[#101010] p-7 text-white">
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass">
                PHONE RESERVATION
              </p>
              <a
                href={CLINIC_PROFILE.mainPhoneHref}
                className="mt-3 inline-flex items-center gap-2 text-3xl font-bold tabular-nums text-white hover:text-gj-brass"
              >
                <Phone className="h-6 w-6 text-gj-brass" />
                {CLINIC_PROFILE.mainPhone}
              </a>
              <p className="mt-3 text-sm text-white/75">
                {CLINIC_PROFILE.operatingHours.weekdayConsult} ·{" "}
                {CLINIC_PROFILE.operatingHours.saturdayConsult}
              </p>
              <p className="mt-1 text-xs text-white/55">
                {CLINIC_PROFILE.operatingHours.closedNotice}
              </p>
            </div>

            <div className="rounded-3xl border border-gj-line bg-white p-6">
              <h3 className="mb-4 text-base font-bold text-black">
                예약 전 2인 전문의 휴진 요일 확인
              </h3>
              <ClinicScheduleGrid compact />
            </div>
          </aside>
        </div>
      </section>
    </GjSubPageShell>
  );
}
