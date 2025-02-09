import { siteTitle } from "~/lib/constants";
import { z } from "zod";
import { data, Form, Link } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import Pagination from "~/common/components/pagination";
import { Input } from "~/common/components/ui/input";
import { SearchIcon } from "lucide-react";
import type { Route } from "./+types/category-page";

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),  
});

export const meta: Route.MetaFunction = ({ params }) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) { throw data({ error_code: "invalid_date", message: "It is an invalid category id. Try with a valid one." }, { status: 400 }) }
  return [
    { title: `Developer Tools | ${siteTitle}` },
    { name: "description", content: "Tools for developers" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { category } = params;
  const { success, data: parsedData } = paramsSchema.safeParse({ ...Object.fromEntries(url.searchParams.entries()) });
  if (!success) { throw data({ error_code: "invalid_params", message: "It is an invalid params. Try again." }, { status: 400 }) }
  return {
    category,
    ...parsedData, 
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-8">
      <Hero title={loaderData.category} description="Description for the category" />
       
      
      <div className="gap-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard key={index} id={index.toString()} name={`Product ${index}`} description="Description 1" commentsCount={10} upvotesCount={10} viewsCount={10} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Pagination totalPages={2} />
      </div>
    </div>
  );
} 