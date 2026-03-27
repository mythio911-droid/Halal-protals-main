import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockChangeRequests } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, CheckCircle2, XCircle, HelpCircle, ArrowLeftRight } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { ChangeRequest } from "@/types/platform";

export default function PendingApprovals() {
  const [selectedRequest, setSelectedRequest] = useState<ChangeRequest | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rejectionNote, setRejectionNote] = useState("");

  const handleViewRequest = (request: ChangeRequest) => {
    setSelectedRequest(request);
    setIsDialogOpen(true);
  };

  const handleApprove = () => {
    toast.success(`Request ${selectedRequest?.id.toUpperCase()} approved successfully`);
    setIsDialogOpen(false);
  };

  const handleReject = () => {
    if (!rejectionNote.trim()) {
      toast.error("Please provide a reason for rejection");
      return;
    }
    toast.success(`Request ${selectedRequest?.id.toUpperCase()} rejected`);
    setIsDialogOpen(false);
    setRejectionNote("");
  };

  const pendingRequests = mockChangeRequests.filter(r => r.status === "pending");

  return (
    <DashboardLayout 
      portalType="superadmin" 
      title="Pending Approvals" 
      subtitle="Review and action hospital change requests"
    >
      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Hospital" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Hospitals</SelectItem>
            <SelectItem value="h1">City General Hospital</SelectItem>
            <SelectItem value="h2">St. Mary's Medical Center</SelectItem>
            <SelectItem value="h3">Metropolitan Health Institute</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Update Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="doctor_availability">Doctor Availability</SelectItem>
            <SelectItem value="hospital_profile">Hospital Profile</SelectItem>
            <SelectItem value="department">Department</SelectItem>
            <SelectItem value="announcement">Announcement</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Approvals Table */}
      <div className="card-elevated overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Request ID</TableHead>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Update Type</TableHead>
              <TableHead>Submitted On</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockChangeRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id.toUpperCase()}</TableCell>
                <TableCell>{request.hospitalName}</TableCell>
                <TableCell className="capitalize">{request.updateType.replace("_", " ")}</TableCell>
                <TableCell>{format(request.submittedAt, "MMM d, yyyy h:mm a")}</TableCell>
                <TableCell>
                  <StatusBadge status={request.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleViewRequest(request)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    {request.status === "pending" && (
                      <>
                        <Button size="sm" className="bg-status-approved hover:bg-status-approved/90" onClick={() => handleViewRequest(request)}>
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleViewRequest(request)}>
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Comparison Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5" />
              Review Change Request
            </DialogTitle>
            <DialogDescription>
              Compare current data with proposed changes from {selectedRequest?.hospitalName}
            </DialogDescription>
          </DialogHeader>

          {selectedRequest && (
            <div className="py-4">
              {/* Request Info */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Request ID</p>
                  <p className="font-medium">{selectedRequest.id.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium capitalize">{selectedRequest.updateType.replace("_", " ")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submitted</p>
                  <p className="font-medium">{format(selectedRequest.submittedAt, "MMM d, yyyy h:mm a")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submitted By</p>
                  <p className="font-medium">{selectedRequest.submittedBy}</p>
                </div>
              </div>

              {/* Side by Side Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-muted/30">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Currently Live Data</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedRequest.currentData).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-sm text-foreground">{Array.isArray(value) ? value.join(", ") : String(value)}</p>
                      </div>
                    ))}
                    {Object.keys(selectedRequest.currentData).length === 0 && (
                      <p className="text-sm text-muted-foreground italic">No existing data (new entry)</p>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                  <h4 className="text-sm font-semibold text-primary mb-3">Proposed Update</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedRequest.proposedData).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-sm text-foreground font-medium">{Array.isArray(value) ? value.join(", ") : String(value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rejection Note (conditionally shown) */}
              {selectedRequest.status === "pending" && (
                <div className="mt-6">
                  <label className="text-sm font-medium text-foreground">Rejection Note (required if rejecting)</label>
                  <Textarea 
                    placeholder="Provide reason for rejection..."
                    value={rejectionNote}
                    onChange={(e) => setRejectionNote(e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            {selectedRequest?.status === "pending" && (
              <>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="outline" className="text-status-pending border-status-pending hover:bg-status-pending/10">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Request Clarification
                </Button>
                <Button variant="destructive" onClick={handleReject}>
                  <XCircle className="h-4 w-4 mr-1" />
                  Reject
                </Button>
                <Button className="bg-status-approved hover:bg-status-approved/90" onClick={handleApprove}>
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  Approve
                </Button>
              </>
            )}
            {selectedRequest?.status !== "pending" && (
              <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
