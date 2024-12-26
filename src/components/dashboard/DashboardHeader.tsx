import { DashboardFilters } from "@/components/DashboardFilters";

export const DashboardHeader = ({ onFilterChange }: {
  onFilterChange: (filters: { period: string; date?: Date; category?: string }) => void
}) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl -z-10" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Track your team's expenses and stay on budget
        </p>
      </div>
      <DashboardFilters onFilterChange={onFilterChange} />
    </>
  );
};