import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export const DashboardFilters = ({ onFilterChange }: { 
  onFilterChange: (filters: { period: string; date?: Date; category?: string }) => void 
}) => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Select defaultValue="7days" onValueChange={(value) => onFilterChange({ period: value })}>
        <SelectTrigger className="w-[180px] bg-background">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7days">Last 7 days</SelectItem>
          <SelectItem value="30days">Last 30 days</SelectItem>
          <SelectItem value="90days">Last quarter</SelectItem>
          <SelectItem value="year">This year</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFilterChange({ period: "category", category: value })}>
        <SelectTrigger className="w-[180px] bg-background">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="food">Food & Dining</SelectItem>
          <SelectItem value="transport">Transport</SelectItem>
          <SelectItem value="utilities">Utilities</SelectItem>
          <SelectItem value="entertainment">Entertainment</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[180px] bg-background justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              onFilterChange({ period: "custom", date });
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};