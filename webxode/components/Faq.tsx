'use client'
import React, { useState } from 'react';
import { FAQ } from "@/data/index"; // Your FAQ data

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open clicked accordion
    }
  };

  return (
    <section className='py-20'>
      <div className='flex justify-center items-center mb-10'>
        <h1 className='text-center text-3xl font-montserrat tracking-wide uppercase text-white'>
          Frequently <span className='text-purple tracking-wide'>Asked Questions</span> 
        </h1>
      </div>

      {/* Accordion Section */}
      <div className='w-[80%] mx-auto'>
        <div className='space-y-4'>
          {FAQ.map((faq, index) => (
            <div key={index} className='border-b border-gray-300'>
              <div
                className='flex items-center justify-between py-5 cursor-pointer hover:text-purple transition-all duration-300 ease-in-out'
                onClick={() => toggleAccordion(index)}
              >
                <h3 className='text-lg font-semibold text-white-100 font-outfit tracking-normal'>{faq.question}</h3>
                <span
                  className={`transition-transform transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-purple"
                  >
                    <path
                      d="M12.293 4.293a1 1 0 0 0-1.414 0L8 7.586 4.121 4.707a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"
                    />
                  </svg>
                </span>
              </div>

              {activeIndex === index && (
                <div className='pb-5 text-neutral-400 font-outfit tracking-normal'>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
