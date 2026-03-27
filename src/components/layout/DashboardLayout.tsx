import { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { PortalType } from "@/types/platform";

interface DashboardLayoutProps {
  children: ReactNode;
  portalType: PortalType;
  title: string;
  subtitle?: string;
  hospitalName?: string;
}

export function DashboardLayout({
  children,
  portalType,
  title,
  subtitle,
  hospitalName,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar portalType={portalType} hospitalName={hospitalName} />
      <div className="pl-64">
        <DashboardHeader title={title} subtitle={subtitle} />
        <main className="p-6 animate-fade-in">{children}</main>
      </div>
    </div>
  );
}
