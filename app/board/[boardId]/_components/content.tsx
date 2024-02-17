"use client";

import { Actions } from "@/components/actions";
import { Label } from "@/components/label";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { renameModal } from "@/store/modal-rename";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface ContentProps {
  boardId: string;
}

const font = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

const TabSeparator = () => {
  return <div className="text-slate-500 px-1.5">|</div>;
};

export const Content = ({ boardId }: ContentProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  const { onOpen } = renameModal();

  if (!data) return <ContentSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Label label="Your boards" sideOffset={10}>
        <Button asChild variant="ghost" className="px-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              height={40}
              width={40}
              className="mt-4"
            />
            <span className={cn("ml-2 font-semibold text-xl", font.className)}>
              Board
            </span>
          </Link>
        </Button>
      </Label>
      <TabSeparator />
      <Label label="Title" sideOffset={10}>
        <Button
          variant="ghost"
          className="text-sm px-2 hover:text-red-500"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Label>
      <TabSeparator />
      <Actions
        id={data._id}
        title={data.title}
        side="bottom"
        sideOffset={10}
      >
        <div>
          <Label label="Menu" sideOffset={10}>
            <Button size="icon" variant="ghost" className="h-5 w-5 flex items-center justify-center">
              <Menu />
            </Button>
          </Label>
        </div>
      </Actions>
    </div>
  );
};

export const ContentSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[200px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
