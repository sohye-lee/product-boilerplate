import { Button, buttonVariants } from "~/common/components/ui/button";
import { Link, NavLink, Outlet } from "react-router";
import type { Route } from "./+types/product-layout";
import { siteTitle } from "~/lib/constants";
import { ChevronUp, Star, StarHalf } from "lucide-react";
import { cn } from "~/lib/utils";

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
        <div className="flex flex-col gap-12 max-w-screen-md mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className="aspect-square w-24 h-24 rounded-sm bg-primary/20"></div>
                    <div>
                        <h1 className="text-4xl font-bold">Product Name</h1>
                        <p className="text-sm text-muted-foreground">Product Description</p>
                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex items-center text-yellow-500">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} className="w-4 h-4" fill="gold" color="gold" />
                                ))}
                            </div>
                            <span className="text-sm font-medium">87 reviews</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="lg">
                        Visite Website
                    </Button>
                    <Button size="lg">
                        <ChevronUp className="w-4 h-4" />
                        Upvote
                    </Button>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                    <NavLink className={({ isActive }) => cn([buttonVariants({ variant: "outline" }), isActive ? "text-primary bg-primary/10" :   ""]) } to={`/products/${productId}/overview`}>
                        Overview
                    </NavLink>
                    <NavLink className={({ isActive }) => cn([buttonVariants({ variant: "outline" }), isActive ? "text-primary bg-primary/10" :   ""]) } to={`/products/${productId}/reviews`}>
                        Reviews
                    </NavLink>
            </div>
            <div className="space-y-12">
                <Outlet />
            </div>
        </div>
    );
} 