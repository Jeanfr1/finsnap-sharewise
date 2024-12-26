import { TopSpendingCategories } from "@/components/TopSpendingCategories";
import { BudgetProgress } from "@/components/BudgetProgress";

const budgets = [
  { category: "Food & Dining", spent: 850, budget: 1000 },
  { category: "Transport", spent: 420, budget: 500 },
  { category: "Entertainment", spent: 650, budget: 600 },
  { category: "Utilities", spent: 280, budget: 300 },
];

const topSpendingCategories = [
  { category: "Food & Dining", amount: 850, trend: 12 },
  { category: "Entertainment", amount: 650, trend: -5 },
  { category: "Transport", amount: 420, trend: 8 },
  { category: "Utilities", amount: 280, trend: -2 },
];

export const DashboardBudgets = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TopSpendingCategories categories={topSpendingCategories} />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Budget Tracking</h3>
        <div className="grid gap-4">
          {budgets.map((budget) => (
            <BudgetProgress key={budget.category} {...budget} />
          ))}
        </div>
      </div>
    </div>
  );
};