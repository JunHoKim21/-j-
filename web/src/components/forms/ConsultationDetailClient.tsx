"use client";

import Link from "next/link";
import { ArrowLeft, CalendarCheck, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import {
  ConsultationStatusBadge,
  PREVIEW_MY_CONSULTATIONS,
} from "./ConsultationClient";

export function ConsultationDetailClient({ id }: { id: string }) {
  const item =
    PREVIEW_MY_CONSULTATIONS.find((c) => c.id === id) ?? PREVIEW_MY_CONSULTATIONS[0];

  return (
    <section className="bg-surface-0 py-12 lg:py-20">
      <div className="container-page max-w-[860px] space-y-8">
        {/* 상단 메타 */}
        <div className="border-b border-line-subtle pb-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <ConsultationStatusBadge status={item.status} />
            <span className="text-[13px] font-semibold text-brand-blue">{item.category}</span>
            <span className="text-[13px] tabular-nums text-ink-secondary">
              작성일 {item.createdAt}
            </span>
          </div>
          <h2 className="mt-3 text-[22px] font-bold leading-snug text-brand-navy sm:text-[26px]">
            {item.title}
          </h2>
        </div>

        {/* 본인 질문 원문 */}
        <article className="whitespace-pre-line text-[15.5px] leading-[1.82] text-ink-primary">
          {item.content}
        </article>

        {/* 병원 공식 답변 박스 */}
        <div className="rounded-r-2xl border-l-[3px] border-brand-blue bg-surface-1 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[13.5px] font-bold text-brand-navy">
              강남J비뇨기과 공식 답변
            </span>
            {item.answeredAt && (
              <span className="text-[12.5px] tabular-nums text-ink-secondary">
                답변일 {item.answeredAt}
              </span>
            )}
          </div>

          {item.answer ? (
            <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.8] text-ink-secondary">
              {item.answer}
            </p>
          ) : (
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-secondary">
              담당 의료진이 상담 내용을 확인하고 있습니다. 순차적으로 답변을 등록해 드립니다.
            </p>
          )}
        </div>

        {/* 하단 온라인 예약 전환 CTA */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-surface-dark p-6 text-white sm:flex-row sm:items-center sm:p-7">
          <div>
            <h3 className="text-[17px] font-bold">직접 내원 진료를 원하시나요?</h3>
            <p className="mt-1 text-[13.5px] text-white/70">
              비회원 온라인 예약 신청 후 병원 확인 전화로 일정을 확정해 드립니다.
            </p>
          </div>
          <div className="flex w-full shrink-0 gap-2.5 sm:w-auto">
            <Link
              href="/reservation"
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-gold px-5 text-[13.5px] font-bold text-white hover:bg-brand-gold-deep sm:flex-initial"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>온라인 예약</span>
            </Link>
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-white/12 px-4 text-[13.5px] font-semibold tabular-nums text-white hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/consultation"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-surface-1 px-5 text-[14px] font-semibold text-brand-navy hover:bg-surface-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>내 비밀상담 목록으로</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
