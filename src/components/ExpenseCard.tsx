import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface ExpenseCardProps {
  amount: number;
  description: string;
  category: string;
  date: Date;
  paidBy: string;
  className?: string;
}

export const ExpenseCard = ({ 
  amount, 
  description, 
  category, 
  date, 
  paidBy,
  className 
}: ExpenseCardProps) => {
  return (
    <Card className={cn(
      "p-4 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-background to-muted/50",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{description}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-primary">${amount.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(date, { addSuffix: true })}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xs font-medium text-primary">
            {paidBy.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Paid by {paidBy}</p>
      </div>
    </Card>
  );
};