import React from 'react';
import Image from "next/image";
import CompanyImage from "@/public/about/companyprocess.svg";
import { process } from "@/data/index"; // Ensure the data is properly imported

const CompanyProcess = () => {
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-6 xl:px-8'>
        {/* Grid 1 */}
        <div className='flex items-center justify-center'>
          <Image
            src={CompanyImage}
            alt='Company Process'
            width={500}
            height={500}
            className='object-contain w-full h-auto'
            unoptimized
          />
        </div>

        {/* Grid 2 */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-montserrat text-purple mb-5 uppercase tracking-wide text-center md:text-left'>
            Why Choose Us
          </h1>
          <p className='text-center md:text-left text-lg md:text-xl font-normal mb-8'>
            We help you get the best business solutions with professionalism, creativity, and timely delivery.
          </p>

          {/* Map Process Data */}
          <div className='space-y-6'>
            {process.map((item) => (
              <div key={item.id} className='flex items-start space-x-4'>
                {/* Icon */}
                {item.icon && (
                  <div className='w-12 h-12 flex-shrink-0 rounded-md overflow-hidden my-2'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className='object-cover w-full h-full'
                      unoptimized
                    />
                  </div>
                )}
                {/* Title and Description */}
                <div>
                  <h2 className='text-lg md:text-xl font-semibold text-purple font-montserrat'>
                    {item.title}
                  </h2>
                  <p className='text-sm md:text-md text-gray-300'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProcess;
