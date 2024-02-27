"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  LucideMousePointer2,
  Pencil,
  Redo2,
  Shapes,
  StickyNote,
  Undo2,
  WholeWord,
} from "lucide-react";
import { ToolButton } from "./tools";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { useState } from "react";
import ShapesSidebar from "./shapes";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolbarProps) => {
  const [showShapesSidebar, setShowShapesSidebar] = useState(false);

  const handleShapesClick = () => {
    setShowShapesSidebar(!showShapesSidebar);
  };


  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={LucideMousePointer2}
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label="Text"
          icon={WholeWord}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label="Sticky Notes"
          icon={StickyNote}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label="Shapes"
          icon={Shapes}
          onClick={handleShapesClick}
          isActive={showShapesSidebar}
        />
        <ToolButton
          label="Pencil"
          icon={Pencil}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          isActive={canvasState.mode === CanvasMode.Pencil}
        />
      </div>
      {showShapesSidebar && (
        <div
          className="absolute top-[50%] -translate-y-[50%] left-20" // Adjust left property as needed
          style={{ zIndex: 1000 }}
        >
          <ShapesSidebar
            canvasState={canvasState}
            setCanvasState={setCanvasState}
          />
        </div>
      )}
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={redo}
          isDisabled={!canRedo}
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
