import Image from "next/image";
import React from "react";
import Image1 from "@/public/macbook mockup.png";

const DigitalBanner = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col justify-center items-center px-4 md:px-8 py-1 text-center">
        {/* Heading */}
        <div className="container mx-auto mb-10 max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-normal text-purple font-montserrat mb-4">
            Unlock Growth with Powerful Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-6">
            We specialize in delivering custom solutions for web development,
            e-commerce platforms, CRM systems, admin dashboards, and SaaS
            applications—empowering your business to thrive in the digital era.
          </p>
        </div>
        {/* Image */}
        <div className="container mx-auto">
          <Image
            src={Image1}
            alt="Mockup"
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalBanner;
