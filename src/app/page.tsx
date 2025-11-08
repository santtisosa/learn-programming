"use client";

import HeroSection from "@/components/landing/HeroSection";
import FeatureCards from "@/components/landing/FeatureCards";
import LanguageShowcase from "@/components/landing/LanguageShowcase";
import CallToAction from "@/components/landing/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <LanguageShowcase />
      <CallToAction />
    </>
  );
}
