import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";

interface ExpenseFormProps {
  loading: boolean;
  onSubmit: (formData: FormData) => void;
  formRef: React.RefObject<HTMLFormElement>;
}

export const ExpenseForm = ({ loading, onSubmit, formRef }: ExpenseFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          placeholder="Enter amount"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          placeholder="Enter description"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select name="category" required>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Food & Dining">Food & Dining</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Travel">Travel</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="paidBy">Paid By</Label>
        <Input
          id="paidBy"
          name="paidBy"
          placeholder="Enter who paid"
          required
        />
      </div>
      <DialogFooter>
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Expense"}
        </Button>
      </DialogFooter>
    </form>
  );
};