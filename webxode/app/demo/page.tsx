import DemoCTA from "@/components/DemoPage/DemoCTA";
import React from "react";
import HeroBanner from "@/components/DemoPage/Herobanner";
import ContactForm from "@/components/DemoPage/ContactForm";

const page = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
            <HeroBanner/>
            <DemoCTA/>
            <ContactForm/>
        </div>
      </section>
    </main>
  );
};

export default page;
