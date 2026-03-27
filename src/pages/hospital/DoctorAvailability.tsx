import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { mockDoctors } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Edit2, Clock, UserCircle } from "lucide-react";
import { toast } from "sonner";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function DoctorAvailability() {
  const [doctors, setDoctors] = useState(mockDoctors.filter(d => d.hospitalId === "h1"));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<typeof mockDoctors[0] | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleToggleLeave = (doctorId: string) => {
    setDoctors(prev => 
      prev.map(d => d.id === doctorId ? { ...d, onLeave: !d.onLeave } : d)
    );
    toast.info("Change request submitted for review");
  };

  const handleEditClick = (doctor: typeof mockDoctors[0]) => {
    setEditingDoctor(doctor);
    setSelectedDays(doctor.availableDays);
    setIsDialogOpen(true);
  };

  const handleSubmitChange = () => {
    setIsDialogOpen(false);
    setEditingDoctor(null);
    toast.success("Change request submitted for platform approval");
  };

  return (
    <DashboardLayout 
      portalType="hospital" 
      title="Doctor Availability" 
      subtitle="Manage doctor schedules and availability"
      hospitalName="City General Hospital"
    >
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Input placeholder="Search doctors..." className="w-64" />
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className={`card-elevated p-5 transition-all ${doctor.onLeave ? 'opacity-60' : ''}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <UserCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.department}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleEditClick(doctor)}>
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              {/* Available Days */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Available Days</p>
                <div className="flex flex-wrap gap-1">
                  {doctor.availableDays.map((day) => (
                    <Badge key={day} variant="secondary" className="text-xs">
                      {day.slice(0, 3)}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Time Slots</p>
                <div className="space-y-1">
                  {doctor.timeSlots.map((slot, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{slot.start} - {slot.end}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* On Leave Toggle */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <Label htmlFor={`leave-${doctor.id}`} className="text-sm">
                  On Leave
                </Label>
                <Switch
                  id={`leave-${doctor.id}`}
                  checked={doctor.onLeave}
                  onCheckedChange={() => handleToggleLeave(doctor.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Doctor Availability</DialogTitle>
            <DialogDescription>
              Changes will be submitted for platform approval before going live.
            </DialogDescription>
          </DialogHeader>

          {editingDoctor && (
            <div className="space-y-6 py-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <UserCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{editingDoctor.name}</p>
                  <p className="text-sm text-muted-foreground">{editingDoctor.department}</p>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Available Days</Label>
                <div className="grid grid-cols-4 gap-2">
                  {DAYS.map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        id={day}
                        checked={selectedDays.includes(day)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedDays([...selectedDays, day]);
                          } else {
                            setSelectedDays(selectedDays.filter(d => d !== day));
                          }
                        }}
                      />
                      <Label htmlFor={day} className="text-sm">{day.slice(0, 3)}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Time</Label>
                  <Input type="time" defaultValue={editingDoctor.timeSlots[0]?.start} />
                </div>
                <div className="space-y-2">
                  <Label>End Time</Label>
                  <Input type="time" defaultValue={editingDoctor.timeSlots[0]?.end} />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmitChange}>Submit for Approval</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
