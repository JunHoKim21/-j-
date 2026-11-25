"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Lock, Plus, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type ConsultationStatus = "RECEIVED" | "IN_REVIEW" | "ANSWERED";

export interface PreviewConsultationItem {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  answeredAt: string | null;
  status: ConsultationStatus;
  content: string;
  answer: string | null;
}

/**
 * STEP 5 UI 검수용 비식별 예시 목록 (개인 이름·연락처·실제 환자 정보 없음)
 * - STEP 6에서 서버 Drizzle 쿼리(WHERE member_user_id = session.user.id)로 전면 교체
 */
export const PREVIEW_MY_CONSULTATIONS: PreviewConsultationItem[] = [
  {
    id: "sample-01",
    category: "전립선 센터",
    title: "HoLEP 수술 전 필요한 검사 및 회복 기간 문의드립니다",
    createdAt: "2026-11-20",
    answeredAt: "2026-11-21",
    status: "ANSWERED",
    content:
      "최근 건강검진에서 전립선 크기가 다소 크다는 소견을 들었습니다. 내원 시 어떤 검사를 먼저 진행하는지, 수술이 필요한 경우 일반적인 회복 기간이 어느 정도인지 궁금합니다.",
    answer:
      "안녕하세요, 강남J비뇨기과입니다. 내원 시 소변검사, PSA 혈액검사, 경직장 전립선 초음파 및 요속 검사를 통해 전립선 용적과 배뇨 상태를 먼저 정확히 확인합니다. 수술 여부는 검사 결과와 증상 정도에 따라 전문의 상담 후 결정되며, HoLEP 시행 시 일반적인 일상 복귀와 경과 관찰 일정은 개인 상태에 맞춰 자세히 안내드립니다.",
  },
  {
    id: "sample-02",
    category: "음경임플란트 · 성기능",
    title: "성기능 정밀검사 사전 준비사항 문의",
    createdAt: "2026-11-24",
    answeredAt: null,
    status: "IN_REVIEW",
    content:
      "음경혈관 도플러검사와 호르몬 혈액검사를 함께 받아보고 싶습니다. 검사 당일 금식이 필요한지, 소요 시간은 얼마나 되는지 문의드립니다.",
    answer: null,
  },
  {
    id: "sample-03",
    category: "요로결석 센터",
    title: "과거 결석 이력이 있어 정기 추적 초음파 상담 요청",
    createdAt: "2026-11-25",
    answeredAt: null,
    status: "RECEIVED",
    content:
      "2년 전 요로결석 치료 이력이 있습니다. 최근 특별한 통증은 없으나 예방 차원에서 초음파와 소변검사를 받아보고 싶습니다.",
    answer: null,
  },
];

export function ConsultationStatusBadge({ status }: { status: ConsultationStatus }) {
  if (status === "ANSWERED") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-status-done-bg px-2.5 py-0.5 text-[12px] font-bold text-status-done-fg">
        <CheckCircle2 className="h-3.5 w-3.5" />
        답변완료
      </span>
    );
  }
  if (status === "IN_REVIEW") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-status-review-bg px-2.5 py-0.5 text-[12px] font-bold text-status-review-fg">
        <Clock className="h-3.5 w-3.5" />
        확인중
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-status-received-bg px-2.5 py-0.5 text-[12px] font-bold text-status-received-fg">
      <span className="h-1.5 w-1.5 rounded-full bg-status-received-fg" />
      접수됨
    </span>
  );
}

export function ConsultationClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(window.sessionStorage.getItem("gnj_preview_member") === "1");
  }, []);

  const togglePreviewAuth = (next: boolean) => {
    if (next) {
      window.sessionStorage.setItem("gnj_preview_member", "1");
    } else {
      window.sessionStorage.removeItem("gnj_preview_member");
    }
    setIsLoggedIn(next);
  };

  return (
    <section className="bg-surface-0 py-12 lg:py-20">
      <div className="container-page max-w-[920px]">
        {/* STEP 5 검수용 상태 전환 바 (STEP 6 Supabase 세션 실연동 시 제거) */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-1 px-4 py-3 text-[12.5px] text-ink-secondary">
          <span>
            [UI 검수용 프리뷰] 현재 상태:{" "}
            <strong className="text-brand-navy">
              {isLoggedIn ? "로그인 회원(MEMBER)" : "비로그인(프라이버시 게이트)"}
            </strong>
          </span>
          <button
            type="button"
            onClick={() => togglePreviewAuth(!isLoggedIn)}
            className="rounded-md bg-surface-0 px-3 py-1 font-semibold text-brand-blue ring-1 ring-line-subtle hover:bg-surface-2"
          >
            {isLoggedIn ? "비로그인 화면 보기" : "회원 로그인 화면 미리보기"}
          </button>
        </div>

        {/* 비로그인 상태: 타인 상담 목록 0건 노출 */}
        {!isLoggedIn ? (
          <div className="rounded-2xl bg-surface-1 p-8 text-center sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-dark text-brand-gold">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-[22px] font-bold tracking-tight text-brand-navy sm:text-[26px]">
              1:1 비공개 회원 전용 비밀상담
            </h2>
            <p className="mx-auto mt-3 max-w-[480px] text-[15px] leading-[1.75] text-ink-secondary">
              환자의 프라이버시와 민감한 건강정보 보호를 위해 타인의 상담 글과 제목은 일체 공개되지 않으며,
              <strong className="text-brand-navy"> 로그인한 본인과 담당 의료진만</strong> 열람할 수 있습니다.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/auth/login"
                className="inline-flex h-12 items-center justify-center rounded-full bg-surface-dark px-8 text-[14.5px] font-bold text-white hover:bg-brand-gold-deep"
              >
                이메일 로그인
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-surface-0 px-8 text-[14.5px] font-bold text-brand-navy ring-1 ring-line-subtle hover:bg-surface-2"
              >
                1분 간편 회원가입
              </Link>
            </div>

            <div className="mx-auto mt-8 flex max-w-[440px] items-center justify-center gap-2 text-[12.5px] text-ink-secondary">
              <ShieldCheck className="h-4 w-4 text-brand-blue" />
              <span>이메일·비밀번호 최소 정보만 수집 · 소셜 계정 미연동</span>
            </div>
          </div>
        ) : (
          /* 로그인(MEMBER) 상태: 본인 작성 상담 목록만 표시 */
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-[20px] font-bold text-brand-navy sm:text-[22px]">
                  내 1:1 비밀상담{" "}
                  <span className="text-[15px] font-semibold tabular-nums text-brand-blue">
                    ({PREVIEW_MY_CONSULTATIONS.length}건)
                  </span>
                </h2>
                <p className="mt-1 text-[13.5px] text-ink-secondary">
                  본인이 작성한 비공개 상담 내역과 병원 공식 답변만 표시됩니다.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Link
                  href="/account"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-surface-1 px-4 text-[13.5px] font-semibold text-ink-secondary hover:bg-surface-2 hover:text-ink-primary"
                >
                  계정 관리
                </Link>
                <Link
                  href="/consultation/new"
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-surface-dark px-5 text-[14px] font-bold text-white hover:bg-brand-gold-deep"
                >
                  <Plus className="h-4 w-4" />
                  <span>새 비밀상담 작성</span>
                </Link>
              </div>
            </div>

            <div className="divide-y divide-line-subtle border-y border-line-subtle">
              {PREVIEW_MY_CONSULTATIONS.map((item) => (
                <Link
                  key={item.id}
                  href={`/consultation/${item.id}`}
                  className={cn(
                    "group flex flex-col gap-2 py-5 transition-colors hover:bg-surface-1/70 sm:flex-row sm:items-center sm:justify-between sm:px-4"
                  )}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <ConsultationStatusBadge status={item.status} />
                      <span className="text-[12.5px] font-semibold text-brand-blue">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-ink-primary group-hover:text-brand-gold-deep">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex shrink-0 items-center gap-4 text-[13px] tabular-nums text-ink-secondary">
                    <span>작성 {item.createdAt}</span>
                    {item.answeredAt && (
                      <span className="font-semibold text-brand-navy">답변 {item.answeredAt}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
