import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/categories-page";
import { siteTitle } from "~/lib/constants";
import { CategoryCard } from "../components/category-card";

interface LoaderData {
  // Define your loader data type here
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Categories | ${siteTitle}` },  
    { name: "description", content: "Browse products by category" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-8">
      <Hero title="Categories" description="Browse products by category" />
      <div className="gap-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CategoryCard
            key={index}
            id={index}
            title={`Developer Tools`}
            description={`Description ${index}`}
          />
        ))}
      </div>
    </div>
  );
} 