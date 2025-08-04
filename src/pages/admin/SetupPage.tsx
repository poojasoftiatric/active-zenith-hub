import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Building, Users, Bell, Palette, Database, Shield, Globe } from "lucide-react";

const SetupPage = () => {
  const setupCategories = [
    {
      title: "Branch Configuration",
      description: "Configure branch details, locations, and facilities",
      icon: Building,
      items: [
        "Branch Information",
        "Operating Hours",
        "Facilities & Equipment",
        "Location Settings"
      ],
      status: "configured"
    },
    {
      title: "User Management",
      description: "Manage user roles, permissions, and access levels",
      icon: Users,
      items: [
        "User Roles",
        "Permissions Matrix",
        "Access Control",
        "Staff Hierarchy"
      ],
      status: "pending"
    },
    {
      title: "Trainer Levels",
      description: "Define trainer certifications and skill levels",
      icon: Users,
      items: [
        "Certification Levels",
        "Skill Categories",
        "Experience Tiers",
        "Specializations"
      ],
      status: "configured"
    },
    {
      title: "Notification Settings",
      description: "Configure email, SMS, and push notification preferences",
      icon: Bell,
      items: [
        "Email Templates",
        "SMS Settings",
        "Push Notifications",
        "Reminder Schedules"
      ],
      status: "partial"
    },
    {
      title: "Theme & Branding",
      description: "Customize application appearance and branding",
      icon: Palette,
      items: [
        "Color Scheme",
        "Logo & Branding",
        "Custom Themes",
        "Layout Preferences"
      ],
      status: "configured"
    },
    {
      title: "Data Management",
      description: "Database backup, import/export, and data policies",
      icon: Database,
      items: [
        "Backup Schedule",
        "Data Export",
        "Import Tools",
        "Retention Policies"
      ],
      status: "pending"
    },
    {
      title: "Security Settings",
      description: "Configure security policies and authentication methods",
      icon: Shield,
      items: [
        "Password Policies",
        "Two-Factor Auth",
        "Session Management",
        "API Security"
      ],
      status: "configured"
    },
    {
      title: "Integration Settings",
      description: "Third-party integrations and API configurations",
      icon: Globe,
      items: [
        "Payment Gateways",
        "WhatsApp Business",
        "Social Media",
        "Analytics Tools"
      ],
      status: "pending"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "configured": return "bg-success text-success-foreground";
      case "partial": return "bg-warning text-warning-foreground";
      case "pending": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "configured": return "Configured";
      case "partial": return "Partially Set";
      case "pending": return "Not Configured";
      default: return "Unknown";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Setup & Configuration</h1>
            <p className="text-muted-foreground">Configure your gym management system settings and preferences</p>
          </div>
          <Button className="gap-2">
            <Settings className="w-4 h-4" />
            Quick Setup Wizard
          </Button>
        </div>

        {/* Setup Progress Overview */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>Setup Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-success"></div>
                <span className="text-sm">Configured (4)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-warning"></div>
                <span className="text-sm">Partially Set (1)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-muted"></div>
                <span className="text-sm">Pending (3)</span>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "62.5%" }}></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">5 of 8 categories configured</p>
          </CardContent>
        </Card>

        {/* Setup Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {setupCategories.map((category, index) => (
            <Card key={index} className="gym-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(category.status)}`}>
                    {getStatusText(category.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        category.status === 'configured' ? 'bg-success' :
                        category.status === 'partial' && itemIndex < 2 ? 'bg-success' :
                        category.status === 'partial' ? 'bg-muted' : 'bg-muted'
                      }`}></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  {category.status === 'configured' ? 'Modify Settings' : 'Configure Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Database className="w-6 h-6" />
                <span>Backup Data</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Settings className="w-6 h-6" />
                <span>System Health Check</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Globe className="w-6 h-6" />
                <span>Test Integrations</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card className="gym-card">
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Application Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>SoActiv v2.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>Enterprise</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Database Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-success">Connected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Backup:</span>
                    <span>Jan 15, 2024 02:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage Used:</span>
                    <span>2.4 GB / 10 GB</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SetupPage;