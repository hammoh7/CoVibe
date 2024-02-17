import { Skeleton } from "@/components/ui/skeleton";
import { LucideMousePointer2, Pen, Redo2, Shapes, Undo2, WholeWord } from "lucide-react";
import { ToolButton } from "./tools";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={LucideMousePointer2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Text"
          icon={WholeWord}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Pen"
          icon={Pen}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Shapes"
          icon={Shapes}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton 
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          isDisabled={true}
        />
        <ToolButton 
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 shadow-md flex flex-col gap-y-4 rounded-md bg-white h-[300px] w-[50px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
