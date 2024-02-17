import { Loader2 } from "lucide-react"
import { ContentSkeleton } from "./content"
import { UsersSkeleton } from "./users"
import { ToolbarSkeleton } from "./toolbar"

export const Loading = () => {
    return (
        <main className="h-full w-full relative bg-slate-100 touch-none flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-muted-foreground animate-spin" />
            <ContentSkeleton />
            <UsersSkeleton />
            <ToolbarSkeleton />
        </main>
    )
}