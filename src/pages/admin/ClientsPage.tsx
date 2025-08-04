import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Download, Eye, Edit, Calendar } from "lucide-react";

const ClientsPage = () => {
  // Mock data - will be replaced with real data from Supabase
  const clients = [
    {
      id: 1,
      name: "John Smith",
      gender: "Male",
      phone: "+1 234-567-8900",
      email: "john.smith@email.com",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      remainingDays: 295,
      status: "Active",
      membership: "Premium"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      gender: "Female",
      phone: "+1 234-567-8901",
      email: "sarah.j@email.com",
      startDate: "2023-12-15",
      endDate: "2024-02-15",
      remainingDays: 15,
      status: "Expiring",
      membership: "Basic"
    },
    {
      id: 3,
      name: "Mike Wilson",
      gender: "Male",
      phone: "+1 234-567-8902",
      email: "mike.wilson@email.com",
      startDate: "2023-11-01",
      endDate: "2024-01-01",
      remainingDays: -14,
      status: "Expired",
      membership: "Premium"
    },
    {
      id: 4,
      name: "Emily Davis",
      gender: "Female",
      phone: "+1 234-567-8903",
      email: "emily.davis@email.com",
      startDate: "2024-01-10",
      endDate: "2024-07-10",
      remainingDays: 155,
      status: "Active",
      membership: "Standard"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "Expiring": return "bg-warning text-warning-foreground";
      case "Expired": return "bg-destructive text-destructive-foreground";
      case "Pending": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getRemainingDaysColor = (days: number) => {
    if (days < 0) return "text-destructive font-medium";
    if (days <= 30) return "text-warning font-medium";
    return "text-muted-foreground";
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clients</h1>
            <p className="text-muted-foreground">Manage all gym members and their memberships</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-success">124</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-warning">8</div>
              <div className="text-sm text-muted-foreground">Expiring Soon</div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-destructive">12</div>
              <div className="text-sm text-muted-foreground">Expired</div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">New This Month</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="gym-card">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search clients..." className="pl-10 w-64" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="expiring">Expiring</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Membership</label>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Gender</label>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Clients Table */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>All Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Full Name</th>
                    <th className="text-left py-3 px-4 font-medium">Gender</th>
                    <th className="text-left py-3 px-4 font-medium">Phone</th>
                    <th className="text-left py-3 px-4 font-medium">Email</th>
                    <th className="text-left py-3 px-4 font-medium">Start Date</th>
                    <th className="text-left py-3 px-4 font-medium">End Date</th>
                    <th className="text-left py-3 px-4 font-medium">Remaining Days</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{client.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.gender}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.phone}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.email}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.startDate}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.endDate}</td>
                      <td className={`py-3 px-4 ${getRemainingDaysColor(client.remainingDays)}`}>
                        {client.remainingDays > 0 ? `${client.remainingDays} days` : 
                         client.remainingDays === 0 ? 'Expires today' : 
                         `Expired ${Math.abs(client.remainingDays)} days ago`}
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(client.status)}>
                          {client.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Calendar className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ClientsPage;