import type { Route } from "./+types/yearly-leaderboards-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  year: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboards | Product Hunt Clone" },
    { name: "description", content: "Top products by year" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
  };
}

export default function YearlyLeaderboardsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Yearly Leaderboards {loaderData.year}</h1>
    </div>
  );
} 