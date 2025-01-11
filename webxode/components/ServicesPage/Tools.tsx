import React from "react";
import Image from "next/image";
import { techtools } from "@/data/index";

const Tools = () => {
  return (
    <section className="py-20">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-6 text-center mb-10">
        <h1 className="text-4xl font-bold font-montserrat text-purple tracking-wide">
          Tools And Technologies
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
          Our passion for technology drives our relentless pursuit of
          innovation. We explore cutting-edge tools and embrace the latest
          trends to deliver impactful solutions.
        </p>
      </div>

      {/* Tools Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 container mx-auto max-w-6xl">
        {techtools.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-white border-b border-r border-l border-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold mb-6 text-purple font-montserrat">
              {category.title}
            </h2>
            <ul className="space-y-4">
              {category.tools.map((tool, index) => (
                <li key={index} className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 object-contain">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      layout="fill"
                      className="rounded-lg bg-white p-2"
                      unoptimized
                    />
                  </div>
                  <span className="text-lg text-gray-300 font-medium font-montserrat">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
