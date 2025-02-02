import type { Route } from "./+types/category-page";
import type { MetaFunction } from "react-router";

interface LoaderData {
  category: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Category | Product Hunt Clone" },
    { name: "description", content: "Products in this category" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    category: params.category,
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Category: {loaderData.category}</h1>
    </div>
  );
} 