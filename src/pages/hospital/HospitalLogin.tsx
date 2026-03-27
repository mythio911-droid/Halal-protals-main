import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Building2, Phone, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

export default function HospitalLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep("otp");
    toast.success("OTP sent to your mobile number");
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
    navigate("/hospital");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0yNCAzNmgydjEyaC0yVjM2ek0zNCAzNmgydjEyaC0yVjM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative flex flex-col justify-center px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-white">Hospital Portal</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Manage Your Hospital
          </h2>
          <p className="text-white/70 max-w-md">
            Update doctor availability, manage departments, and submit announcements 
            for review. All changes are tracked and require platform approval.
          </p>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3 text-white/80">
              <Shield className="h-5 w-5 text-primary" />
              <span>Secure OTP-based authentication</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Shield className="h-5 w-5 text-primary" />
              <span>Isolated single-hospital session</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Shield className="h-5 w-5 text-primary" />
              <span>15-minute auto-logout for security</span>
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Hospital Portal</span>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            {step === "mobile" ? "Sign in to your account" : "Verify OTP"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {step === "mobile" 
              ? "Enter your registered mobile number to receive an OTP" 
              : `We've sent a 6-digit code to ${mobile}`}
          </p>

          {step === "mobile" ? (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Enter OTP</Label>
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

              <Button onClick={handleVerifyOTP} className="w-full" disabled={isLoading || otp.length !== 6}>
                {isLoading ? "Verifying..." : "Verify & Sign In"}
              </Button>

              <button
                type="button"
                onClick={() => setStep("mobile")}
                className="text-sm text-primary hover:underline w-full text-center"
              >
                Use a different mobile number
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
