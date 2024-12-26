import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockTeamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Member",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Member",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  }
];

const Team = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Team Management</h1>
            <p className="text-muted-foreground mt-2">Manage your team members and their permissions</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>

        <div className="grid gap-6">
          {mockTeamMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">{member.role}</span>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Team;