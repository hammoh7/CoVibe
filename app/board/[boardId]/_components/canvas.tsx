"use client";

import { useState } from "react";
import { Content } from "./content";
import { Toolbar } from "./toolbar";
import { Users } from "./users";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@/liveblocks.config";

interface CanvasProps {
    boardId: string,
}

export const Canvas = ({
    boardId,
}: CanvasProps) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });
    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    return (
        <main className="h-full w-full relative bg-slate-100 touch-none">
            <Content boardId={boardId} />
            <Users />
            <Toolbar
              canvasState={canvasState}
              setCanvasState={setCanvasState}
              undo={history.undo}
              redo={history.redo}
              canUndo={canUndo}
              canRedo={canRedo}
            />
        </main>
    )
}