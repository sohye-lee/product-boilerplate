import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import type { Route } from "./+types/join-page";
import InputBox from "~/common/components/input-box";
import { AuthButtons } from "../components/auth-buttons";

export function loader() {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Join" },
    { name: "description", content: "Create a new account" },
  ];
};

export default function JoinPage() {
  return (
    <div className="space-y-6 flex flex-col justify-center h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email to get started
        </p>
      </div>

      <form className="space-y-4">
        <InputBox type="name" label="Name" placeholder="i.e. John Doe" required />
        <InputBox type="username" label="Username" placeholder="i.e. john_doe" required />
        <InputBox type="email" label="Email" placeholder="i.e. john@doe.com" required />
        <InputBox type="password" label="Password" placeholder="i.e. 123456" required />
        <InputBox type="password" label="Confirm password" placeholder="i.e. 123456" required />
        <Button className="w-full">Create account</Button>
      </form>

      <AuthButtons />

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
} 