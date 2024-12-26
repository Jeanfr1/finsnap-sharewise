import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton, SidebarMenu } from "@/components/ui/sidebar";
import { Home, PieChart, Users, Settings, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Link, useLocation } from "react-router-dom";
import { AddExpenseDialog } from "./AddExpenseDialog";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: PieChart, label: "Analytics", path: "/analytics" },
  { icon: Users, label: "Team", path: "/team" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r backdrop-blur-lg bg-background/95">
          <SidebarContent>
            <div className="p-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                FinSnap
              </h1>
            </div>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild>
                        <Link 
                          to={item.path} 
                          className={`
                            flex items-center gap-3 px-6 py-3 transition-all duration-200
                            relative overflow-hidden rounded-lg
                            hover:bg-primary/10 dark:hover:bg-primary/20
                            ${location.pathname === item.path ? 
                              'text-primary font-medium before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary before:rounded-r' : 
                              'text-muted-foreground'
                            }
                          `}
                          data-active={location.pathname === item.path}
                        >
                          <item.icon className={`h-5 w-5 transition-transform duration-200 ${
                            location.pathname === item.path ? 'scale-110' : ''
                          }`} />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <div className="px-6 mt-6 space-y-4">
              <AddExpenseDialog />
              <Button
                variant="outline"
                size="icon"
                className="w-full backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </SidebarProvider>
  );
};