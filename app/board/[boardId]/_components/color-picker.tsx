"use client";

import { Color } from "@/types/canvas";
import { ColorButton } from "./color-button";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[240px]  mr-2 border-r border-slate-200">
      <ColorButton
        onClick={onChange}
        color={{
          r: 220,
          g: 80,
          b: 50,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 150,
          g: 200,
          b: 100,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 40,
          g: 120,
          b: 200,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 255,
          g: 165,
          b: 0,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 80,
          g: 160,
          b: 220,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 210,
          g: 90,
          b: 140,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 255,
          g: 100,
          b: 50,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 180,
          g: 70,
          b: 200,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 120,
          g: 200,
          b: 80,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 255,
          g: 0,
          b: 120,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 255,
          g: 80,
          b: 10,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 50,
          g: 220,
          b: 120,
        }}
      />
    </div>
  );
};
