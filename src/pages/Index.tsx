import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DashboardBudgets } from "@/components/dashboard/DashboardBudgets";
import { DashboardExpenses } from "@/components/dashboard/DashboardExpenses";

const Index = () => {
  const handleFilterChange = (filters: { period: string; date?: Date; category?: string }) => {
    console.log('Filters changed:', filters);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <DashboardHeader onFilterChange={handleFilterChange} />
        <DashboardStats />
        <DashboardCharts />
        <DashboardBudgets />
        <DashboardExpenses />
      </div>
    </DashboardLayout>
  );
};

export default Index;