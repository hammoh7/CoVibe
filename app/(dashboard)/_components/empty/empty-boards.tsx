"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const mutate = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled"
    })
    .then ((id) => {
      toast.success("Board created");
      router.push(`/board/${id}`);
    })
    .catch(() => toast.error("Board creation failed!"))
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/logo.svg" height={60} width={60} alt="logo" />
      <h2 className="text-2xl font-semibold">Create Board</h2>
      <p>Create a board for your organization</p>
      <div className="mt-5">
        <Button onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};
