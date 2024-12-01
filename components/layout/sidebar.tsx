"use client";

import { Aperture, Atom, Home, MessageSquare, MessagesSquare, Send, Users } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { IconTranslate as Translate } from "@/components/icons/icons";
import { Icons } from "@/components/icons/icons-new";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Etusivu",
      colour: "text-sky-500",
      pro: false,
    },
    {
      icon: MessageSquare,
      href: "/blog",
      label: "Blog",
      colour: "text-violet-500 ",
      pro: true,
    },
    {
      icon: Atom,
      href: "/elements",
      label: "Peruselementit",
      colour: "text-green-500 ",
      pro: false,
    },
    {
      icon: Users,
      href: "/kurssit",
      label: "Kurssit",
      colour: "text-cyan-700 ",
      pro: false,
    },
    {
      icon: Aperture,
      href: "/minnamartin",
      label: "Meistä",
      colour: "text-orange-700 ",
      pro: false,
    },
    {
      icon: Aperture,
      href: "/about",
      label: "About",
      colour: "text-orange-700 ",
      pro: false,
    },
    {
      icon: MessagesSquare,
      href: "/kokemuksia",
      label: "Kokemuksia",
      colour: "text-yellow-700 ",
      pro: false,
    },
    {
      icon: Send,
      href: "/#contact",
      label: "Yhteystiedot",
      pro: false,
    },
    {
      icon: Translate,
      href: "https://relationshiptango.fi",
      label: "Relationshiptango",
      pro: false,
    },
  ];
  const onNavigate = (url: string) => {
    return router.push(url);
  };
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-background">
      <Link
        href="/"
        className="flex justify-center items-center pt-5 space-x-2"
      >
        <Icons.logo className="w-full h-12" />
      </Link>

      <ScrollArea className="p-3 flex flex-1 justify-center">

        <div className="space-y-2">
          {
            routes.map(route => (
              <div
                onClick={() => onNavigate(route.href)}
                key={route.href}
                className={cn(
                  "text-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary-foreground hover:bg-primary/10 rounded-lg transition",
                  pathname === route.href && "bg-primary/10 text-primary",
                )}
              >
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  {/* <route.icon className={cn(
                    "h-5 w-5",
                    route.colour,
                  )}
                  /> */}
                  {route.label}

                </div>

              </div>
            ))
          }
        </div>
      </ScrollArea>
    </div>
  );
}
export default Sidebar;
