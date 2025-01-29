import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@common/components/ui/avatar"
import { Button } from "@common/components/ui/button"
import { Card, CardHeader, CardTitle, CardFooter } from "@common/components/ui/card"

interface PostCardProps {
  id: string
  title: string
  author: {
    name: string
    avatarUrl?: string
    initials: string
  }
  category: string
  timeAgo: string
}

export function PostCard({ id, title, author, category, timeAgo }: PostCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors duration-300">
      <CardHeader className="flex flex-row gap-2 items-center">
        <Avatar className="size-14">
          <AvatarImage src={author.avatarUrl} />
          <AvatarFallback>{author.initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>{author.name}</span>·
            <span>{category}</span>·
            <span>{timeAgo}</span>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-end">
        <Button asChild variant="link">
          <Link to={`/community/${id}`}>Reply &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 