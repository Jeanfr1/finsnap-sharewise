import { ExpenseCard } from "@/components/ExpenseCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Expense {
  amount: number;
  description: string;
  category: string;
  date: Date;
  paidBy: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export const ExpenseList = ({ expenses, hasNextPage, fetchNextPage }: ExpenseListProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
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
  );
};