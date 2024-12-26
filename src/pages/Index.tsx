import { DashboardLayout } from "@/components/DashboardLayout";
import { ExpenseCard } from "@/components/ExpenseCard";
import { StatsCard } from "@/components/StatsCard";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

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

const chartData = [
  { month: 'Jan', expenses: 2400 },
  { month: 'Feb', expenses: 1398 },
  { month: 'Mar', expenses: 3200 },
  { month: 'Apr', expenses: 2780 },
  { month: 'May', expenses: 1890 },
  { month: 'Jun', expenses: 2390 },
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
      <div className="space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl -z-10" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your team's expenses and stay on budget
          </p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Expense Trends</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar 
                    dataKey="expenses" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                    className="hover:fill-primary/80 transition-colors"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Recent Expenses</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {expenses.map((expense, index) => (
                <ExpenseCard 
                  key={index} 
                  {...expense} 
                  className="transform hover:scale-[1.02] transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;