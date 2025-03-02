import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { cn } from "~/lib/utils";

interface MessageBubbleProps {
  content: string;
  timestamp: string;
  avatarUrl?: string;
  avatarFallback?: string;
  isCurrentUser: boolean;
}

export function MessageBubble({
  content,
  timestamp,
  avatarUrl = "https://github.com/shadcn.png",
  avatarFallback = "CN",
  isCurrentUser
}: MessageBubbleProps) {
  return (
    <div
      className={`flex gap-1 items-start ${
        isCurrentUser ? 'justify-end' : 'justify-start row-reverse'
      }`}
    >
      <Avatar className={cn("size-8", isCurrentUser ? 'order-2' : 'order-1')}>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className={cn("max-w-[70%] space-y-1 ", isCurrentUser ? 'order-1' : 'order-2')}>
        <p className={cn("text-sm bg-muted rounded-lg p-4 shadow-sm ", isCurrentUser ? 'rounded-tr-none' : 'rounded-tl-none bg-yellow-200')}>{content}</p>
        <p className={cn("text-xs text-muted-foreground w-full", isCurrentUser ? 'text-right' : 'text-left')}>{timestamp}</p>
      </div>
    </div>
  );
} 