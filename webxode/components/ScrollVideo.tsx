"use client";
import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { ContainerScroll } from "./ui/ContainerScroll";


export function ScrollVideo() {
  // Motion values for animations
  const translate = useMotionValue(0);
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              </span>
            </h1>
          </>
        }
      >
        {/* Motion Video Card */}
        <motion.div style={{ translate, rotate, scale }}>
          <video
            src="/CompanyIntroduction.mp4" 
            className="mx-auto rounded-2xl object-cover h-full w-full"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </motion.div>
      </ContainerScroll>
    </div>
  );
}
