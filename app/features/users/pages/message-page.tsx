import type { Route } from "./+types/message-page";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription } from "~/common/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Form } from "react-router";
import { SendIcon } from "lucide-react";
import { MessageBubble } from "~/features/users/components/message-bubble";
import { Badge } from "~/common/components/ui/badge";
interface Message {
  id: string;
  sender: {
    id: string;
    username: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
}

interface MessageThread {
  messages: Message[];
  recipient: {
    id: string;
    username: string;
    avatar: string;
  };
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    thread: {
      messages: [],
      recipient: {
        id: "",
        username: "",
        avatar: ""
      }
    }
  };
}

export function action({ request }: Route.ActionArgs) {
  // Handle sending new messages
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Message Thread | My Account" },
    { name: "description", content: "View message thread" }
  ];
};

export default function MessagePage({ loaderData }: Route.ComponentProps) {
  const { thread } = loaderData as unknown as { thread: MessageThread };

  return (
    <div className="w-full h-full flex flex-col max-h-full space-y-4">
      <Card>
        <CardHeader className="flex items-center flex-row gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>
              CN
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-md font-medium mb-0 pb-0">Sohye Kim</CardTitle>
              <Badge variant="default" className="bg-green-500 text-white text-xs font-normal px-2">Online</Badge>
            </div>
            <CardDescription className="text-xs text-muted-foreground m-0 p-0">2 days ago</CardDescription>
          </div>
          {/* Later, use real time to check this user is online */}
         
        </CardHeader>
      </Card>
    

      <div className="space-y-5 p-4 flex-1 overflow-y-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <MessageBubble
            key={index}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            timestamp="2 days ago"
            isCurrentUser={index % 2 !== 0}
          />
        ))}
      </div>

      <Card className="p-4">
        <Form className="space-y-4 p-0 relative flex justify-end items-center">
          <Textarea
            placeholder="Type your message..."
            className="min-h-[100px] resize-none"
            rows={3}
            name="message"
          />
          <Button type="submit" className="absolute right-3 p-2 h-10 w-10 bottom-3"><SendIcon className="size-4" /></Button>
        </Form>
      </Card>
    </div>
  );
} 