'use client'
import React from 'react';
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
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";

const DigitalServices = () => {
  const features = [
    {
      title: "Web Design",
      description:
        "Creative and responsive web design that suits your brand's identity.",
      icon: <FaDesktop />,
      link: "/web-design",
    },
    {
      title: "Mobile App Developement",
      description:
        "Tailored web and app solutions with the latest technologies for IOS and Android",
      icon: <FaMobileScreenButton />,
      link: "/mobile-app development",
    },
    {
      title: "Digital Marketing Services",
      description:
        "Boost your online presence with targeted marketing and more options for Growth",
      icon: <MdHomeRepairService />,
      link: "/digital-marketing",
    },
    {
      title: "UI/UX Design Services",
      description:
        "Enhance user engagement with intuitive and aesthetic UI/UX designs.",
      icon: <FaPaintBrush />,
      link: "/ui-ux-design",
    },
    {
      title: "Business Consulting",
      description:
        "Professional consulting services to help your business scale and grow.",
      icon: <FaRegHandshake />,
      link: "/business-consulting",
    },
    {
      title: "E-commerce Application",
      description:
        "Custom e-commerce solutions for seamless shopping experiences.",
      icon: <BsFillCartCheckFill />,
      link: "/ecommerce",
    },
    {
      title: "Real-time Applications",
      description:
        "Develop real-time applications with WebSockets and Node.js.",
      icon: <FaAppStoreIos />,
      link: "/real-time-apps",
    },
    {
      title: "Deployment & Hosting",
      description:
        "Deploy and host your web applications on reliable platforms.",
      icon: <FaCloud />,
      link: "/deployment-hosting",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col items-center text-center px-4 mb-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-normal text-purple font-montserrat tracking-wide mb-5 ">
          Digital Solutions That Drive Business Growth
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl lg:text-xl text-white max-w-4xl text-wrap px-2">
          We deliver high-performance, secure, and scalable digital solutions to help businesses thrive. From web and mobile apps to UI/UX design, E-Commerce, business consulting, and digital marketing, we leverage cutting-edge tools and technologies to meet your unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  const router = useRouter();

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
      <div className="flex justify-center items-start mb-10 relative z-10 text-neutral-600 dark:text-neutral-400">
        <div className="text-5xl">{icon}</div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 ">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300  relative z-10 px-10">
        {description}
      </p>
      <button
        className="mt-5 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-blue-600 hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2"
        onClick={() => router.push(link)}
      >
        <span>Learn More</span>
        <GoArrowUpRight className="text-xl" />
      </button>
    </div>
  );
};

export default DigitalServices;
