import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/promote-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import SelectBox from "~/common/components/select-box";
import { Label } from "~/common/components/ui/label";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Promote Product | ${siteTitle}` },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage({ loaderData }: Route.ComponentProps) {
  const [promotionDate, setPromotionDate] = useState<DateRange | undefined>();
  const totalDays = promotionDate?.from && promotionDate?.to ? DateTime.fromJSDate(promotionDate.to).diff(DateTime.fromJSDate(promotionDate.from), 'days').days + 1: 0;

  return (
    
    <div className="mx-auto px-4 max-w-screen-lg flex flex-col gap-6">
      <Hero title="Promote Your Product" description="Boost your product's visibility and engagement" /> 
      <Form className="flex w-full flex-col gap-5 mx-auto max-w-screen-sm">
        <SelectBox name="product" label="Product" description="Select the product you want to promote" options={[{
          label: "Product 1",
          value: "product-1",
        }, {
          label: "Product 2",
          value: "product-2",
          }]} />
        <div className="flex flex-col gap-2">
          <Label className="text-xl font-medium">
            Select a range of the promotion
          </Label>
          <p className="text-muted-foreground text-sm">
            Minimum 3 days, maximum 30 days
          </p>
          <Calendar mode="range" selected={promotionDate} onSelect={setPromotionDate} min={3} max={30} disabled={{before: new Date()}} />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="" disabled={totalDays === 0}>
            {totalDays === 0 ? "Select a range of the promotion" : `Checkout USD ${totalDays * 5}`}
          </Button>
        </div>
      </Form>
    </div>
  );
} 