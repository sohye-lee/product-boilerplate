import {  Outlet } from "react-router";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "~/common/components/ui/sidebar";
import type { Route } from "./+types/messages-layout";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import MessageCard from "../components/message-card";

 
// }

export function loader({ params }: Route.LoaderArgs) {
  return {
    // profile: {
    //   username: params.username,
    //   avatar: "https://github.com/shadcn.png",
    //   bio: "Building awesome products",
    //   stats: {
    //     products: 12,
    //     posts: 45,
    //     followers: 1234,
    //     following: 567
    //   }
    // }
  };
}

export default function MessagesLayout({ loaderData, params }: Route.ComponentProps) {
//   const { profile } = loaderData as unknown as { profile: ProfileData };
  const { username } = params;
   return (
       <SidebarProvider className="max-h-[calc(100vh-4rem)] pt-16 space-x-5 h-[calc(100vh-4rem)] px-4">
            <Sidebar variant="floating" className="pt-16">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <MessageCard
                                  key={index}
                                  avatar={{
                                    src: "https://github.com/shadcn.png",
                                    fallback: "JD"
                                  }}
                                  username="John Doe"
                                  preview="Last message"
                                  messageId={`message-${index}`}
                             />
                        ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <div className="overflow-y-auto -mt-24 w-full pt-8 h-[calc(100vh-4rem)]">
                <Outlet />
            </div>
            
         </SidebarProvider>
    );
}
