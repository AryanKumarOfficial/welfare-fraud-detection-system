"use client";

import { motion } from "motion/react";
import { HeroContent } from "./hero-content";
import { HeroRiskPanel } from "./hero-risk-panel";
import { HeroStatsStrip } from "./hero-stats-strip";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32">
      {/* Animated Background - Full Viewport Width */}
      <div 
        className="absolute inset-x-0 top-0 bottom-0 -z-10"
        style={{ 
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-muted/20 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -left-40 w-80 h-80 bg-chart-1/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-chart-3/10 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-16">
        {/* Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 self-start"
        >
          <motion.div
            className="relative flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inline-flex h-full w-full rounded-full bg-chart-1"
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-chart-1" />
            </span>
            <span className="text-sm font-medium text-primary">
              AI Monitoring Active
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              Real-time Protection
            </span>
          </motion.div>
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