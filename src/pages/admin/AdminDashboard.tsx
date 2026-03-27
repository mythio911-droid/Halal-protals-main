import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockChangeRequests, mockHospitals, mockAuditLogs } from "@/data/mockData";
import { 
  ClipboardCheck, 
  Building2, 
  Stethoscope, 
  Bell, 
  ArrowUpRight,
  Clock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function AdminDashboard() {
  const pendingRequests = mockChangeRequests.filter(r => r.status === "pending");
  const recentLogs = mockAuditLogs.slice(0, 4);

  return (
    <DashboardLayout 
      portalType="superadmin" 
      title="Platform Overview" 
      subtitle="Central control dashboard"
    >
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Pending Approvals"
          value={pendingRequests.length}
          subtitle="Require immediate action"
          icon={ClipboardCheck}
          variant="warning"
        />
        <StatCard
          title="Active Hospitals"
          value={mockHospitals.filter(h => h.isActive).length}
          subtitle="On the platform"
          icon={Building2}
          variant="default"
        />
        <StatCard
          title="Total Doctors"
          value={156}
          subtitle="Across all hospitals"
          icon={Stethoscope}
          variant="primary"
        />
        <StatCard
          title="Notifications Sent"
          value="2.4K"
          subtitle="This month"
          icon={Bell}
          variant="success"
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pending Approvals */}
        <div className="lg:col-span-2 card-elevated p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Pending Approvals</h2>
              <p className="text-sm text-muted-foreground">Review and action required</p>
            </div>
            <Link to="/admin/approvals">
              <Button variant="outline" size="sm">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {pendingRequests.slice(0, 4).map((request) => (
              <div 
                key={request.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-status-pending/10">
                    <Clock className="h-5 w-5 text-status-pending" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{request.hospitalName}</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {request.updateType.replace("_", " ")} update
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <StatusBadge status={request.status} />
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(request.submittedAt, "MMM d, h:mm a")}
                    </p>
                  </div>
                  <Link to="/admin/approvals">
                    <Button size="sm">Review</Button>
                  </Link>
                </div>
              </div>
            ))}

            {pendingRequests.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Shield className="h-10 w-10 mx-auto mb-2 opacity-50" />
                <p>All caught up! No pending approvals.</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
            <Link to="/admin/audit">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentLogs.map((log) => (
              <div key={log.id} className="flex items-start gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${
                  log.outcome === 'success' ? 'bg-status-approved/10' : 'bg-status-rejected/10'
                }`}>
                  <Shield className={`h-4 w-4 ${
                    log.outcome === 'success' ? 'text-status-approved' : 'text-status-rejected'
                  }`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{log.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {log.adminName} • {format(log.timestamp, "MMM d, h:mm a")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospital Overview */}
        <div className="lg:col-span-3 card-elevated p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Hospital Overview</h2>
              <p className="text-sm text-muted-foreground">Active hospitals on the platform</p>
            </div>
            <Link to="/admin/hospitals">
              <Button variant="outline" size="sm">
                Manage Hospitals
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {mockHospitals.map((hospital) => (
              <div key={hospital.id} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{hospital.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      Since {format(hospital.createdAt, "MMM yyyy")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {hospital.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
