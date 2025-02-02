import type { MetaFunction } from "react-router";
import type { Route } from "./+types/ideas-page";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Ideas | Product Hunt Clone" },
    { name: "description", content: "Discover and share product ideas" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function IdeasPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Ideas</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">Discover and share product ideas with the community</p>
      </div>
    </div>
  );
} 