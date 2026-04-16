import { Hero } from "@/components/home/hero/hero";
import { StatsSection } from "@/components/home/stats/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
    </div>
  );
}