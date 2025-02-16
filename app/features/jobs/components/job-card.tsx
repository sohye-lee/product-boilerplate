import { Link } from "react-router";
import { DotIcon } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  id: string;
  companyName: string;
    companyLogoUrl: string;
    companyHq: string;
  jobTitle: string;
  timeAgo: string;
  employmentType: string;
  salary: string;
  location: string;
}

export function JobCard({
  id,
  companyName,
  companyLogoUrl,
  companyHq,
  jobTitle,
  timeAgo,
  employmentType,
  salary,
  location
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors duration-300">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <img src={companyLogoUrl} alt={`${companyName} Logo`} className="w-10 h-10 rounded-full" />
            <div className="space-x-1 flex items-center">
              <span className="test-sm text-accent-foreground font-semibold">{companyName}</span>
              <DotIcon className="w-4 h-4" />
              <span className="text-sm text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{jobTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <Badge variant="outline">{employmentType}</Badge>
          <Badge variant="outline">{location}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between items-end gap-2">
          <div className="flex gap-2 flex-col">
            <span className="text-md text-muted-foreground font-medium">{salary}</span>
            <span className="text-md text-muted-foreground font-medium">{companyHq}</span>
          </div>
          <Button size="sm" variant="secondary" className="hover:bg-primary/80 hover:text-white">
            Apply Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 