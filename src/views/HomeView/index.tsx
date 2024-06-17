"use client"

import { Community } from "@/components/Community";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import React from "react"

export const HomeView = React.memo(function HomeView() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <HowItWorks />
      <Community />
    </>
  );
})
