import { Hero } from "~/common/components/hero";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import Pagination from "~/common/components/pagination";
import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/yearly-leaderboards-page";

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const year = DateTime.fromObject({ year: Number(params.year) }).setZone("America/New_York");
  return [
    { title: `Yearly Leaderboards for ${year.toLocaleString({ year: "numeric" })} | ${siteTitle}` },
    { name: "description", content: "Top products by year" },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  const {success, data: parsedData} = paramsSchema.safeParse(params);
  if (!success) { throw data({ error_code: "invalid_date", message: "It is an invalid date. Try with a valid one." }, { status: 400 }) }
  const { year } = parsedData;
  const date = DateTime.fromObject({ year });
  if (!date.isValid) { throw data({ error_code: "invalid_date", message: "It is an invalid date. Try with a valid one." }, { status: 400 }) }
  const today = DateTime.now().setZone("America/New_York").startOf("day");
  if (date > today) { throw data({ error_code: "invalid_date", message: "This is a future date. Try with a valid one." }, { status: 400 }) }
  return {
    ...parsedData
  };
}

export default function YearlyLeaderboardsPage({ loaderData }: Route.ComponentProps) {
  const year = DateTime.fromObject({ year: loaderData.year });
  const previousYear = year.minus({ year: 1 });
  const nextYear = year.plus({ year: 1 });  
  const today = DateTime.now().toLocal().startOf("day");
  const thisYear = DateTime.fromObject({ year: today.year });
  
  return (
    <div className="flex flex-col gap-5">
      <Hero title={`Best of ${year.toLocaleString({ year: "numeric" })}`} description="The most popular products of the year." />
      <div className="flex justify-center items-center gap-2">
        <Button asChild variant="outline">
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>&larr; {previousYear.toLocaleString({ year: "numeric" })}</Link>
        </Button>
        <Button asChild={year.valueOf() < thisYear.valueOf()} variant={"outline"} className="disabled:opacity-50 disabled:cursor-not-allowed" disabled={year.valueOf() >= thisYear.valueOf()}>
          <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>{nextYear.toLocaleString({ year: "numeric" })} &rarr;</Link>
        </Button>
      </div>
      <div className="gap-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} id={index.toString()} name={`Product ${index}`} description="Description 1" commentsCount={10} upvotesCount={10} viewsCount={10} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Pagination totalPages={10} />
      </div>
    </div>
  );
} 

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {

  let message = "Something went wrong. Please go back and try again.";
  if (isRouteErrorResponse(error)) {
    message = error.data.message;
  }
  return <div className="w-full h-[calc(100vh-6rem)] min-h-[36rem]  md:h-[calc(100vh-10rem)] lg:min-h-[48rem]  p-10 flex justify-center items-center text-lg text-center bg-gradient-to-b from-gray-900 to-purple-600 text-white rounded-xl">
    {message}
  </div>;
}
