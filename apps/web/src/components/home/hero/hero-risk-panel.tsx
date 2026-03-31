"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RiskSegmentProps {
  label: string;
  value: number;
  color: string;
}

function RiskSegment({ label, value, color }: RiskSegmentProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-foreground">
        {value}%
      </span>
    </div>
  );
}

export function HeroRiskPanel() {
  const risks = [
    { label: "Low Risk", value: 72, color: "bg-chart-1" },
    { label: "Medium Risk", value: 18, color: "bg-chart-2" },
    { label: "High Risk", value: 10, color: "bg-chart-3" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <Card className="bg-card border shadow-sm transition rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">
            Risk Distribution
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {/* Segmented Bar */}
          <div className="flex rounded-lg overflow-hidden h-3 gap-px">
            {risks.map((risk) => (
              <div
                key={risk.label}
                className={`${risk.color} transition-all`}
                style={{ width: `${risk.value}%` }}
              />
            ))}
          </div>

          {/* Risk Labels */}
          <div className="flex flex-col gap-1">
            {risks.map((risk) => (
              <RiskSegment
                key={risk.label}
                label={risk.label}
                value={risk.value}
                color={risk.color}
              />
            ))}
          </div>

          {/* Stats Blocks */}
          <div className="border-t pt-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">
                Fraud Cases Detected
              </span>
              <span className="text-2xl font-bold tracking-tight">
                2,847
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">
                Active Beneficiaries
              </span>
              <span className="text-2xl font-bold tracking-tight">
                1.2M
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}