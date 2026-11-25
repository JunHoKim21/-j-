"use client";

import { useRef } from "react";
import { useGjScrollReveal } from "@/lib/gsap-reveal";
import { GjSiteHeader } from "@/components/shell/GjSiteHeader";
import { GjSiteFooter } from "@/components/shell/GjSiteFooter";
import { GjFloatingQuickBar } from "@/components/shell/GjFloatingQuickBar";
import { GjMobileBottomBar } from "@/components/shell/GjMobileBottomBar";
import { GjHeroShowcase } from "@/components/home/GjHeroShowcase";
import { GjSymptomQuickFinder } from "@/components/home/GjSymptomQuickFinder";
import { GjPhilosophySection } from "@/components/home/GjPhilosophySection";
import { GjCentersAccordion } from "@/components/home/GjCentersAccordion";
import { GjTrustMetricsSection } from "@/components/home/GjTrustMetricsSection";
import { GjMedicalTeamSection } from "@/components/home/GjMedicalTeamSection";
import { GjGuidanceSplitSection } from "@/components/home/GjGuidanceSplitSection";
import { GjVideoGallerySection } from "@/components/home/GjVideoGallerySection";
import { GjQuickActionBanner } from "@/components/home/GjQuickActionBanner";
import { GjLocationSection } from "@/components/home/GjLocationSection";
import { GjPressTickerStrip } from "@/components/home/GjPressTickerStrip";

export function GjHomePageClient() {
  const scopeRef = useRef<HTMLDivElement>(null);
  useGjScrollReveal(scopeRef);

  return (
    <div ref={scopeRef} className="relative min-h-dvh bg-gj-obsidian">
      <GjSiteHeader />

      <main id="main-content">
        <GjHeroShowcase />
        <GjSymptomQuickFinder />
        <GjPhilosophySection />
        <GjCentersAccordion />
        <GjTrustMetricsSection />
        <GjMedicalTeamSection />
        <GjGuidanceSplitSection />
        <GjVideoGallerySection />
        <GjQuickActionBanner />
        <GjLocationSection />
        <GjPressTickerStrip />
      </main>

      <GjSiteFooter />
      <GjFloatingQuickBar />
      <GjMobileBottomBar />
    </div>
  );
}
