import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SidebarUserMenu } from "@/components/sidebar-user-menu";
import { Building2, ChevronDown, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface SidebarLayoutProps {
  children: ReactNode;
}

interface NavigationItem {
  name: string;
  href?: string;
  icon: any;
  submenu?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    name: "Campaign",
    href: "/",
    icon: Building2,
  },
];

const mockUser = {
  name: "Admin User",
  email: "admin@company.com",
};

function SidebarContent({ collapsed = false }: { collapsed?: boolean }) {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (menuName: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((name) => name !== menuName)
        : [...prev, menuName]
    );
  };

  const isMenuExpanded = (menuName: string) => expandedMenus.includes(menuName);

  const isActiveSubmenu = (submenu: NavigationItem[]) => {
    return submenu.some((item) => item.href && location.pathname === item.href);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-12 sm:h-14 items-center px-2 lg:px-4 border-b lg:border-b-0 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-5 w-5 lg:h-6 lg:w-6 shrink-0" />
          <span
            className={cn(
              "font-bold text-sm lg:text-base",
              collapsed ? "hidden" : "hidden lg:block"
            )}
          >
            HR Client
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-2 lg:p-4 overflow-y-auto">
        {navigation.map((item) => {
          if (item.submenu) {
            const isExpanded = isMenuExpanded(item.name);
            const hasActiveChild = isActiveSubmenu(item.submenu);

            return (
              <div key={item.name}>
                <Button
                  variant={hasActiveChild ? "secondary" : "ghost"}
                  className={cn(
                    "w-full h-9 lg:h-10",
                    collapsed ? "justify-center" : "justify-between",
                    hasActiveChild && "bg-secondary"
                  )}
                  onClick={() => !collapsed && toggleMenu(item.name)}
                >
                  <div className="flex items-center min-w-0 flex-1">
                    <item.icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        collapsed ? "mr-0" : "mr-2"
                      )}
                    />
                    <span
                      className={cn(
                        "truncate text-sm font-normal lg:text-base",
                        collapsed && "hidden"
                      )}
                    >
                      {item.name}
                    </span>
                  </div>
                  {!collapsed && (
                    <div>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </Button>
                {isExpanded && !collapsed && (
                  <div className="ml-4 lg:ml-6 mt-1 space-y-1">
                    {item.submenu.map((subItem) => {
                      const isActive = location.pathname === subItem.href;
                      return (
                        <Link key={subItem.name} to={subItem.href!}>
                          <Button
                            variant={isActive ? "secondary" : "ghost"}
                            size="sm"
                            className={cn(
                              "w-full justify-start h-8",
                              isActive && "bg-secondary"
                            )}
                          >
                            <subItem.icon className="mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                            <span className="truncate text-xs lg:text-sm">
                              {subItem.name}
                            </span>
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          const isActive = location.pathname === item.href;
          return (
            <Link key={item.name} to={item.href!}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full h-9 lg:h-10",
                  collapsed ? "justify-center" : "justify-start",
                  isActive && "bg-secondary"
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    collapsed ? "mr-0" : "mr-2"
                  )}
                />
                <span
                  className={cn(
                    "truncate text-sm font-normal lg:text-base",
                    collapsed && "hidden"
                  )}
                >
                  {item.name}
                </span>
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:block">
        <SidebarUserMenu user={mockUser} />
      </div>
    </div>
  );
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={cn(
          "hidden lg:flex lg:flex-col transition-all duration-200",
          sidebarCollapsed ? "lg:w-16" : "lg:w-64"
        )}
      >
        <div className="flex flex-col flex-1 min-h-0 bg-sidebar">
          <SidebarContent collapsed={sidebarCollapsed} />
        </div>
      </div>

      <div className="hidden md:flex lg:hidden md:w-16 md:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-sidebar">
          <SidebarContent collapsed={true} />
        </div>
      </div>

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64 md:w-80">
          <SidebarContent collapsed={false} />
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex flex-col min-w-0 bg-sidebar min-h-0">
        <div className="flex-1 flex flex-col sm:p-1 md:p-2 min-h-0">
          <div className="flex flex-col flex-1 rounded-lg bg-background shadow-sm md:shadow-lg min-h-0">
            <main className="flex-1 overflow-y-auto min-h-0 shrink-0 rounded-lg">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
