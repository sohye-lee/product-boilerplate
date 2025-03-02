import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";

interface Product {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  stats: {
    views: number;
    likes: number;
  };
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    products: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "User Products" },
    { name: "description", content: "View user's products" }
  ];
};

export default function ProfileProductsPage({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData as unknown as { products: Product[] };

  return (
    <div className="grid grid-cols-1  gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
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
  );
} 