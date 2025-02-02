import type { Route } from "./+types/submit-job-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Job | Product Hunt Clone" },
    { name: "description", content: "Post a new job listing" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function SubmitJobPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Post a Job</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">Reach thousands of talented professionals</p>
      </div>
    </div>
  );
} 