"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      {/* System Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2"
      >
        <div className="h-px w-8 bg-primary/50" />
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          AI-Powered Detection System
        </span>
      </motion.div>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="block">Detect Fraud.</span>
          <motion.span
            initial={{ backgroundPosition: "200% center" }}
            animate={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
            className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
          >
            Protect Welfare.
          </motion.span>
        </motion.h1>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-muted-foreground max-w-xl text-lg leading-relaxed"
      >
        Analyze beneficiary data, transactions, and behavioral patterns using AI
        to identify anomalies, prevent fraud, and ensure welfare benefits reach
        the right individuals.
      </motion.p>

      {/* Feature Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-3"
      >
        {[
          { icon: Shield, label: "Real-time Monitoring" },
          { icon: TrendingUp, label: "Predictive Analytics" },
          { icon: Users, label: "1.2M+ Beneficiaries" },
        ].map((feature, i) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
          >
            <feature.icon className="h-4 w-4 text-primary" />
            {feature.label}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4 flex-wrap items-center"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button size="lg" className="group relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Explore Schemes
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button size="lg" variant="outline" className="group">
            View Analytics
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}