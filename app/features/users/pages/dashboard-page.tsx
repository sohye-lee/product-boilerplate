import type { Route } from "./+types/dashboard-page";

interface DashboardData {
  products: Array<{
    id: string;
    name: string;
    stats: {
      views: number;
      likes: number;
    }
  }>;
  ideas: Array<{
    id: string;
    title: string;
    status: string;
  }>;
}

export function loader({ request }: Route.LoaderArgs) {
  // Fetch dashboard data
  return {
    products: [],
    ideas: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Dashboard | My Account" },
    { name: "description", content: "View your dashboard" }
  ];
};

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  const { products, ideas } = loaderData as unknown as DashboardData;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Products</h2>
          {/* Products list */}
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Ideas</h2>
          {/* Ideas list */}
        </section>
      </div>
    </div>
  );
} 