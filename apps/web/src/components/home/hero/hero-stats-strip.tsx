"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "Fraud Detected Today",
    value: "23",
  },
  {
    label: "High Risk Flags",
    value: "147",
  },
  {
    label: "Model Accuracy",
    value: "96.8%",
  },
  {
    label: "Active Monitoring Nodes",
    value: "8,432",
  },
];

export function HeroStatsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="bg-card border p-4 rounded-xl hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">
              {stat.label}
            </span>
            <span className="text-2xl font-bold tracking-tight">
              {stat.value}
            </span>
          </div>
        </Card>
      ))}
    </motion.div>
  );
}