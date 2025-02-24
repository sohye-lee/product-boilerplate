import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/team-page";
import { Hero } from "~/common/components/hero";
import { TeamCard } from "../components/team-card";

interface LoaderData {
  // Define your loader data type here
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Teams | ${siteTitle}` },
    { name: "description", content: "The best place to find and join teams" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function TeamsPage({ loaderData }: Route.ComponentProps) {
  return (
   <div className="flex flex-col gap-10">
      <Hero title="Teams" description="Find your next team" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <TeamCard
            key={index}
            id={index.toString()}
            leaderUsername="Sohye"
            leaderAvatar="https://github.com/inthetiger.png"
            leaderInitials="SK"
            roles={["React Developer", "Backend Developer", "Product Manager"]}
            projectDescription="a social media platform"
          />
        ))}
      </div>
    </div>
  );
} 