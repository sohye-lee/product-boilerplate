import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~/common/components/ui/dialog";
import { Button } from "~/common/components/ui/button";
import { DialogContent } from "~/common/components/ui/dialog";
import InputBox from "~/common/components/input-box";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function AddReviewCard() {
    const [rating, setRating] = useState<number>(0);
    const [hoveredStar, setHoveredStar] = useState<number>(0);


    return (
        <DialogContent className="max-w-[90vw]md:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Add a Review</DialogTitle>
                    <DialogDescription>
                        What do you think about this product?   
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                     <div className="flex flex-col gap-2">
                        <Label htmlFor="rating" className="text-xl font-medium" >Rating</Label>
                        <p className="text-sm text-muted-foreground">Please rate the product from 1 to 5</p>
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map(star => (
                                <label key={star} className="relative cursor-pointer group text-yellow-500" onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)}>
                                    <StarIcon size="16" fill={star <= rating ? "currentColor" : star <= hoveredStar ? "currentColor" : "none"} />
                                    <input type="radio" name="rating" value={star} required className="w-6px h-6px opacity-0 absolute" onChange={() => setRating(star)} />
                                </label>
                            ))}
                        </div>
                    </div>
                    <InputBox label="Comment" name="comment" textarea={true} description="Max 1000 characters" />
                </div>
                <DialogFooter>
                <Button type="submit">Add Review</Button>
                </DialogFooter>
        </DialogContent>    
    );
}