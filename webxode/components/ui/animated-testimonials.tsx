"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string | StaticImageData;
  image: string | StaticImageData;
  website: string;
  category: string;
  detailedFeedback: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000); // Autoplay every 6 seconds
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="container mx-auto px-2 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Testimonial Text */}
        <div className="flex flex-col justify-between space-y-8">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-purple font-montserrat uppercase tracking-wider">
              {testimonials[active].name}
            </h3>
            <p className="text-sm md:text-md lg:text-xl text-white mt-2">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-md md:text-xl text-gray-700 mt-4 dark:text-neutral-300 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div className="flex items-center mt-4">
              <a
                href={testimonials[active].website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center hover:text-purple"
              >
                Check Out
                <LuSquareArrowOutUpRight className="ml-2" />
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-4 font-outfit">
              <strong>Category:</strong> {testimonials[active].category}
            </p>
            <p className="text-sm text-gray-300 mt-2 font-outfit">
              {testimonials[active].detailedFeedback}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:bg-gray-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:bg-gray-300 dark:hover:bg-neutral-700"
            >
              <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-[250px] md:h-75">
          <AnimatePresence>
            {testimonials.map((testimonial, index) =>
              isActive(index) ? (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotate: 0,
                    zIndex: 999,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 sm:translate-x-4 md:translate-x-8"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    objectFit="cover"
                    width={1150}
                    height={800}
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
