import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, HeartPulse, Users, Music, FileCheck2 } from "lucide-react";
import { CLINIC_INFO, THREE_S_PRINCIPLES } from "@/lib/data/clinic";
import { SubHero } from "@/components/layout/SubHero";

export const metadata: Metadata = {
  title: "병원 철학 · 3S 원칙",
  description: "1999년부터 이어온 강남J비뇨기과의원의 3S(Safe·Simple·Speed) 수술 철학과 프라이버시 진료 시스템을 안내합니다.",
};

const PRIVACY_SYSTEMS = [
  {
    icon: Lock,
    title: "독립된 5개 개인진료실 · 상담실",
    desc: "다른 내원객과 마주치는 부담을 줄이고, 독립된 공간에서 전문의와 충분한 시간 동안 상담 및 진료를 진행합니다.",
  },
  {
    icon: Users,
    title: "전원 남성 간호팀 · 전담 상담원",
    desc: "모든 검사와 시술에는 비뇨의학과 전문의와 베테랑 남자 간호사만 참여하여 심리적 불편함을 최소화합니다.",
  },
  {
    icon: Music,
    title: "수술 중 음악요법 (IOM)",
    desc: "국소 신경 마취와 실시간 생체 활력 증후 모니터링 하에 편안한 음악을 청취하며 수술 불안감을 완화합니다.",
  },
  {
    icon: FileCheck2,
    title: "전자 차트(EMR) 보안 시스템",
    desc: "종이 차트 분실·노출 우려를 줄이는 전자 차트 시스템과 예약 우선제로 신속하고 안전한 진료를 제공합니다.",
  },
];

export default function GreetingPage() {
  return (
    <>
      <SubHero
        kicker="ABOUT · PHILOSOPHY"
        title="병원 철학 · 3S 원칙"
        description="1999년부터 정확한 비뇨의학 정보 전달과 안전한 수술 원칙을 지켜온 강남J비뇨기과의원입니다."
        breadcrumbs={[{ label: "병원소개", href: "/about/greeting" }, { label: "병원 철학 · 3S 원칙" }]}
      />

      {/* 대표원장 인사말 & 병원 철학 (Surface 0) */}
      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-brass">
                SINCE {CLINIC_INFO.since}
              </p>
              <h2 className="mt-2.5 text-[24px] font-bold leading-[1.35] tracking-[-0.02em] text-brand-navy lg:text-[32px]">
                정확한 의학 정보와
                <br />
                환자 중심의 프라이빗 진료
              </h2>
              <div className="mt-6 overflow-hidden rounded-xl bg-surface-1">
                <img
                  src="/assets/doctors/surgery-scene.png"
                  alt="강남J비뇨기과 수술실 진료 모습"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-5 text-[15.5px] leading-[1.8] text-ink-secondary lg:col-span-7 lg:text-[16px]">
              <p className="text-[18px] font-semibold leading-[1.6] text-brand-navy">
                “비뇨기과 질환에 대한 정확한 정보를 바탕으로, 가장 최선의 진료를 받도록 돕는 것이 강남J비뇨기과의 존재 이유입니다.”
              </p>
              <p>
                비뇨의학은 남성의 비뇨기관(신장·요관·방광·요도) 및 남성생식기관(고환·부고환·정관·전립선 등)과 여성의 비뇨기관 질환을 다루는 전문 분야입니다.
                누군가에게 쉽게 털어놓기 어려운 고민일수록, 검증된 전문의와 프라이버시가 보장된 공간에서 정확한 진단을 받는 것이 중요합니다.
              </p>
              <p>
                강남J비뇨기과는 1999년 개원 이래 국내외 학회 연구와 꾸준한 직접 상담을 이어왔으며, 현재는 박천진 대표원장과 세브란스 교수 출신 이웅희 원장의
                2인 전문의 협진 체제로 전립선비대증(HoLEP·유로리프트), 요로결석, 음경임플란트, 남성재건수술까지 전문적인 진료를 제공하고 있습니다.
              </p>
              <p>
                모든 수술에는 최소한의 국소 신경 마취를 적용해 전신 마취 약제 부담을 줄이고, 수술 중에도 첨단 활력증후 모니터링 장비로
                맥박·산소포화도·혈압·호흡수를 실시간 확인하며 안전한 수술 환경을 유지합니다.
              </p>
              <div className="pt-2 text-[15px] font-bold text-brand-navy">
                강남J비뇨기과의원 대표원장 박천진 · 원장 이웅희
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3S 원칙 (Surface Dark) */}
      <section className="bg-brand-navy py-14 text-white lg:py-24">
        <div className="container-page">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-brand-brass" />
            <span className="text-[12px] font-bold tracking-[0.14em] text-brand-brass">
              3S SURGERY PRINCIPLE
            </span>
          </div>
          <h2 className="mt-2.5 text-[24px] font-bold tracking-[-0.02em] lg:text-[32px]">
            강남J비뇨기과 3S 수술 철학
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {THREE_S_PRINCIPLES.map((item) => (
              <div key={item.code} className="space-y-3 border-t border-white/15 pt-5">
                <span className="text-[13px] font-bold tracking-[0.14em] text-brand-brass">
                  {item.code}
                </span>
                <h3 className="text-[18px] font-bold text-white">{item.title}</h3>
                <p className="text-[14.5px] leading-[1.7] text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프라이버시 진료 시스템 (Surface 1) */}
      <section className="bg-surface-1 py-14 lg:py-24">
        <div className="container-page">
          <div className="mb-10">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-brass">
              PRIVATE CARE SYSTEM
            </p>
            <h2 className="mt-2 text-[24px] font-bold tracking-[-0.02em] text-brand-navy lg:text-[32px]">
              프라이버시를 최우선으로 설계한 진료 환경
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PRIVACY_SYSTEMS.map((sys) => {
              const Icon = sys.icon;
              return (
                <article key={sys.title} className="flex gap-4 rounded-xl bg-surface-0 p-6 sm:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-brand-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-[17px] font-bold text-brand-navy">{sys.title}</h3>
                    <p className="text-[14.5px] leading-[1.68] text-ink-secondary">{sys.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about/doctors"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-navy px-6 text-[14.5px] font-bold text-white hover:bg-brand-blue"
            >
              2인 전문의 약력 보기
            </Link>
            <Link
              href="/about/facilities"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-surface-0 px-6 text-[14.5px] font-bold text-brand-navy hover:bg-surface-2"
            >
              병원 시설 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
