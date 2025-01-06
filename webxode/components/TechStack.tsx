"use client";
import React, { useEffect, useRef } from "react";
import { TechstackLogos } from "@/data/index";


const TechStack = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollSlider = () => {
      if (!slider) return;
      scrollAmount += 1; // Adjust scroll speed
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reset to create infinite effect
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    };

    const interval = setInterval(scrollSlider, 20); // Adjust interval for smoother scrolling

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      {/* Section Header */}

      <div className="flex justify-center items-center">
        <h1 className="text-center font-montserrat uppercase tracking-wider text-3xl md:text-4xl lg:text-4xl">
          Our Trusted
          <span className="text-purple tracking-wide"> Tech Stack </span>
        </h1>
      </div>

      {/* Infinite Slider */}
      <div className="relative mt-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex items-center gap-20"
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Duplicate logos for infinite effect */}
          {[...TechstackLogos, ...TechstackLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center w-[100px] h-[100px] bg-white rounded-full shadow-md"
              style={{
                width: "120px", // Uniform size
                height: "120px",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt || "Tech Logo"}
                className="object-contain max-h-[70%] max-w-[70%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
