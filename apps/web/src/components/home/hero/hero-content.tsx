"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8"
    >
      {/* System Tag */}
      <span className="text-sm font-medium text-primary">
        AI-powered Welfare Fraud Detection System
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
        Detect Fraud.
        <br />
        <span className="text-primary">Protect Welfare.</span>
      </h1>

      {/* Description */}
      <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
        Analyze beneficiary data, transactions, and behavioral patterns using AI
        to identify anomalies, prevent fraud, and ensure welfare benefits reach
        the right individuals.
      </p>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap items-center">
        <Button size="lg">Explore Schemes</Button>
        <Button size="lg" variant="outline">
          View Analytics
        </Button>
      </div>
    </motion.div>
  );
}