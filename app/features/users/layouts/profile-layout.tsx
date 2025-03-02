import { ChevronUp } from "lucide-react";
import { Star } from "lucide-react";
import { buttonVariants } from "~/common/components/ui/button";
import type { Route } from "./+types/profile-layout";
import { Form, Link, NavLink, Outlet } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog"
import InputBox from "~/common/components/input-box";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface ProfileData {
  username: string;
  avatar: string;
  bio: string;
  stats: {
    products: number;
    posts: number;
    followers: number;
    following: number;
  };
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    profile: {
      username: params.username,
      avatar: "https://github.com/shadcn.png",
      bio: "Building awesome products",
      stats: {
        products: 12,
        posts: 45,
        followers: 1234,
        following: 567
      }
    }
  };
}

export default function ProfileLayout({ loaderData, params }: Route.ComponentProps) {
  const { profile } = loaderData as unknown as { profile: ProfileData };
  const { username } = params;
   return (
        <div className="flex flex-col gap-12 max-w-screen-md mx-auto pt-8">
            <div className="flex items-end justify-between">
                <div className="flex items-center gap-5">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>
                            CN
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-4xl font-bold">Sohye Kim</h1>
                        <p className="text-sm text-muted-foreground">Frontend Developer</p>
                        {/* <div className="flex items-center gap-2 mt-3">
                            <div className="flex items-center text-yellow-500">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} className="w-4 h-4" fill="gold" color="gold" />
                                ))}
                            </div>
                            <span className="text-sm font-medium">87 reviews</span>
                        </div> */}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary" size="sm">
                                Edit Profile
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary" size="sm">
                                Follow
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Follow</DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary" size="sm">
                                Message
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-2xl">Message</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <Form className="space-y-4">
                                  <InputBox name="message" placeholder="Write a message..." label="" textarea className="resize-none" />
                                  <Button type="submit" className="float-right">Send</Button>
                                </Form>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                    <NavLink className={({ isActive }) => cn([buttonVariants({ variant: "outline" }), isActive ? "text-primary bg-primary/10" :   ""]) } to={`/users/${username}`}>
                        About
                    </NavLink>
                    <NavLink className={({ isActive }) => cn([buttonVariants({ variant: "outline" }), isActive ? "text-primary bg-primary/10" :   ""]) } to={`/users/${username}/products`}>
                        8 Products
                    </NavLink>
                    <NavLink className={({ isActive }) => cn([buttonVariants({ variant: "outline" }), isActive ? "text-primary bg-primary/10" :   ""]) } to={`/users/${username}/posts`}>
                        12 Posts
                    </NavLink>
            </div>
            <div className="space-y-12">
                <Outlet/>
            </div>
        </div>
    );
}

// function TabLink({ to, children }: { to: string; children: React.ReactNode }) {
//   return (
//     <li>
//       <Link
//         to={to}
//         // className={({ isActive }) =>
//         //   cn(
//         //     "inline-block pb-4 text-gray-600 border-b-2 border-transparent hover:text-gray-900",
//         //     isActive && "text-gray-900 border-gray-900"
//         //   )
//         // }
//       >
//         {children}
//       </Link>
//     </li>
//   );
// } 