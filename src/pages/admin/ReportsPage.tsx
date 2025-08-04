import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, TrendingUp, Users, DollarSign, Calendar, FileText } from "lucide-react";
import { useState } from "react";

const ReportsPage = () => {
  const [reportPeriod, setReportPeriod] = useState("monthly");

  // Mock data - will be replaced with real data from Supabase
  const reportData = {
    monthly: {
      totalClients: 124,
      activeClients: 108,
      newJoins: 15,
      renewals: 23,
      totalRevenue: "₹4,45,000",
      totalExpenses: "₹1,20,000",
      totalProfit: "₹3,25,000"
    },
    quarterly: {
      totalClients: 156,
      activeClients: 134,
      newJoins: 45,
      renewals: 67,
      totalRevenue: "₹12,85,000",
      totalExpenses: "₹3,45,000",
      totalProfit: "₹9,40,000"
    },
    yearly: {
      totalClients: 289,
      activeClients: 234,
      newJoins: 189,
      renewals: 156,
      totalRevenue: "₹48,95,000",
      totalExpenses: "₹12,45,000",
      totalProfit: "₹36,50,000"
    }
  };

  const trainerData = [
    { name: "Alex Rodriguez", clients: 45, revenue: "₹1,35,000", sessions: 180 },
    { name: "Lisa Chen", clients: 38, revenue: "₹1,14,000", sessions: 152 },
    { name: "Mike Johnson", clients: 32, revenue: "₹96,000", sessions: 128 },
    { name: "Sarah Wilson", clients: 28, revenue: "₹84,000", sessions: 112 }
  ];

  const currentData = reportData[reportPeriod as keyof typeof reportData];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">Comprehensive business analytics and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Export Excel
            </Button>
          </div>
        </div>

        {/* Report Period Filter */}
        <Card className="gym-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Report Period:</label>
              <Select value={reportPeriod} onValueChange={setReportPeriod}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
              <Button className="gap-2">
                <TrendingUp className="w-4 h-4" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="stat-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="stat-number">{currentData.totalClients}</div>
              <div className="stat-label">Total Clients</div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-success" />
              </div>
              <div className="stat-number">{currentData.activeClients}</div>
              <div className="stat-label">Active Clients</div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <div className="stat-number">{currentData.newJoins}</div>
              <div className="stat-label">New Joins</div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <div className="stat-number">{currentData.renewals}</div>
              <div className="stat-label">Renewals</div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="gym-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success mb-2">{currentData.totalRevenue}</div>
              <p className="text-sm text-muted-foreground">
                {reportPeriod === "monthly" ? "This month" : 
                 reportPeriod === "quarterly" ? "This quarter" : "This year"}
              </p>
            </CardContent>
          </Card>

          <Card className="gym-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-destructive" />
                Total Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive mb-2">{currentData.totalExpenses}</div>
              <p className="text-sm text-muted-foreground">
                Operational costs
              </p>
            </CardContent>
          </Card>

          <Card className="gym-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Net Profit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">{currentData.totalProfit}</div>
              <p className="text-sm text-muted-foreground">
                Revenue - Expenses
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trainer Performance */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>Trainer Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Trainer Name</th>
                    <th className="text-left py-3 px-4 font-medium">Total Clients</th>
                    <th className="text-left py-3 px-4 font-medium">Revenue Generated</th>
                    <th className="text-left py-3 px-4 font-medium">Sessions Conducted</th>
                    <th className="text-left py-3 px-4 font-medium">Avg. Revenue/Client</th>
                  </tr>
                </thead>
                <tbody>
                  {trainerData.map((trainer, index) => {
                    const avgRevenue = Math.round(
                      parseInt(trainer.revenue.replace(/[₹,]/g, '')) / trainer.clients
                    );
                    return (
                      <tr key={index} className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium">{trainer.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{trainer.clients}</td>
                        <td className="py-3 px-4 text-success font-medium">{trainer.revenue}</td>
                        <td className="py-3 px-4 text-muted-foreground">{trainer.sessions}</td>
                        <td className="py-3 px-4 text-muted-foreground">₹{avgRevenue.toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reports */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>Quick Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Users className="w-6 h-6" />
                <span>Member Report</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <DollarSign className="w-6 h-6" />
                <span>Revenue Report</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Calendar className="w-6 h-6" />
                <span>Attendance Report</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <TrendingUp className="w-6 h-6" />
                <span>Growth Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ReportsPage;