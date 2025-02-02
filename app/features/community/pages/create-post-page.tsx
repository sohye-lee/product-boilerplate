import type { Route } from "../../../types";
import type { MetaFunction } from "react-router";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Create Post | Product Hunt Clone" },
    { name: "description", content: "Create a new community post" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function CreatePostPage({ loaderData }: Route.ComponentProps<LoaderData>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Create a Post</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">Share your thoughts with the community</p>
      </div>
    </div>
  );
} 