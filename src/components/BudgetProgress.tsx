import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface BudgetProgressProps {
  category: string;
  spent: number;
  budget: number;
  color?: string;
}

export const BudgetProgress = ({ category, spent, budget, color = "primary" }: BudgetProgressProps) => {
  const percentage = Math.min((spent / budget) * 100, 100);
  
  return (
    <Card className="p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-sm">{category}</h3>
        <span className="text-sm text-muted-foreground">
          ${spent.toFixed(2)} / ${budget.toFixed(2)}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
      <p className="text-xs text-muted-foreground">
        {percentage >= 100 ? 'Budget exceeded' : `${(100 - percentage).toFixed(1)}% remaining`}
      </p>
    </Card>
  );
};