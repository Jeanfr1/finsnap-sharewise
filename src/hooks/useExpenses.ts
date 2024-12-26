import { useQuery } from "@tanstack/react-query";

const mockExpenses = [
  {
    amount: 120.50,
    description: "Team Lunch at Bistro",
    category: "Food & Dining",
    date: new Date("2024-02-15"),
    paidBy: "John Doe",
    tags: ["team", "lunch"]
  },
  {
    amount: 45.99,
    description: "Office Supplies",
    category: "Business",
    date: new Date("2024-02-14"),
    paidBy: "Jane Smith",
    tags: ["office", "supplies"]
  },
  {
    amount: 89.99,
    description: "Software License",
    category: "Technology",
    date: new Date("2024-02-13"),
    paidBy: "Mike Johnson",
    tags: ["software", "subscription"]
  },
  {
    amount: 234.50,
    description: "Team Building Event",
    category: "Entertainment",
    date: new Date("2024-02-12"),
    paidBy: "Sarah Wilson",
    tags: ["team", "event"]
  },
  {
    amount: 67.25,
    description: "Transportation",
    category: "Transport",
    date: new Date("2024-02-11"),
    paidBy: "Alex Brown",
    tags: ["travel", "client"]
  },
  {
    amount: 156.75,
    description: "Client Dinner",
    category: "Food & Dining",
    date: new Date("2024-02-10"),
    paidBy: "John Doe",
    tags: ["client", "dinner"]
  },
  {
    amount: 299.99,
    description: "Marketing Tools",
    category: "Technology",
    date: new Date("2024-02-09"),
    paidBy: "Jane Smith",
    tags: ["marketing", "tools"]
  }
];

export const useExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: () => Promise.resolve(mockExpenses),
    initialData: mockExpenses,
  });
};