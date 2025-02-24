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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Ideas</h1>
      
      <div className="space-y-4">
        {ideas.map((idea) => (
          <div key={idea.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{idea.title}</h2>
            <p className="text-gray-600">{idea.description}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-500">{idea.status}</span>
              <span className="text-sm text-gray-500">{idea.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 