import React from "react";
import { serviceChoose } from "@/data/index"; // Ensure proper import path
import Image from "next/image";

const WhyChooseus = () => {
  return (
    <section className="py-20">
      {/* Header Section */}
      <div className="container mx-auto flex flex-col">
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-normal text-purple font-montserrat text-center mb-4">
          Why Choose Us?
        </h1>
        <p className="text-xl text-white text-center font-normal">
          Driving business success with smart, scalable, and client-focused digital solutions powered by advanced technologies.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {serviceChoose.map((service) => (
          <div
            key={service.id}
            className="rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="w-16 h-16 object-contain rounded-md"
                unoptimized
              />
            </div>
            {/* Title */}
            <h3 className="text-xl font-normal text-purple mb-2 font-montserrat">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-white text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseus;
