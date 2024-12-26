import { StatsCard } from "@/components/StatsCard";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard
        title="Total Expenses"
        value="$2,456"
        trend={12}
        trendLabel="vs last month"
      />
      <StatsCard
        title="Average per Member"
        value="$350"
        trend={-5}
        trendLabel="vs last month"
      />
      <StatsCard
        title="Pending Settlements"
        value="$890"
        trend={8}
        trendLabel="vs last week"
      />
    </div>
  );
};