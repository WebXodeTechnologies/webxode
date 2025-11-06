"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Responsive breakpoints
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  // Adjust animation values based on screen size
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [10, 0] : isTablet ? [15, 0] : [20, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.95, 1] : isTablet ? [1, 1.05] : [1.05, 1]
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -30] : isTablet ? [0, -60] : [0, -100]
  );

  return (
    <div ref={containerRef} className="relative lg:p-10 p-4">
      <div className="w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center mb-6"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto 
        w-full border-4 border-[#6C6C6C] 
        p-2 sm:p-4 md:p-6 bg-[#222222] 
        rounded-[30px] shadow-2xl"
    >
      <div className="w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-2 sm:p-4 md:p-6">
        {children}
      </div>
    </motion.div>
  );
};
