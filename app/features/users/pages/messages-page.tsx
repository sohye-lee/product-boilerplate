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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>

      <div className="space-y-2">
        {messages.map((message) => (
          <Link
            key={message.id}
            to={`/my/messages/${message.id}`}
            className={`block p-4 rounded-lg border hover:bg-gray-50 transition ${
              !message.isRead ? 'bg-white font-medium' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={message.sender.avatar}
                alt={message.sender.username}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="truncate">{message.sender.username}</p>
                <p className="text-sm text-gray-600 truncate">
                  {message.preview}
                </p>
              </div>
              <span className="text-sm text-gray-500">{message.createdAt}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 