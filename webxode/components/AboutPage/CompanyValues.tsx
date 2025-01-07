"use client";
import React, { useState, useEffect, useRef } from "react";
import { Values } from "@/data/index";
import Image from "next/image";

const CompanyValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = Values.length;
  const cardsToShow = 3;
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalCards]);

  const renderCards = () => {
    return Values.map((value, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 px-4"
        style={{
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="p-6 text-white rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={value.icon}
              alt={value.title}
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">{value.title}</h3>
          <p className="text-sm text-center">{value.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">
        <h2 className="text-3xl font-semibold text-center text-purple font-montserrat tracking-wide uppercase mb-4">
          Our Core Values
        </h2>
        <p className="container mx-auto text-wrap text-center text-xl text-white mb-12 px-8 sm:px-8">
          Our core values drive our work and inspire us to continuously <br />{" "}
          deliver cutting-edge solutions to meet your business needs.
        </p>
        <div className="relative overflow-hidden">
          {/* Carousel Wrapper */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex % (totalCards - cardsToShow + 1)) *
                (100 / cardsToShow)
              }%)`, 
            }}
          >
            {renderCards()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
