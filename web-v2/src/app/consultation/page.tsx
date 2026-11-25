"use client";

import Link from "next/link";
import { Lock, LogOut, Plus, ShieldCheck } from "lucide-react";
import { useClinicMember } from "@/context/ClinicMemberContext";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";

export default function ConsultationPage() {
  const { member, ready, myPosts, signOut } = useClinicMember();

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="PRIVATE 1:1 CONSULTATION"
        title="1:1 비밀상담"
        description="환자의 민감한 비뇨기과 건강정보 보호를 위해 본인 계정으로만 작성·열람할 수 있는 완전 비공개 상담실입니다."
        breadcrumbs={[{ label: "1:1 비밀상담" }]}
        imageSrc="/assets/sample/hero-02.jpg.png"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[920px]">
          {!ready ? (
            <div className="rounded-3xl bg-[#f6f6f6] p-12 text-center text-sm text-gj-muted">
              보안 세션 확인 중...
            </div>
          ) : !member ? (
            /* 비로그인 상태: 타인의 상담 목록·제목 0건 노출 엄수 */
            <div className="rounded-3xl border border-gj-line bg-[#f6f6f6] p-8 text-center sm:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-gj-brass">
                <Lock className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl">
                본인과 의료진 외 누구도 열람할 수 없습니다
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-[1.8] text-gj-muted sm:text-[15px]">
                비뇨의학과 민감정보 프라이버시 보호를 위해 1:1 비밀상담은 경량
                이메일 회원 전용으로 운영되며,{" "}
                <strong className="text-black">
                  비로그인 상태에서는 타인의 상담 목록이나 제목을 일체 노출하지 않습니다.
                </strong>
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/auth/login"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-bold text-white transition hover:bg-gj-brass"
                >
                  이메일 로그인
                </Link>
                <Link
                  href="/auth/signup"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black bg-white px-8 text-sm font-bold text-black transition hover:bg-black hover:text-white"
                >
                  1분 간편 회원가입
                </Link>
              </div>
            </div>
          ) : (
            /* 로그인 상태: 본인 작성 비밀상담만 조회 */
            <div>
              <div className="flex flex-col justify-between gap-4 border-b border-gj-line pb-6 sm:flex-row sm:items-center">
                <div>
                  <p className="inline-flex items-center gap-1.5 text-xs font-bold text-gj-brass-deep">
                    <ShieldCheck className="h-4 w-4" />
                    {member.displayName} ({member.email})님 전용 비공개 상담함
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-black">
                    내 1:1 비밀상담 ({myPosts.length}건)
                  </h2>
                </div>

                <div className="flex items-center gap-2.5">
                  <Link
                    href="/consultation/new"
                    className="inline-flex h-11 items-center gap-1.5 rounded-full bg-black px-5 text-sm font-bold text-white transition hover:bg-gj-brass"
                  >
                    <Plus className="h-4 w-4" />
                    새 비밀상담 작성
                  </Link>
                  <button
                    type="button"
                    onClick={signOut}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-gj-line px-4 text-xs font-bold text-gj-muted hover:border-black hover:text-black"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    로그아웃
                  </button>
                </div>
              </div>

              {myPosts.length === 0 ? (
                <div className="mt-8 rounded-2xl bg-[#f6f6f6] p-12 text-center">
                  <p className="text-base font-bold text-black">
                    아직 작성하신 비밀상담이 없습니다.
                  </p>
                  <p className="mt-2 text-sm text-gj-muted">
                    말하기 어려운 증상이나 수술 관련 궁금증을 비공개로 편하게 문의해 주세요.
                  </p>
                  <Link
                    href="/consultation/new"
                    className="mt-6 inline-flex h-11 items-center gap-1.5 rounded-full bg-gj-brass px-6 text-sm font-bold text-white transition hover:bg-gj-brass-deep"
                  >
                    <Plus className="h-4 w-4" />
                    첫 비밀상담 작성하기
                  </Link>
                </div>
              ) : (
                <ul className="mt-4 divide-y divide-gj-line border-b border-gj-line">
                  {myPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/consultation/${post.id}`}
                        className="flex flex-col justify-between gap-2 py-5 transition hover:bg-[#f6f6f6]/70 sm:flex-row sm:items-center sm:px-3"
                      >
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                            {post.status}
                          </span>
                          <span className="text-xs font-bold text-gj-brass-deep">
                            {post.category}
                          </span>
                          <span className="text-[15px] font-bold text-black">
                            {post.title}
                          </span>
                        </div>
                        <span className="text-xs font-medium tabular-nums text-gj-muted">
                          {post.createdAt}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>
    </GjSubPageShell>
  );
}
