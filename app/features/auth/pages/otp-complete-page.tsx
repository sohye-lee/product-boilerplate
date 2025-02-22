import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import InputBox from "~/common/components/input-box";
import type { Route } from "./+types/otp-complete-page";
import { AuthButtons } from "../components/auth-buttons";

export function loader() {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Verify OTP | Login" },
    { name: "description", content: "Verify OTP" },
  ];
};

export default function OTPCompletePage() {
  return (
    <div className="space-y-6 flex flex-col justify-center h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Verify OTP Code</h1>
        <p className="text-sm text-muted-foreground">Enter the OTP code we sent to your email</p>
      </div>

      <form className="space-y-4">
        <InputBox label="Email" type="email" name="email" placeholder="i.e. john@doe.com" required />
        <InputBox label="OTP Code" type="number" name="otp" placeholder="i.e. 123456" required />
        <Button className="w-full">Login</Button>
      </form>

      <AuthButtons />

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/auth/join" className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
} 