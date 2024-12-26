import { ExpenseGroups } from "@/components/ExpenseGroups";
import { useExpenses } from "@/hooks/useExpenses";
import { Skeleton } from "@/components/ui/skeleton";
import { ExpenseActions } from "./ExpenseActions";
import { ExpenseList } from "./ExpenseList";

export const DashboardExpenses = () => {
  const { data: expenses, isLoading, fetchNextPage, hasNextPage } = useExpenses();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-32" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {expenses && expenses.length > 0 && <ExpenseGroups expenses={expenses} />}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Recent Expenses</h2>
          <ExpenseActions />
        </div>
        <ExpenseList 
          expenses={expenses ?? []} 
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </div>
    </>
  );
};