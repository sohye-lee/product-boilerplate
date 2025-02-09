import { Link } from "react-router";
import { Separator } from "@common/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@common/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@common/components/ui/avatar";
import { BarChart, BarChart2Icon, BarChart3, BellIcon, BriefcaseIcon, LogOutIcon, MessageCircleIcon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react";
import { siteTitle } from "~/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-screen-2xl w-full mx-auto px-4 py-6 border-t border-border">
        <h1 className="text-xs text-center text-muted-foreground">Copyright © {currentYear} {siteTitle}. All Rights Reserved.</h1>
      </div>
    </footer>
  );
}