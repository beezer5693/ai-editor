import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOut from "./sign-out";
import ThemeSwitch from "./theme-switch";
import { createClient } from "@/supabase/server";

const UserMenu = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <Avatar>
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback>
              {user?.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-10 w-60">
          <DropdownMenuLabel>
            <div className="flex flex-col">
              {user?.user_metadata.full_name && (
                <p className="text-sm font-semibold">
                  {user.user_metadata.full_name}
                </p>
              )}
              <p className="text-xs text-primary/80 font-medium">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex items-center justify-between p-2">
            <span className="font-medium text-sm">Theme</span>
            <ThemeSwitch />
          </div>
          <DropdownMenuSeparator />
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
