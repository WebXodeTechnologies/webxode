"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  FaDesktop,
  FaRegHandshake,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      title: "Web Design",
      description:
        "Creative and responsive web design that suits your brand's identity.",
      icon: <FaDesktop />,
    },
    {
      title: "Custom Web & App Development",
      description:
        "Tailored web and app solutions with the latest technologies.",
      icon: <FaMobileScreenButton />,
    },
    {
      title: "Digital Marketing Services",
      description:
        "Boost your online presence with targeted marketing strategies.",
      icon: <MdHomeRepairService />,
    },
    {
      title: "UI/UX Design Services",
      description:
        "Enhance user engagement with intuitive and aesthetic UI/UX designs.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Business Consulting",
      description:
        "Professional consulting services to help your business scale and grow.",
      icon: <FaRegHandshake />,
    },
    {
      title: "E-commerce Application Development",
      description:
        "Custom e-commerce solutions for seamless shopping experiences.",
      icon: <BsFillCartCheckFill />,
    },
    {
      title: "Real-time Applications",
      description:
        "Develop real-time applications with WebSockets and Node.js.",
      icon: <FaAppStoreIos />,
    },
    {
      title: "Deployment & Hosting",
      description:
        "Deploy and host your web applications on reliable platforms.",
      icon: <FaCloud />,
    },
  ];

  return (
    <div id="services">
      <div className="container mx-auto my-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-center text-gradient mb-5 tracking-wider font-outfit animate-fade-in">
          Your Vision,
          <span className="block sm:inline text-purple font-montserrat font-normal">
            Our Expertise
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="flex justify-center items-center mb-4 relative z-10 text-neutral-600 dark:text-neutral-400">
        {/* Increased icon size */}
        <div className="text-5xl">{icon}</div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Services;
