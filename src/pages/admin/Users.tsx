import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Users as UsersIcon, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Users() {
    return (
        <DashboardLayout
            portalType="superadmin"
            title="User Management"
            subtitle="Manage platform users and permissions"
        >
            <div className="card-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Search users by name or email..." />
                    </div>
                    <Button className="flex items-center gap-2">
                        <UsersIcon className="h-4 w-4" />
                        Add New User
                    </Button>
                </div>

                <div className="text-center py-20 bg-muted/30 rounded-lg border-2 border-dashed border-muted">
                    <UsersIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-lg font-medium text-foreground">No users found</h3>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-1">
                        Start by adding a new user to the platform or adjusting your search filters.
                    </p>
                    <Button variant="outline" className="mt-6">Learn more about roles</Button>
                </div>
            </div>
        </DashboardLayout>
    );
}
