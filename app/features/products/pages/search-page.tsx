import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/search-page";
import { z } from "zod";
import { data, Form, Link } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import Pagination from "~/common/components/pagination";
import { Input } from "~/common/components/ui/input";
import { SearchIcon } from "lucide-react";

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),  
});

export const meta: Route.MetaFunction = ({ params }) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) { throw data({ error_code: "invalid_date", message: "It is an invalid date. Try with a valid one." }, { status: 400 }) }
  const { query } = parsedData;
  return [
    { title: `Search for ${query} | ${siteTitle}` },
    { name: "description", content: "Search for Products" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse({ ...Object.fromEntries(url.searchParams.entries()) });
  if (!success) { throw data({ error_code: "invalid_params", message: "It is an invalid params. Try again." }, { status: 400 }) }
  return {
    ...parsedData, 
  };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      <Hero title="Search" description="Search for Products by title or description" />
      <div className="flex justify-center items-center max-w-[400px] w-full flex-col gap-5 mx-auto">
        <Form id="search-form" className="w-full flex items-stretch gap-1">
          <Input name="query" placeholder="Search" className="w-full text-sm" />
          <Button type="submit" className="min-h-12 text-sm"><SearchIcon className="w-4 h-4" /></Button>
        </Form>
        <div><span className="text-muted-foreground">You searched for:</span> <span className="font-bold text-primary">{ loaderData.query}</span></div>
      </div>
      
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