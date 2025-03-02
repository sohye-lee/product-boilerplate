import type { Route } from "./+types/profile-posts-page";
import { Card, CardContent, CardHeader } from "~/common/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { siteTitle } from "~/lib/constants";
import { PostCard } from "~/features/community/components/post-card";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    posts: []
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "User Posts" },
    { name: "description", content: "View user's posts" }
  ];
};

export default function ProfilePostsPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData as unknown as { posts: Post[] };

  return (
    <div className="space-y-6">
       {Array.from({ length: 10 }).map((_, index) => (
            <PostCard
              key={index}
              id={`postId-${index}`}
              title={`Why I'm not using ${siteTitle} anymore`}
              authorName="Sohye"
              authorAvatarUrl="https://github.com/apple.png"
              authorInitials="SK"
              category="Category"
              timeAgo="12 hours ago"
              votesCount={123}
              // commentsCount={10}
            />
          ))}ß
    </div>
  );
} 