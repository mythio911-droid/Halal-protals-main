import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Settings, Save, LogOut, Bell, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountSettings() {
    return (
        <DashboardLayout
            portalType="hospital"
            title="Account Settings"
            subtitle="Manage your hospital portal account and preferences"
        >
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 card-elevated p-8">
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <Settings className="h-5 w-5 text-primary" />
                        <h2 className="text-lg font-semibold text-foreground">Global Settings</h2>
                    </div>

                    <form className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="admin-email">Admin Email</Label>
                                <Input id="admin-email" value="admin@hospital-portal.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="support-email">Support Email</Label>
                                <Input id="support-email" value="support@hospital-portal.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="language">Preferred Language</Label>
                            <Input id="language" value="English (US)" />
                        </div>

                        <div className="pt-4 flex justify-end gap-3">
                            <Button type="button" variant="outline">Reset Changes</Button>
                            <Button type="submit" className="flex items-center gap-2">
                                <Save className="h-4 w-4" />
                                Save Preferences
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="space-y-6">
                    <div className="card-elevated p-6 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-status-rejected/10 flex items-center justify-center mb-4">
                            <Lock className="h-6 w-6 text-status-rejected" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">Security & Sessions</h3>
                        <p className="text-xs text-muted-foreground mb-4">You have 2 active sessions currently</p>
                        <Button variant="outline" size="sm" className="w-full">Revoke All Sessions</Button>
                    </div>

                    <div className="card-elevated p-6 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <LogOut className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">Account Actions</h3>
                        <Button variant="outline" size="sm" className="w-full">Sign Out Everywhere</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
