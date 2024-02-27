import React from "react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { ToolButton } from "./tools";
import { Circle, RectangleHorizontal } from "lucide-react";

interface ShapesSidebarProps {
    canvasState: CanvasState;
  setCanvasState: (newState: any) => void;
}

const ShapesSidebar: React.FC<ShapesSidebarProps> = ({ canvasState, setCanvasState }) => {
  const handleShapeClick = (layerType: LayerType) => {
    setCanvasState({
      mode: CanvasMode.Inserting,
      layerType: layerType,
    });
  };

  return (
    <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
      <ToolButton
        label="Circle"
        icon={Circle}
        onClick={() => handleShapeClick(LayerType.Circle)}
        isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Circle
        }
      />
      <ToolButton
        label="Rectangle"
        icon={RectangleHorizontal}
        onClick={() => handleShapeClick(LayerType.Rectangle)}
        isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
      />
      {/* Add more shapes as needed */}
    </div>
  );
};

export default ShapesSidebar;
