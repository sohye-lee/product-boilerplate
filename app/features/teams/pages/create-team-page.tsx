import { Form, type MetaFunction } from "react-router";
import type { Route } from "./+types/create-team-page";
import { Hero } from "~/common/components/hero";
import InputBox from "~/common/components/input-box";
import SelectBox from "~/common/components/select-box";
import { Button } from "~/common/components/ui/button";

interface LoaderData {
  // Define your loader data type here
}

export const meta: MetaFunction = () => {
  return [
    { title: "Create Team | Product Hunt Clone" },
    { name: "description", content: "Create a new team" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function CreateTeamPage({ loaderData }: Route.ComponentProps) {
  return (
     <div className="mx-auto px-4 max-w-screen-md flex flex-col gap-8">
      <Hero title="Create a Team" description="Create a new team" /> 
      <Form className="space-y-5">
   
        <InputBox label="What is your product?" name="name" required={true} placeholder="i.e. Product Hunt Clone" description="(Max 20 characters)" maxLength={20} />
        <SelectBox label="What is the stage of your product?" placeholder="Select" name="jobType" required={true} options={[{label: "Idea", value: "idea"}, {label: "Prototype", value: "prototype"}, {label: "MVP", value: "mvp"}, {label: "Product", value: "product"}]} description="Select the stage of your product" />
        <InputBox label="What is the size of your team?" name="size" max={100} min={2} type="number" placeholder="0" description="(1-100)" />
        <InputBox label="What much equity are you willing to give?" name="equity" max={100} min={2} type="number" placeholder="0" description="(1-100)" />
        <InputBox label="What roles are you looking for" name="roles" placeholder="React Developer, UI/UX Designer, etc." description="(comma separated)" />
        <InputBox label="Explain briefly your product" name="description" placeholder="This is a product that allows you to create a team and share your product with the world" description="(max 400 characters)" maxLength={400} textarea={true} />
        <div className="flex justify-end col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
} 