"use client";

import { RenameModal } from "@/components/modals/modal-rename";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
          <RenameModal />
        </>
    )
}