import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockChangeRequests } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, FileText } from "lucide-react";
import { format } from "date-fns";

export default function ChangeRequests() {
  const hospitalRequests = mockChangeRequests.filter(r => r.hospitalId === "h1");

  return (
    <DashboardLayout 
      portalType="hospital" 
      title="Change Requests" 
      subtitle="Track status of your submitted updates"
      hospitalName="City General Hospital"
    >
      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
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

      {/* Requests Table */}
      <div className="card-elevated overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Request ID</TableHead>
              <TableHead>Update Type</TableHead>
              <TableHead>Submitted On</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reviewed By</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hospitalRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id.toUpperCase()}</TableCell>
                <TableCell className="capitalize">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    {request.updateType.replace("_", " ")}
                  </div>
                </TableCell>
                <TableCell>{format(request.submittedAt, "MMM d, yyyy h:mm a")}</TableCell>
                <TableCell>
                  <StatusBadge status={request.status} />
                </TableCell>
                <TableCell>
                  {request.reviewedBy || <span className="text-muted-foreground">—</span>}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Notes for rejected requests */}
      {hospitalRequests.filter(r => r.status === "rejected" && r.notes).length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Review Notes</h3>
          <div className="space-y-3">
            {hospitalRequests
              .filter(r => r.status === "rejected" && r.notes)
              .map((request) => (
                <div key={request.id} className="p-4 rounded-lg bg-status-rejected-bg border border-status-rejected/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-foreground">{request.id.toUpperCase()}</span>
                    <StatusBadge status={request.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">{request.notes}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
