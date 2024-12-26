import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [managingMemberId, setManagingMemberId] = useState<number | null>(null);

  const handleAddMember = async () => {
    setIsAddingMember(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "New team member invitation sent successfully.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send invitation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingMember(false);
    }
  };

  const handleManageMember = async (memberId: number) => {
    setManagingMemberId(memberId);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "Member permissions updated successfully.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update member permissions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setManagingMemberId(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Team Management</h1>
            <p className="text-muted-foreground mt-2">Manage your team members and their permissions</p>
          </div>
          <Button
            onClick={handleAddMember}
            disabled={isAddingMember}
            className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            <Plus className="mr-2 h-4 w-4" />
            {isAddingMember ? "Adding..." : "Add Member"}
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleManageMember(member.id)}
                    disabled={managingMemberId === member.id}
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {managingMemberId === member.id ? "Managing..." : "Manage"}
                  </Button>
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