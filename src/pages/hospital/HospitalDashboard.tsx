import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockChangeRequests } from "@/data/mockData";
import { Clock, CheckCircle2, AlertCircle, Calendar, Megaphone, Building } from "lucide-react";
import { format } from "date-fns";

export default function HospitalDashboard() {
  const hospitalRequests = mockChangeRequests.filter(r => r.hospitalId === "h1");
  const pendingCount = hospitalRequests.filter(r => r.status === "pending").length;
  const approvedCount = hospitalRequests.filter(r => r.status === "approved").length;
  const lastApproved = hospitalRequests.find(r => r.status === "approved");

  return (
    <DashboardLayout 
      portalType="hospital" 
      title="Dashboard" 
      subtitle="Overview of your hospital's status"
      hospitalName="City General Hospital"
    >
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Pending Approvals"
          value={pendingCount}
          subtitle="Awaiting platform review"
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="Approved This Month"
          value={approvedCount}
          subtitle="Updates live on platform"
          icon={CheckCircle2}
          variant="success"
        />
        <StatCard
          title="Active Doctors"
          value={12}
          subtitle="Currently available"
          icon={Calendar}
          variant="primary"
        />
        <StatCard
          title="Departments"
          value={8}
          subtitle="Operational units"
          icon={Building}
          variant="default"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pending Updates */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Pending Updates</h2>
            <span className="text-sm text-muted-foreground">{pendingCount} waiting</span>
          </div>
          
          <div className="space-y-3">
            {hospitalRequests.filter(r => r.status === "pending").length > 0 ? (
              hospitalRequests
                .filter(r => r.status === "pending")
                .map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-status-pending/10">
                        <Clock className="h-4 w-4 text-status-pending" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground capitalize">
                          {request.updateType.replace("_", " ")}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Submitted {format(request.submittedAt, "MMM d, yyyy")}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={request.status} />
                  </div>
                ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle2 className="h-10 w-10 mx-auto mb-2 opacity-50" />
                <p>No pending updates</p>
              </div>
            )}
          </div>
        </div>

        {/* Last Approved Update */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Last Approved Update</h2>
          </div>
          
          {lastApproved ? (
            <div className="p-4 rounded-lg bg-status-approved-bg border border-status-approved/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-status-approved/10">
                  <CheckCircle2 className="h-5 w-5 text-status-approved" />
                </div>
                <div>
                  <p className="font-medium text-foreground capitalize">
                    {lastApproved.updateType.replace("_", " ")} Update
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Approved on {format(lastApproved.reviewedAt!, "MMM d, yyyy 'at' h:mm a")}
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p><span className="font-medium">Reviewed by:</span> {lastApproved.reviewedBy}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p>No approved updates yet</p>
            </div>
          )}
        </div>

        {/* Platform Notices */}
        <div className="card-elevated p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Platform Notices</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Megaphone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">System Maintenance Scheduled</p>
                <p className="text-sm text-muted-foreground mt-1">
                  The platform will undergo scheduled maintenance on January 20th from 2:00 AM to 4:00 AM UTC. 
                  Please save any work before this time.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Posted 2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">New Announcement Guidelines</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Please review the updated guidelines for submitting hospital announcements. 
                  All announcements must comply with healthcare communication regulations.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Posted 1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
