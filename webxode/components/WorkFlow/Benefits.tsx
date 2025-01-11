import React from "react";
import { Assistance } from "@/data/index";
import Image from "next/image";

const Benifits = () => {
  return (
    <section className="py-20">
      <div className="flex justify-center flex-col gap-4 mb-5">
        <h1 className="text-4xl font-montserrat text-purple tracking-wide text-center">
          How We Assist
        </h1>
      </div>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Assistance.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            {benefit.icon && (
              <div className="mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={70}
                  height={70}
                  className="w-20 h-20"
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-800 font-montserrat mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benifits;
