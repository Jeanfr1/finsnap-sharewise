import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 10;

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

const fetchExpensesPage = async ({ pageParam = 0 }) => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const start = pageParam * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const page = mockExpenses.slice(start, end);
  
  return {
    expenses: page,
    nextPage: end < mockExpenses.length ? pageParam + 1 : undefined,
  };
};

export const useExpenses = () => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['expenses'],
    queryFn: fetchExpensesPage,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });

  const expenses = data?.pages.flatMap(page => page.expenses) ?? [];

  return {
    data: expenses,
    isLoading,
    fetchNextPage,
    hasNextPage: !!hasNextPage,
  };
};