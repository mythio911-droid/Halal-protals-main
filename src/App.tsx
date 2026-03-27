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

// Super Admin Portal
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PendingApprovals from "./pages/admin/PendingApprovals";
import AuditLogs from "./pages/admin/AuditLogs";

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

          {/* Super Admin Portal Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/approvals" element={<PendingApprovals />} />
          <Route path="/admin/audit" element={<AuditLogs />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
