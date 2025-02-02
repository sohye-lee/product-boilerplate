import type { MetaFunction } from "react-router";
import type { Route } from "./+types/team-page";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Teams | Product Hunt Clone" },
    { name: "description", content: "Product Hunt for Teams" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function TeamsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Teams</h1>
    </div>
  );
} 