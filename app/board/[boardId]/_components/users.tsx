"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_USERS = 2;

export const Users = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_USERS;
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "P"}
              borderColor={connectionIdToColor(connectionId)}
            />
          );
        })}

        {currentUser && (
            <UserAvatar 
              src={currentUser.info?.picture}
              name={`${currentUser.info?.name} (You)`}
              fallback={currentUser.info?.name?.[0]}
              borderColor={connectionIdToColor(currentUser.connectionId)}
            />
        )}
        {hasMoreUsers && (
            <UserAvatar 
              name={`${users.length - MAX_USERS} more`}
              fallback={`+${users.length - MAX_USERS}`}
            />
        )}
      </div>
    </div>
  );
};

export const UsersSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
