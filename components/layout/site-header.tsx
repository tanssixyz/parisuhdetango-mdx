import Link from "next/link";

import { Icons } from "@/components/icons/icons-new";
import MainNavbar from "@/components/layout/main-nav";
import MobileNav from "@/components/layout/mobile-nav";

import { ModeToggle } from "../mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background px-5">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <Icons.logo className="h-16 w-64 lg:hidden xl:block" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </Link>
        <MainNavbar />
        <MobileNav />
        <Link href="/" className="flex items-center space-x-2 lg:hidden">
          <Icons.logo className="h-16 w-64" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex space-x-4">
          <ModeToggle />
          <Link href="https://relationshiptango.fi" className="hidden items-center space-x-2 lg:flex">
            <Icons.translate className="h-8 w-8" aria-hidden="true" />
            <span className="sr-only">English</span>
          </Link>
        </div>
      </div>

    </header>
  );
}
