import { IdeaCard } from "~/features/ideas/components/idea-card";
import type { Route } from "./+types/dashboard-ideas-page";

interface IdeaData {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

export function loader({ request }: Route.LoaderArgs) {
  // Fetch user's ideas
  return {
    ideas: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "My Ideas | Dashboard" },
    { name: "description", content: "Manage your ideas" }
  ];
};

export default function DashboardIdeasPage({ loaderData }: Route.ComponentProps) {
  const { ideas } = loaderData as unknown as { ideas: IdeaData[] };

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Claimed Ideas</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       {Array.from({ length: 9 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={index.toString()}
            title="A new way to build products with AI in a startup with no code. Is this possible?"
            viewCount={123}
            timeAgo="12 hours ago"
            likesCount={10}
            claimed={false}
          />
        ))}
      </div>
    </div>
  );
} 