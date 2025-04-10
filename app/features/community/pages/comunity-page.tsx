import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/comunity-page";
import { PostCard } from "../components/post-card";
import { Link, useSearchParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import { cn } from "~/lib/utils";
import { getPosts, getTopics } from "../queries";
import { DateTime } from "luxon";


export const meta: Route.MetaFunction = () => {
  return [
    { title: "Community | Product Hunt Clone" },
    { name: "description", content: "Join our community discussions" },
  ];
};

export const loader = async () => {
  const topics = await getTopics();
  const posts = await getPosts();
  return { topics, posts };
}

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  const { topics, posts } = loaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterChange = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  }
  return (
     <div className="flex flex-col gap-10">
      <Hero title="Community" description="Join discussions with makers and tech enthusiasts" />
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 items-start">
        <div className="col-span-1 lg:col-span-6">
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
              <Link to="/community/submit">
                <PlusIcon className="size-4" />
                <span>Create Post</span>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              id={post.post_id}
              title={post.title}
              authorName={post.author?.username || "Anonymous"}
              authorAvatarUrl={post.author?.avatar || ""}
              authorInitials={post.author?.username?.substring(0, 2) || "AN"}
              topic={post.topic?.name || "General"}
              createdAt={DateTime.fromISO(post.created_at).toRelative() || ""}
              votesCount={post.upvotes[0].count || 0}
              expanded={index === 0}
            />
          ))} 
        </div>
        </div>
        <aside className="sticky top-20 sidebar border col-span-1 lg:col-span-2 border-gray-200 p-4 rounded-xl flex flex-col gap-5">
          <div className="flex flex-col items-start space-y-2">
            <h2 className="text-2xl font-bold mb-3">Topics</h2>
            {topics && topics.map((topic) => (
              <Button variant="ghost" asChild key={topic.slug} className="p-0 hover:bg-transparent hover:underline">
              <Link to={`/community?topic=${topic.slug}`} className="text-md text-primary hover:text-gray-700 transition-colors duration-200">
                {topic.name}
              </Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
