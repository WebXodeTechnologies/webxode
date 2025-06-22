import React from "react";
import { Briefcase, XCircle } from "lucide-react";

export const metadata = {
  title:
    "Careers at Webxode | Join Our Innovative Tech Team and Improve Your Skills with Trained Professionals",
  description:
    "Explore exciting career opportunities at Webxode. We're hiring developers, designers, and thinkers who are passionate about building modern web experiences.",
};

const roles = [
  "Full Stack Web Developer",
  "SEO Analyst",
  "PHP & Python Developer",
  "React Native & Flutter App Developer",
  "Shopify Expert",
  "No-Code Specialist (WordPress & Elementor)",
  "Digital Marketing Specialist",
  "Video Marketing Specialist",
  "Social Media Marketing Strategist",
  "UI/UX Designer",
  "Technical Project Manager",
  "eCommerce Solutions Architect",
  "Content Strategist",
  "AI Integration Developer",
  "Custom Web App Developer",
];

const page = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 text-white font-montserrat">
      <section className="text-center mb-15">
        <h1 className="text-5xl font-bold uppercase tracking-wider mb-10">
          Careers at Webxode
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Join a team that values innovation, creativity, and growth. Though we
          currently have no open roles, here’s a list of key positions we hire
          for regularly.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-500" size={24} />
              <h2 className="text-xl font-semibold">{role}</h2>
            </div>
            <div className="flex items-center mt-4 text-sm text-red-500 font-semibold">
              <XCircle className="w-5 h-5 mr-2" />
              Requirement Closed
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-100 text-md tracking-wide">
        Interested in working with us in the future? Reach out at{" "}
        <a
          href="mailto:webxodetechnologies@gmail.com"
          className="text-blue-400 underline"
        >
          webxodetechnologies@gmail.com
        </a>
      </div>
    </main>
  );
};

export default page;
