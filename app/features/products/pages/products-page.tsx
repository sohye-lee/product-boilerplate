// import type { Route } from "./+types/products-page";
// import type { MetaFunction } from "react-router";

import { redirect } from "react-router";

// interface LoaderData {
//   // Define your loader data type here
// }

// export const meta: MetaFunction = () => {
//   return [
//     { title: "Products | Product Hunt Clone" },
//     { name: "description", content: "Browse all products" },
//   ];
// };

export function loader() {
  return redirect("/products/leaderboards");
}

// export default function ProductsPage({ loaderData }: Route.ComponentProps) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold">Products</h1>
//     </div>
//   );
// } 