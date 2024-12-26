import { DashboardLayout } from "@/components/DashboardLayout";
import { ExpenseCard } from "@/components/ExpenseCard";
import { StatsCard } from "@/components/StatsCard";
import { useQuery } from "@tanstack/react-query";

// This would typically come from your API
const mockExpenses = [
  {
    amount: 120.50,
    description: "Team Lunch",
    category: "Food & Dining",
    date: new Date("2024-02-15"),
    paidBy: "John Doe"
  },
  {
    amount: 45.99,
    description: "Office Supplies",
    category: "Business",
    date: new Date("2024-02-14"),
    paidBy: "Jane Smith"
  },
  {
    amount: 89.99,
    description: "Software License",
    category: "Technology",
    date: new Date("2024-02-13"),
    paidBy: "Mike Johnson"
  }
];

export const useExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: () => Promise.resolve(mockExpenses),
    initialData: mockExpenses,
  });
};

const Index = () => {
  const { data: expenses } = useExpenses();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-2">Track your team's expenses and stay on budget</p>
        </div>

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

        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
          <div className="grid gap-4">
            {expenses.map((expense, index) => (
              <ExpenseCard key={index} {...expense} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;