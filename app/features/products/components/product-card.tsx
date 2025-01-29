import { Link } from "react-router";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@common/components/ui/card";
import { Button } from "@common/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  upvotesCount: number;
}

export function ProductCard({ 
  id, 
  name, 
  description, 
  commentsCount, 
  viewsCount, 
  upvotesCount 
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="flex items-center justify-center">
      <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50 transition-colors duration-300">
        <CardHeader>
          <CardTitle>
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <p className="text-sm text-muted-foreground">{commentsCount}</p>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="size-5" />
              <p className="text-sm text-muted-foreground">{viewsCount}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent />
        <CardFooter>
          <Button variant="outline" className="flex flex-col items-center gap-2 py-2 h-auto">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span className="text-xs text-muted-foreground">{upvotesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 