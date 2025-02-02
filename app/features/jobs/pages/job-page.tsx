import type { Route } from "../../../types";
import type { MetaFunction } from "react-router";

interface LoaderData {
  job: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Job Details | Product Hunt Clone" },
    { name: "description", content: "View job details" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    job: params.job,
  };
}

export default function JobPage({ loaderData }: Route.ComponentProps<LoaderData>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Job: {loaderData.job}</h1>
    </div>
  );
} 