import React from "react";
import Intro from "@/components/AboutPage/IntroComponent";
import Mission from "@/components/AboutPage/Mission";
import { CompanyTimeline } from "@/components/AboutPage/CompanyTimeline";
import CompanyValues from "@/components/AboutPage/CompanyValues";
import CompanyProcess from "@/components/AboutPage/CompanyProcess";
import Team from "@/components/AboutPage/Team";
import BookDemo from "@/components/BookDemo";

const Page = () => {
  return (
    <main className="min-h-screen">
      {/* Section for Intro Component */}
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
          <Intro />
          <Mission />
          <CompanyValues />
          <CompanyProcess />
          <CompanyTimeline />
          <Team />
          <BookDemo />
        </div>
      </section>
    </main>
  );
};

export default Page;
