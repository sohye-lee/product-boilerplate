import type { Route } from "./+types/notifications-page";
import NotificationCard from "../components/notification-card";

interface Notification {
  id: string;
  type: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  seen: boolean;
  createdAt: string;
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    notifications: [
      {
        id: "1",
        type: "follow",
        user: {
          name: "John Doe",
          avatar: "https://github.com/shadcn.png"
        },
        action: " followed you",
        seen: false,
        createdAt: "2 days ago"
      }
    ]
  };
}

export function action({ request }: Route.ActionArgs) {
  // Handle marking notifications as read
  return {};
}

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Notifications | My Account" },
        { name: "description", content: "View your notifications" }
    ];
    };

    export default function NotificationsPage({ loaderData }: Route.ComponentProps) {
    const { notifications } = loaderData as unknown as { notifications: Notification[] };

    return (
        <div className="gap-12 pt-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
            {notifications.map((notification) => (
            <NotificationCard
                key={notification.id}
                seen={notification.seen}
                avatar={{
                src: notification.user.avatar,
              fallback: notification.user.name.slice(0, 2).toUpperCase()
            }}
            title={{
              user: notification.user.name,
              action: notification.action
            }}
            timestamp={notification.createdAt}
            onMarkAsRead={() => {
              // Handle marking notification as read
            }}
          />
        ))}
      </div>
    </div>
  );
} 