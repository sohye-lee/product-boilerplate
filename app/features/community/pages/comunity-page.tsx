import type { MetaFunction } from "react-router";
import type { Route } from "./+types/comunity-page";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Community | Product Hunt Clone" },
    { name: "description", content: "Join our community discussions" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Community</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">Join discussions with makers and tech enthusiasts</p>
      </div>
    </div>
  );
}
