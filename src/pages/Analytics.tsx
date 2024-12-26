import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

const mockData = [
  { month: 'Jan', expenses: 1200 },
  { month: 'Feb', expenses: 900 },
  { month: 'Mar', expenses: 1500 },
  { month: 'Apr', expenses: 800 },
  { month: 'May', expenses: 1100 },
  { month: 'Jun', expenses: 1300 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-2">Track your team's spending patterns and trends</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Expenses</CardTitle>
              <CardDescription>Total expenses over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <BarChart width={400} height={300} data={mockData}>
                  <Bar dataKey="expenses" fill="#4f46e5" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                </BarChart>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Trends</CardTitle>
              <CardDescription>Expense patterns analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <LineChart width={400} height={300} data={mockData}>
                  <Line type="monotone" dataKey="expenses" stroke="#4f46e5" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;