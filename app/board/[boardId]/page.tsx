import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface BoardIdProps {
    params: {
        boardId: string,
    }
}

const BoardId = ({
    params,
}: BoardIdProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>
    )
}

export default BoardId;