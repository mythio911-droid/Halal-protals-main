import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ShieldCheck, Database, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecuritySettings() {
    return (
        <DashboardLayout
            portalType="superadmin"
            title="Security & Platform Control"
            subtitle="Configure platform access and data security policies"
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="card-elevated p-6 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-status-approved/10 flex items-center justify-center mb-4">
                        <Lock className="h-6 w-6 text-status-approved" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Access Control</h3>
                    <p className="text-sm font-medium mb-4 text-muted-foreground">Manage user permissions and roles across the platform</p>
                    <Button variant="outline" size="sm">Manage Access</Button>
                </div>

                <div className="card-elevated p-6 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Data Storage</h3>
                    <p className="text-sm font-medium mb-4 text-muted-foreground">Control data retention and encryption policies</p>
                    <Button variant="outline" size="sm">Configure Storage</Button>
                </div>

                <div className="card-elevated p-6 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-status-pending/10 flex items-center justify-center mb-4">
                        <UserPlus className="h-6 w-6 text-status-pending" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Onboarding Policy</h3>
                    <p className="text-sm font-medium mb-4 text-muted-foreground">Set mandatory requirements for hospital registration</p>
                    <Button variant="outline" size="sm">Onboarding Rules</Button>
                </div>
            </div>

            <div className="card-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-status-approved" />
                        <h2 className="text-lg font-semibold text-foreground">Security Overview</h2>
                    </div>
                    <Button variant="outline" size="sm">View Security Logs</Button>
                </div>

                <div className="text-center py-10 bg-muted/20 border-2 border-dashed border-muted rounded-lg">
                    <ShieldCheck className="h-10 w-10 mx-auto text-muted-foreground mb-3 opacity-30" />
                    <p className="text-sm font-medium">Security settings are configured manually</p>
                    <p className="text-xs text-muted-foreground max-w-sm mt-1 mx-auto">Configure your platform's security policies to protect user data and ensure privacy.</p>
                </div>
            </div>
        </DashboardLayout>
    );
}
