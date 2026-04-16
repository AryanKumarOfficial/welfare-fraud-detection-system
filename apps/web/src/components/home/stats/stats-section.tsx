"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Users, AlertTriangle, ShieldCheck, Brain } from "lucide-react";

const stats = [
  {
    label: "Total Beneficiaries Processed",
    value: "1.2M+",
    subtext: "Across all welfare programs",
    icon: Users,
  },
  {
    label: "Fraud Cases Detected",
    value: "2,847",
    subtext: "Identified & flagged for review",
    icon: AlertTriangle,
  },
  {
    label: "Funds Recovered",
    value: "$4.2M",
    subtext: "Prevented from fraudulent claims",
    icon: ShieldCheck,
  },
  {
    label: "ML Model Accuracy",
    value: "98.2%",
    subtext: "Continuous learning system",
    icon: Brain,
  },
];

export function StatsSection() {
  return (
    <section className="py-20 border-b border-border/40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight">System Performance</h2>
          <p className="text-muted-foreground mt-2">
            Real-time metrics from our AI fraud detection infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <stat.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Live
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-1">
                      {stat.label}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-4xl font-bold tracking-tight"
                    >
                      {stat.value}
                    </motion.span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {stat.subtext}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}