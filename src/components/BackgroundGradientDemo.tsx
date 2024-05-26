"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientDemo({ children }) {
  return (
    <div>
      <BackgroundGradient className="z-0 rounded-[22px] max-w-sm p-4 sm:p-10 bg-purple-300 dark:bg-zinc-900">
        {children}
      </BackgroundGradient>
    </div>
  );
}
