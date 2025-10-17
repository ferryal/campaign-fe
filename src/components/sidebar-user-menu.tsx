import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut, EllipsisVertical } from "lucide-react";

interface SidebarUserMenuProps {
  user: {
    name: string;
    email: string;
  };
}

export function SidebarUserMenu({ user }: SidebarUserMenuProps) {
  return (
    <div className="p-2 lg:p-4 border-t mt-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full p-2 lg:p-3 h-auto lg:justify-start justify-center"
          >
            <div className="flex items-center gap-3 w-full">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center gap-3 justify-between w-full">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="text-sm font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start overflow-hidden min-w-0 flex-1">
                    <p className="text-sm font-medium leading-none truncate w-full text-left">
                      {user.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate w-full text-left">
                      {user.email}
                    </p>
                  </div>
                </div>
                <EllipsisVertical className="h-4 w-4 shrink-0" />
              </div>

              {/* Tablet/Mobile Layout - Just Avatar */}
              <div className="lg:hidden">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-sm font-medium">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
