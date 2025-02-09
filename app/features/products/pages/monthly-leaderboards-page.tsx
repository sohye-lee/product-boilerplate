import { Hero } from "~/common/components/hero";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import Pagination from "~/common/components/pagination";
import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/monthly-leaderboards-page";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const month = DateTime.fromObject({ year: Number(params.year), month: Number(params.month) }).setZone("America/New_York");
  return [
    { title: `Monthly Leaderboards for ${month.toLocaleString({ month: "long", year: "numeric" })} | ${siteTitle}` },
    { name: "description", content: "Top products by month" },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  const {success, data: parsedData} = paramsSchema.safeParse(params);
  if (!success) { throw data({ error_code: "invalid_date", message: "It is an invalid date. Try with a valid one." }, { status: 400 }) }
  const { year, month } = parsedData;
  const date = DateTime.fromObject({ year, month });
  if (!date.isValid) { throw data({ error_code: "invalid_date", message: "It is an invalid date. Try with a valid one." }, { status: 400 }) }
  const today = DateTime.now().setZone("America/New_York").startOf("day");
  if (date > today) { throw data({ error_code: "invalid_date", message: "This is a future date. Try with a valid one." }, { status: 400 }) }
  return {
    ...parsedData
  };
}

export default function MonthlyLeaderboardsPage({ loaderData }: Route.ComponentProps) {
  const month = DateTime.fromObject({ year: loaderData.year, month: loaderData.month });
  const previousMonth = month.minus({ month: 1 });
  const nextMonth = month.plus({ month: 1 });
  const today = DateTime.now().toLocal().startOf("day");
  const thisMonth = DateTime.fromObject({ year: today.year, month: today.month });
  
  return (
    <div className="flex flex-col gap-5">
      <Hero title={`Best of ${month.toLocaleString({ month: "long", year: "numeric" })}`} description="The most popular products of the month." />
      <div className="flex justify-center items-center gap-2">
        <Button asChild variant="outline">
          <Link to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}>&larr; {previousMonth.toLocaleString({ month: "long", year: "numeric" })}</Link>
        </Button>
        <Button asChild={month.valueOf() < thisMonth.valueOf()} variant={"outline"} className="disabled:opacity-50 disabled:cursor-not-allowed" disabled={month.valueOf() >= thisMonth.valueOf()}>
          <Link to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}>{nextMonth.toLocaleString({ month: "long", year: "numeric" })} &rarr;</Link>
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
