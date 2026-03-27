import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Building2, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hospitals() {
    return (
        <DashboardLayout
            portalType="superadmin"
            title="Hospital Management"
            subtitle="Overview and control of registered hospitals"
        >
            <div className="card-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Search hospitals by name or location..." />
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Register Hospital
                    </Button>
                </div>

                <div className="grid gap-6">
                    <div className="text-center py-20 bg-muted/30 rounded-lg border-2 border-dashed border-muted">
                        <Building2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                        <h3 className="text-lg font-medium text-foreground">No hospitals currently registered</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-1">
                            Start by onboarding a new hospital to the platform.
                        </p>
                        <Button variant="outline" className="mt-6">Hospital Onboarding Guide</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
