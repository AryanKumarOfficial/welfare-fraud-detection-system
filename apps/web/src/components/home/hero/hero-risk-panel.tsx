"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Shield, Activity } from "lucide-react";

interface RiskSegmentProps {
  label: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}

function RiskSegment({ label, value, color, icon }: RiskSegmentProps) {
  return (
    <motion.div
      className="flex justify-between items-center py-2.5 px-3 rounded-lg hover:bg-muted/30 transition-colors"
      whileHover={{ x: 4 }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className={`w-16 h-2 rounded-full bg-muted overflow-hidden`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={`h-full rounded-full ${color}`}
          />
        </div>
        <span className="text-sm font-semibold text-foreground w-10 text-right">
          {value}%
        </span>
      </div>
    </motion.div>
  );
}

export function HeroRiskPanel() {
  const risks = [
    {
      label: "Low Risk",
      value: 72,
      color: "bg-chart-1",
      icon: <Shield className="h-4 w-4 text-chart-1" />,
    },
    {
      label: "Medium Risk",
      value: 18,
      color: "bg-chart-2",
      icon: <Activity className="h-4 w-4 text-chart-2" />,
    },
    {
      label: "High Risk",
      value: 10,
      color: "bg-chart-3",
      icon: <AlertTriangle className="h-4 w-4 text-chart-3" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="bg-card/80 backdrop-blur-sm border shadow-xl shadow-black/5 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        
        <CardHeader className="pb-3 relative">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-primary" />
              Risk Distribution
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              Live
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Current beneficiary risk assessment
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-5 relative">
          {/* Segmented Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex rounded-lg overflow-hidden h-4 gap-0.5 origin-left"
          >
            {risks.map((risk) => (
              <motion.div
                key={risk.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`${risk.color} transition-all hover:opacity-80 cursor-pointer`}
                style={{ width: `${risk.value}%` }}
                whileHover={{ scaleY: 1.2 }}
              />
            ))}
          </motion.div>

          {/* Risk Labels */}
          <div className="flex flex-col gap-1">
            {risks.map((risk) => (
              <RiskSegment
                key={risk.label}
                label={risk.label}
                value={risk.value}
                color={risk.color}
                icon={risk.icon}
              />
            ))}
          </div>

          {/* Stats Blocks */}
          <div className="border-t pt-4 grid grid-cols-2 gap-4">
            <motion.div
              className="flex flex-col gap-1 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <AlertTriangle className="h-3 w-3 text-chart-3" />
                Fraud Cases Detected
              </span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-2xl font-bold tracking-tight"
              >
                2,847
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col gap-1 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Shield className="h-3 w-3 text-chart-1" />
                Active Beneficiaries
              </span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-2xl font-bold tracking-tight"
              >
                1.2M
              </motion.span>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}