"use client";

import React from "react";
import { ClientWords } from "@/data/index";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Testimonial = () => {
  const testimonials = ClientWords.map((client) => ({
    quote: client.feedback,
    name: client.name,
    title: `${client.designation} at ${client.company}`,
  }));

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-3xl text-center font-montserrat uppercase tracking-wide">
          Word of <span className="text-purple tracking-wide">Mouth</span>
        </h1>
      </div>

      {/* Testimonials */}
      <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.01] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
      <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.01] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
      <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.01] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
};

export default Testimonial;
