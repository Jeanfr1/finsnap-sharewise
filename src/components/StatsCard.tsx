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
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 blur-xl" />
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          <span 
            className={`flex items-center text-sm font-medium ${
              isPositive ? "text-success" : "text-destructive"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDownRight className="h-4 w-4 mr-1" />
            )}
            {Math.abs(trend)}%
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{trendLabel}</p>
      </div>
    </Card>
  );
};