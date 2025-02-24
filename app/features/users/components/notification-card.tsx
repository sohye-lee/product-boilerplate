import { Card, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "~/common/components/ui/button";
import { EyeIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface NotificationCardProps {
  avatar: {
    src: string;
    fallback: string;
  };
  title: {
    user: string;
    action: string;
  };
  seen: boolean;
  timestamp: string;
  onMarkAsRead?: () => void;
}

export default function NotificationCard({ 
  avatar, 
  title, 
  seen,
  timestamp, 
  onMarkAsRead 
}: NotificationCardProps) {
  return (
    <Card className={cn("min-w-[100%] md:min-w-[400px]", seen ? "bg-muted" : "bg-green-100")}>
      <CardHeader className="flex flex-row items-center gap-2">
        <Avatar className="size-12 rounded-full overflow-hidden">
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col mt-0 pt-0 pb-1">
          <CardTitle className="text-lg font-medium mt-0">
            <span>{title.user}</span>
            <span>{title.action}</span>
          </CardTitle>
          <span className="text-sm text-muted-foreground">{timestamp}</span>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onMarkAsRead}
        >
          <EyeIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
} 