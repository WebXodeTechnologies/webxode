import React from "react";
import Image from "next/image";
import Workflow from "@/public/workflow/workflowimage3.svg";

const DevelopmentProcess = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mb-5">
        {/* Grid 1: Text Content */}
        <div className="flex flex-col">
          <h1 className="text-left text-3xl font-montserrat text-purple px-2 py-2 mb-5">
            Our Development Process: Fast, Transparent, Reliable
          </h1>
          <p className="text-xl font-montserrat px-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Requirement Analysis:</strong> We define project scope
                and goals with detailed documentation.
              </li>
              <li>
                <strong>Planning & Research:</strong> Develop workflows,
                timelines, and milestones for seamless execution.
              </li>
              <li>
                <strong>Design:</strong> Create functional, client-approved
                designs to set the foundation.
              </li>
              <li>
                <strong>Development:</strong> Build intuitive frontends, robust
                backends, and deploy for client review.
              </li>
              <li>
                <strong>Testing & Support:</strong> Offer a 10-day trial,
                finalize the release, and provide ongoing maintenance.
              </li>
            </ul>
          </p>
        </div>

        {/* Grid 2: Video Content */}
        <div className="flex justify-center items-center">
          <video controls className="w-full h-auto rounded-md shadow-lg">
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Image Below the Grid */}
      <div className="mt-10">
        <Image
          src={Workflow}
          alt="workflow"
          width={1150}
          height={800}
          unoptimized
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default DevelopmentProcess;
