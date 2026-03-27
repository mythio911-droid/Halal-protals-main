export type PortalType = 'hospital' | 'superadmin';

export type RequestStatus = 'pending' | 'approved' | 'rejected' | 'clarification_needed';

export type UpdateType = 
  | 'doctor_availability' 
  | 'hospital_profile' 
  | 'department' 
  | 'announcement';

export interface ChangeRequest {
  id: string;
  hospitalId: string;
  hospitalName: string;
  updateType: UpdateType;
  status: RequestStatus;
  submittedAt: Date;
  currentData: Record<string, any>;
  proposedData: Record<string, any>;
  submittedBy: string;
  reviewedBy?: string;
  reviewedAt?: Date;
  notes?: string;
}

export interface Hospital {
  id: string;
  name: string;
  bannerImage?: string;
  description: string;
  address: string;
  contactNumber: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Doctor {
  id: string;
  name: string;
  department: string;
  hospitalId: string;
  availableDays: string[];
  timeSlots: { start: string; end: string }[];
  onLeave: boolean;
}

export interface Department {
  id: string;
  name: string;
  hospitalId: string;
  operatingDays: string[];
  openingTime: string;
  closingTime: string;
}

export interface Announcement {
  id: string;
  hospitalId: string;
  title: string;
  message: string;
  effectiveFrom: Date;
  effectiveTill: Date;
  status: RequestStatus;
}

export interface AuditLog {
  id: string;
  timestamp: Date;
  adminId: string;
  adminName: string;
  action: string;
  entityType: string;
  entityId: string;
  outcome: 'success' | 'failure';
  details?: string;
}

export interface User {
  id: string;
  email?: string;
  mobile?: string;
  name: string;
  role: 'hospital_staff' | 'super_admin';
  hospitalId?: string;
  hospitalName?: string;
}
