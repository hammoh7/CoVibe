"use client";

import { api } from "@/convex/_generated/api";
import { apiMutation } from "@/hooks/mutation-api";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = apiMutation(api.board.create);
  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to Create board"));
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-gradient-to-t from-blue-300 to-blue-600 hover:bg-blue-600 rounded-lg hover:bg-blend-darken flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-yellow-500 stroke-1" />
      <p className="text-md text-black font-medium">New</p>
    </button>
  );
};
