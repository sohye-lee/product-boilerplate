import type { Route } from "./+types/ideas-page";
import { Hero } from "~/common/components/hero";
import { siteTitle } from "~/lib/constants";
import { IdeaCard } from "../components/idea-card";

interface LoaderData {
  // Define your loader data type here
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Ideas | ${siteTitle}` },
    { name: "description", content: "Discover and share product ideas" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function IdeasPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-10">
      <Hero title="Ideas" description="Discover and share product ideas with the community" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={index.toString()}
            title="A new way to build products with AI in a startup with no code. Is this possible?"
            viewCount={123}
            timeAgo="12 hours ago"
            likesCount={10}
            claimed={index % 2 == 0 ? true : false}
          />
        ))}
      </div>
    </div>
  );
} 