import React, { useRef, useEffect } from "react";
import { FloatNav } from "./FloatNav";
import { Canvas } from "@react-three/fiber";
import Devhat from "../models/Devhat";
import gsap from "gsap";

export function Navbar() {
  const canvasRef = useRef();

  useEffect(() => {
    gsap.to(canvasRef.current, {
      width: "200px",
      height: "120px",
      top: "4px",
      left: "30px",
      duration: 20,
      ease: "power2.inOut",
      onUpdate: () => {
        const scaleFactor = canvasRef.current.offsetWidth / window.innerWidth;
        const hatElement = canvasRef.current.querySelector(".devhat");
        if (hatElement) {
          gsap.set(hatElement, {
            scale: scaleFactor * 20,
          });
        }
      },
    });
  }, []);

  return (
    <>
      <nav className="fixed w-full top-0 z-10 backdrop-filter firefox:bg-opacity-90 border-b border-violet-400/10 backdrop-blur-lg">
        <div className="px-10 h-20 flex items-center justify-between">
          <div className="w-full h-screen relative">
            <span className="text-2xl text-gray-900 font-semibold">
              <div
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-screen"
                style={{ overflow: "hidden" }}
              >
                <Canvas className="">
                  <ambientLight />
                  <Devhat className="devhat" position={[0, 1.7, 0]} />
                </Canvas>
              </div>
            </span>
            <FloatNav />
          </div>
        </div>
      </nav>
    </>
  );
}
