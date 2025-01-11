import React from 'react'
import Image from "next/image"
import Image1 from '@/public/workflow/process.svg'

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Grid 1 */}
        <div className="flex flex-col gap-4 mb-5">
          {/* SEO-Optimized Heading */}
          <h1 className="text-5xl font-bold text-purple font-montserrat">
            Your Trusted Partner in World-Class Products
          </h1>
          {/* SEO-Optimized Description */}
          <p className="text-lg text-white">
            At Webxode, we strive to make life easier and more enjoyable by delivering high-quality software solutions. As a leading app and web development company, we provide innovative, user-friendly products built with cutting-edge technology designed to meet your needs.
          </p>
        </div>

        {/* Grid 2 (Optional: Image for SEO) */}
        <div className="flex justify-center items-center">
          <Image
            src={Image1}
            alt="Webxode - Innovative Software Development"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
