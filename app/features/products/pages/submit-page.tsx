import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { siteTitle } from "~/lib/constants";
import { Label } from "~/common/components/ui/label";
import InputBox from "~/common/components/input-box";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select"
import SelectBox from "~/common/components/select-box";
import { useState } from "react";
import type { DateRange } from "react-day-picker";



export const meta: Route.MetaFunction = () => {
  return [
    { title: `Submit Product | ${siteTitle}` },
    { name: "description", content: "Submit your product" },
  ];
};

const categories = [
  {value: "category-1", label: "Category 1"},
  {value: "category-2", label: "Category 2"},
  {value: "category-3", label: "Category 3"},
]
 
export default function SubmitPage({ loaderData }: Route.ComponentProps) {
  const [icon, setIcon] = useState<string | null>(null);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };

  
  return (
    <div className="mx-auto px-4 max-w-screen-lg flex flex-col gap-8">
      <Hero title="Submit Your Product" description="Submit your product to the community" /> 
      <Form>
        <div className="gap-4 grid grid-cols-2">

          <div className="flex flex-col gap-6">
            <InputBox label="Title" name="title" required={true} placeholder="Title" description="The title of your product" />
            <InputBox label="Tagline" name="tagline" required={false} placeholder="Concise description of your product" description="A short description of your product, max 60 characters" />
            <InputBox label="URL" name="url" required={true} placeholder="https://www.example.com" description="The URL of your product" />
            <InputBox label="Description" name="description" type="textarea" placeholder="Description of your product" description="A detailed description of your product" />
            <SelectBox label="Category" placeholder="Select a category" name="category" required={true} options={categories} description="The category of your product" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-lg">
              Icon 
            </Label>
              <small className="text-muted-foreground">
                This is the icon of your product
              </small>
            <Input type="file" name="icon" className=" h-12 pt-3 bg-purple-100" required onChange={handleIconChange} />
            <div className="flex flex-col text-xs text-muted-foreground gap-1">
              <span>Recommended size: 128x128px</span>
              <span>Max file size: 1MB</span>
              <span>Supported formats: PNG, JPG, SVG</span>
            </div>
            {icon && (
              <div className="size-40 rounded-sm border border-solid border-purple-200 aspect-squareflex items-center justify-center">
                <img src={icon} alt="icon" className="min-w-full min-h-full object-cover" />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
} 