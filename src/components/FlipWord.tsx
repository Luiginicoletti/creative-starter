import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWord() {
  const words = ["Future", "Creative", "Devhat"];

  return (
    <div className="text-8xl text-white font-extrabold mt-10 dark:text-violet-500">
      Welcome to <br /> the <FlipWords words={words} />
    </div>
  );
}
