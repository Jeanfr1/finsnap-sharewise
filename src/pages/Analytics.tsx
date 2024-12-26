import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer, Area, AreaChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const mockData = [
  { month: 'Jan', expenses: 1200, revenue: 1800 },
  { month: 'Feb', expenses: 900, revenue: 1600 },
  { month: 'Mar', expenses: 1500, revenue: 2100 },
  { month: 'Apr', expenses: 800, revenue: 1900 },
  { month: 'May', expenses: 1100, revenue: 2300 },
  { month: 'Jun', expenses: 1300, revenue: 2500 },
];

const chartConfig = {
  expenses: {
    label: "Expenses",
    theme: {
      light: "#8B5CF6",
      dark: "#A78BFA",
    },
  },
  revenue: {
    label: "Revenue",
    theme: {
      light: "#10B981",
      dark: "#34D399",
    },
  },
};

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-2">Track your team's spending patterns and trends</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="backdrop-blur-sm bg-background/95">
            <CardHeader>
              <CardTitle>Monthly Overview</CardTitle>
              <CardDescription>Expenses vs Revenue analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ChartContainer config={chartConfig}>
                  <AreaChart data={mockData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <defs>
                      <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      dx={-10}
                    />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stroke="#8B5CF6"
                      fillOpacity={1}
                      fill="url(#expenseGradient)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10B981"
                      fillOpacity={1}
                      fill="url(#revenueGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-background/95">
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
              <CardDescription>Monthly financial progression</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ChartContainer config={chartConfig}>
                  <LineChart data={mockData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      dx={-10}
                    />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={{ stroke: '#8B5CF6', strokeWidth: 2, r: 4, fill: '#fff' }}
                      activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2, fill: '#fff' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ stroke: '#10B981', strokeWidth: 2, r: 4, fill: '#fff' }}
                      activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2, fill: '#fff' }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;