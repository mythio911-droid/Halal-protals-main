import { cn } from "@/lib/utils";
import { RequestStatus } from "@/types/platform";
import { Clock, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

interface StatusBadgeProps {
  status: RequestStatus;
  className?: string;
}

const statusConfig: Record<RequestStatus, {
  label: string;
  icon: typeof Clock;
  className: string;
}> = {
  pending: {
    label: "Pending",
    icon: Clock,
    className: "status-badge-pending",
  },
  approved: {
    label: "Approved",
    icon: CheckCircle2,
    className: "status-badge-approved",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "status-badge-rejected",
  },
  clarification_needed: {
    label: "Clarification Needed",
    icon: HelpCircle,
    className: "status-badge-pending",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        config.className,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  );
}
