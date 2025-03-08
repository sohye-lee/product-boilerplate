import { Area, AreaChart, XAxis } from "recharts";
import { Line } from "recharts";
import { ChartTooltipContent, type ChartConfig } from "~/common/components/ui/chart";
import { ChartTooltip } from "~/common/components/ui/chart";
import { CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";
import type { Route } from "./+types/dashboard-product-page";
import { ChartContainer } from "~/common/components/ui/chart";
import { LineChart } from "recharts";

interface IdeaData {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

export function loader({ request }: Route.LoaderArgs) {
  // Fetch user's ideas
  return {
    ideas: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "My Ideas | Dashboard" },
    { name: "description", content: "Manage your ideas" }
  ];
};

const chartData = [
  { month: "January", views: 186, visitors: 20  },
  { month: "February", views: 305, visitors: 198  },
  { month: "March", views: 237, visitors: 99  },
  { month: "April", views: 73, visitors: 18  },
  { month: "May", views: 209, visitors: 109  },
  { month: "June", views: 214, visitors: 100   },
]

const chartConfig = {
  views: {
    label: "Page Views",
    color: "hsl(var(--chart-2))",
  },
  visitors: {
    label: "Visitors",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function DashboardProductPage({ loaderData }: Route.ComponentProps) {

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      
      <div className="w-full">
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-2 lg:p-4">
            <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 8,
              right: 8,
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
            <Area
              dataKey="views"
              type="natural"
              stroke="var(--color-views)"
                  strokeWidth={2}
                  fillOpacity={0.2}
                  fill="var(--color-views)"
              dot={false}
            />
            <Area
              dataKey="visitors"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              fillOpacity={0.2}
              fill="var(--color-visitors)"
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
} 