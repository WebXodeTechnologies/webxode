"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <section className="py-20">
      <div className="container">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-bold uppercase tracking-wide font-montserrat mb-20 text-white">
          Our <span className="text-purple">Recent Projects</span>
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-20 place-items-center">
          {projects.map((item) => (
            <div
              key={item.id}
              className="relative w-full max-w-md h-full flex items-center justify-center"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className=" rounded-2xl overflow-hidden shadow-xl border border-gray-700 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative w-80 h-60 md:w-100 lg:w-[400px] xl:w-[450px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-6 flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base line-clamp-2 mb-4">
                        {item.des}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto">
                      {/* Icons */}
                      <div className="flex -space-x-2">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 rounded-full border border-white/20 bg-[#1b1b1b] flex items-center justify-center"
                          >
                            <Image
                              src={icon}
                              alt={`tech-${index}`}
                              width={32}
                              height={32}
                              className="p-1 object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition duration-200"
                        >
                           Live
                          <FaLocationArrow className="ml-2 text-xs" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
