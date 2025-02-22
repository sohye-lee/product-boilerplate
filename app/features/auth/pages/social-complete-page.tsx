import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import { supabase } from "@/lib/supabase";
import type { Route } from "./+types/social-complete-page";

export function loader({ params }: Route.LoaderArgs) {
  if (!params.provider) {
    throw new Error("Provider is required");
  }
  
  return {
    provider: params.provider
  };
}

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Completing Social Sign In" },
    { name: "description", content: "Completing your social sign in" }
  ];
}

export default function SocialCompletePage({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();

//   useEffect(() => {
//     async function handleAuthComplete() {
//       try {
//         const { data: { session }, error } = await supabase.auth.getSession();
        
//         if (error) throw error;
        
//         if (session) {
//           // Successfully authenticated
//           navigate("/", { replace: true });
//         } else {
//           // No session found, redirect to login
//           navigate("/auth/login", { replace: true });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         navigate("/auth/login", { replace: true });
//       }
//     }

//     handleAuthComplete();
//   }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      <p className="mt-4 text-lg">Completing authentication...</p>
    </div>
  );
} 