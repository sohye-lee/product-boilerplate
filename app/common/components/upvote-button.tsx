import { ChevronUpIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";

export function UpvoteButton({ votesCount }: { votesCount: number }) {
  return (
    <Button variant="outline" className="flex items-center gap-2 flex-row lg:flex-col py-1.5 px-2 h-auto" >
        <ChevronUpIcon className="size-4" />
        <span>{votesCount}</span>
    </Button>
  )
}