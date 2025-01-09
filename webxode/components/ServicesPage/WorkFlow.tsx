import React from 'react'
import Image from "next/image"
import image1 from "@/public/services/scale.svg"
import { datapoints } from "@/data/index" // Import your data

const WorkFlow = () => {
  return (
    <section className='py-20'>
      <div className='flex flex-col justify-center mb-10'>
        <h1 className='text-4xl text-purple text-center mb-2 font-montserrat'>Scalable & Secure Products</h1>
        <p className='text-lg text-white text-center mb-5 text-wrap container max-w-4xl'>
          Leverage our expert team to craft innovative solutions that align with your business goals. We ensure a seamless transition into the digital era, driving growth, scalability, and long-term success
        </p>
      </div>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Grid 1 */}
        <div className='flex justify-center'>
          <Image
            src={image1}
            alt='services'
            width={100}
            height={100}
            className="w-full lg:w-[70%] xl:w-[60%] object-contain"
          />
        </div>

        {/* Grid 2 - Map over datapoints */}
        <div className='flex flex-col justify-center mt-5 md:mt-2'>
          {datapoints.map((point) => (
            <div key={point.id} className='flex items-center mb-5'>
              <div className='mr-4'>
                <Image src={point.icon} alt={point.title} width={60} height={60} unoptimized className='rounded-md' />
              </div>
              <div>
                <h2 className='text-xl text-white font-montserrat'>{point.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkFlow
