"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { THREE_S_PRINCIPLES } from "@/lib/data/clinic";

gsap.registerPlugin(ScrollTrigger);

const TRUST_METRICS = [
  {
    index: "01",
    value: "27년",
    label: "SINCE 1999 정통 비뇨의학",
    desc: "1999년 개원 이래 전립선·요로결석·남성재건 분야에 집중해 온 단일 전문 비뇨의학과",
  },
  {
    index: "02",
    value: "2인 협진",
    label: "박천진 대표원장 · 이웅희 원장",
    desc: "풍부한 수술 경력의 대표원장과 세브란스 교수 출신 전문의의 정밀 진단 및 협진 시스템",
  },
  {
    index: "03",
    value: "5개 독립실",
    label: "프라이버시 진료 · 전용 수술센터 2실",
    desc: "독립된 개인진료실과 전원 남성 간호팀, 수술 중 음악요법(IOM)으로 심리적 안정감 제공",
  },
  {
    index: "04",
    value: "5.2만+",
    label: "공식 유튜브 @uroj · 780+ 영상",
    desc: "진료부터 수술 원리까지 전문의가 직접 설명하는 투명하고 검증된 의학 콘텐츠 아카이브",
  },
] as const;

/**
 * GSAP ScrollTrigger Pinned 2단 스플릿 스토리텔링
 * - PC(>=1024px): 좌측 헤드라인 Pin 고정 + 우측 4개 대형 지표 스크롤 포커스(활성 행 강조) + 배경 패럴랙스
 * - 모바일(<1024px): 핀 자동 해제, 깔끔한 수직 스택 유지
 */
export function GsapPinnedStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const leftPinRef = useRef<HTMLDivElement>(null);
  const rightListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        if (bgRef.current) {
          gsap.fromTo(
            bgRef.current,
            { yPercent: -10, scale: 1.15 },
            {
              yPercent: 10,
              scale: 1.15,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (leftPinRef.current && rightListRef.current) {
          ScrollTrigger.create({
            trigger: rightListRef.current,
            start: "top 130px",
            end: "bottom 420px",
            pin: leftPinRef.current,
            pinSpacing: false,
          });
        }

        const rows = gsap.utils.toArray<HTMLElement>(".gsap-metric-row");
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            { opacity: 0.3, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 72%",
                end: "bottom 35%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        gsap.from(".gsap-3s-card", {
          y: 36,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-3s-grid",
            start: "top 80%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-20 text-white lg:py-36"
    >
      <img
        ref={bgRef}
        src="/assets/sample/trust-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/92" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* 좌측 GSAP Pin 고정 헤드라인 */}
          <div ref={leftPinRef} className="space-y-6 lg:col-span-5">
            <p className="text-[12px] font-bold tracking-[0.2em] text-brand-gold">
              WHY GANGNAM J
            </p>
            <h2 className="text-[28px] font-bold leading-[1.22] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[46px]">
              진료 그 이상,
              <br />
              데이터와 원칙으로
              <br />
              증명하는 신뢰
            </h2>
            <p className="max-w-[380px] text-[15px] leading-[1.75] text-white/70">
              단순한 시술이 아니라 환자의 프라이버시와 장기적인 삶의 질을 지키는
              Safe · Simple · Speed 3S 원칙을 고수합니다.
            </p>
            <div className="pt-2">
              <Link
                href="/about/greeting"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-bold text-surface-dark transition-colors hover:bg-brand-gold hover:text-white"
              >
                <span>병원 철학 자세히 보기</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 우측 스크롤 포커스 대형 타이포 지표 스택 */}
          <div
            ref={rightListRef}
            className="divide-y divide-white/15 border-y border-white/15 lg:col-span-7"
          >
            {TRUST_METRICS.map((item) => (
              <div
                key={item.label}
                className="gsap-metric-row grid grid-cols-1 gap-4 py-10 sm:grid-cols-12 sm:items-baseline sm:gap-6 lg:py-16"
              >
                <div className="sm:col-span-5">
                  <span className="block text-[11px] font-bold tracking-[0.2em] text-white/40">
                    {item.index}
                  </span>
                  <div className="mt-1 text-[42px] font-black tracking-tight tabular-nums text-brand-gold sm:text-[52px]">
                    {item.value}
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-7">
                  <h3 className="text-[19px] font-bold text-white sm:text-[21px]">{item.label}</h3>
                  <p className="text-[14.5px] leading-[1.72] text-white/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3S 원칙 3컬럼 에디토리얼 스트립 */}
        <div className="gsap-3s-grid mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:mt-28">
          {THREE_S_PRINCIPLES.map((item) => (
            <div
              key={item.code}
              className="gsap-3s-card space-y-3 rounded-2xl border border-white/10 bg-surface-dark-soft/85 p-8 backdrop-blur-xs"
            >
              <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold">
                {item.code}
              </span>
              <h3 className="text-[20px] font-bold text-white">{item.title}</h3>
              <p className="text-[14.5px] leading-[1.72] text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
