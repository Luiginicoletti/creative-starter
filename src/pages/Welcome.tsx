import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { FlipWord } from "../components/FlipWord";

import { BackgroundGradient } from "../components/ui/background-gradient";
import SimpleObject from "../models/SimpleObject";

const Welcome = () => (
  <div className="h-[100vh] w-[100vw]">
    <BackgroundGradientAnimation>
      <div className="pt-20 flex h-screen justify-evenly -mb-[180px]">
        <div className="text-white mt-40 self-center"></div>
        <div>
          <FlipWord />
        </div>
        <div className="text-white w-1/3 mt-40 self-center">
          <BackgroundGradient className="w-full h-[600px] rounded-[22px] overflow-hidden  bg-purple-300 dark:bg-zinc-900">
            <SimpleObject />
          </BackgroundGradient>
        </div>
      </div>
    </BackgroundGradientAnimation>
  </div>
);

export default Welcome;
