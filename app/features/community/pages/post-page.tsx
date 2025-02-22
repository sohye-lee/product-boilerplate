import { Form, Link, useNavigate } from "react-router";
import type { Route } from "./+types/post-page";
import { Button } from "~/common/components/ui/button";
import { Card } from "~/common/components/ui/card";
import { Hero } from "~/common/components/hero";
import { ArrowRightIcon, ChevronRightIcon, DotIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "~/common/components/ui/breadcrumb";
import { UpvoteButton } from "~/common/components/upvote-button";
import { Textarea } from "~/common/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "~/common/components/ui/badge";
import { Reply } from "~/features/community/components/reply";

export function loader({ params }: Route.LoaderArgs) {
  if (!params.postId) {
    throw new Error("Post ID is required");
  }

  // TODO: Fetch post data from your backend
  return {
    post: {
      id: params.postId,
      title: "Sample Post",
      content: "This is a sample post content",
      author: {
        name: "John Doe",
        avatar: "/avatars/default.png"
      },
      createdAt: new Date().toISOString(),
      comments: []
    }
  };
}

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Community Post" },
    { name: "description", content: "View community post and discussions" }
  ];
}

export default function PostPage({ loaderData, params }: Route.ComponentProps) {
  const navigate = useNavigate();
//   const { post } = loaderData;
  const { postId } = params;

  return (
      <div className="grid grid-cols-8 gap-12 items-start pt-10 max-w-screen-lg mx-auto">
        {/* Post Details */}
        <div className="flex flex-col gap-8 col-span-5">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/community">Community</Link>
              </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/community?topic=productivity">Productivity</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to={`/community/${postId}`}>What is the best way to learn React?</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* Breadcrumb Ends */}
          <div className="flex w-full gap-5">
            {/* LEFT */}
            <div>
              <UpvoteButton votesCount={10} />
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              {/* Post Content */}
              {/* Post Header */}
              <div className="space-y-1">
                <h1 className="text-3xl font-bold">What is the best way to learn React?</h1>
                <div className="text-muted-foreground flex items-center gap-1">
                  <Link to="/community/user/123">@username</Link>
                  <DotIcon className="size-4" />
                  <span>2 days ago</span>
                  <DotIcon className="size-4" />
                  <span>8 replies</span>
                </div>
              </div>
              {/* Post Content Ends */}
              <div className="space-y-10">
                {/* Post Content */}
                <div className="text-muted-foreground text-sm w-3/4">
                  Hello, I'm a beginner in React and I'm looking for the best way to learn it. I've tried the official documentation, but it's a bit overwhelming. I've also tried some tutorials, but I feel like I'm missing something. I'm looking for a more structured approach to learning React.
                </div>
                {/* Reply Form */}
                <div className="space-y-3">
                  <Form className="flex flex-col gap-2">
                    <div className="flex space-x-2">
                      <Avatar className="size-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                        <AvatarImage src="https://github.com/facebook.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Textarea placeholder="Write a reply" />
                    </div>
                    <div className="flex justify-end">
                      <Button>Reply</Button>
                    </div>
                  </Form>
                </div>
              {/* Reply Form Ends */}
              {/* Replies */}
              <div className="space-y-4">
                <Reply 
                  authorName="Sohye"
                  authorAvatar="https://github.com/shadcn.png"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ea illum nisi tempora voluptas laudantium saepe dolorem facilis et atque animi voluptates veritatis esse reiciendis, ipsam repellendus dicta fuga minima."
                  createdAt="2 days ago"
                  authorId="123"
                  topLevel 
                />
              </div>
              {/* Replies Ends */}
              </div>
            </div>
            {/* RIGHT ENDS */}
          </div>
          {/* Post Content Ends */}
   
    
        </div>
        {/* Job Details Ends */}

        {/* SIDEBAR */}
        <aside className="sticky top-20 sidebar border col-span-3 border-gray-200 p-4 rounded-xl space-y-8">
          <div className="flex gap-3 items-center">
            <Avatar className="size-10 rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-xl font-medium">Sohye</h4>
              <Badge className="bg-gray-100 text-gray-500">React Developer</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* <h4 className="text-xl font-medium">Sohye</h4>÷ */}
            <span className="text-muted-foreground text-sm">🎂 Joined 3 months ago</span>
            <span className="text-muted-foreground text-sm">🚀 Launched 10 products</span>
        </div>
        <Button variant="outline" className="w-full">Follow</Button>
        </aside>
        {/* SIDEBAR ENDS */}
      </div>
  );
} 