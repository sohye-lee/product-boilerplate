import { Form, type MetaFunction } from "react-router";
import type { Route } from "./+types/create-post-page";
import { Hero } from "~/common/components/hero";
import InputBox from "~/common/components/input-box";
import SelectBox from "~/common/components/select-box";
import { Button } from "~/common/components/ui/button";

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

export default function CreatePostPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mx-auto px-4 max-w-screen-md flex flex-col gap-8">
      <Hero title="Create a Discussion" description="Share your ideas with the community" /> 
      <Form className="space-y-5">
        <InputBox label="Title" name="title" required placeholder="i.e. What is the best way to learn React?" description="(40 characters or less)" maxLength={40} />
        <SelectBox label="Category" name="category" placeholder="Select a category" required options={[{label: "Product", value: "product"}, {label: "Idea", value: "idea"}]} description="Select the category of the post" />
        <InputBox label="Content" name="content" maxLength={1000} required textarea placeholder="i.e. I think the best way to learn React is to..." description="(max 1000 characters)" />
        <div className="flex justify-end col-span-2">
          <Button type="submit">Create Discussion</Button>
        </div>
      </Form>
    </div>
  );
} 