"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/main/empty-org";
import { BoardLists } from "./_components/boards/board-list";

interface DashboardProps {
    searchParams: {
        search?: string,
        favorites?: string,
    }
}

const Dashboard = ({
    searchParams,
}: DashboardProps) => {
    const { organization } = useOrganization();
    return ( 
        <div className="flex-1 h-[calc(100%-98px)] p-6">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <BoardLists 
                  orgId={organization.id}
                  query={searchParams}
                />
            )}
        </div>
     );
}
 
export default Dashboard;