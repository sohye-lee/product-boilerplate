import { SidebarMenuItem, SidebarMenuButton } from "~/common/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { cn } from "~/lib/utils";
import { Link, useLocation } from "react-router";

interface MessageCardProps {
  avatar: {
    src: string;
    fallback: string;
  };
  username: string;
  preview: string;
  isActive?: boolean;
  onClick?: () => void;
  messageId: string;
}

export default function MessageCard({
  avatar,
  username,
  preview,
  isActive,
  onClick,
  messageId
}: MessageCardProps) {
  const location = useLocation();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className={cn("h-auto", isActive && "bg-primary/10")}
              onClick={onClick}
              asChild
              isActive={location.pathname === `/my/messages/${messageId}`}
          >
              <Link to={`/my/messages/${messageId}`}>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={avatar.src} />
            <AvatarFallback>
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{username}</p>
            <p className="text-xs text-muted-foreground">{preview}</p>
          </div>
        </div>
      </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
} 