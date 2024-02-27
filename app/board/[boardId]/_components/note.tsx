import { cn, colorToCss, getContrastText } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { NoteLayer, TextLayer } from "@/types/canvas";
import { Dosis } from "next/font/google";
import { useEffect, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const font = Dosis({
  subsets: ["latin"],
  weight: ["600"],
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.15;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, maxFontSize);
};


interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Note = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;
  const updatedValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");
    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updatedValue(e.target.value);
  };

  const contentEditableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Focus the contentEditable when the component mounts
    if (contentEditableRef.current) {
      contentEditableRef.current.focus();
    }
  }, []);

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        background: fill ? colorToCss(fill) : "#000",
      }}
      className="shadow-md drop-shadow-xl "
    >
      <ContentEditable
        innerRef={contentEditableRef}
        html={value || ""}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? getContrastText(fill) : "#000",
        }}
      />
    </foreignObject>
  );
};
