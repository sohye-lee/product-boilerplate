import { Outlet } from "react-router";
import type { Route } from "./+types/auth-layout";
import { FlickeringGrid } from "~/common/components/magicui/flickering-grid";
export default function AuthLayout({ children }: Route.ComponentProps & { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto">
      <div className="relative  ">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#7C3AED"
          maxOpacity={0.5}
          flickerChance={0.1}
          
        />
      </div>
      <div className="w-full flex flex-col justify-center">
          <div className="px-4 max-w-screen-sm mx-auto w-full">
            <Outlet />
          </div>
      </div>
    </div>
  );
} 