import React from "react";
import { FaPaintBrush, FaCode, FaShippingFast } from "react-icons/fa";
import Image from "next/image";
import image1 from "../public/Asset-11-1.png";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const OurApproach = () => {
  return (
    <section className="container mx-auto my-20 px-6 bg-black text-white flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src={image1}
            alt="3D Mantra"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold bg-clip-text text-center font-montserrat">
            3 <span className="text-purple text-bold">D</span> Mantra
          </h1>
          {/* Design Section */}
          <div className="flex items-center space-x-4 px-4 py-2">
            <FaPaintBrush className="text-red-500 text-5xl lg:text-3xl" />
            <div className="px-5">
              <h2 className="text-2xl font-semibold font-montserrat">
                <span className="text-purple text-bold">D</span>esign
              </h2>
              <p className="text-gray-400">
                Creating visually stunning and intuitive designs that represent
                your brand beautifully.
              </p>
            </div>
          </div>

          {/* Develop Section */}
          <div className="flex items-center space-x-4 px-4 py-2">
            <FaCode className="text-blue-500 text-5xl lg:text-3xl" />
            <div className="px-5">
              <h2 className="text-2xl font-semibold font-montserrat">
                <span className="text-purple text-bold">D</span>evelop
              </h2>
              <p className="text-gray-400">
                Building scalable and robust solutions using the latest
                technologies.
              </p>
            </div>
          </div>

          {/* Deliver Section */}
          <div className="flex items-center space-x-4 px-4 py-2">
            <FaShippingFast className="text-green-500 text-5xl lg:text-3xl" />
            <div className="px-5">
              <h2 className="text-2xl font-semibold font-montserrat">
                <span className="text-purple text-bold">D</span>eliver
              </h2>
              <p className="text-gray-400">
                Ensuring timely delivery with exceptional quality and
                reliability.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link href="/our-process">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300 text-lg flex items-center space-x-2">
                <span>Know More</span>
                <GoArrowUpRight className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
