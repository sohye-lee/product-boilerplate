import type { Route } from "./+types/promote-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | Product Hunt Clone" },
    { name: "description", content: "Promote your product" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function PromotePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Promote Your Product</h1>
    </div>
  );
} 