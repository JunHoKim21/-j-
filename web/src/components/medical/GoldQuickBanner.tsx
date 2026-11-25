"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Lock, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

const QUICK_CENTERS = [
  "전립선 센터",
  "요로결석 센터",
  "음경임플란트 · 성기능",
  "남성성형 · 재건",
  "정관 · 포경",
  "초진 상담 · 미정",
];

/**
 * 시그니처 골드-브래스 그라데이션 인라인 빠른 예약 배너
 * - 비회원 간편 접수 UI (접수 후 병원 전화 확정 안내, 민감정보 로그 0건)
 */
export function GoldQuickBanner() {
  const [center, setCenter] = useState(QUICK_CENTERS[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 9) {
      setError("성함과 연락처를 정확히 입력해 주세요.");
      return;
    }
    if (!agreed) {
      setError("개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section className="bg-surface-dark-soft pb-20 lg:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#CFA252] via-[#B48536] to-[#7D581D] p-7 text-white sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* 좌측 시그니처 헤드라인 */}
            <div className="space-y-4 lg:col-span-5">
              <p className="text-[12px] font-bold tracking-[0.2em] text-white/80">
                GANGNAM J IS THE ANSWER
              </p>
              <h2 className="text-[28px] font-bold leading-[1.24] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[44px]">
                강남J가
                <br />
                답해드립니다.
              </h2>
              <p className="text-[15px] leading-[1.72] text-white/85">
                간편 예약 요청을 남겨주시면 병원 담당자가 일정 확인 후{" "}
                <strong className="font-bold text-white">{CLINIC_INFO.phone}</strong> 번호로
                확정 전화를 드립니다.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <Link
                  href="/reservation"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-black/25 px-4 text-[13px] font-bold text-white backdrop-blur-xs hover:bg-black/40"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  <span>상세 날짜 예약</span>
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-black/25 px-4 text-[13px] font-bold text-white backdrop-blur-xs hover:bg-black/40"
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>1:1 비밀상담</span>
                </Link>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white/95 px-4 text-[13px] font-bold tabular-nums text-surface-dark hover:bg-white"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-gold-deep" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* 우측 인라인 빠른 예약 신청 폼 */}
            <div className="rounded-2xl bg-black/20 p-6 backdrop-blur-md sm:p-8 lg:col-span-7">
              {submitted ? (
                <div className="space-y-4 py-6 text-center">
                  <CheckCircle2 className="mx-auto h-11 w-11 text-white" />
                  <h3 className="text-[20px] font-bold text-white">
                    빠른 예약 요청이 접수되었습니다 (확인 대기)
                  </h3>
                  <p className="text-[14px] leading-relaxed text-white/85">
                    아직 예약이 확정되지 않았습니다. 담당자가 진료 일정 확인 후{" "}
                    <strong className="text-white">{CLINIC_INFO.phone}</strong>으로 확정 전화를 드립니다.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setAgreed(false);
                    }}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-surface-dark px-6 text-[13.5px] font-bold text-white"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div>
                      <label htmlFor="quick-center" className="mb-1.5 block text-[12px] font-semibold text-white/85">
                        진료 분야
                      </label>
                      <select
                        id="quick-center"
                        value={center}
                        onChange={(e) => setCenter(e.target.value)}
                        className="h-11 w-full rounded-lg bg-white px-3 text-[14px] font-medium text-ink-primary focus:outline-2 focus:outline-surface-dark"
                      >
                        {QUICK_CENTERS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quick-name" className="mb-1.5 block text-[12px] font-semibold text-white/85">
                        성함
                      </label>
                      <input
                        id="quick-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="홍길동"
                        className="h-11 w-full rounded-lg bg-white px-3.5 text-[14px] text-ink-primary placeholder:text-ink-secondary/60 focus:outline-2 focus:outline-surface-dark"
                      />
                    </div>
                    <div>
                      <label htmlFor="quick-phone" className="mb-1.5 block text-[12px] font-semibold text-white/85">
                        연락처
                      </label>
                      <input
                        id="quick-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010-0000-0000"
                        className="h-11 w-full rounded-lg bg-white px-3.5 text-[14px] tabular-nums text-ink-primary placeholder:text-ink-secondary/60 focus:outline-2 focus:outline-surface-dark"
                      />
                    </div>
                  </div>

                  {/* [법무 검토 후 최종 확정] 일반 개인정보 수집 동의 */}
                  <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-white/90">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="h-4 w-4 rounded accent-surface-dark"
                    />
                    <span>
                      [필수] 예약 확인 전화 안내를 위한 일반 개인정보(성함·연락처) 수집·이용에 동의합니다.
                    </span>
                  </label>

                  {error && (
                    <p role="alert" className="text-[13px] font-semibold text-amber-100">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-full bg-surface-dark text-[15px] font-bold text-white transition-colors hover:bg-brand-navy"
                  >
                    전화 예약 상담 신청하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
