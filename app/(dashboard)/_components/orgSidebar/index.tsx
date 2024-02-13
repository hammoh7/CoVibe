"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboardIcon, Stars } from "lucide-react";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div className="hidden lg:flex flex-col space-y-2 w-[206px] pl-5 pt-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="logo" height={60} width={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Boards
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "3px",
              width: "100%",
              justifyContent: "space-between",
            },
          },
        }}
      />
      <hr />
      <div className="space-y-1 w-full">
        <Button
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
          variant={favorites ? "ghost" : "secondary"}
        >
          <Link href="/">
            <LayoutDashboardIcon className="h-4 w-4 mr-2" />
            Team Boards
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
          variant={favorites ? "secondary" : "ghost"}
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Stars className="h-4 w-4 mr-2" />
            Favourites
          </Link>
        </Button>
      </div>
    </div>
  );
};
