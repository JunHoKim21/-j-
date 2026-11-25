"use client";

import { useRef, type ReactNode } from "react";
import { useGjScrollReveal } from "@/lib/gsap-reveal";
import { GjSiteHeader } from "@/components/shell/GjSiteHeader";
import { GjSiteFooter } from "@/components/shell/GjSiteFooter";
import { GjFloatingQuickBar } from "@/components/shell/GjFloatingQuickBar";
import { GjMobileBottomBar } from "@/components/shell/GjMobileBottomBar";

export function GjSubPageShell({ children }: { children: ReactNode }) {
  const scopeRef = useRef<HTMLDivElement>(null);
  useGjScrollReveal(scopeRef);

  return (
    <div ref={scopeRef} className="relative min-h-dvh bg-white text-black">
      <GjSiteHeader />
      <main id="main-content" className="pt-[60px] lg:pt-[110px]">
        {children}
      </main>
      <GjSiteFooter />
      <GjFloatingQuickBar />
      <GjMobileBottomBar />
    </div>
  );
}
