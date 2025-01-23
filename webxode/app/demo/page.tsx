import DemoCTA from "@/components/DemoPage/DemoCTA";
import React from "react";
import ContactAersol from "@/components/DemoPage/ContactAerosol.js"

const page = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
            <ContactAersol/>
            <DemoCTA/>
        </div>
      </section>
    </main>
  );
};

export default page;
