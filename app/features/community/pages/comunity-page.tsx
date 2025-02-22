import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/comunity-page";
import { PostCard } from "../components/post-card";
import { Link, useSearchParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import { capitalize, cn } from "~/lib/utils";

interface LoaderData {
  // Define your loader data type here
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Community | Product Hunt Clone" },
    { name: "description", content: "Join our community discussions" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterChange = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  }
  return (
     <div className="flex flex-col gap-10">
      <Hero title="Community" description="Join discussions with makers and tech enthusiasts" />
      <div className="grid grid-cols-8 gap-10 items-start">
        <div className="col-span-6">
          <div className="flex justify-between items-center gap-3 mb-5">
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger className={cn("flex items-center gap-2 p-2 px-3 border border-primary/40 rounded-md", searchParams.get('sort') && 'bg-primary/5')}>
                 <span className="text-sm">{searchParams.get('sort') || 'Newest'}</span>
                  <ChevronDownIcon className="size-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" ">
                {SORT_OPTIONS.map((option) => (
                  <DropdownMenuCheckboxItem key={option} className={cn("text-sm capitalize", searchParams.get('sort') === option && 'bg-primary/10')} onCheckedChange={() => onFilterChange('sort', option)} checked={searchParams.get('sort') === option}>
                    {option} 
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className={cn("flex items-center gap-2 p-2 px-3 border border-primary/40 rounded-md", searchParams.get('period') && 'bg-primary/5')}>
                 <span className="text-sm">{searchParams.get('period') || 'Today'}</span>
                  <ChevronDownIcon className="size-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" ">
                {PERIOD_OPTIONS.map((option) => (
                  <DropdownMenuCheckboxItem key={option} className={cn("text-sm capitalize", searchParams.get('period') === option && 'bg-primary/10')} onCheckedChange={() => onFilterChange('period', option)} checked={searchParams.get('period') === option}>
                    {option} 
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <Button size="default" className="flex items-center gap-2" asChild>
              <Link to="/community/new">
                <PlusIcon className="size-4" />
                <span>Create Post</span>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {Array.from({ length: 12 }).map((_, index) => (
            <PostCard
              key={index}
              id={`postId-${index}`}
              title={`Why I'm not using it anymore`}
              authorName="Sohye"
              authorAvatarUrl="https://github.com/apple.png"
              authorInitials="SK"
              category="Category"
              timeAgo="12 hours ago"
              votesCount={10}
              expanded={index === 0}
            />
          ))} 
        </div>
        </div>
        <aside className="sticky top-20 sidebar border col-span-2 border-gray-200 p-4 rounded-xl flex flex-col gap-5">
          <div className="flex flex-col items-start space-y-2">
            <h2 className="text-2xl font-bold mb-3">Topics</h2>
            {["AI Tools", "Software", "Machine Learning", "Front End", "Dev Tools", "Backend", "Productivity"].map((category) => (
              <Button variant="ghost" asChild key={category} className="p-0 hover:bg-transparent hover:underline">
              <Link to={`/community?topic=${category}`} className="text-md text-primary hover:text-gray-700 transition-colors duration-200">
                {category}
              </Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
