"use client";

import { Aperture, Atom, Home, MessageSquare, MessagesSquare, Send, Users } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

function MainNavbar() {
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
  ];
  const onNavigate = (url: string) => {
    return router.push(url);
  };
  return (
    <div className="space-x-1 lg:flex text-primary bg-transparent hidden">
      <div className="space-x-2 flex">
        {
          routes.map(route => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                "text-foreground text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary-foreground hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary",
              )}
            >
              <div className="flex gap-x-2 items-center">
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

    </div>
  );
}
export default MainNavbar;
