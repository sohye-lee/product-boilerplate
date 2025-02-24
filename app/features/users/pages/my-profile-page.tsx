import { redirect } from "react-router";
import type { Route } from "./+types/my-profile-page";

interface UserProfile {
  username: string;
  avatar: string;
  bio: string;
  stats: {
    products: number;
    ideas: number;
    followers: number;
    following: number;
  };
  products: Array<{
    id: string;
    name: string;
    description: string;
    thumbnail: string;
  }>;
}

export function loader({ request, params }: Route.LoaderArgs) {
  return redirect("/users/sohye");
}

