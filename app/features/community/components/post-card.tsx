import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@common/components/ui/avatar"
import { Button } from "@common/components/ui/button"
import { Card, CardHeader, CardTitle, CardFooter } from "@common/components/ui/card"
import { cn } from "~/lib/utils"
import { ArrowUpIcon, ChevronUpIcon } from "lucide-react"

interface PostCardProps {
  id: number
  title: string
  authorName: string
  authorAvatarUrl: string
  authorInitials: string
  topic: string
  createdAt: string
  expanded?: boolean
  votesCount: number
}

export function PostCard({ id, title, authorName, authorAvatarUrl, authorInitials, topic, createdAt, expanded = false, votesCount = 0 }: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className={cn("bg-transparent hover:bg-purple-50/50 transition-colors duration-300 h-full min-h-[170px]",  ' flex flex-col justify-between')}> 
        <CardHeader className={cn("flex flex-row gap-2 ", expanded ? 'pb-0' : ' items-center')}>
          <Avatar className="size-14">
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle>{title}</CardTitle>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{authorName}</span>·
              <span>{topic}</span>·
              <span>{createdAt}</span>
            </div>
          </div>
        </CardHeader>
        {/* {!expanded && <CardFooter className={ "flex items-center justify-end" }>
          <Button variant="link">
            <Link to={`/community/${id}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
        }
        {expanded && <CardFooter className={ "flex items-end justify-end" }>
          <Button variant="outline" className="flex items-center  gap-2" asChild>
            <Link to={`/community/${id}`} className=" items-center gap-2 flex flex-col py-1.5 px-2 h-auto">
              <ChevronUpIcon className="size-4" />
              <span>{votesCount}</span>
            </Link>
          </Button>
        </CardFooter>
        } */}

        <CardFooter className={"flex items-end justify-end gap-2"}>
          <Button variant="outline" className="flex items-center gap-1 p-2 h-auto text-xs min-h-3 min-w-4" asChild>
            <Link to={`/community/${id}`}>Reply</Link>
          </Button>
          <Button variant="outline" className="flex items-center p-2 h-auto text-xs min-h-3 min-w-4" asChild>
            <Link to={`/community/${id}`} className=" items-center gap-1  ">
              <ChevronUpIcon className="size-4" />
              <span>{votesCount}</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
} 