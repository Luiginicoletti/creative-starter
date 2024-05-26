import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { FlipWord } from "../components/FlipWord";

import { BackgroundGradient } from "../components/ui/background-gradient";
import { Cylinder } from "@react-three/drei";

const Welcome = () => (
  <div className="h-[100vh] w-[100vw]">
    <BackgroundGradientAnimation>
      <div className="pt-20 flex h-screen justify-evenly -mb-[180px]">
        <div className="text-white self-center">
          <BackgroundGradient className=" rounded-[22px] max-w-lg p-4 sm:p-10 bg-cyan-400 dark:bg-zinc-900">
            testando waduhawd
          </BackgroundGradient>
        </div>
        <div>
          <FlipWord />
        </div>
        <div className="text-white self-center">
          <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-purple-300 dark:bg-zinc-900">
            <Cylinder />
          </BackgroundGradient>
        </div>
      </div>
    </BackgroundGradientAnimation>
  </div>
);

export default Welcome;
