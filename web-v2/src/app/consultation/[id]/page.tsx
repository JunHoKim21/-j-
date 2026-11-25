"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, Lock, Phone } from "lucide-react";
import { useClinicMember } from "@/context/ClinicMemberContext";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";

export default function ConsultationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { member, ready, getMyPostById } = useClinicMember();
  const post = getMyPostById(id);

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="PRIVATE 1:1 CONSULTATION"
        title="내 1:1 비밀상담 상세"
        description="본인 계정으로 등록하신 상담 내역과 병원 답변을 안전하게 확인합니다."
        breadcrumbs={[
          { label: "1:1 비밀상담", href: "/consultation" },
          { label: "상담 상세" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[820px]">
          {!ready ? (
            <div className="rounded-2xl bg-[#f6f6f6] p-10 text-center text-sm text-gj-muted">
              확인 중...
            </div>
          ) : !member || !post ? (
            <div className="rounded-3xl bg-[#f6f6f6] p-10 text-center">
              <Lock className="mx-auto h-8 w-8 text-gj-brass-deep" />
              <p className="mt-4 text-base font-bold text-black">
                열람 권한이 없거나 존재하지 않는 상담입니다.
              </p>
              <Link
                href="/consultation"
                className="mt-6 inline-flex h-11 items-center rounded-full bg-black px-6 text-sm font-bold text-white hover:bg-gj-brass"
              >
                비밀상담으로 돌아가기
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-3xl border border-gj-line bg-white p-7 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gj-line pb-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                      {post.status}
                    </span>
                    <span className="text-xs font-bold text-gj-brass-deep">
                      {post.category}
                    </span>
                  </div>
                  <span className="text-xs tabular-nums text-gj-muted">
                    작성일 {post.createdAt}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-black sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.85] text-black/85">
                  {post.content}
                </p>
              </div>

              <div className="rounded-3xl border-l-4 border-l-gj-brass bg-[#f6f6f6] p-7 sm:p-8">
                <p className="text-xs font-bold tracking-[0.16em] text-gj-brass-deep">
                  GANGNAM J OFFICIAL REPLY
                </p>
                {post.replyText ? (
                  <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-black">
                    {post.replyText}
                  </p>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-gj-muted">
                    상담이 정상 접수되었습니다. 비뇨의학과 전문의 확인 후 순차적으로
                    공식 답변을 등록해 드립니다. 빠른 안내가 필요하신 경우 대표전화(
                    {CLINIC_PROFILE.mainPhone})로 문의해 주세요.
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Link
                  href="/consultation"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-gj-line px-5 text-sm font-bold text-gj-muted hover:border-black hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                  내 상담 목록
                </Link>
                <div className="flex gap-2.5">
                  <Link
                    href="/reservation"
                    className="inline-flex h-11 items-center gap-1.5 rounded-full bg-black px-5 text-sm font-bold text-white hover:bg-gj-brass"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    온라인 예약
                  </Link>
                  <a
                    href={CLINIC_PROFILE.mainPhoneHref}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full bg-[#f6f6f6] px-5 text-sm font-bold text-black hover:bg-[#e9e9e9]"
                  >
                    <Phone className="h-4 w-4 text-gj-brass-deep" />
                    {CLINIC_PROFILE.mainPhone}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </GjSubPageShell>
  );
}
