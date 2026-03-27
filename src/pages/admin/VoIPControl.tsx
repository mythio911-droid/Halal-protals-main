import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Phone, PhoneCall, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VoIPControl() {
    return (
        <DashboardLayout
            portalType="superadmin"
            title="VoIP Control Panel"
            subtitle="Manage voice communication infrastructure"
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="card-elevated p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <PhoneCall className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Active Call Channels</h3>
                    <p className="text-4xl font-bold mb-4">0</p>
                    <p className="text-xs text-muted-foreground">Currently active voice sessions</p>
                </div>

                <div className="card-elevated p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-status-approved/10 flex items-center justify-center mb-4">
                        <Settings className="h-6 w-6 text-status-approved" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">System Health</h3>
                    <p className="text-4xl font-bold mb-4">Good</p>
                    <p className="text-xs text-muted-foreground">Voice server operational</p>
                </div>

                <div className="card-elevated p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-status-pending/10 flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-status-pending" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Bandwidth Usage</h3>
                    <p className="text-4xl font-bold mb-4">0%</p>
                    <p className="text-xs text-muted-foreground">Current network load</p>
                </div>
            </div>

            <div className="card-elevated p-6 mt-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">Infrastructure Settings</h2>
                    <Button variant="outline" size="sm">Configure Servers</Button>
                </div>

                <div className="flex items-center justify-center py-12 text-muted-foreground border-2 border-dashed border-muted rounded-lg bg-muted/20">
                    <div className="text-center">
                        <Phone className="h-10 w-10 mx-auto mb-3 opacity-30" />
                        <p className="text-sm font-medium">No VoIP servers configured</p>
                        <p className="text-xs max-w-[200px] mt-1 mx-auto">Configure your voice servers to enable voice communication throughout the platform.</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
