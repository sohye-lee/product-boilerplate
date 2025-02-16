import { useParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card } from "~/common/components/ui/card";
import { siteTitle } from "~/lib/constants";
import type { Route } from "./+types/idea-page";
import { Hero } from "~/common/components/hero";
import { ArrowRightIcon, DotIcon, EyeIcon, HeartIcon, QuoteIcon } from "lucide-react";

interface Idea {
  id: string;
  title: string;
  description: string;
  votes: number;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface LoaderData {
  idea: Idea;
}

export function loader({ params }: Route.LoaderArgs) {
  // TODO: Fetch idea data from Supabase using params.ideaId
  return {
    idea: {
      id: params.ideaId,
      title: "Example Idea",
      description: "This is an example idea description",
      votes: 42,
      createdAt: new Date().toISOString(),
      author: {
        name: "John Doe",
        avatar: "https://avatar.example.com/johndoe",
      },
    },
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Idea | ${siteTitle}` },
    { name: "description", content: "View and discuss this idea" },
  ];
};

export default function IdeaPage({ loaderData, params }: Route.ComponentProps) {
  const { idea } = loaderData;
  const { ideaId } = params;

  return (
    <div className="mx-auto px-4 max-w-screen-lg flex flex-col gap-10  ">
      <Hero title={`Idea #${ideaId}`} description="Discover and share product ideas with the community" />
      <div className="max-w-screen-sm mx-auto flex flex-col gap-8 items-center"> 
        <p className="italic text-lg relative text-center"><span className="font-bold text-5xl text-muted-foreground absolute -top-2 -left-6"></span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore qui modi earum.  
          Odit nisi eos optio quis voluptate ipsa, incidunt cumque saepe blanditiis ipsam error. Ea ab ipsum perspiciatis quasi.
        </p>
        <div className="flex items-center gap-1 justify-center">
          <div className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" /> 
            <span className="text-sm text-muted-foreground">100</span>
          </div>
          <DotIcon className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">12 hours ago</span>
          <DotIcon className="w-4 h-4" />
          <Button variant="outline" className="gap-1">
            <HeartIcon className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">12</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now<ArrowRightIcon className="w-4 h-4" /></Button>
      </div>
      {/* <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{idea.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Posted by {idea.author.name} on{" "}
              {new Date(idea.createdAt).toLocaleDateString()}
            </p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <span>↑</span>
            <span>{idea.votes}</span>
          </Button>
        </div>
        
        <p className="mt-4 text-gray-700">{idea.description}</p>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <div className="text-gray-500">No comments yet</div>
        </div>
      </Card> */}
    </div>
  );
} 