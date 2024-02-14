import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/logo.svg" height={60} width={60} alt="logo" />
      <h2 className="text-2xl font-semibold">Create Board</h2>
      <p>Create a board for your organization</p>
      <div className="mt-5">
        <Button size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};
