import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Megaphone, Plus, Search, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Announcements() {
    const announcements = [
        { title: "Upcoming Facility Maintenance", date: "Mar 20, 2024", type: "Security" },
        { title: "New Doctor Onboarding", date: "Mar 18, 2024", type: "Update" },
        { title: "Staff Meeting Scheduled", date: "Mar 15, 2024", type: "General" },
    ];

    return (
        <DashboardLayout
            portalType="hospital"
            title="Hospital Announcements"
            subtitle="Broadcast notifications to your staff and patients"
        >
            <div className="card-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Search announcements..." />
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Create Announcement
                    </Button>
                </div>

                <div className="grid gap-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {announcements.map((announcement) => (
                            <div key={announcement.title} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-muted/50 hover:border-primary">
                                <div className="flex items-center justify-between mb-3 pb-2 border-b border-muted/80">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                            <Megaphone className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                            <Settings className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{announcement.title}</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">{announcement.type}</span>
                                        <span className="text-xs font-semibold text-foreground">{announcement.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
