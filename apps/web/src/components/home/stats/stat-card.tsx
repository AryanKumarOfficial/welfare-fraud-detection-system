"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  index: number;
  trend?: "up" | "down" | "neutral";
}

export function StatCard({ label, value, subtext, index, trend = "neutral" }: StatCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-md transition-shadow duration-300 group">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
          
          <div className="flex items-end justify-between">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="text-4xl font-bold tracking-tight"
            >
              {value}
            </motion.span>
            
            {trend !== "neutral" && (
              <div className={`flex items-center gap-1 text-xs ${
                trend === "up" ? "text-chart-1" : "text-chart-3"
              }`}>
                <TrendIcon className="h-3 w-3" />
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            {subtext}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}