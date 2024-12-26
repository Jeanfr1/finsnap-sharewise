import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExpenseDistributionChart } from "@/components/ExpenseDistributionChart";

const chartData = [
  { month: 'Jan', expenses: 2400 },
  { month: 'Feb', expenses: 1398 },
  { month: 'Mar', expenses: 3200 },
  { month: 'Apr', expenses: 2780 },
  { month: 'May', expenses: 1890 },
  { month: 'Jun', expenses: 2390 },
];

const distributionData = [
  { name: 'Food & Dining', value: 2400 },
  { name: 'Transport', value: 1398 },
  { name: 'Utilities', value: 3200 },
  { name: 'Entertainment', value: 1520 },
  { name: 'Other', value: 890 },
];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Expense Trends</h2>
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
      <ExpenseDistributionChart data={distributionData} />
    </div>
  );
};