"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, Target, Activity } from "lucide-react";

const stats = [
  {
    label: "Fraud Detected Today",
    value: "23",
    icon: AlertTriangle,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    label: "High Risk Flags",
    value: "147",
    icon: Activity,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    label: "Model Accuracy",
    value: "96.8%",
    icon: Target,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    label: "Active Monitoring Nodes",
    value: "8,432",
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden border bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:shadow-black/5 transition-all duration-300 p-5 rounded-xl cursor-default">
        {/* Hover Glow */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${stat.bgColor}`} />
        
        <div className="relative flex flex-col gap-3">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${stat.bgColor} ${stat.color}`}
          >
            <stat.icon className="h-5 w-5" />
          </motion.div>

          {/* Value */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            {stat.value}
          </motion.span>

          {/* Label */}
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

export function HeroStatsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} index={index} />
      ))}
    </motion.div>
  );
}