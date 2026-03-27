import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Bell, Megaphone, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notifications() {
    return (
        <DashboardLayout
            portalType="superadmin"
            title="System Notifications"
            subtitle="Broadcast announcements and manage alerts"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-foreground">Active Announcements</h2>
                    <p className="text-sm text-muted-foreground">Recent messages sent to all users</p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Broadcast
                </Button>
            </div>

            <div className="grid gap-6">
                <div className="card-elevated p-8 text-center border-2 border-dashed border-muted bg-muted/20">
                    <Megaphone className="h-10 w-10 mx-auto mb-4 text-muted-foreground opacity-40" />
                    <h3 className="font-semibold text-foreground mb-1">No Broadcasts sent yet</h3>
                    <p className="text-sm text-muted-foreground mb-6">Reach out to all hospitals and doctors at once with a platform-wide broadcast.</p>
                    <Button variant="outline">Learn more about broadcasts</Button>
                </div>

                <div className="card-elevated p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold text-foreground">Recent Audit Alerts</h3>
                        </div>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <Settings className="h-3.5 w-3.5" />
                            Settings
                        </Button>
                    </div>
                    <div className="space-y-4">
                        <div className="text-center py-10 text-muted-foreground">
                            <p className="text-sm">No recent alerts found.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
