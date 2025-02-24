import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/common/components/ui/tabs";
import type { Route } from "./+types/settings-page";
import InputBox from "~/common/components/input-box";
import SelectBox from "~/common/components/select-box";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "~/common/components/ui/badge";
import { useState } from "react";
import { Form } from "react-router";

interface UserSettings {
    email: string;
    name: string;
    bio: string;
    role: string;
    notifications: {
        email: boolean;
        push: boolean;
    };
    theme: string;
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    settings: {
        email: "sohye@gmail.com",
        name: "Sohye",
          bio: "I am a developer",
        role: "developer",
        notifications: {
            email: true,
            push: true
        },
        theme: "light"
    }
  };
}

export function action({ request }: Route.ActionArgs) {
  // Handle settings updates
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Settings | Sohye's Account" },
    { name: "description", content: "Manage your account settings" }
  ];
};

export default function SettingsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { settings } = loaderData as unknown as { settings: UserSettings };

    const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
      <div className="grid grid-cols-6 gap-12 items-start pt-10 max-w-screen-2xl mx-auto">
          <div className="col-span-6 lg:col-span-4">        
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <form className="space-y-4">
            <InputBox label="Email" name="email" placeholder={settings.email} />
            <InputBox label="Name" description="Your full name" name="name" placeholder={settings.name} />
            <InputBox textarea description="Tell us a little about yourself. It will be displayed on your profile." label="Bio" name="bio" placeholder={settings.bio} />
            <SelectBox description="What do you indentify yourself the most with?" label="Role" name="role" placeholder={settings.bio} options={[{label: "Developer", value: "developer"}, {label: "Designer", value: "designer"}, {label: "Product Manager", value: "product manager"}]} />
            
           <div className="flex justify-end">
              <Button type="submit">Update Profile</Button>
            </div>
          </form>
        </TabsContent>

        {/* Add other tabs content */}
              </Tabs>
          </div>
          <aside className="sticky top-20 sidebar col-span-6 lg:col-span-2 border border-gray-200 p-4 rounded-xl space-y-8">
              <Form className="flex gap-3 flex-col">
                  <div className="flex flex-col space-y-2">
            <Label className="text-lg">
              Avatar 
            </Label>
              {/* <small className="text-muted-foreground">
                This is your avatar
              </small> */}
            {avatar && (
              <div className="size-32 aspect-square overflow-hidden rounded-full border border-solid border-purple-200 flex items-center justify-center">
                <img src={avatar} alt="avatar" className="min-w-full min-h-full object-cover rounded-full" />
              </div>
            )}
            <Input type="file" name="avatar" className="max-w-[240px] h-12 pt-3 bg-purple-100" required onChange={handleAvatarChange} />
            <div className="flex flex-col text-xs text-muted-foreground gap-1 pt-2">
              <span>Recommended size: 128x128px</span>
              <span>Max file size: 1MB</span>
              <span>Supported formats: PNG, JPG, SVG</span>
            </div>
          </div>
            {/* <Avatar className="size-10 rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-xl font-medium">Sohye</h4>
              <Badge className="bg-gray-100 text-gray-500">React Developer</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-2">
   
            <span className="text-muted-foreground text-sm">🎂 Joined 3 months ago</span>
            <span className="text-muted-foreground text-sm">🚀 Launched 10 products</span> */}
            <Button variant="default" className="w-full" type="submit">Update Avatar</Button>
        </Form>
        </aside>
    </div>
  );
} 