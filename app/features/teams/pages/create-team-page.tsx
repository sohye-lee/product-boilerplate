import type { MetaFunction } from "react-router";
import type { Route } from "./+types/create-team-page";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Create Team | Product Hunt Clone" },
    { name: "description", content: "Create a new team" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function CreateTeamPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Create a Team</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">Build your team and find talented members</p>
      </div>
    </div>
  );
} 