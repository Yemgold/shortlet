


"use client";

import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

import Strands from "@/components/effects/Strands";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Existing Gradient Background */}
      <HeroBackground />

      {/* Animated Strands */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-40">
        <Strands
          colors={[
            "#3B82F6", // Blue
            "#06B6D4", // Cyan
            "#8B5CF6", // Purple
          ]}
          count={4}
          speed={0.35}
          amplitude={0.9}
          waviness={1.2}
          thickness={0.8}
          glow={3}
          taper={3}
          spread={1.2}
          intensity={0.7}
          saturation={1.4}
          opacity={1}
          scale={1.7}
          glass={false}
        />
      </div>

      <Container>
        <div
          className="
            relative
            z-10
            min-h-[calc(100vh-80px)]
            grid
            items-center
            gap-20
            py-20
            lg:grid-cols-2
          "
        >
          <HeroLeft />

          <HeroRight />
        </div>
      </Container>
    </section>
  );
}