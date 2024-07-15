import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUser } from "@/lib/session/auth";
import SignOut from "./sign-out";
import ThemeSwitch from "./theme-switch";

const UserMenu = async () => {
  const user = await getUser();

  console.log(user);

  return (
    <div className="w-full flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <Avatar>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>
              {user?.username?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-10 w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col gap-1">
              {user?.name && (
                <p className="text-sm font-semibold">{user.name}</p>
              )}
              <p className="text-xs text-primary/80 font-medium">
                {user?.username}
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
