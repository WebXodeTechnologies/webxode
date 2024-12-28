import React from "react";
import { BackgroundLines } from "@/components/ui/backgroundLines";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 md:px-6 lg:px-8">
      <h2 className="bg-clip-text text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-Inter py-2 sm:py-4 md:py-6 lg:py-10 relative z-20 font-bold tracking-tight">
        Empowering Innovation, <br /> Driving Digital Excellence.
      </h2>
      <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white text-center px-2 sm:px-4">
        At Webxode Technologies, we deliver cutting-edge software solutions,
        seamless digital experiences, and innovative strategies to elevate your business.
      </p>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </BackgroundLines>
  );
}
