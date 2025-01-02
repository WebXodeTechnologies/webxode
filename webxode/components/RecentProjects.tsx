"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 max-w-7xl mx-auto">
      <h1 className="heading uppercase font-montserrat tracking-wide z-10 relative text-center mb-5">
        Our <span className="text-purple">recent projects</span>
      </h1>
      {/* Project Cards */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] space-y-6 bg-black/80 rounded-xl p-4"
          >
            <PinContainer title="" href="">
              {/* Image Section */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 mt-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-7 mb-3 w-full flex-wrap gap-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition duration-200"
                >
                  Check Live Site
                  <FaLocationArrow className="ml-2" />
                </a>
                <a
                  href={item.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition duration-200"
                >
                  Case Study
                  <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
