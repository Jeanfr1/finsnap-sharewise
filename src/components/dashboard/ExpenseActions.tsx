import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export const ExpenseActions = () => {
  const { toast } = useToast();

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action performed",
      description: `Successfully ${action}`,
    });
  };

  return (
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
  );
};