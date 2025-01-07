'use client'
import React from 'react';
import test from "@/public/about/test5.svg";
import Image from "next/image";


const Mission = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 items-center">
          {/* Grid 1: Image */}
          <div className="flex justify-center items-center">
            <Image
              src={test}
              alt="Company illustration"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>

          {/* Grid 2: Content */}
          <div className="space-y-4">
            {/* Who We Are Section */}
            <div>
              <h2 className="text-3xl font-semibold text-purple-500 mb-2 font-montserrat text-purple">
                A Place Where Ideas Grow
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                At Webxode Solutions, we transform ideas into impactful digital solutions, empowering businesses with innovation, collaboration, and tailored strategies for success in the digital era.
              </p>
            </div>

            {/* Vision Section */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                "To become the most trusted partner for businesses worldwide by delivering
                innovative, scalable, and impactful technology solutions that drive digital
                transformation and sustainable growth."
              </p>
            </div>

            {/* Mission Section */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                "Our mission is to empower businesses by providing cutting-edge web and
                mobile solutions, engaging UI/UX design, and result-oriented digital
                marketing services. We strive to deliver tailored, high-quality, and
                innovative solutions that align with our clients’ goals, fostering
                long-term partnerships and measurable success."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
