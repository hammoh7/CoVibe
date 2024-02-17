"use client";

import { Content } from "./content";
import { Toolbar } from "./toolbar";
import { Users } from "./users";

interface CanvasProps {
    boardId: string,
}

export const Canvas = ({
    boardId,
}: CanvasProps) => {
    return (
        <main className="h-full w-full relative bg-slate-100 touch-none">
            <Content boardId={boardId} />
            <Users />
            <Toolbar />
        </main>
    )
}