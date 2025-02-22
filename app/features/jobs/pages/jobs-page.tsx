import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/jobs-page";
import { Hero } from "~/common/components/hero";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_LOCATIONS, JOB_TYPES, SALARY_RANGES } from "../constants";
import { Link, useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

interface LoaderData {
  // Define your loader data type here
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Jobs | ${siteTitle}` },
    { name: "description", content: "Find your next job" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add your loader data here
  };
}

export default function JobsPage({ loaderData, params }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobType = searchParams.get("jobType");
  const location = searchParams.get("location");
  const salaryRange = searchParams.get("salaryRange");

  const onFilterChange = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex flex-col gap-10">
      <Hero title="Jobs" description="Find your next job" />
      <div className="grid grid-cols-8 gap-10 items-start">

        <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <JobCard
            key={index}
            id={index.toString()}
            companyName="Tesla"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="Palo Alto, CA"
            jobTitle="Software Engineer"
            timeAgo="12 hours ago"
            employmentType="Full-time"
            salary="$100,000 - $120,000"
            location="Remote"
            />
          ))}
        </div>

        <aside className="sticky top-20 sidebar border col-span-2 border-gray-200 p-4 rounded-xl flex flex-col gap-5">
          <div className="space-y-2">
            <div className="font-serif uppercase text-xl font-medium text-gray-500">
              Type
            </div>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((job, i) => (
                <Button key={i} variant="outline" className={cn("inline-flex px-2 py-1 hover:bg-primary/20", jobType === job.value && "bg-primary/10 text-primary")} onClick={() => onFilterChange("jobType", job.value)}>
                    {job.label}
                </Button>
              ))}
            </div>
          </div>
           
          <div className="space-y-2">
            <div className="font-serif uppercase text-xl font-medium text-gray-500">
              Location
            </div>
            <div className="flex flex-wrap gap-2">
              {JOB_LOCATIONS.map((jobLocation, i) => (
                <Button key={i} variant="outline" className={cn("inline-flex px-2 py-1 hover:bg-primary/20", location === jobLocation.value && "bg-primary/10 text-primary")} onClick={() => onFilterChange("location", jobLocation.value)}>
                    {jobLocation.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-serif uppercase text-xl font-medium text-gray-500">
              Salary Range
            </div>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGES.map((range, i) => (
                <Button key={i} variant="outline" className={cn("inline-flex px-2 py-1 text-xs font-sans hover:bg-primary/20", salaryRange === range && "bg-primary/10 text-primary")} onClick={() => onFilterChange("salaryRange", range)}>
                    {range}
                </Button>
              ))}
            </div>
          </div>

        </aside>
        {/* Sidebar ends */}
      </div>
    </div>
  );
} 