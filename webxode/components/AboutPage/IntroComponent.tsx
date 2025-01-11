import React from "react";
import Image from "next/image";
import Test from "@/public/about/test1.svg";

const IntroComponent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 p-6 rounded-lg shadow-lg">
        {/* Grid 1 */}
        <div className="flex justify-center items-center px-4 py-2">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4 font-montserrat">
              <span className="text-purple">Empowering Clients </span> to Thrive
              and Lead in Their Industry
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white">
              At WebXode, we're dedicated to delivering innovative solutions
              that not only elevate our clients' success but ensure their
              sustained growth, positioning them as leaders in their industry.
              We combine creative strategies with a customer-centric approach to
              drive impactful results.
            </p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="flex justify-center items-center">
          <Image
            src={Test}
            alt="test"
            width={400}
            height={400}
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroComponent;
