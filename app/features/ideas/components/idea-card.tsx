import { Link } from "react-router";
import { ArrowRightIcon, DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likesCount: number;
  claimed: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likesCount,
  claimed
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors duration-300">
      <Link to={`/ideas/${id}`}>
        <CardHeader>
          <CardTitle className="text-lg leading-none">
            <span className={claimed ? "bg-muted-foreground text-muted-foreground selection:bg-muted-foreground selection:text-muted-foreground" : ""}>{title}</span>
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex items-center gap-1">
        <div className="flex items-center gap-[4px]">
          <EyeIcon className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">{viewCount}</span>
        </div>
        <DotIcon className="w-4 h-4" />
        <span className="text-sm text-muted-foreground">{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="gap-1">
          <HeartIcon className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">{likesCount}</span>
        </Button>
        {!claimed ? 
        <Button asChild>
          <Link to={`/ideas/${id}`}>
            Claim idea now 
            <ArrowRightIcon className="w-4 h-4" /> 
          </Link>
          </Button>
          : <Button variant="outline" disabled className="cursor-not-allowed">
            <LockIcon className="w-4 h-4" />
            Claimed
        </Button>
        }
      </CardFooter>
    </Card>
  );
} 