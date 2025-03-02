import type { Route } from "./+types/profile-page";
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";

interface ProfileOverview {
  recentProducts: Array<{
    id: string;
    name: string;
    description: string;
    thumbnail: string;
  }>;
  recentPosts: Array<{
    id: string;
    title: string;
    excerpt: string;
    createdAt: string;
  }>;
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    recentProducts: [],
    recentPosts: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Profile Overview" },
    { name: "description", content: "User profile overview" }
  ];
};

export default function ProfilePage({ loaderData }: Route.ComponentProps) {
  const data = loaderData as unknown as ProfileOverview;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Headline</h2>
        <p className="text-sm text-muted-foreground">
        I'm a software engineer with a passion for building products that help people live better lives. I'm currently working on a startup called Product 1 and Product 2.
      </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="text-sm text-muted-foreground">
          Working on Product 1 and Product 2, I'm a software engineer with a passion for building products that help people live better lives.
        </p>
      </div>
    </div>
  );
} 