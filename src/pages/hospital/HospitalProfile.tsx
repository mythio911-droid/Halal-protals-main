import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Building2, Save, FileText, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HospitalProfile() {
    return (
        <DashboardLayout
            portalType="hospital"
            title="Hospital Profile"
            subtitle="Manage your hospital's public information"
        >
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 card-elevated p-8">
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>
                    </div>

                    <form className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="hospital-name">Hospital Name</Label>
                                <Input id="hospital-name" placeholder="Enter your hospital's name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="hospital-id">Internal ID</Label>
                                <Input id="hospital-id" value="HOSP-4810-G" disabled className="bg-muted" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Full Address</Label>
                            <Input id="address" placeholder="Enter full address" />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="contact">Contact Number</Label>
                                <Input id="contact" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Public Email</Label>
                                <Input id="email" type="email" placeholder="public@hospital.com" />
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end gap-3">
                            <Button type="button" variant="outline">Reset Changes</Button>
                            <Button type="submit" className="flex items-center gap-2">
                                <Save className="h-4 w-4" />
                                Save Profile
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="space-y-6">
                    <div className="card-elevated p-6 bg-primary/5 border-primary/20">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold text-foreground">Verified Entity</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Your hospital identity has been verified by the platform administrators.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">View Verification</Button>
                    </div>

                    <div className="card-elevated p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <h3 className="font-semibold text-foreground">Facility Documentation</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-muted/50 rounded-lg text-xs font-medium text-foreground border border-muted hover:border-primary transition-colors cursor-pointer">
                                Medical License (PDF)
                            </div>
                            <div className="p-3 bg-muted/50 rounded-lg text-xs font-medium text-foreground border border-muted hover:border-primary transition-colors cursor-pointer">
                                Facility Accreditation (PDF)
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" className="w-full mt-4 flex items-center gap-2">
                            <Settings className="h-3.5 w-3.5" />
                            Manage Documents
                        </Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
