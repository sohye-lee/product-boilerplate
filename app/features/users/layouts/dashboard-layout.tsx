import {  Outlet, Link, useLocation } from "react-router";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "~/common/components/ui/sidebar";
import type { Route } from "./+types/messages-layout";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import MessageCard from "../components/message-card";
import { HomeIcon, PackageIcon, LightbulbIcon, SparklesIcon } from "lucide-react";
import { cn } from "~/lib/utils";
 
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

export default function DashboardLayout({ loaderData, params }: Route.ComponentProps) {
//   const { profile } = loaderData as unknown as { profile: ProfileData };
  const { username } = params;
  const location = useLocation();
   return (
       <SidebarProvider className="max-h-[calc(100vh-4rem)] pt-16 space-x-5 h-[calc(100vh-4rem)] px-4">
            <Sidebar variant="floating" className="pt-16">
                <SidebarContent>
                  <SidebarGroup>
                      <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard"}>
                              <Link to="/my/dashboard" className={cn( 
                                "",  location.pathname === "/my/dashboard" && " text-purple-500 bg-purple-100"
                              )}>
                                <HomeIcon className="size-4" />
                                  <span className="inherit">Dashboard</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard/ideas"}>
                              <Link to="/my/dashboard/ideas" className={cn( 
                                "",  location.pathname === "/my/dashboard/ideas" && "text-purple-500"
                              )}>
                                <SparklesIcon className="size-4" />
                                <span>Ideas</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                      </SidebarMenu>
                  </SidebarGroup>
                  <SidebarGroup>
                    <SidebarGroupLabel>Product Analysis</SidebarGroupLabel>
                      <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard/products/1"}>
                              <Link to="/my/dashboard/products/1" className={cn( 
                                "",  location.pathname === "/my/dashboard/products/1" && "text-primary"
                              )}>
                                <PackageIcon className="size-4" />
                                  <span>Product 1</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard/products/2"}>
                              <Link to="/my/dashboard/products/2" className={cn( 
                                "",  location.pathname === "/my/dashboard/products/2" && "text-primary"
                              )}>
                                <PackageIcon className="size-4" />
                                <span>Product 2</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
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
