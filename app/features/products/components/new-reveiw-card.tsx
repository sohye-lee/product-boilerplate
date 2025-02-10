import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~/common/components/ui/dialog";
import { Button } from "~/common/components/ui/button";
import { DialogContent } from "~/common/components/ui/dialog";
import InputBox from "~/common/components/input-box";

export default function AddReviewCard() {
    return (
        <DialogContent className="max-w-[90vw]md:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Add a Review</DialogTitle>
                    <DialogDescription>
                        What do you think about this product?   
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <InputBox label="Rating" name="rating" />
                    <InputBox label="Comment" name="comment" type="textarea" />
                </div>
                <DialogFooter>
                <Button type="submit">Add Review</Button>
                </DialogFooter>
        </DialogContent>    
    );
}