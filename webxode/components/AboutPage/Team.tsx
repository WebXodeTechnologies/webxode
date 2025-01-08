"use client";
import React from "react";
import Image from "next/image";
import Image1 from "@/public/about/EP3340.jpeg";
import Image2 from "@/public/about/snajeev.png";
import { BackgroundGradient } from "../../components/ui/BackgroundGradient";
import linkedinicon from "@/public/about/linkedin.svg";
import githubicon from "@/public/about/github.svg";
import websiteicon from "@/public/about/webiste.svg";
import Instagram from "@/public/about/instagram-svgrepo-com.svg"

const teamMembers = [
  {
    name: "Akash S M",
    role: "Founder & Full Stack Developer",
    image: Image1,
    description:
      "Akash is an expert in building scalable applications with MERN stack. He specializes in both front-end and back-end development, ensuring seamless user experiences.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akashsm",
        icon: linkedinicon,
      },
      {
        name: "GitHub",
        url: "https://github.com/akashsm",
        icon: githubicon,
      },
      {
        name: "Website",
        url: "https://akashsm.dev",
        icon: websiteicon,
      },
      {
        name: "Instagram",
        url: "https://akashsm.dev",
        icon: Instagram,
      },
    ],
  },
  {
    name: "Sanjeev N",
    role: "UI/UX Designer",
    image: Image2,
    description:
      "Snajeev is passionate about creating intuitive and user-friendly designs. He focuses on crafting visually stunning interfaces that deliver an exceptional user experience.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/snajeevr",
        icon: linkedinicon,
      },
      {
        name: "GitHub",
        url: "https://github.com/snajeevr",
        icon: githubicon,
      },
      {
        name: "Website",
        url: "https://snajeevr.com",
        icon: websiteicon,
      },
      {
        name: "Instagram",
        url: "https://akashsm.dev",
        icon: Instagram,
      },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col justify-center items-center mb-20">
        <h1 className="text-purple text-3xl md:text-4xl font-montserrat tracking-wider uppercase">
          Meet our Team
        </h1>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-10 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={member.image}
                alt={member.name}
                height="300"
                width="300"
                className="object-cover rounded-md mx-auto"
              />
              <p className="text-xl sm:text-2xl  mt-4 mb-2 text-purple font-semibold font-montserrat text-center">
                {member.name}
              </p>
              <p className="text-sm text-white  text-center mb-4">
                {member.role}
              </p>
              <p className="text-sm text-white">{member.description}</p>
              <div className="flex justify-center space-x-4 mt-5">
                {member.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-white"
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      height="20"
                      width="20"
                      className="object-contain transition duration-300"
                    />
                  </a>
                ))}
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
