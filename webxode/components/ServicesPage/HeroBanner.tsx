import Image from "next/image";
import React from "react";
import Heroimage from "@/public/services/hero.svg";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const HeroBanner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 lg:px-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-snug text-purple">
            Empowering Businesses with Custom Solutions
          </h1>
          <p className="text-base md:text-lg text-white">
            Transforming ideas into robust applications to drive growth and
            scalability for your business. Our expert team delivers tailored
            digital solutions that align with your goals.
          </p>
          <div className="mt-5">
            <MagicButton
              title="Get Proposal"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
        {/* Right Image */}
        <div className="relative">
          <Image
            src={Heroimage}
            alt="Hero Image"
            width={600}
            height={600}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
