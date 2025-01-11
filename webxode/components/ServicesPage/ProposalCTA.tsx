"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipWords } from "@/components/ui/FlipWords";
import { FaLocationArrow } from "react-icons/fa6";

const ProposalCTA = () => {
  const words = [
    "innovative",
    "reliable",
    "scalable",
    "cutting-edge",
    "dynamic",
    "exceptional",
    "robust",
    "tailored",
    "user-friendly",
  ];

  return (
    <section className="py-20 min-h-screen flex items-center justify-center relative">
      {/* Background Component */}
      <div className="absolute inset-0 w-full h-full">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="z-10 text-center px-4">
        <div className="text-5xl font-bold leading-tight text-white max-w-3xl mx-auto">
          Build{" "}
          <span className="text-blue-400">
            <FlipWords words={words} />
          </span>
          websites with <br />
          <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer text-center uppercase font-montserrat mt-[1.5rem] mb-[3.5rem] tracking-wider">
            WebXode
          </p>
          <div className="mt-12 flex justify-center">
            <a href="/get-proposal" className="relative inline-block">
              <button className="px-10 py-4 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-pink-600 hover:to-indigo-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center">
                Get Started
                <FaLocationArrow className="ml-3" />{" "}
                {/* This will now appear on the right */}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalCTA;
