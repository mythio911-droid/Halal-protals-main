import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Mail, ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep("otp");
    toast.success("OTP sent to your registered device");
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter the complete OTP");
      return;
    }
    setIsLoading(true);
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast.success("Login successful");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0yNCAzNmgydjEyaC0yVjM2ek0zNCAzNmgydjEyaC0yVjM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative flex flex-col justify-center px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-superadmin-accent">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Super Admin</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Central Control Portal
          </h2>
          <p className="text-white/70 max-w-md">
            Access the enterprise control center for approving hospital updates, 
            managing VoIP communications, and overseeing platform governance.
          </p>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3 text-white/80">
              <Lock className="h-5 w-5 text-superadmin-accent" />
              <span>Multi-factor authentication required</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Lock className="h-5 w-5 text-superadmin-accent" />
              <span>IP monitoring enabled</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Lock className="h-5 w-5 text-superadmin-accent" />
              <span>10-minute session timeout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 bg-background">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to portal selection</span>
        </Link>

        <div className="max-w-sm">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-superadmin-accent">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Super Admin Portal</span>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            {step === "email" ? "Super Admin Sign In" : "Two-Factor Verification"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {step === "email" 
              ? "Enter your credentials to access the control center" 
              : `Enter the 6-digit code from your authenticator app`}
          </p>

          {step === "email" ? (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@platform.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-superadmin-accent hover:bg-superadmin-accent/90" disabled={isLoading}>
                {isLoading ? "Authenticating..." : "Continue"}
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Authentication Code</Label>
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                >
                  <InputOTPGroup className="gap-2 justify-center w-full">
                    <InputOTPSlot index={0} className="w-12 h-12" />
                    <InputOTPSlot index={1} className="w-12 h-12" />
                    <InputOTPSlot index={2} className="w-12 h-12" />
                    <InputOTPSlot index={3} className="w-12 h-12" />
                    <InputOTPSlot index={4} className="w-12 h-12" />
                    <InputOTPSlot index={5} className="w-12 h-12" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button 
                onClick={handleVerifyOTP} 
                className="w-full bg-superadmin-accent hover:bg-superadmin-accent/90" 
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify & Sign In"}
              </Button>

              <button
                type="button"
                onClick={() => setStep("email")}
                className="text-sm text-superadmin-accent hover:underline w-full text-center"
              >
                Back to login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
