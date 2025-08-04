import { useState } from "react";
import { CalendarDays, TrendingUp, Users, DollarSign, Clock, UserPlus, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [dateFilter, setDateFilter] = useState("today");
  const [memberFilter, setMemberFilter] = useState("");

  // Mock data - will be replaced with real data from Supabase
  const statsData = [
    {
      title: "Total Sales",
      value: "₹45,231",
      change: "+12%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Payments Collected",
      value: "₹38,500",
      change: "+8%",
      icon: TrendingUp,
      trend: "up"
    },
    {
      title: "Payments Pending",
      value: "₹6,731",
      change: "-2%",
      icon: Clock,
      trend: "down"
    },
    {
      title: "New Clients",
      value: "12",
      change: "+5",
      icon: UserPlus,
      trend: "up"
    },
    {
      title: "Renewals",
      value: "8",
      change: "+3",
      icon: Users,
      trend: "up"
    },
    {
      title: "Check-ins",
      value: "156",
      change: "+24",
      icon: CalendarDays,
      trend: "up"
    }
  ];

  const todaySnapshot = {
    followUps: 5,
    appointments: 12,
    classes: 8,
    serviceExpiry: 3,
    ptExpiry: 2,
    upNext: "Yoga Class at 6:00 PM",
    birthdays: 4,
    events: 1
  };

  const recentActivities = [
    { id: 1, member: "John Smith", action: "Checked in", time: "2 minutes ago", type: "checkin" },
    { id: 2, member: "Sarah Johnson", action: "Payment received", time: "15 minutes ago", type: "payment" },
    { id: 3, member: "Mike Wilson", action: "New membership", time: "1 hour ago", type: "membership" },
    { id: 4, member: "Lisa Chen", action: "PT session completed", time: "2 hours ago", type: "session" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening at your gym today.</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="gym-card">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Filter</label>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="3days">Last 3 Days</SelectItem>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Member Filter</label>
              <Select value={memberFilter} onValueChange={setMemberFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by member" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="active">Active Members</SelectItem>
                  <SelectItem value="new">New Members</SelectItem>
                  <SelectItem value="expiring">Expiring Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="flex gap-2">
                <Input placeholder="Search..." className="w-64" />
                <Button>Go</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="stat-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-8 h-8 text-primary" />
                <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.title}</div>
              <Button variant="link" className="p-0 h-auto text-xs text-primary mt-2">
                <Eye className="w-3 h-3 mr-1" />
                View More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="gym-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'checkin' ? 'bg-success' :
                        activity.type === 'payment' ? 'bg-primary' :
                        activity.type === 'membership' ? 'bg-warning' : 'bg-accent'
                      }`} />
                      <div>
                        <p className="font-medium">{activity.member}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar Tabs */}
        <div className="space-y-6">
          <Tabs defaultValue="snapshot" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="snapshot">Snapshot</TabsTrigger>
              <TabsTrigger value="followups">Follow-ups</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>

            <TabsContent value="snapshot" className="space-y-4">
              <Card className="gym-card">
                <CardHeader>
                  <CardTitle className="text-lg">Today's Snapshot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-primary/5">
                      <div className="text-2xl font-bold text-primary">{todaySnapshot.followUps}</div>
                      <div className="text-xs text-muted-foreground">Follow-ups</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-success/5">
                      <div className="text-2xl font-bold text-success">{todaySnapshot.appointments}</div>
                      <div className="text-xs text-muted-foreground">Appointments</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-warning/5">
                      <div className="text-2xl font-bold text-warning">{todaySnapshot.classes}</div>
                      <div className="text-xs text-muted-foreground">Classes</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-destructive/5">
                      <div className="text-2xl font-bold text-destructive">{todaySnapshot.serviceExpiry}</div>
                      <div className="text-xs text-muted-foreground">Service Expiry</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">PT Expiry</span>
                      <Badge variant="outline">{todaySnapshot.ptExpiry}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Birthdays</span>
                      <Badge variant="outline">{todaySnapshot.birthdays}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Events</span>
                      <Badge variant="outline">{todaySnapshot.events}</Badge>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="text-sm font-medium">Up Next</div>
                    <div className="text-sm text-muted-foreground">{todaySnapshot.upNext}</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="followups">
              <Card className="gym-card">
                <CardHeader>
                  <CardTitle className="text-lg">Follow-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border">
                      <div className="font-medium text-sm">John Smith</div>
                      <div className="text-xs text-muted-foreground">Membership renewal due</div>
                      <div className="text-xs text-primary">Due: Today</div>
                    </div>
                    <div className="p-3 rounded-lg border border-border">
                      <div className="font-medium text-sm">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">PT session booking</div>
                      <div className="text-xs text-warning">Due: Tomorrow</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leaderboard">
              <Card className="gym-card">
                <CardHeader>
                  <CardTitle className="text-lg">Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-warning text-white text-xs flex items-center justify-center">1</div>
                        <span className="text-sm font-medium">Alex Rodriguez</span>
                      </div>
                      <span className="text-xs text-muted-foreground">45 clients</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center">2</div>
                        <span className="text-sm font-medium">Lisa Chen</span>
                      </div>
                      <span className="text-xs text-muted-foreground">38 clients</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center">3</div>
                        <span className="text-sm font-medium">Mike Johnson</span>
                      </div>
                      <span className="text-xs text-muted-foreground">32 clients</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;