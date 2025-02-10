import type { Route } from "./+types/leaderboards-page";
import type { MetaFunction } from "react-router";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";


export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | Product Hunt Clone" },
    { name: "description", content: "Top products leaderboards" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function LeaderboardsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-10">
      <Hero 
        title="Leaderboards" 
        description="See the top products in the community"
      />

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-2xl font-semibold tracking-tight leading-tight mb-2">
            Daily Leaderboard
          </h2>
          <p className="text-sm text-muted-foreground">
            The most popular products of the day.
          </p>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={10}
              viewsCount={10}
              upvotesCount={129}
            />
          ))}
        <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0 self-center">
          <Link to="/products/leaderboards/daily">View all products for today &rarr;</Link>
        </Button>
      </div>

      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-2xl font-semibold tracking-tight leading-tight mb-2">
            Weekly Leaderboard
          </h2>
          <p className="text-sm text-muted-foreground">
            The most popular products of the week.
          </p>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={10}
              viewsCount={10}
              upvotesCount={129}
            />
          ))}
        <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0 self-center">
          <Link to="/products/leaderboards/weekly">View all products for this week &rarr;</Link>
        </Button>
      </div>

      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-2xl font-semibold tracking-tight leading-tight mb-2">
            Monthly Leaderboard
          </h2>
          <p className="text-sm text-muted-foreground">
            The most popular products of the month.
          </p>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={10}
              viewsCount={10}
              upvotesCount={129}
            />
          ))}
        <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0 self-center">
          <Link to="/products/leaderboards/monthly">View all products for this month &rarr;</Link>
        </Button>
      </div>

      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-2xl font-semibold tracking-tight leading-tight mb-2">
            Yearly Leaderboard
          </h2>
          <p className="text-sm text-muted-foreground">
            The most popular products of the year.
          </p>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={10}
              viewsCount={10}
              upvotesCount={129}
            />
          ))}
        <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0 self-center">
          <Link to="/products/leaderboards/yearly">View all products for this year &rarr;</Link>
        </Button>
      </div>
    </div>
  );
} 