import React from 'react'
import Image from "next/image"
import { promise } from "@/data/index"

const Promise = () => {

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-center mb-5">
          <h1 className="text-center text-4xl font-montserrat tracking-wide text-purple">
            What We Promise, We Deliver
          </h1>
        </div>

        <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map through promise array */}
          {promise.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-6 rounded-lg max-w-xs mx-auto shadow-lg transition-transform transform hover:scale-105"
            >
              {item.icon && (
                <div className="mb-4">
                  <Image src={item.icon} alt={item.title} width={64} height={64} />
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promise
