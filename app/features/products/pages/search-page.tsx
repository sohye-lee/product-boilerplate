import type { Route } from "./+types/search-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | Product Hunt Clone" },
    { name: "description", content: "Search for products" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Search Products</h1>
    </div>
  );
} 