import { Link } from "react-router";
import { Separator } from "@common/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@common/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@common/components/ui/dropdown-menu"
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@common/components/ui/avatar";
import { BarChart, BarChart2Icon, BarChart3, BellIcon, BriefcaseIcon, LogOutIcon, MessageCircleIcon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react";
import { siteTitle } from "~/lib/constants";
const menus = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Products",
        path: "/products",
        children: [
            {
                label: "All Products",
                path: "/products",
                description: "View all products"
            },
            {
                label: "Leaderboards",
                path: "/products/leaderboards",
                description: "View the products by upvotes"
            },
            {
                label: "Categories",
                path: "/products/categories",
                description: "View the products by category"
            },
             {
                label: "Search",
                path: "/products/search",
                description: "Search for a product"
            },
            {
                label: "Submit a Product",
                path: "/products/submit",
                description: "Submit a new product to our community"
            },
            {
                label: "Promote",
                path: "/products/promote",
                description: "Promote your product to our community"
            }
        ]
    },
    {
        label: "Jobs",
        path: "/jobs",
        children: [
            {
                label: "All Jobs",
                path: "/jobs",
                description: "View all jobs for each product"
            },
            {
                label: "Remote Jobs",
                path: "/jobs?location=remote",
                description: "View the remote jobs for each product"
            },
            {
                label: "On-Site Jobs",
                path: "/jobs?location=onsite",
                description: "View the on-site jobs for each product"
            },
            {
                label: "Hybrid Jobs",
                path: "/jobs?location=hybrid",
                description: "View the hybrid jobs for each product"
            },
            {
                label: "Full-Time Jobs",
                path: "/jobs?type=full-time",
                description: "View the full-time jobs for each product"
            },
            {
                label: "Part-Time Jobs",
                path: "/jobs?type=part-time",
                description: "View the part-time jobs for each product"
            },
            {
                label: "Internships",
                path: "/jobs?type=internship",
                description: "View the internships for each product"
            },
            {
                label: "Freelance Jobs",
                path: "/jobs?type=freelance",
                description: "View the freelance jobs for each product"
            },
            {
                label: "Submit a Job",
                path: "/jobs/submit",
                description: "Submit a new job to our community"
            },
        ]
    },
    {
        label: "Community",
        path: "/community",
        children: [
            {
                label: "All Posts",
                path: "/community",
                description: "View all posts in our community"
            },
            {
                label: "Top Posts",
                path: "/community?sort=top",
                description: "View the top posts in our community"
            },
            {
                label: "New Posts",
                path: "/community?sort=new",
                description: "View the new posts in our community"
            },
            {
                label: "Create a Post",
                path: "/community/submit",
                description: "Create a new post in our community"
            },
        ]
    },
    {
        label: "Ideas GPT",
        path: "/ideas",
    },
    {
        label: "Teams",
        path: "/teams",
        children: [
            {
                label: "All Teams",
                path: "/teams",
                description: "View all teams in our community"
            },
            {
                label: "Create a Team",
                path: "/teams/create",
                description: "Create a new team in our community"
            },
        ]
    }
]
export default function Navigation({ isLoggedIn, hasNotifications, hasMessages }: { isLoggedIn: boolean, hasNotifications: boolean, hasMessages: boolean }) {
    return (
        <nav className="flex items-center justify-between h-16 backdrop-blur fixed top-0 left-0 w-full z-50 bg-background/50">
            <div className="max-w-screen-2xl w-full mx-auto px-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-lg font-bold tracking-tighter" id="header-logo">{siteTitle}</Link>
                    <Separator orientation="vertical" className="h-6" />
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menus.map((menu) => (
                                <NavigationMenuItem key={menu.label}>
                                    {menu.children ? (
                                    <>
                                    <NavigationMenuTrigger className="group hover:text-primary transition-colors duration-200">
                                        {menu.label}
                                    </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[500px] gap-3 p-4 grid-cols-2 text-sm">
                                            {menu.children.map((child) => (
                                                <NavigationMenuItem key={child.label} className="select-none rounded-sm transition-colors duration-200 group">
                                                    <NavigationMenuLink asChild>
                                                        <Link to={child.path} className="group-hover:text-primary transition-colors duration-200">
                                                            <span className="group-hover:text-primary text-sm font-medium">{child.label}</span>
                                                            <p className="text-muted-foreground text-xs">{child.description}</p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                    ) : <Link to={menu.path} className={cn(navigationMenuTriggerStyle(), "group hover:text-primary transition-colors duration-200")}>{menu.label}</Link>}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {isLoggedIn ?
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild className="relative">
                            <Link to="/my/notifications">
                                <BellIcon className="size-4" />
                                {hasNotifications && <div className="absolute -top-0 -right-0 bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">1</div>}
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="relative">
                            <Link to="/my/messages">
                                <MessageCircleIcon className="size-4" />
                                {hasMessages && <div className="absolute -top-0 -right-0 bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">1</div>}
                            </Link>
                        </Button>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://github.com/sohye-lee.png" />
                            <AvatarFallback>SK</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-40">
                        <DropdownMenuLabel className="flex flex-col items-start">
                            <span className="text-sm font-medium">Sohye Lee</span>
                            <span className="text-xs text-muted-foreground">sohye@create.so</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <Link to="/my/dashboard" className=" ">
                                    <BarChart3 className="size-4" />
                                    Dashboard
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/my/profile" className=" ">
                                    <UserIcon className="size-4" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/my/dashboard/ideas" className=" ">
                                    <BriefcaseIcon className="size-4" />
                                    My Ideas
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/my/dashboard/products/:productId" className=" ">
                                    <PackageIcon className="size-4" />
                                    My Product
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/my/settings" className=" ">
                                    <SettingsIcon className="size-4" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Link to="/logout"><LogOutIcon className="size-4" />Logout</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                        
                : <div className="flex items-center gap-2"><Button variant="outline" asChild><Link to="/login">Login</Link></Button><Button asChild><Link to="/signup">Join</Link></Button></div>}
            </div>
        </nav>
    );
}
