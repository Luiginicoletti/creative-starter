"use client";

import {
  HorizontalScroll,
  HorizontalScrollPanel,
} from "../components/HorizontalScroll";

import NextStep from "../components/NextStep";

export default function HSection() {
  return (
    <main className="size-full overflow-x-hidden">
      <HorizontalScroll name="panel">
        <HorizontalScrollPanel className="bg-red-200">
          red
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-red-300">
          red
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-red-400">
          blue
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-red-500">
          blue
        </HorizontalScrollPanel>
      </HorizontalScroll>
      <NextStep />
      <HorizontalScroll name="teste">
        <HorizontalScrollPanel className="bg-violet-200">
          red
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-violet-300">
          blue
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-violet-400">
          yellow
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-violet-500">
          pink
        </HorizontalScrollPanel>
      </HorizontalScroll>
    </main>
  );
}
