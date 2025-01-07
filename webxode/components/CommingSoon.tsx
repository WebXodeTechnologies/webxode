import React from "react";
import Image from "next/image";
import ComingSoonImage from "@/public/comingsoon.svg";

const ComingSoon = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center px-4 sm:px-8 lg:px-16">
        <div className="relative">
          <Image
            src={ComingSoonImage}
            width={300}
            height={300}
            alt="Coming Soon"
            className="mx-auto animate-bounce w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72"
          />
        </div>
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-pulse font-montserrat">
         Launching Soon!
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/80 font-medium">
          We’re working hard to launch this page. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
