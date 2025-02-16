import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/job-page";
import { Hero } from "~/common/components/hero";
import { DotIcon } from "lucide-react";

interface LoaderData {
  job: string;
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Job Details | Product Hunt Clone" },
    { name: "description", content: "View job details" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    job: params.job,
  };
}

export default function JobPage({loaderData, params}: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-10">
      <Hero title="Job Details" description="Find your next job" />
      <div className="grid grid-cols-8 gap-12 items-start">
        {/* Job Details */}
        <div className="-mt-20 flex flex-col gap-8 col-span-5">
          {/* Job Header */}
          <div className="flex flex-col gap-5 pl-5">
            <div className="rounded-full w-24 h-24 bg-white overflow-hidden shadow-md">
              <img src="https://github.com/facebook.png" className="object-cover" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Job {params.jobId}</h1>
              <p className="text-muted-foreground">Tesla</p>
            </div>
          </div>
          {/* Job Header Ends */}
          {/* Job Location */}
          <div className="flex gap-2">
            <div className="text-xs font-medium py-1 px-2 rounded-md bg-muted-foreground/20">Full-time</div>
            <div className="text-xs font-medium py-1 px-2 rounded-md bg-muted-foreground/20">Remote</div>
          </div>
          {/* Job Location Ends */}
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">About the job</h2>
              <p className="text-muted-foreground">
                Tesla is looking for a software engineer to join our team.
              </p>
            </div>
          
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Requirements</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, assumenda! Aperiam quidem assumenda rerum soluta quis exercitationem rem dolor? Provident architecto soluta ipsum hic maiores quia, itaque voluptate libero? Consectetur.
                Saepe neque itaque laboriosam doloremque iste animi quae vero ut, ducimus quia officia deleniti quaerat quo libero ipsam unde, aliquam voluptas, exercitationem similique. Nam quia officiis possimus est id optio.
                Ducimus saepe nam sint veniam? Perferendis ut quisquam ex atque laudantium expedita quod facilis doloremque blanditiis nemo, quae vel cum deleniti, debitis minus! Quaerat velit similique, voluptatibus ullam dolor cumque!
                Molestias eaque aspernatur assumenda excepturi cupiditate sint quae. Voluptatum veritatis laudantium at saepe corrupti, ab necessitatibus, et labore dolores nam voluptatibus dignissimos architecto a accusantium ut officia temporibus ipsa numquam?
                Eum recusandae rerum ipsa velit, molestiae earum, officiis odio obcaecati commodi assumenda, cupiditate debitis aspernatur? Earum accusantium commodi vel nam similique quod delectus. Fuga eveniet laudantium sunt impedit ab possimus.
                Reiciendis consequatur ut voluptas consectetur. Quisquam, perspiciatis adipisci dolor quis mollitia provident maxime nisi molestias omnis magnam non, placeat fugit. Animi aut quia quibusdam rerum consequuntur atque, dolor sunt optio!
                Sed, illum odit at culpa laboriosam assumenda blanditiis quos debitis voluptates. Possimus, excepturi quo hic error modi officia ea adipisci iste natus aliquam id aliquid beatae quas velit nulla autem.
                Adipisci autem aliquam, sequi in voluptatum exercitationem. Aspernatur fuga soluta excepturi ex sequi, assumenda voluptatem debitis itaque ipsa molestias harum odit quam facilis officia tenetur consequuntur, ipsam velit sapiente corporis.
              </p>
            </div>
          
          </div>
          {/* Content Ends */}
          {/* Job Actions */}
          <div className="flex gap-2">
            <Button>Apply</Button>
            <Button>Save</Button>
          </div>
          {/* Job Actions Ends */}
        </div>
        {/* Job Details Ends */}
        <div className="sticky top-20 sidebar border col-span-3 border-gray-200 p-4 rounded-xl flex flex-col gap-8">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">Salary</p>
            <h2 className="text-2xl font-bold">$100,000 - $120,000</h2>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">Location</p>
            <h2 className="text-2xl font-bold">Remote</h2>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">Type</p>
            <h2 className="text-2xl font-bold">Full-time</h2>
          </div>
           <div className="space-y-1 flex gap-1">
            <p className="text-muted-foreground text-sm">Posted 2 days ago</p>
            <DotIcon className="w-4 h-4" />
            <p className="text-muted-foreground text-sm">376 views</p>
          </div>
          <Button>Apply Now</Button>
        </div>
      </div>
   </div>

  );
} 