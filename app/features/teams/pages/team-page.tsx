import type { MetaFunction } from "react-router";
import type { Route } from "./+types/team-page";

interface LoaderData {
  team: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Team Profile | Product Hunt Clone" },
    { name: "description", content: "View team profile and open positions" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    team: params.team,
  };
}

export default function TeamPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Team: {loaderData.team}</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">View team details and open positions</p>
      </div>
    </div>
  );
} 