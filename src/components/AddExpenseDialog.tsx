import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { ExpenseForm } from "./ExpenseForm";

export const AddExpenseDialog = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    const newExpense = {
      amount: Number(formData.get("amount")),
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      date: new Date(),
      paidBy: formData.get("paidBy") as string,
    };

    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update the expenses list
      queryClient.setQueryData(['expenses'], (oldData: any[]) => {
        if (!oldData) return [newExpense];
        return [newExpense, ...oldData];
      });

      toast({
        title: "Success",
        description: "Expense added successfully",
      });
      setOpen(false);
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add expense",
        variant: "destructive",
      });
      console.error("Error adding expense:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Expense
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Expense</DialogTitle>
          <DialogDescription>
            Enter the details of your new expense.
          </DialogDescription>
        </DialogHeader>
        <ExpenseForm
          loading={loading}
          onSubmit={handleSubmit}
          formRef={formRef}
        />
      </DialogContent>
    </Dialog>
  );
};