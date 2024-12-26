import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpenseCard } from "./ExpenseCard";

interface Expense {
  amount: number;
  description: string;
  category: string;
  date: Date;
  paidBy: string;
}

export const ExpenseGroups = ({ expenses }: { expenses: Expense[] }) => {
  // Group expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(expense);
    return acc;
  }, {} as Record<string, Expense[]>);

  // Group expenses by member
  const expensesByMember = expenses.reduce((acc, expense) => {
    const member = expense.paidBy;
    if (!acc[member]) {
      acc[member] = [];
    }
    acc[member].push(expense);
    return acc;
  }, {} as Record<string, Expense[]>);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Grouped Expenses</h3>
      <Tabs defaultValue="category" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="member">By Member</TabsTrigger>
        </TabsList>
        <TabsContent value="category" className="mt-4 space-y-4">
          {Object.entries(expensesByCategory).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">{category}</h4>
              <div className="space-y-2">
                {items.map((expense, index) => (
                  <ExpenseCard key={index} {...expense} className="border-l-4" />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="member" className="mt-4 space-y-4">
          {Object.entries(expensesByMember).map(([member, items]) => (
            <div key={member} className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">{member}</h4>
              <div className="space-y-2">
                {items.map((expense, index) => (
                  <ExpenseCard key={index} {...expense} className="border-l-4" />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
};