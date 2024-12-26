import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseGroups } from "@/components/ExpenseGroups";
import { useExpenses } from "@/hooks/useExpenses";

export const DashboardExpenses = () => {
  const { data: expenses } = useExpenses();

  // Group expenses by category
  const groupedExpenses = expenses?.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(expense);
    return acc;
  }, {} as Record<string, typeof expenses>);

  return (
    <>
      {groupedExpenses && <ExpenseGroups expenses={groupedExpenses} />}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Expenses</h2>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {expenses?.map((expense, index) => (
            <ExpenseCard 
              key={index} 
              {...expense} 
              className="transform hover:scale-[1.02] transition-transform"
            />
          ))}
        </div>
      </div>
    </>
  );
};