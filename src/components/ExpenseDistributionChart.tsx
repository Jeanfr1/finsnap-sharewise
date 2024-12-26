import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const COLORS = ['#2563EB', '#10B981', '#6366F1', '#EC4899', '#F59E0B'];

interface ExpenseDistributionChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

export const ExpenseDistributionChart = ({ data }: ExpenseDistributionChartProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Expense Distribution</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};