"use client";
import React, { useEffect, useRef } from "react";
import { TechstackLogos } from "@/data/index";
import Image from "next/image";

const TechStack = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    let animationFrame: number;

    const scrollSlider = () => {
      if (!slider) return;
      scrollAmount += 1; // Adjust scroll speed
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reset to create infinite effect
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
      animationFrame = requestAnimationFrame(scrollSlider);
    };

    animationFrame = requestAnimationFrame(scrollSlider);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
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
              className="flex-shrink-0 flex justify-center items-center w-[120px] h-[120px] bg-white rounded-full shadow-md"
            >
              <Image
                src={logo.src}
                alt={logo.alt || "Tech Logo"}
                width={200}
                height={200}
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
