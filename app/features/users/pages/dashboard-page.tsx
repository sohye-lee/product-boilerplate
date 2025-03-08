import { Label, Line } from "recharts";
import { CartesianGrid, XAxis } from "recharts";
import { LineChart } from "recharts";
import type { Route } from "./+types/dashboard-page";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@common/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";
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

const chartData = [
  { month: "January", views: 186 },
  { month: "February", views: 305 },
  { month: "March", views: 237 },
  { month: "April", views: 73 },
  { month: "May", views: 209 },
  { month: "June", views: 214 },
]

const chartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function DashboardPage({ loaderData }: Route.ComponentProps) {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="">
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle>Profile Views by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="views"
              type="natural"
              stroke="var(--color-views)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
} 