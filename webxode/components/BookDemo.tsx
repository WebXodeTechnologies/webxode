"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { FaLocationArrow } from "react-icons/fa6";

const BookDemo = () => {
  return (
    <section className="py-20">
      <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
        <Vortex
          backgroundColor="#000000"
          rangeY={800}
          particleCount={500}
          baseHue={210}
          className="flex items-center flex-col justify-center  w-full h-full"
        >
          <h2 className="text-white text-3xl md:text-6xl font-normal text-center mb-6 font-montserrat tracking-wide">
            Book a <span className="text-purple tracking-wide"> Consultation Now! </span> 
          </h2>
          <p className="text-lg md:text-2xl max-w-xl mt-6 mb-10 text-center text-neutral-200 font-outfit tracking-wider">
            Ready to accelerate your business growth? Book a personalized demo
            and unlock tailored strategies that deliver real results.
          </p>
          <div className="flex justify-center items-center py-5 mb-5">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg transform hover:scale-105 flex items-center">
              Book Your Demo
              <FaLocationArrow className="ml-2" />
            </button>
          </div>
        </Vortex>
      </div>
    </section>
  );
};

export default BookDemo;
