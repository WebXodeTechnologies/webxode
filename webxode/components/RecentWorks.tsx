import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import Logo1 from "@/public/mirrorlogo.jpg";
import Logo2 from "@/public/weartrenzlogo.png";
import mockup1 from "@/public/pr45.png";
import mockup2 from "@/public/pro2.png";

const RecentWorks = () => {
  const testimonials = [
    {
      quote:
        "Weartrendz transformed the way I shop! Their latest collection is just amazing.",
      name: "Weartrenz",
      image: Logo2,
      designation: "Apparel E-commerce",
      src: mockup1,
      website: "https://apparel-e-commerce.vercel.app/",
      category: "Fashion & Retail",
      detailedFeedback:
        "We were struggling to find a partner who could align with our vision. Weartrendz provided not only a unique shopping platform but also insights into customer preferences, enhancing our brand reach significantly.",
    },
    {
      quote: "Get inked in Mirror - A very creative Artist",
      name: "Mirror Tattoo Studio",
      image: Logo1,
      designation: "Tattoo Design",
      src: mockup2,
      website: "https://mirror-final.vercel.app/",
      category: "Creative Arts",
      detailedFeedback:
        "Mirror Tattoo Studio received an extraordinary boost in engagement after collaborating. The design aesthetics and usability exceeded our expectations. It has been a transformative experience.",
    },
  ];

  return (
    <section className="my-10 container max-w-7xl">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-montserrat uppercase tracking-wider">
          Our Recent{" "}
          <span className="text-2xl md:text-5xl text-purple">Works</span>{" "}
        </h1>
      </div>
      <div className="lg:py-5">
        {/* Left Side - Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default RecentWorks;
