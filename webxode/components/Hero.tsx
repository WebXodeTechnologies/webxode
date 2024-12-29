import React from "react";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/backgroundLines";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center py-10">
      {/* Content with Background Lines */}
      <BackgroundLines className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-Inter py-2 sm:py-4 md:py-6 lg:py-10 font-bold tracking-tight">
          Empowering Innovation, <br />
          Driving <span className="text-purple ml-1">Digital Excellence.</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white px-2 sm:px-4">
          At Webxode Technologies, we deliver cutting-edge software solutions,
          seamless digital experiences, and innovative strategies to elevate
          your business.
        </p>
        <div className="mt-6">
          <Link href="/get-started">
            <MagicButton
              title="Get Started"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </BackgroundLines>
    </main>
  );
}
