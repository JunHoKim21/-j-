"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, UserRound } from "lucide-react";
import { DOCTORS } from "@/lib/data/clinic";

gsap.registerPlugin(ScrollTrigger);

/**
 * 화이트 브레이크 — 화보형 2인 전문의 스포트라이트
 * - 이력서형 텍스트 과밀 배제, 3:4 대형 인물 사진 중심 + 간결한 핵심 소개 & 예약 버튼
 */
export function GsapDoctorSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".gsap-doctor-card", {
          y: 32,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            once: true,
          },
        });
      });
    }, sectionRef);

    // 빠른 스크롤 및 전체 페이지 캡처 시 빈 화면 방지 강제 가시화 폴백
    const fallbackTimer = window.setTimeout(() => {
      const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".gsap-doctor-card");
      cards?.forEach((card) => {
        if (parseFloat(window.getComputedStyle(card).opacity) < 0.99) {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            overwrite: "auto",
            clearProps: "transform",
          });
        }
      });
    }, 700);

    return () => {
      window.clearTimeout(fallbackTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="doctors-heading"
      className="bg-surface-0 py-20 lg:py-32"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-brand-gold-deep">
              MEDICAL TEAM · 2 SPECIALISTS
            </p>
            <h2
              id="doctors-heading"
              className="mt-3 text-[28px] font-bold leading-[1.24] tracking-[-0.03em] text-ink-primary sm:text-[38px] lg:text-[46px]"
            >
              남다른 자부심,
              <br className="sm:hidden" /> 2인 전문의 협진 팀
            </h2>
          </div>
          <Link
            href="/about/doctors"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-ink-primary transition-colors hover:text-brand-gold-deep"
          >
            <span>전체 약력 · 학회 활동 보기</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 대형 화보형 2열 스포트라이트 */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:gap-12">
          {DOCTORS.map((doctor) => (
            <article key={doctor.slug} className="gsap-doctor-card group flex flex-col">
              {/* 상단 대형 3:4 스튜디오 포트레이트 */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-surface-1">
                {doctor.imagePath ? (
                  <img
                    src={doctor.imagePath}
                    alt={`${doctor.name} ${doctor.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                    <UserRound className="h-20 w-20 text-ink-primary/20" strokeWidth={1.2} />
                    <span className="mt-4 text-[15px] font-bold text-ink-primary">
                      {doctor.name} {doctor.title}
                    </span>
                  </div>
                )}

                <span className="absolute left-5 top-5 rounded-full bg-surface-dark/90 px-3.5 py-1.5 text-[11.5px] font-bold tracking-wider text-brand-gold backdrop-blur-xs">
                  {doctor.title}
                </span>
              </div>

              {/* 하단 미니멀 에디토리얼 정보 바 */}
              <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="space-y-1">
                  <h3 className="text-[26px] font-bold tracking-tight text-ink-primary sm:text-[28px]">
                    {doctor.name}{" "}
                    <span className="text-[16px] font-medium text-ink-secondary">
                      비뇨의학과 전문의
                    </span>
                  </h3>
                  <p className="text-[14px] font-medium text-ink-secondary">
                    {doctor.credentials}
                  </p>
                  <p className="pt-1 text-[14px] font-bold text-brand-navy">
                    {doctor.specialtySummary}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <Link
                    href="/reservation"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-surface-dark px-6 text-[13.5px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
                  >
                    예약하기
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
