import { Card, CardHeader, CardTitle, CardDescription } from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";

interface CategoryCardProps {
  id: string | number;
  title: string;
  description: string;
}

export function CategoryCard({ id, title, description }: CategoryCardProps) {
  return (
    <Link to={`/products/categories/${title}`}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {title} <ChevronRightIcon className="w-4 h-4" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
} 