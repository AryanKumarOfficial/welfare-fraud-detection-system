"use client";

import { motion } from "motion/react";
import { HeroContent } from "./hero-content";
import { HeroRiskPanel } from "./hero-risk-panel";
import { HeroStatsStrip } from "./hero-stats-strip";

export function Hero() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 via-muted/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        {/* Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 self-start"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-1 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-chart-1" />
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            AI Monitoring Active
          </span>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <HeroContent />
          <HeroRiskPanel />
        </div>

        {/* Stats Strip */}
        <HeroStatsStrip />
      </div>
    </section>
  );
}