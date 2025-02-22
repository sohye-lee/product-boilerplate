import { Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";
interface ReplyProps {
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  authorId: string;
  topLevel: boolean;
}

export function Reply({ authorName, authorAvatar, content, createdAt, authorId, topLevel = true }: ReplyProps) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const toggleReplyForm = () => setShowReplyForm((prev) => !prev);
    return (
        <div className="space-y-2"> 
            {/* Main Reply */}
            <div className="flex gap-2">
                <Avatar className="size-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                    <AvatarImage src={authorAvatar} />
                    <AvatarFallback>{authorName.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <Link to={`/community/user/${authorId}`} className="text-md font-medium">
                    {authorName}
                    </Link>
                    <p className="text-sm text-muted-foreground">{createdAt}</p>
                    <p className="text-sm mt-2">{content}</p>
                    <div className="flex justify-end">
                    <Button variant="ghost" onClick={toggleReplyForm}>
                        <MessageCircleIcon className="size-4" /> Reply
                    </Button>
                    </div>
                </div>
            </div>
            {/* Main Reply Ends */}

            {/* Reply Form */}
            {showReplyForm && (
                <div className="pl-8">
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
                </div>
            )}
            {/* Reply Form Ends */}

            {topLevel && (
                <div className="pl-8">
                    <Reply 
                        authorName="Sohye"
                        authorAvatar="https://github.com/shadcn.png"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ea illum nisi tempora voluptas laudantium saepe dolorem facilis et atque animi voluptates veritatis esse reiciendis, ipsam repellendus dicta fuga minima."
                        createdAt="2 days ago"
                        authorId="123"
                        topLevel={false}
                    />
                </div>
            )}
    </div>
  );
} 