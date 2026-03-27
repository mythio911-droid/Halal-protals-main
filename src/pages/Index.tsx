import { Link } from "react-router-dom";
import { Shield, Building2, ArrowRight, Lock, Bell, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0yNCAzNmgydjEyaC0yVjM2ek0zNCAzNmgydjEyaC0yVjM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-white/90">Healthcare Coordination Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unified Healthcare
              <br />
              <span className="text-primary">Management System</span>
            </h1>
            
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              A centralized platform for managing hospital operations, doctor availability, 
              and patient communications with enterprise-grade security and governance.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
              <Link to="/hospital/login" className="block">
                <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hospital-accent/20">
                      <Building2 className="h-6 w-6 text-hospital-accent" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Hospital Portal</h3>
                  <p className="text-sm text-white/60">Manage your hospital's profile, doctors, and departments</p>
                </div>
              </Link>

              <Link to="/admin/login" className="block">
                <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-superadmin-accent/20">
                      <Shield className="h-6 w-6 text-superadmin-accent" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Super Admin Portal</h3>
                  <p className="text-sm text-white/60">Central control for approvals, notifications & governance</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade Healthcare Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed with security, compliance, and operational efficiency at its core
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-elevated p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Strict Access Control</h3>
              <p className="text-sm text-muted-foreground">
                Role-based permissions with no cross-hospital data access
              </p>
            </div>

            <div className="card-elevated p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Approval Workflows</h3>
              <p className="text-sm text-muted-foreground">
                All changes reviewed before going live
              </p>
            </div>

            <div className="card-elevated p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Centralized Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Platform-controlled communication channels
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Healthcare Coordination Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
