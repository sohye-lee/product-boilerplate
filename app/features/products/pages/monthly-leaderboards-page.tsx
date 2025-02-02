import type { Route } from "./+types/monthly-leaderboards-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  year: string;
  month: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Leaderboards | Product Hunt Clone" },
    { name: "description", content: "Top products by month" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
  };
}

export default function MonthlyLeaderboardsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Monthly Leaderboards {loaderData.month}/{loaderData.year}</h1>
    </div>
  );
} 