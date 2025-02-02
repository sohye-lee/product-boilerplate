import type { Route } from "./+types/weekly-leaderboards-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  year: string;
  week: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboards | Product Hunt Clone" },
    { name: "description", content: "Top products by week" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
  };
}

export default function WeeklyLeaderboardsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Weekly Leaderboards Week {loaderData.week}, {loaderData.year}</h1>
    </div>
  );
} 