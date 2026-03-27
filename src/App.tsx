import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Hospital Portal
import HospitalLogin from "./pages/hospital/HospitalLogin";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import DoctorAvailability from "./pages/hospital/DoctorAvailability";
import ChangeRequests from "./pages/hospital/ChangeRequests";
import HospitalProfile from "./pages/hospital/HospitalProfile";
import Departments from "./pages/hospital/Departments";
import Announcements from "./pages/hospital/Announcements";
import AccountSettings from "./pages/hospital/AccountSettings";

// Super Admin Portal
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PendingApprovals from "./pages/admin/PendingApprovals";
import AuditLogs from "./pages/admin/AuditLogs";
import Users from "./pages/admin/Users";
import Hospitals from "./pages/admin/Hospitals";
import Doctors from "./pages/admin/Doctors";
import VoIPControl from "./pages/admin/VoIPControl";
import Notifications from "./pages/admin/Notifications";
import SecuritySettings from "./pages/admin/SecuritySettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing / Portal Selection */}
          <Route path="/" element={<Index />} />

          {/* Hospital Portal Routes */}
          <Route path="/hospital/login" element={<HospitalLogin />} />
          <Route path="/hospital" element={<HospitalDashboard />} />
          <Route path="/hospital/doctors" element={<DoctorAvailability />} />
          <Route path="/hospital/requests" element={<ChangeRequests />} />
          <Route path="/hospital/profile" element={<HospitalProfile />} />
          <Route path="/hospital/departments" element={<Departments />} />
          <Route path="/hospital/announcements" element={<Announcements />} />
          <Route path="/hospital/settings" element={<AccountSettings />} />

          {/* Super Admin Portal Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/approvals" element={<PendingApprovals />} />
          <Route path="/admin/audit" element={<AuditLogs />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/hospitals" element={<Hospitals />} />
          <Route path="/admin/doctors" element={<Doctors />} />
          <Route path="/admin/voip" element={<VoIPControl />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          <Route path="/admin/security" element={<SecuritySettings />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
