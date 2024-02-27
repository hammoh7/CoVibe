import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

export const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  const handleClick = () => {
    onClick(color);
  };
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={handleClick}
    >
      <div
        className="h-8 w-8 rounded-md border border-slate-400"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
