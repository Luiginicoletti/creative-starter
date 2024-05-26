import React from "react";

import { FloatNav } from "./FloatNav";

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-10 backdrop-filter firefox:bg-opacity-90 border-b border-violet-400/10 backdrop-blur-lg">
      <div className="px-10 h-20 flex items-center justify-between">
        <div className="">
          <span className="text-2xl text-gray-900 font-semibold">Logo</span>
          <FloatNav />
        </div>
      </div>
    </nav>
  );
}
