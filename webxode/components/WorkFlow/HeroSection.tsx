import React from "react";
import Image from "next/image";
import Image1 from "@/public/workflow/process.svg";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-5xl font-bold text-purple font-montserrat">
            Your Trusted Partner in World-Class Products
          </h1>
          <p className="text-lg text-white">
            At Webxode, we strive to make life easier and more enjoyable by
            delivering high-quality software solutions. As a leading app and web
            development company, we provide innovative, user-friendly products
            built with cutting-edge technology designed to meet your needs.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={Image1}
            alt="Webxode - Innovative Software Development"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
