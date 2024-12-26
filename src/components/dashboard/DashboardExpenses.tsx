import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseGroups } from "@/components/ExpenseGroups";
import { useExpenses } from "@/hooks/useExpenses";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const DashboardExpenses = () => {
  const { data: expenses, isLoading, fetchNextPage, hasNextPage } = useExpenses();
  const { toast } = useToast();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action performed",
      description: `Successfully ${action}`,
    });
  };

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
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction("added new expense")}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Expense
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => handleQuickAction("exported expenses")}
                >
                  Export Expenses
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleQuickAction("generated report")}
                >
                  Generate Report
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {expenses?.map((expense, index) => (
            <ExpenseCard 
              key={index} 
              {...expense} 
              className="transform hover:scale-[1.02] transition-transform animate-fade-in"
            />
          ))}
          {hasNextPage && (
            <div ref={ref} className="py-4">
              <Skeleton className="h-32 w-full" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};