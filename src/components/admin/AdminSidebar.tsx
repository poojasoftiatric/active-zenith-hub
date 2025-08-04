import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut, 
  Dumbbell,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
    { title: "Enquiries", url: "/admin/enquiries", icon: FileText },
    { title: "Enquiry Form", url: "/admin/enquiry-form", icon: UserPlus },
    { title: "Clients", url: "/admin/clients", icon: Users },
    { title: "Staff", url: "/admin/staff", icon: Users },
    { title: "Reports", url: "/admin/reports", icon: BarChart3 },
    { title: "Setup", url: "/admin/setup", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r transition-all duration-300 ease-in-out",
        "sidebar-glow",
        isCollapsed ? "w-16" : "w-64",
        "lg:translate-x-0",
        isCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-primary">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">
                  <span className="text-primary">So</span>
                  <span className="text-sidebar-foreground">Activ</span>
                </h2>
                <p className="text-xs text-muted-foreground">Fitness Application</p>
              </div>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0 lg:hidden"
          >
            {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-sidebar-foreground"
                    )
                  }
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.title}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 text-destructive hover:text-destructive-foreground hover:bg-destructive",
              isCollapsed && "px-3"
            )}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>

        {/* Collapse toggle for desktop */}
        <div className="hidden lg:block absolute -right-3 top-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-6 w-6 p-0 rounded-full bg-background border-sidebar-border"
          >
            <Menu className="w-3 h-3" />
          </Button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;