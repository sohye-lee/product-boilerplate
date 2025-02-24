import { Form, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/team-page";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";
import { DotIcon } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "~/common/components/ui/breadcrumb";
import { UpvoteButton } from "~/common/components/upvote-button";
import { Hero } from "~/common/components/hero";
import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import InputBox from "~/common/components/input-box";

interface LoaderData {
  team: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Team Profile | Product Hunt Clone" },
    { name: "description", content: "View team profile and open positions" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    team: params.team,
  };
}

export default function TeamPage({ loaderData, params }: Route.ComponentProps) {
  const {teamId} = params;
   return (
      <div className="grid grid-cols-8 gap-12 items-start pt-10 max-w-screen-2xl mx-auto">
        <div className="col-span-8"> 
          <Hero title="Join Sohye's Team" />
        </div>
       
        {/* RIGHT */}
        <div className="flex flex-col gap-8 col-span-8 lg:col-span-5">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             <Card>
               <CardHeader>
                 <CardTitle className="space-y-2">
                   <p className="text-muted-foreground text-sm font-light">Product Name</p>
                   <h3 className="text-2xl font-bold">Social Media</h3>
                 </CardTitle>
               </CardHeader>
             </Card>
             <Card>
               <CardHeader>
                 <CardTitle className="space-y-2">
                   <p className="text-muted-foreground text-sm font-light">Stage</p>
                   <h3 className="text-2xl font-bold">MVP</h3>
                 </CardTitle>
               </CardHeader>
             </Card>
             <Card>
               <CardHeader>
                 <CardTitle className="space-y-2">
                   <p className="text-muted-foreground text-sm font-light">Team Size</p>
                   <h3 className="text-2xl font-bold">2</h3>
                 </CardTitle>
               </CardHeader>
             </Card>
             <Card>
               <CardHeader>
                 <CardTitle className="space-y-2">
                   <p className="text-muted-foreground text-sm font-light">Available Equity</p>
                   <h3 className="text-2xl font-bold">25</h3>
                 </CardTitle>
               </CardHeader>
             </Card>
             <Card className="col-span-2">
               <CardHeader>
                 <CardTitle className="space-y-2">
                   <p className="text-muted-foreground text-sm font-light">Looking For</p>
                   <ul className="list-disc list-inside space-y-2">
                     <li>React Developer</li>
                     <li>UI/UX Designer</li>
                     <li>Product Manager</li>
                   </ul>
                 </CardTitle>
               </CardHeader>
            </Card>
            <Card className="col-span-2">
               <CardHeader>
                 <CardTitle className="space-y-2">
                   <p className="text-muted-foreground text-sm font-light">Idea Description</p>
                   <p className="font-medium leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, modi! Optio nam labore iste, autem ad doloribus, facere illo vero unde ipsum voluptate assumenda, minus mollitia. Expedita deleniti fuga nobis.</p>
                 </CardTitle>
               </CardHeader>
             </Card>
            </div>
        </div>
          {/* RIGHT ENDS */}
 

        {/* SIDEBAR */}
        <aside className="sticky top-20 sidebar border col-span-8 lg:col-span-3 border-gray-200 p-4 rounded-xl space-y-8">
          <div className="flex gap-3 items-center">
            <Avatar className="size-10 rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-xl font-medium">Sohye</h4>
              <Badge className="bg-gray-100 text-gray-500">React Developer</Badge>
            </div>
          </div>
         <Form className="flex flex-col gap-4">
            <InputBox label="Tell us about yourself" name="introduction" description="Introduce yourself to the team" />
            <InputBox label="Why do you want to join our team?" name="why-join" description="Tell us why you want to join our team" />
            <Button variant="default" className="w-full">Follow</Button>
          </Form>
        </aside>
        {/* SIDEBAR ENDS */}
      </div>
  );
} 