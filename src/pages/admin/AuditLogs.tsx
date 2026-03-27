import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { mockAuditLogs } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { Search, Download, CheckCircle2, XCircle, Shield } from "lucide-react";
import { format } from "date-fns";

export default function AuditLogs() {
  return (
    <DashboardLayout 
      portalType="superadmin" 
      title="Audit Logs" 
      subtitle="Immutable record of all platform actions"
    >
      {/* Filters & Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search logs..." className="w-64 pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Action Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="approval">Approvals</SelectItem>
              <SelectItem value="rejection">Rejections</SelectItem>
              <SelectItem value="settings">Settings</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Admin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Admins</SelectItem>
              <SelectItem value="admin1">John Smith</SelectItem>
              <SelectItem value="admin2">Jane Doe</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Security Notice */}
      <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 mb-6">
        <Shield className="h-5 w-5 text-primary" />
        <div>
          <p className="text-sm font-medium text-foreground">Immutable Audit Trail</p>
          <p className="text-xs text-muted-foreground">
            All logs are cryptographically signed and cannot be modified or deleted. 
            This ensures complete traceability for compliance and governance.
          </p>
        </div>
      </div>

      {/* Logs Table */}
      <div className="card-elevated overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Timestamp</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead>Outcome</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAuditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-sm">
                  {format(log.timestamp, "MMM d, yyyy h:mm:ss a")}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">
                        {log.adminName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm">{log.adminName}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{log.action}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {log.entityType} / {log.entityId}
                  </Badge>
                </TableCell>
                <TableCell>
                  {log.outcome === 'success' ? (
                    <span className="inline-flex items-center gap-1 text-status-approved">
                      <CheckCircle2 className="h-4 w-4" />
                      Success
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-status-rejected">
                      <XCircle className="h-4 w-4" />
                      Failed
                    </span>
                  )}
                </TableCell>
                <TableCell className="max-w-xs truncate text-sm text-muted-foreground">
                  {log.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination placeholder */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-muted-foreground">
          Showing {mockAuditLogs.length} of {mockAuditLogs.length} entries
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
