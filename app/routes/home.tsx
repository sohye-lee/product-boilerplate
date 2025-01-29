import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/home";

export const meta: MetaFunction = () => {
  return [{ title: `Home | ${siteTitle}` }];
}

import { Button } from "@common/components/ui/button";
import { siteTitle } from "~/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@common/components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { ProductCard } from "@features/products/components/product-card";
import { Separator } from "@common/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { PostCard } from "@features/community/components/post-card";

export default function Home() {
  return (
    <div className="px-5 w-full flex flex-col gap-10">
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Today's Products
          </h2>
          <p>
            Discover the latest products made by our community.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={10}
              viewsCount={10}
              upvotesCount={129}
            />
          ))}
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Today's Discussions
          </h2>
          <p>
            Read the latest discussions made by our community.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
            <PostCard
              key={index}
              id={`postId-${index}`}
              title="Discussion Title"
              author={{
                name: "Sohye",
                avatarUrl: "https://github.com/apple.png",
                initials: "SK"
              }}
              category="Category"
              timeAgo="12 hours ago"
            />
          ))}
      </div>
    </div>
  )
}
 