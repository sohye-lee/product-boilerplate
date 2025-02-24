import type { Route } from "./+types/message-page";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";

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
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={thread.recipient.avatar}
          alt={thread.recipient.username}
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-2xl font-bold">{thread.recipient.username}</h1>
      </div>

      <div className="space-y-4 mb-8">
        {thread.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender.id === thread.recipient.id ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="max-w-[70%] bg-white rounded-lg p-4 shadow-sm">
              <p>{message.content}</p>
              <span className="text-sm text-gray-500">{message.createdAt}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="space-y-4">
        <Textarea
          placeholder="Type your message..."
          className="min-h-[100px]"
        />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
} 