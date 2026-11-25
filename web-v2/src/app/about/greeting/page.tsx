import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Music, ShieldCheck } from "lucide-react";
import {
  CLINIC_3S_PILLARS,
  CLINIC_PROFILE,
} from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { AboutSubNav } from "@/components/clinic/AboutSubNav";

export const metadata: Metadata = {
  title: "단일 프리미엄 본원 · 3S 철학",
  description:
    "1999년 개원 강남J비뇨기과의원 단일 프리미엄 본원, 3S(Safe·Simple·Speed) 수술 철학과 IOM 음악요법, 프라이버시 진료 시스템을 소개합니다.",
};

const PRIVACY_SYSTEMS = [
  {
    title: "5개 독립 개인진료실",
    body: "타 환자와의 시선·동선 노출을 줄인 독립 공간에서 전문의와 충분한 상담과 진료를 진행합니다.",
  },
  {
    title: "2개 전용 수술실 · 첨단 멸균",
    body: "원장이 직접 설계에 참여한 첨단 소독·자외선 멸균 시스템과 실시간 활력징후 모니터링 장비를 갖추었습니다.",
  },
  {
    title: "전원 남성 베테랑 간호팀",
    body: "모든 검사·시술·수술 과정에 의사와 숙련된 남성 간호팀만 참여해 심리적 부담을 덜어드립니다.",
  },
  {
    title: "전자차트 보안 & IOM 음악요법",
    body: "종이차트 분실·노출을 막는 전자차트 시스템과 수술 중 음악요법(IOM)으로 편안한 진료 환경을 유지합니다.",
  },
] as const;

export default function AboutGreetingPage() {
  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="SINCE 1999 · GANGNAM J STORY"
        title="단일 프리미엄 본원 · 3S 철학"
        description="분점을 늘리는 대신 강남 학동역 한 곳에서 27년간 쌓아 온 정통 비뇨의학의 깊이와 프라이버시 진료 원칙을 소개합니다."
        breadcrumbs={[
          { label: "강남J 스토리", href: "/about/greeting" },
          { label: "단일 본원 · 3S 철학" },
        ]}
        imageSrc="/assets/sample/hero-01.jpg.png"
      />
      <AboutSubNav currentPath="/about/greeting" />

      {/* 인사말 & 단일 본원 철학 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="gj-container grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div data-gj-reveal className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
              PHILOSOPHY · SINCE 1999
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-black sm:text-[38px]">
              혼자 고민하지 않도록,
              <br />
              정확한 의학 정보와
              <br />
              안전한 치료로 답합니다
            </h2>
            <p className="mt-6 text-sm font-semibold text-gj-brass-deep">
              {CLINIC_PROFILE.headquartersLabel} · {CLINIC_PROFILE.facilitySummary}
            </p>
          </div>

          <div data-gj-reveal className="space-y-5 text-[15.5px] leading-[1.85] text-gj-muted lg:col-span-7">
            <p>
              안녕하세요. 강남J비뇨기과의원 대표원장 <strong className="text-black">박천진</strong>입니다.
              1999년 6월부터 하루도 빠짐없이 비뇨의학 진료와 의료상담을 직접 이어오며,
              환자분들이 진정으로 원하시는 것은 과장된 약속이 아니라 <strong className="text-black">정확한 의학 정보와 안전한 치료</strong>라는
              사실을 깊이 체감해 왔습니다.
            </p>
            <p>
              비뇨기과 질환은 말하기 어렵고 민감한 고민이 많습니다. 강남J비뇨기과의원은
              환자분의 프라이버시를 철저히 지키기 위해 <strong className="text-black">5개 독립 개인진료실과 2개 전용 수술실</strong>,
              전원 남성 간호팀, 전자차트 시스템을 갖추고 연세의대 출신 <strong className="text-black">2인 전문의(박천진·이웅희)</strong>가
              처음부터 끝까지 책임 협진합니다.
            </p>
            <p>
              특별히 모든 수술에는 <strong className="text-black">3S(Safe, Simple, Speed)</strong> 원칙을
              철저히 적용합니다. 수술 전 치밀하게 계획을 세우고, 최소한의 국소 신경 마취와
              실시간 생체 활력 모니터링 아래 군더더기 없이 간결하고 안전하게 집도합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3S 원칙 다크 섹션 */}
      <section className="bg-[#101010] py-20 text-white lg:py-28">
        <div className="gj-container">
          <div data-gj-reveal className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gj-brass">
              <ShieldCheck className="h-4 w-4" />
              3S SURGICAL PRINCIPLE
            </p>
            <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] sm:text-[40px]">
              강남J 3S 수술 철학
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CLINIC_3S_PILLARS.map((item) => (
              <article
                key={item.code}
                data-gj-reveal
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-7 lg:p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold text-gj-brass">
                    {item.code}
                  </span>
                  <span className="text-xs font-bold text-white/40">{item.index}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{item.koreanTitle}</h3>
                <p className="mt-3 text-sm leading-[1.78] text-white/70">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>

          <div
            data-gj-reveal
            className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gj-brass/35 bg-gj-brass/10 p-6 sm:flex-row sm:items-center sm:p-8"
          >
            <div className="flex items-start gap-3">
              <Music className="mt-1 h-6 w-6 shrink-0 text-gj-brass" />
              <div>
                <h3 className="text-base font-bold text-white sm:text-lg">
                  수술 중 음악요법 (IOM · IntraOperative Music)
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">
                  수술에 대한 막연한 긴장과 불안을 줄이기 위해 환자분이 선호하는 편안한
                  음악을 청취하며 안정된 상태에서 검사와 수술을 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프라이버시 진료 시스템 4종 */}
      <section className="bg-[#f6f6f6] py-20 lg:py-24">
        <div className="gj-container">
          <h2 className="text-[26px] font-bold tracking-tight text-black sm:text-[34px]">
            프라이버시 중심 진료 환경
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRIVACY_SYSTEMS.map((sys, idx) => (
              <div
                key={sys.title}
                data-gj-reveal
                className="rounded-2xl bg-white p-6 shadow-xs"
              >
                <span className="text-xs font-bold text-gj-brass-deep">0{idx + 1}</span>
                <h3 className="mt-2 text-base font-bold text-black">{sys.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gj-muted">
                  {sys.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/about/doctors"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-6 text-sm font-bold text-white transition hover:bg-gj-brass"
            >
              2인 전문의 약력 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reservation"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-black px-6 text-sm font-bold text-black transition hover:bg-black hover:text-white"
            >
              비회원 온라인 예약
            </Link>
          </div>
        </div>
      </section>
    </GjSubPageShell>
  );
}
