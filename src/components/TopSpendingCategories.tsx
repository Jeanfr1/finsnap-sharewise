import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SpendingCategory {
  category: string;
  amount: number;
  trend: number;
}

export const TopSpendingCategories = ({ categories }: { categories: SpendingCategory[] }) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Top Spending Categories</h3>
      <div className="space-y-4">
        {categories.map((cat, index) => (
          <div key={cat.category} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">{index + 1}</span>
              <div>
                <p className="font-medium">{cat.category}</p>
                <p className="text-sm text-muted-foreground">
                  {cat.trend > 0 ? '↑' : '↓'} {Math.abs(cat.trend)}% vs last month
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-base font-semibold">
              ${cat.amount.toFixed(2)}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};