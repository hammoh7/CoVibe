"use client";

import { useSelectionBounds } from "@/hooks/selection-bound";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { ColorPicker } from "./color-picker";
import { Label } from "@/components/label";
import { Button } from "@/components/ui/button";
import { BringToFront, LucideTrash2, SendToBack } from "lucide-react";
import { deleteLayers } from "@/hooks/delete-layer";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const moveToFront = useMutation((
      { storage }
    ) => {
      const liveLayersIds = storage.get("layerIds");
      const indices: number[] = [];
      const arr = liveLayersIds.toImmutable();

      for (let i=0 ; i<arr.length ; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }
      for (let i=indices.length-1 ; i>=0 ; i--) {
        liveLayersIds.move(
          indices[i],
          arr.length-1-(indices.length-1-i)
        )
      }
    }, [selection])

    const moveToBack = useMutation((
      { storage }
    ) => {
      const liveLayersIds = storage.get("layerIds");
      const indices: number[] = [];
      const arr = liveLayersIds.toImmutable();

      for (let i=0 ; i<arr.length ; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }
      for (let i=0 ; i<indices.length ; i++) {
        liveLayersIds.move(indices[i], i);
      }
    }, [selection])

    const setFill = useMutation((
      { storage },
      fill: Color,
    ) => {
      const liveLayers = storage.get("layers");
      setLastUsedColor(fill);
      selection.forEach((id) => {
        liveLayers.get(id)?.set("fill", fill)
      })
    }, [selection, setLastUsedColor])
    const doDeleteLayers = deleteLayers();
    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) {
      return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(calc(${x}px - 50%), calc(${y - 16}px - 100%))`,
        }}
      >
        <ColorPicker 
          onChange={setFill}
        />
        <div className="flex flex-col gap-y-0.5">
          <Label label="Front" side="top">
            <Button variant="ghost" size="icon" onClick={moveToFront}>
              <BringToFront />
            </Button>
          </Label>
          <Label label="Back" side="bottom">
            <Button variant="ghost" size="icon" onClick={moveToBack}>
              <SendToBack />
            </Button>
          </Label>
        </div>
        <div className="flex items-center pl-2 ml-2 border-l border-slate-200">
          <Label label="Delete">
            <Button variant="ghost" size="icon" onClick={doDeleteLayers}>
              <LucideTrash2 />
            </Button>
          </Label>
        </div>
      </div>
    );
  }
);

SelectionTools.displayName = "SelectionTools";
