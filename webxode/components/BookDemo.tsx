"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const BookDemo = () => {
  return (
    <section className="w-full  flex items-center justify-center bg-black">
      <div className="w-full mx-auto lg:h-screen rounded-md overflow-hidden">
        <Vortex
          backgroundColor="#000000"
          rangeY={800}
          particleCount={500}
          baseHue={210}
          className="flex items-center flex-col justify-center w-full h-full px-4 md:px-8"
        >
          <h2 className="text-white text-3xl mt-5 sm:text-4xl md:text-6xl font-normal text-center mb-4 sm:mb-6 font-montserrat tracking-wide leading-snug">
            Book a <span className="text-purple tracking-wide">Consultation Now!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl max-w-md sm:max-w-lg md:max-w-xl mt-4 mb-8 text-center text-neutral-200 font-montserrat tracking-wider leading-relaxed">
            Ready to accelerate your business growth? Book a personalized demo
            and unlock tailored strategies that deliver real results.
          </p>
          <div className="flex justify-center items-center py-4">
            <MagicButton
              title="Book Demo"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </Vortex>
      </div>
    </section>
  );
};

export default BookDemo;
