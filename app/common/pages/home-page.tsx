import { Link, type MetaFunction } from "react-router";
import { Button } from "@common/components/ui/button";
import { siteTitle } from "~/lib/constants";
import { ProductCard } from "@features/products/components/product-card";
import { Separator } from "@common/components/ui/separator";
import { PostCard } from "@features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import type { Route } from "~/+types/home";

export const meta: MetaFunction = () => {
  return [{ title: `Home | ${siteTitle}` }];
}

export function loader() {
  return {
    products: [],
    posts: [],
    ideas: [],
    jobs: [],
    teams: [],
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-5 w-full flex flex-col gap-10">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        <div className="p-2">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Today's Products
          </h2>
          <p>
            Discover the latest products made by our community.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={10}
              viewsCount={10}
              upvotesCount={129}
            />
          ))}
      </div>

      <Separator />
      {/* Post Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Latest Discussions
          </h2>
          <p>
            Read the latest discussions made by our community.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
            <PostCard
              key={index}
              id={`postId-${index}`}
              title={`Why I'm not using ${siteTitle} anymore`}
              authorName="Sohye"
              authorAvatarUrl="https://github.com/apple.png"
              authorInitials="SK"
              category="Category"
              timeAgo="12 hours ago"
            />
          ))}
      </div>

       <Separator />
      {/* Jobs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Ideas 
          </h2>
          <p>
            Find ideas in our community.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/community">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={index.toString()}
            title="A new way to build products with AI in a startup with no code. Is this possible?"
            viewCount={123}
            timeAgo="12 hours ago"
            likesCount={10}
            claimed={true}
          />
        ))}
      </div>

        <Separator />
      {/* Idea Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Ideas 
          </h2>
          <p>
            Find your dream job.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            key={index}
            id={index.toString()}
            companyName="Tesla"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="Palo Alto, CA"
            title="Software Engineer"
            timeAgo="12 hours ago"
            employmentType="Full-time"
            salary="$100,000 - $120,000"
            location="Remote"
          />
        ))}
      </div>

      <Separator />
      {/* Idea Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        <div className="p-2">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Teams 
          </h2>
          <p>
            Join a team looking for a member.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 px-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <TeamCard
            key={index}
            id={index.toString()}
            leaderUsername="Sohye"
            leaderAvatar="https://github.com/inthetiger.png"
            leaderInitials="SK"
            roles={["React Developer", "Backend Developer", "Product Manager"]}
            projectDescription="a social media platform"
          />
        ))}
      </div>
    </div>
  );
}
 