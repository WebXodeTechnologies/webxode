"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const firstScroll = useRef(null);
  const secondScroll = useRef(null);
  const thirdScroll = useRef(null);
  const macbook = useRef(null);
  const ctaText = useRef(null);
  const vidLeft = useRef(null);
  const vidRight = useRef(null);

  useEffect(() => {
    const spans = firstScroll.current.querySelectorAll("span");
    let ctx = gsap.context(() => {
      const t = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-400 top",
          end: "top top",
          scrub: 0.5,
        },
      });
      t.from([spans[0], spans[1]], {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        ease: "none",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000 top",
          pin: true,
          scrub: 0.5,
        },
      });

      tl.from([spans[2], spans[3]], {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        ease: "none",
      })
        .to(firstScroll.current, {
          scale: 1.5,
          duration: 1,
        })
        .to(secondScroll.current, {
          opacity: 1,
          duration: 1,
          delay: -0.6,
        })
        .from(".h___2", {
          scale: 1.8,
          opacity: 0,
          duration: 2,
        })
        .from(macbook.current, {
          scale: 1.5,
          duration: 2,
          opacity: 0,
        })
        .to(".h___2", {
          opacity: 0,
          duration: 0.5,
        })
        .to(macbook.current, {
          scale: 2,
          duration: 1,
          delay: 0.5,
          opacity: 0,
        })
        .from(thirdScroll.current, {
          opacity: 0,
          duration: 1,
          delay: 0,
        })
        .to(vidLeft.current, {
          xPercent: -60,
          duration: 2,
          delay: 1,
          ease: "power1.inOut",
        })
        .to(vidRight.current, {
          xPercent: 60,
          ease: "power1.inOut",
          duration: 2,
          delay: -2,
        })
        .from(ctaText.current, {
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "none",
          delay: -2,
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-screen h-screen mt-[5vw] bg-black"
    >
      <div className="w-full h-full overflow-hidden relative">
        {/* First Scroll Section */}
        <div
          ref={firstScroll}
          className="h-full flex items-center justify-center absolute w-full"
        >
          <h2 className="text-[6.5vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4.5vw] 3xl:text-[4vw] text-white font-heading font-medium text-center">
            <span>Empowering </span>
            <span>Digital </span>
            <span>Experiences</span>
          </h2>
        </div>

        {/* Second Scroll Section */}
        <div
          ref={secondScroll}
          className="bg-black opacity-0 w-full h-full z-[1] absolute flex items-center justify-center"
        >
          <h2 className="text-[5vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[5vw] xl:text-[4.5vw] 2xl:text-[4vw] 3xl:text-[3.8vw] h___2 font-medium text-white font-heading text-center">
            Redefining the Future of Web
          </h2>
          <div ref={macbook} className="absolute w-[60%] z-[-1]">
            <Image
              src="/macbook1.png"
              priority={false}
              alt="macbook-pro"
              width={1152}
              height={800}
              className="w-full"
            />
          </div>
        </div>

        {/* Third Scroll Section */}
        <div
          ref={thirdScroll}
          className="bg-black w-full h-full absolute top-0 left-0 z-[2]"
        >
          <div className="flex items-center justify-center h-full w-full relative">
            <div
              ref={ctaText}
              className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] text-center text-white"
            >
              <p className="font-medium text-[3.5vw] sm:text-[5vw] md:text-[4vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.6vw] leading-[1.4] mb-[1.5vw] text-center tracking-wider font-inter">
                At
                <span className="text-purple font-montserrat"> WEBXODE </span>
                we craft seamless, impactful solutions that empower businesses
                to achieve new heights. Let us transform your vision into
                reality. 🚀
              </p>
              <Link
                href="/get-started"
                className="en-cta text-[3.5vw] sm:text-[5vw] md:text-[6vw] lg:text-[1.8vw] xl:text-[1.6vw] 2xl:text-[1.4vw] font-heading"
              >
                <span className="relative cta-span">Let's Connect</span>
                <span className="cta-emoji ml-2 inline-block">🤝</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
