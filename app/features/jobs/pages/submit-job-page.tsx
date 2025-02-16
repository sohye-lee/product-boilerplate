import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { siteTitle } from "~/lib/constants";
import { Label } from "~/common/components/ui/label";
import InputBox from "~/common/components/input-box";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select"
import SelectBox from "~/common/components/select-box";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import type { Route } from "./+types/submit-job-page";
import { JOB_LOCATIONS, JOB_TYPES, SALARY_RANGES } from "../constants";



export const meta: Route.MetaFunction = () => {
  return [
    { title: `Post a Job | ${siteTitle}` },
    { name: "description", content: "Post a Job" },
  ];
};

const salaryRanges = SALARY_RANGES.map((range) => ({
  value: range,
  label: range
}));
 
export default function SubmitPage({ loaderData }: Route.ComponentProps) {
  const [icon, setIcon] = useState<string | null>(null);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };

  
  return (
    <div className="mx-auto px-4 max-w-screen-md flex flex-col gap-8">
      <Hero title="Post a Job" description="" /> 
      <Form className="space-y-5">
        {/* <div className="space-y-4"> */}

          {/* <div className="flex flex-col gap-6"> */}
            <InputBox label="Position" name="position" required={true} placeholder="i.e. Software Engineer" description="Position of the job" />
            <InputBox label="Overview" name="overview" maxLength={400} required={true} textarea={true} placeholder="i.e. We are looking for a software engineer to join our team" description="(max 400 characters)" />
            <InputBox label="Responsability" name="responsability" maxLength={400} textarea={true} placeholder="i.e. Develop and maintain software applications, Collaborate with cross-functional teams to implement new features, Optimize application performance and scalability" description="(max 400 characters, comma separated)" />
            <InputBox label="Qualifications" name="qualifications" maxLength={400}  textarea={true} placeholder="i.e. Bachelor's degree in Computer Science, 3+ years of experience in software development, Strong understanding of JavaScript, React, and Node.js" description="(max 400 characters, comma separated)" />
            <InputBox label="Benefits" name="benefits" maxLength={400}  textarea={true} placeholder="i.e. Flexible working hours, Remote work, Health insurance, Stock options" description="(max 400 characters, comma separated)" />
            <InputBox label="Skills" name="skills" maxLength={400}  textarea={true} placeholder="i.e. JavaScript, React, Node.js, Python, SQL" description="(max 400 characters, comma separated)" />
            <InputBox label="Company Name" name="companyName" maxLength={400}  placeholder="i.e. Tesla" description="The name of the company" />
            <InputBox label="Company URL" name="companyUrl" required={true}  placeholder="i.e. https://www.tesla.com" description="Type the URL of the company" />
            <InputBox label="Company Location" name="companyLocation" required={true}  placeholder="i.e. San Francisco, CA" description="The location of the company" />
            <InputBox label="Apply URL" name="applyUrl" required={true}  placeholder="i.e. https://www.tesla.com/apply" description="Type the URL for the apply form" />
            <SelectBox label="Job Type" placeholder="Select a job type" name="jobType" required={true} options={JOB_TYPES} description="The type of the job" />
            <SelectBox label="Location" placeholder="Select a location" name="location" required={true} options={JOB_LOCATIONS} description="The location of the job" />
            <SelectBox label="Salary Range" placeholder="Select a salary range" name="salaryRange" required={true} options={salaryRanges} description="The salary range of the job" />
          {/* </div> */}
          {/* <div className="flex flex-col space-y-2">
            <Label className="text-lg">
              Icon 
            </Label>
              <small className="text-muted-foreground">
                This is the icon of your product
              </small>
            <Input type="file" name="icon" className=" h-12 pt-3 bg-purple-100" required onChange={handleIconChange} />
            <div className="flex flex-col text-xs text-muted-foreground gap-1">
              <span>Recommended size: 128x128px</span>
              <span>Max file size: 1MB</span>
              <span>Supported formats: PNG, JPG, SVG</span>
            </div>
            {icon && (
              <div className="size-40 rounded-sm border border-solid border-purple-200 aspect-squareflex items-center justify-center">
                <img src={icon} alt="icon" className="min-w-full min-h-full object-cover" />
              </div>
            )}
          </div> */}
        {/* </div> */}
        <div className="flex justify-end col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
} 