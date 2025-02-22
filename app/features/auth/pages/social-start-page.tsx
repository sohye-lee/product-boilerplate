import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import type { Route } from "./+types/social-start-page";
import { Button } from "~/common/components/ui/button";
// import { supabase } from "@/lib/supabase";

export function loader({ params }: Route.LoaderArgs) {
  if (!params.provider) {
    throw new Error("Provider is required");
  }
  
  return {
    provider: params.provider as "github" | "google"
  };
}

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Sign in with Social Provider" },
    { name: "description", content: "Sign in with your social account" }
  ];
}

export default function SocialStartPage({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
//   const { provider } = loaderData;

//   async function handleSocialLogin() {
//     try {
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider,
//         options: {
//           redirectTo: `${window.location.origin}/auth/social/${provider}/complete`
//         }
//       });

//       if (error) throw error;
//     } catch (error) {
//       console.error("Error:", error);
//       navigate("/auth/login");
//     }
//   }

//   useEffect(() => {
//     handleSocialLogin();
//   }, [provider]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* <h1 className="text-2xl font-bold">Redirecting to {provider}...</h1> */}
      <Button variant="outline" onClick={() => navigate("/auth/login")}>
        Cancel
      </Button>
    </div>
  );
} 