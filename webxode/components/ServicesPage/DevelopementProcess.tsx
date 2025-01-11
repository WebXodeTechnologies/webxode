import React from "react";
import Image from "next/image";
import { Devprocess } from "@/data/index";

const DevelopmentProcess = () => {
  return (
    <section className="py-20 overflow-x-clip">
      {/* Header Section */}
      <div className="flex flex-col justify-center mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-purple tracking-wide mb-5">
          Our Development Process
        </h1>
        <p className="text-xl text-white max-w-4xl  mx-auto">
          We ensure a streamlined, transparent, and client-focused development
          process.
        </p>
        <p className="text-xl text-white max-w-2xl  mx-auto">
          Collaborate with us to transform your ideas into innovative,
          high-quality solutions that meet your unique needs.
        </p>
      </div>
      {/* Process Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto max-w-6xl overflow-hidden">
        {Devprocess.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-20 h-20 mb-4">
              <Image
                src={step.icon}
                alt={step.title}
                width={80}
                height={80}
                className="object-contain rounded-md"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 font-montserrat">
              {step.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
