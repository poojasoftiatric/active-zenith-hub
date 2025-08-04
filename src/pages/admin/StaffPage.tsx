import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Eye, Edit, Clock, CheckCircle, XCircle } from "lucide-react";

const StaffPage = () => {
  // Mock data - will be replaced with real data from Supabase
  const staff = [
    {
      id: 1,
      name: "Sarah Wilson",
      designation: "Sales Manager",
      phone: "+1 234-567-8900",
      email: "sarah.wilson@soactiv.com",
      joiningDate: "2023-06-15",
      salary: "₹45,000",
      status: "Active",
      todayAttendance: "present"
    },
    {
      id: 2,
      name: "Mike Johnson",
      designation: "Gym Manager",
      phone: "+1 234-567-8901",
      email: "mike.johnson@soactiv.com",
      joiningDate: "2023-04-10",
      salary: "₹55,000",
      status: "Active",
      todayAttendance: "present"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      designation: "Personal Trainer",
      phone: "+1 234-567-8902",
      email: "alex.rodriguez@soactiv.com",
      joiningDate: "2023-08-20",
      salary: "₹35,000",
      status: "Active",
      todayAttendance: "absent"
    },
    {
      id: 4,
      name: "Lisa Chen",
      designation: "Group Class Instructor",
      phone: "+1 234-567-8903",
      email: "lisa.chen@soactiv.com",
      joiningDate: "2023-09-05",
      salary: "₹30,000",
      status: "Active",
      todayAttendance: "present"
    },
    {
      id: 5,
      name: "David Brown",
      designation: "Receptionist",
      phone: "+1 234-567-8904",
      email: "david.brown@soactiv.com",
      joiningDate: "2023-11-01",
      salary: "₹25,000",
      status: "Active",
      todayAttendance: "not-marked"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "Inactive": return "bg-destructive text-destructive-foreground";
      case "On Leave": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getAttendanceIcon = (attendance: string) => {
    switch (attendance) {
      case "present": return <CheckCircle className="w-4 h-4 text-success" />;
      case "absent": return <XCircle className="w-4 h-4 text-destructive" />;
      case "not-marked": return <Clock className="w-4 h-4 text-warning" />;
      default: return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getAttendanceText = (attendance: string) => {
    switch (attendance) {
      case "present": return "Present";
      case "absent": return "Absent";
      case "not-marked": return "Not Marked";
      default: return "Unknown";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
            <p className="text-muted-foreground">Manage staff members and their attendance</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Staff
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Total Staff</div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-success">9</div>
              <div className="text-sm text-muted-foreground">Present Today</div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-destructive">2</div>
              <div className="text-sm text-muted-foreground">Absent Today</div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">Not Marked</div>
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
                  <Input placeholder="Search staff..." className="pl-10 w-64" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Designation</label>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Designations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Designations</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="trainer">Personal Trainer</SelectItem>
                    <SelectItem value="instructor">Group Instructor</SelectItem>
                    <SelectItem value="receptionist">Receptionist</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="leave">On Leave</SelectItem>
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

        {/* Quick Actions */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button className="gap-2">
                <CheckCircle className="w-4 h-4" />
                Mark All Present
              </Button>
              <Button variant="outline" className="gap-2">
                <Clock className="w-4 h-4" />
                Bulk Attendance
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Staff Table */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>All Staff Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Name</th>
                    <th className="text-left py-3 px-4 font-medium">Designation</th>
                    <th className="text-left py-3 px-4 font-medium">Phone</th>
                    <th className="text-left py-3 px-4 font-medium">Joining Date</th>
                    <th className="text-left py-3 px-4 font-medium">Salary</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Today's Attendance</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((member) => (
                    <tr key={member.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{member.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{member.designation}</td>
                      <td className="py-3 px-4 text-muted-foreground">{member.phone}</td>
                      <td className="py-3 px-4 text-muted-foreground">{member.joiningDate}</td>
                      <td className="py-3 px-4 text-muted-foreground">{member.salary}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(member.status)}>
                          {member.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {getAttendanceIcon(member.todayAttendance)}
                          <span className="text-sm">{getAttendanceText(member.todayAttendance)}</span>
                        </div>
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
                            <Clock className="w-3 h-3" />
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

export default StaffPage;