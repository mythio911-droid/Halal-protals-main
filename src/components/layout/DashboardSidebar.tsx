import { cn } from "@/lib/utils";
import { PortalType } from "@/types/platform";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Building2,
  Stethoscope,
  Phone,
  Bell,
  FileText,
  Settings,
  ShieldCheck,
  ClipboardList,
  Calendar,
  Megaphone,
  Layers,
  Shield,
  UserCircle,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  portalType: PortalType;
  hospitalName?: string;
}

const hospitalNavItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/hospital" },
  { label: "Doctor Availability", icon: Calendar, path: "/hospital/doctors" },
  { label: "Hospital Profile", icon: Building2, path: "/hospital/profile" },
  { label: "Departments", icon: Layers, path: "/hospital/departments" },
  { label: "Announcements", icon: Megaphone, path: "/hospital/announcements" },
  { label: "Change Requests", icon: ClipboardList, path: "/hospital/requests" },
  { label: "Account Settings", icon: Settings, path: "/hospital/settings" },
];

const superAdminNavItems = [
  { label: "Overview", icon: LayoutGrid, path: "/admin" },
  { label: "Pending Approvals", icon: ClipboardList, path: "/admin/approvals" },
  { label: "Users", icon: Users, path: "/admin/users" },
  { label: "Hospitals", icon: Building2, path: "/admin/hospitals" },
  { label: "Doctors", icon: Stethoscope, path: "/admin/doctors" },
  { label: "VoIP Control", icon: Phone, path: "/admin/voip" },
  { label: "Notifications", icon: Bell, path: "/admin/notifications" },
  { label: "Audit Logs", icon: FileText, path: "/admin/audit" },
  { label: "Security Settings", icon: ShieldCheck, path: "/admin/security" },
];

export function DashboardSidebar({ portalType, hospitalName }: SidebarProps) {
  const location = useLocation();
  const navItems = portalType === 'hospital' ? hospitalNavItems : superAdminNavItems;

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex h-full flex-col">
        {/* Logo & Portal Label */}
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <Shield className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-sidebar-foreground">
              {portalType === 'hospital' ? 'Hospital Portal' : 'Super Admin'}
            </span>
            {hospitalName && (
              <span className="text-xs text-sidebar-foreground/60 truncate max-w-[140px]">
                {hospitalName}
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-primary/10 text-sidebar-primary"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent">
              <UserCircle className="h-5 w-5 text-sidebar-foreground/70" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {portalType === 'hospital' ? 'Hospital Staff' : 'Super Admin'}
              </p>
              <p className="text-xs text-sidebar-foreground/50 truncate">
                {portalType === 'hospital' ? 'staff@hospital.com' : 'admin@platform.com'}
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/50 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
