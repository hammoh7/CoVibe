"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-gradient-to-r from-indigo-500 to-blue-300 rounded-l-lg">
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-l from-slate-300 to-blue-200 rounded-xl p-2">Search bar</div>
      <div className="ml-auto">
        <UserButton />
      </div>
    </div>
  );
};
