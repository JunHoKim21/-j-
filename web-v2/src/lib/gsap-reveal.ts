"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * 강남J 전용 안전한 스크롤 등장 훅
 * - @gsap/react useGSAP 컨텍스트로 자동 클린업 (React 19 StrictMode 안전)
 * - 초기 뷰포트 요소는 즉시 노출, 화면 밖 요소만 부드럽게 등장
 * - 1.2초 강제 가시화 폴백 타이머로 전체 캡처·스크롤 점프 시 빈 화면(opacity: 0) 원천 차단
 */
export function useGjScrollReveal(scopeRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scopeRef.current;
      if (!root) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const targets = Array.from(
        root.querySelectorAll<HTMLElement>("[data-gj-reveal]")
      );
      if (targets.length === 0) return;

      if (prefersReduced) {
        gsap.set(targets, { opacity: 1, y: 0, clearProps: "transform,opacity" });
        return;
      }

      const viewportH = window.innerHeight || 900;

      targets.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // 초기 뷰포트(Above the fold)는 즉시 노출
        if (rect.top < viewportH * 0.96) {
          gsap.set(el, { opacity: 1, y: 0 });
          return;
        }

        const delayAttr = Number(el.dataset.gjDelay ?? "0");
        const delay = Number.isFinite(delayAttr) ? delayAttr : (index % 4) * 0.06;

        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    },
    { scope: scopeRef }
  );

  // 1.2초 강제 가시화 폴백: 풀페이지 캡처나 빠른 스크롤 점프에서도 빈 화면 0% 보장
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const root = scopeRef.current;
      if (!root) return;
      const targets = root.querySelectorAll<HTMLElement>("[data-gj-reveal]");
      targets.forEach((el) => {
        const computed = window.getComputedStyle(el);
        if (parseFloat(computed.opacity) < 0.95) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
            clearProps: "transform",
          });
        }
      });
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [scopeRef]);
}
