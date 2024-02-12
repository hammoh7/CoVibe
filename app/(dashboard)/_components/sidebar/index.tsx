import { AddButton } from "./add";

export const Sidebar = () => {
    return ( 
        <div className="fixed z-[1] left-0 bg-blue-800 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
            <AddButton />
        </div>
     );
}
