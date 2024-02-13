"use client";

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs";
import { SearchInput } from "./search_input";
import { Invite } from "./invite";

export const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5 bg-gradient-to-r from-indigo-500 to-blue-300 rounded-l-lg">
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-r from-slate-300 to-blue-100 rounded-xl p-2">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "370px"
              },
              organizationSwitcherTrigger: {
                padding: "3px",
                width: "100%",
                justifyContent: "space-between",
              },
            },
          }}
        />
      </div>
      {organization && (
        <Invite />
      )}
      <UserButton />
    </div>
  );
};
