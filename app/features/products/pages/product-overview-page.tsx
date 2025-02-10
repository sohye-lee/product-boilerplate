import { Button } from "~/common/components/ui/button";
import { Link, Outlet } from "react-router";
import type { Route } from "./+types/product-overview-page";
import { siteTitle } from "~/lib/constants";
import { Hero } from "~/common/components/hero";
import { ChevronUp, Star, StarHalf, StarIcon, StarsIcon } from "lucide-react";

export function meta({}: Route.MetaFunction) {
  return [
    { title: `Product Overview | ${siteTitle}` },
    { name: "description", content: "View product details and information" },
  ];
}

interface Product {
    id: string,
    name: string,
    description: string,
    rating: number,
    reviewCount: number,
}
export function loader({ params }: Route.LoaderArgs) {
  const { productId } = params;
  
  return {
    product: {
      id: productId,
      // TODO: Fetch product data from Supabase
      name: "",
      description: "",
      rating: 0,
      reviewCount: 0,
    },
  };
}
export default function ProductOverviewPage({ params, loaderData }: Route.ComponentProps) {
    if (!loaderData) return null;
    const { product } = loaderData;
    const { productId } = params;
    return (
        <>
            <div className="space-y-2.5">
                <h3 className="text-lg font-bold">How does it work?</h3>
                <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime saepe quod consequatur nam dicta dolorem voluptas laborum incidunt eaque eius at ipsa optio in perferendis laboriosam, illo, quaerat nihil.
                        Laboriosam sint cupiditate assumenda qui maiores sequi nam ipsa enim autem dicta fuga quisquam necessitatibus architecto vero ducimus, labore, recusandae aliquid a consequatur! Quo, fugiat facere? Maxime dignissimos aperiam neque!
                        Neque numquam suscipit perferendis sequi delectus, mollitia quo laboriosam nisi ut repellat fuga quia, fugiat, quasi deleniti debitis architecto odit labore doloremque reiciendis. Numquam natus, corrupti assumenda nisi officia voluptatibus?
                    </p>
                </div>
                <div className="space-y-2.5">
                    <h3 className="text-lg font-bold">How does it work?</h3>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime saepe quod consequatur nam dicta dolorem voluptas laborum incidunt eaque eius at ipsa optio in perferendis laboriosam, illo, quaerat nihil.
                        Laboriosam sint cupiditate assumenda qui maiores sequi nam ipsa enim autem dicta fuga quisquam necessitatibus architecto vero ducimus, labore, recusandae aliquid a consequatur! Quo, fugiat facere? Maxime dignissimos aperiam neque!
                        Neque numquam suscipit perferendis sequi delectus, mollitia quo laboriosam nisi ut repellat fuga quia, fugiat, quasi deleniti debitis architecto odit labore doloremque reiciendis. Numquam natus, corrupti assumenda nisi officia voluptatibus?
                    </p>
                </div>
        </>
    );
} 