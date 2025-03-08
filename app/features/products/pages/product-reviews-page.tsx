import type { Route } from "./+types/product-reviews-page";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { DateTime } from "luxon";
import { Separator } from "~/common/components/ui/separator";
import { ReviewCard } from "../components/review-card";
import {
  Dialog,
  DialogTrigger,
} from "~/common/components/ui/dialog"
import AddReviewCard from "../components/new-reveiw-card";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "Product Reviews" },
    { name: "description", content: "View and manage product reviews" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    productId: params.productId,
    reviews: [{
      id: "1", 
      name: "John Doe",
      username: "johndoe",
      avatar: "https://github.com/shadcn.png",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      createdAt: DateTime.now().setZone("America/New_York").toLocaleString(DateTime.DATE_MED),
    }, {
      id: "2", 
      name: "Jane Doe",
      username: "janedoe",
      avatar: "https://github.com/shadcn.png",
      rating: 4,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      createdAt: DateTime.now().setZone("America/New_York").toLocaleString(DateTime.DATE_MED),
    }],  
  };
}

export default function ProductReviewsPage({ loaderData }: Route.ComponentProps) {
  const { productId, reviews } = loaderData;

    return (
    <Dialog>
        <div className=" py-8">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6 gap-4">
                <h3 className="text-2xl font-bold">Product Reviews</h3>
                <DialogTrigger className="flex justify-start lg:justify-end">
                    <Button>Write a Review</Button>
                </DialogTrigger>
            </div>

            {reviews && reviews.length > 0 ? (
                <div className="space-y-6">
                <p className="text-md font-medium">{reviews.length} Reviews</p>
                {reviews.map((review) => (
                    <>
                    <Separator key={review.id} />
                    <ReviewCard key={review.id} {...review} />
                    </>
                ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No reviews yet.</p>
            )}
        </div>
        <AddReviewCard />
    </Dialog>
  );
} 