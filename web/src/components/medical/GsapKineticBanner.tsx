"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ScrollTrigger 키네틱 타이포 트랜지션 섹션
 * - 스크롤에 따라 초대형 영문 디스플레이 타이포가 좌우 대향 패럴랙스 이동
 * - overflow-hidden으로 가로 스크롤 0% 보장
 */
export function GsapKineticBanner() {
  const wrapRef = useRef<HTMLElement>(null);
  const lineTopRef = useRef<HTMLDivElement>(null);
  const lineBottomRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (lineTopRef.current) {
          gsap.fromTo(
            lineTopRef.current,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        if (lineBottomRef.current) {
          gsap.fromTo(
            lineBottomRef.current,
            { xPercent: 8 },
            {
              xPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        if (copyRef.current) {
          gsap.fromTo(
            copyRef.current,
            { opacity: 0.25, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      aria-label="강남J비뇨기과 브랜드 선언"
      className="relative overflow-hidden bg-surface-dark py-20 text-white lg:py-32"
    >
      <div className="pointer-events-none select-none space-y-2 opacity-[0.14]">
        <div
          ref={lineTopRef}
          className="whitespace-nowrap text-[56px] font-black leading-none tracking-[-0.04em] text-white sm:text-[96px] lg:text-[148px]"
        >
          GANGNAM J UROLOGY · SINCE 1999 · GANGNAM J UROLOGY
        </div>
        <div
          ref={lineBottomRef}
          className="whitespace-nowrap text-[56px] font-black leading-none tracking-[-0.04em] text-brand-gold sm:text-[96px] lg:text-[148px]"
        >
          SAFE · SIMPLE · SPEED · 2 SPECIALISTS · 3S PRECISION
        </div>
      </div>

      <div
        ref={copyRef}
        className="container-page relative z-10 -mt-16 text-center sm:-mt-28 lg:-mt-40"
      >
        <p className="text-[12px] font-bold tracking-[0.22em] text-brand-gold">
          IT&apos;S CLINICAL PRECISION
        </p>
        <h2 className="mx-auto mt-3 max-w-[760px] text-[26px] font-bold leading-[1.32] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[48px]">
          27년의 임상 경험 위에,
          <br />
          2인 전문의 협진의 깊이를 더합니다.
        </h2>
      </div>
    </section>
  );
}
