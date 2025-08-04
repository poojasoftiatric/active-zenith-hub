import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Eye, Edit, Phone } from "lucide-react";

const EnquiriesPage = () => {
  // Mock data - will be replaced with real data from Supabase
  const enquiries = [
    {
      id: 1,
      name: "John Smith",
      contact: "+1 234-567-8900",
      status: "New",
      assignedStaff: "Sarah Wilson",
      date: "2024-01-15",
      followUp: "2024-01-16",
      source: "Website"
    },
    {
      id: 2,
      name: "Emily Johnson",
      contact: "+1 234-567-8901",
      status: "Follow-up",
      assignedStaff: "Mike Johnson",
      date: "2024-01-14",
      followUp: "2024-01-17",
      source: "Referral"
    },
    {
      id: 3,
      name: "David Brown",
      contact: "+1 234-567-8902",
      status: "Converted",
      assignedStaff: "Alex Rodriguez",
      date: "2024-01-13",
      followUp: null,
      source: "Walk-in"
    },
    {
      id: 4,
      name: "Lisa Davis",
      contact: "+1 234-567-8903",
      status: "Lost",
      assignedStaff: "Sarah Wilson",
      date: "2024-01-12",
      followUp: null,
      source: "Social Media"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-primary text-primary-foreground";
      case "Follow-up": return "bg-warning text-warning-foreground";
      case "Converted": return "bg-success text-success-foreground";
      case "Lost": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Enquiries</h1>
            <p className="text-muted-foreground">Manage and track all customer enquiries</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Enquiry
          </Button>
        </div>

        {/* Filters */}
        <Card className="gym-card">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search enquiries..." className="pl-10 w-64" />
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
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="followup">Follow-up</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Assigned Staff</label>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Staff" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Staff</SelectItem>
                    <SelectItem value="sarah">Sarah Wilson</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                    <SelectItem value="alex">Alex Rodriguez</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Source</label>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="walkin">Walk-in</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
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

        {/* Enquiries Table */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>All Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Name</th>
                    <th className="text-left py-3 px-4 font-medium">Contact</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Assigned Staff</th>
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Follow-up</th>
                    <th className="text-left py-3 px-4 font-medium">Source</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{enquiry.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{enquiry.contact}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(enquiry.status)}>
                          {enquiry.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{enquiry.assignedStaff}</td>
                      <td className="py-3 px-4 text-muted-foreground">{enquiry.date}</td>
                      <td className="py-3 px-4">
                        {enquiry.followUp ? (
                          <span className="text-warning font-medium">{enquiry.followUp}</span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{enquiry.source}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Phone className="w-3 h-3" />
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

export default EnquiriesPage;