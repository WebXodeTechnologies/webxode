import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import PaymentImage from "@/public/how-we-do-video/payment.svg";
import Image from "next/image";

const Payment = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Grid 1 */}
        <div className="flex flex-col gap-4 mb-5 mt-5">
          <h1 className="text-3xl font-montserrat font-semibold text-left tracking-wide text-purple">
            Flexible Payments
          </h1>
          <p className="text-lg font-montserrat text-left text-white">
            Webxode offers flexible payment options across stages, ensuring
            clarity and satisfaction
          </p>
          <ul className="list-disc pl-3 text-lg font-montserrat text-white space-y-3 leading-relaxed">
            <li>
              <strong className="text-purple">Design Approval:</strong>
              <span className="text-green-500 ml-2">20% </span>Design
              Documentation Completion
            </li>
            <li>
              <strong className="text-purple">Frontend Completion:</strong>
              <span className="text-green-500 ml-2">20%</span>Demo Completion of
              Frontend.
            </li>
            <li>
              <strong className="text-purple">Backend & Deployment:</strong>
              <span className="text-green-500 ml-2">40%</span>Backend &
              Deployment Completion.
            </li>
            <li>
              <strong className="text-purple">Final Closure:</strong>
              <span className="text-green-500 ml-2">20%</span>Project Final
              Approval.
            </li>
          </ul>
          <div className="flex mt-5">
            <a href="/terms-and-conditions" className="relative inline-block">
              <button className="px-10 py-4 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-pink-600 hover:to-indigo-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center">
                Terms And Conditons
                <FaLocationArrow className="ml-3" />
              </button>
            </a>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-xl">
          {/* Company video for payment */}
          {/* <video controls className="w-full h-auto mt-5">
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          /
          <Image src={PaymentImage} alt="Payment" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Payment;
