import { Outlet } from "react-router";
import type { Route } from "./+types/auth-layout";

export default function AuthLayout({ children }: Route.ComponentProps & { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-2 justify-center mx-auto">
        <div className="bg-gradient-to-b from-primary via-orange-500 to-blue-200 rounded-lg">

        </div>
          <div className="w-full flex flex-col justify-center">
              <div className="px-4 max-w-screen-sm mx-auto w-full">
                <Outlet />
              </div>
        </div>
    </div>
  );
} 