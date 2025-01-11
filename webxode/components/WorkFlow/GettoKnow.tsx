import React from "react";

const GettoKnow = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-purple font-montserrat">
            Explore Our Story
          </h1>
        </div>

        {/* Introductory Content */}
        <div className="rounded-lg p-6 md:p-8 mb-10 container mx-auto">
          <p className="text-white text-lg leading-relaxed">
            At
            <span className="font-bold text-purple uppercase ml-2 font-montserrat">
              Webxode
            </span>
            , we understand that trusting a company and investing your resources
            is a big decision. As a startup built on innovation and dedication,
            we’re here to make that decision easier.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            Our journey began with a simple mission to empower businesses with
            smart solutions, creative strategies, and seamless experiences.
            Whether you’re just starting out or looking to scale, we’re ready to
            partner with you to turn ideas into impactful results.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            Let’s build something extraordinary together—products that drive
            growth, inspire trust, and make a difference.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Story Text */}
          <div className="p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl text-purple mb-4 text-center font-montserrat">
              Story of
              <span className="uppercase text-purple font-montserrat tracking-wider ml-2">Webxode</span>
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Webxode Technologies, founded by Akash S M, is a dynamic startup
              dedicated to delivering exceptional experiences for clients
              looking to establish and grow their businesses. Our mission is to
              provide top-notch, end-to-end services that strengthen your
              business, enhance scalability, and drive revenue growth.
            </p>
            <p className="text-white text-lg leading-relaxed mt-4">
              At Webxode, we emphasize transparency and collaboration at every step. We work with you to create a scalable, successful business model aligned with your goals. From initial planning to final execution, our approach ensures a smooth, rewarding, and impactful journey for our clients.
            </p>
          </div>

          {/* Placeholder for Video */}
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-6 aspect-video">
            <p className="text-gray-600 text-lg italic">
              Company video or related media can go here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettoKnow;
