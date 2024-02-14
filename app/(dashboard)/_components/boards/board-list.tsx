"use client";

import { EmptyBoards } from "../empty/empty-boards";
import { EmptyFav } from "../empty/empty-favorites";
import { EmptySearch } from "../empty/empty-search";

interface BoardListsProps {
    orgId: string,
    query: {
        search?: string,
        favorites?: string,
    }
}

export const BoardLists = ({
    orgId,
    query,
}:BoardListsProps) => {
    const data = [];
    
    if (!data?.length && query.search) {
        return (
            <EmptySearch />
        )
    }
    if (!data?.length && query.favorites) {
        return (
            <EmptyFav />
        )
    }
    if (!data?.length) {
        return (
            <EmptyBoards />
        )
    }
    
    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}