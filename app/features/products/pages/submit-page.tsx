import type { Route } from "./+types/submit-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | Product Hunt Clone" },
    { name: "description", content: "Submit your product" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function SubmitPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Submit Your Product</h1>
    </div>
  );
} 