import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
}

export const StatsCard = ({ title, value, trend, trendLabel }: StatsCardProps) => {
  const isPositive = trend > 0;

  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold">{value}</p>
        <span className={`ml-2 flex items-center text-sm ${isPositive ? "text-success" : "text-destructive"}`}>
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {Math.abs(trend)}%
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{trendLabel}</p>
    </Card>
  );
};