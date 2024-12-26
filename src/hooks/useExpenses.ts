import { useQuery } from "@tanstack/react-query";

const mockExpenses = [
  {
    amount: 120.50,
    description: "Team Lunch at Bistro",
    category: "Food & Dining",
    date: new Date("2024-02-15"),
    paidBy: "John Doe"
  },
  {
    amount: 45.99,
    description: "Office Supplies - Notebooks and Pens",
    category: "Business",
    date: new Date("2024-02-14"),
    paidBy: "Jane Smith"
  },
  {
    amount: 89.99,
    description: "Software License - Design Tools",
    category: "Technology",
    date: new Date("2024-02-13"),
    paidBy: "Mike Johnson"
  },
  {
    amount: 234.50,
    description: "Team Building Event",
    category: "Entertainment",
    date: new Date("2024-02-12"),
    paidBy: "Sarah Wilson"
  },
  {
    amount: 67.25,
    description: "Transportation - Client Meeting",
    category: "Transport",
    date: new Date("2024-02-11"),
    paidBy: "Alex Brown"
  }
];

export const useExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: () => Promise.resolve(mockExpenses),
    initialData: mockExpenses,
  });
};