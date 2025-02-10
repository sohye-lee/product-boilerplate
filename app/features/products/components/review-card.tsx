import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Star } from "lucide-react";
import { DateTime } from "luxon";

interface ReviewCardProps {
    id: string;
    name: string;
    username: string;
    avatar: string;
    rating: number;
    comment: string;
    createdAt: string;
}

export function ReviewCard({
    name,
    username,
    avatar,
    rating,
    comment,
    createdAt,
}: ReviewCardProps) {
    return (
        <div className="space-y-5">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-sm text-muted-foreground">@{username}</p>
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star 
                                key={index} 
                                className="w-4 h-4" 
                                fill={index < rating ? "gold" : "transparent"} 
                                color="gold" 
                            />
                        ))}
                    </div>
                    <span className="text-sm font-medium">{rating}</span>
                </div>
                <p>{comment}</p>
                <span className="text-xs text-muted-foreground">{createdAt}</span>
            </div>
        </div>
    );
} 