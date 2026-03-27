import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Plus, Search, Layers, Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Departments() {
    const departments = [
        { name: "Emergency Medicine", head: "Dr. Sarah Johnson", staff: 12, open: true },
        { name: "Pediatrics", head: "Dr. Emily Brown", staff: 8, open: true },
        { name: "General Surgery", head: "Dr. Michael Chen", staff: 15, open: true },
        { name: "Internal Medicine", head: "Dr. Jessica Davis", staff: 20, open: true },
    ];

    return (
        <DashboardLayout
            portalType="hospital"
            title="Departments"
            subtitle="Overview and management of your hospital's departments"
        >
            <div className="card-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Search departments by name..." />
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add New Department
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {departments.map((dept) => (
                        <div key={dept.name} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-muted/50 hover:border-primary">
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-muted/80">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                        <Layers className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">{dept.name}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                        <Settings className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-status-rejected/60">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">Department Head</span>
                                    <span className="text-xs font-semibold text-foreground">{dept.head}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">Staff Count</span>
                                    <span className="text-xs font-semibold text-foreground">{dept.staff} Members</span>
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xs text-muted-foreground">Operational Status</span>
                                    <span className="flex h-2.5 w-2.5 rounded-full bg-status-approved" />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="p-4 rounded-lg bg-muted/20 border-2 border-dashed border-muted hover:border-primary/40 transition-colors flex flex-col items-center justify-center min-h-[160px] cursor-pointer group">
                        <Plus className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                        <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Create New Department</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
