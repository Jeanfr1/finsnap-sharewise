import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface ExpenseCardProps {
  amount: number;
  description: string;
  category: string;
  date: Date;
  paidBy: string;
}

export const ExpenseCard = ({ amount, description, category, date, paidBy }: ExpenseCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{description}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-lg font-semibold text-primary">${amount.toFixed(2)}</p>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <p>Paid by {paidBy}</p>
        <p>{formatDistanceToNow(date, { addSuffix: true })}</p>
      </div>
    </Card>
  );
};