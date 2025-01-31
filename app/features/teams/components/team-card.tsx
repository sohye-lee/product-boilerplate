import { Link } from "react-router";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface TeamCardProps {
  id: string;
  leaderUsername: string;
  leaderAvatar: string;
  leaderInitials: string;
  roles: string[];
  projectDescription: string;
}

export function TeamCard({
  id,
  leaderUsername,
  leaderAvatar,
  leaderInitials,
  roles,
  projectDescription
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors duration-300">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary" className="inline-flex items-center gap-1">
              <span className="text-xs font-medium">@{leaderUsername}</span>
              <Avatar className="w-6 h-6">
                <AvatarImage src={leaderAvatar} />
                <AvatarFallback>{leaderInitials}</AvatarFallback>
              </Avatar>
            </Badge>
            <span className="text-sm font-normal">
               is looking for 
            </span> 
            {roles.map((role, index) => (
              <Badge key={index} className={index === 0 ? "mx-1" : "mr-1"}>{role}</Badge>
            ))}
            <span className="text-sm font-normal"> to build {projectDescription}.</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link">
            View Team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 