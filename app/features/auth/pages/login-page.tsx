import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Link } from "react-router";
import InputBox from "~/common/components/input-box";
import { AuthButtons } from "../components/auth-buttons";

export function loader() {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Login to your account" },
  ];
};

export default function LoginPage() {
  return (
    <div className="space-y-6 flex flex-col justify-center h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Login to your account</p>
      </div>

      <form className="space-y-4">
        <InputBox type="email" label="Email" placeholder="i.e. john@doe.com" required />
        <InputBox type="password" label="Password" placeholder="i.e. 123456" required />
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