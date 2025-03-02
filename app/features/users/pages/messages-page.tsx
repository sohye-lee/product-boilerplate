import { MessageSquareIcon } from "lucide-react";
import type { Route } from "./+types/messages-page";
import { Link } from "react-router";

interface Message {
  id: string;
  sender: {
    id: string;
    username: string;
    avatar: string;
  };
  preview: string;
  isRead: boolean;
  createdAt: string;
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    messages: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Messages | My Account" },
    { name: "description", content: "View your messages" }
  ];
};

export default function MessagesPage({ loaderData }: Route.ComponentProps) {
  const { messages } = loaderData as unknown as { messages: Message[] };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 pb-8">
      <MessageSquareIcon className="size-8 text-muted-foreground/80" />
      <p className="text-sm text-muted-foreground">Click on a message to start chatting</p>
    </div>
  );
} 