import { AnimatedCounter } from "@/components/shared/animated-counter";

interface StatisticCardProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatisticCard({ value, suffix, label }: StatisticCardProps) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated sm:p-8">
      <AnimatedCounter value={value} suffix={suffix} label={label} />
    </div>
  );
}
