import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import Logo1 from "@/public/mirrorlogo.jpg";
import Logo2 from "@/public/weartrenzlogo.png";
import mockup1 from "@/public/pr45.png";
import mockup2 from "@/public/pro2.png";
import sbmockup from "@/public/sbmockup.png";

const RecentWorks = () => {
  const testimonials = [
    {
      quote:
        "Weartrendz: Where style meets convenience. Elevate your wardrobe effortlessly!",
      name: "Weartrendz",
      image: Logo2,
      designation: "Apparel E-commerce",
      src: mockup1,
      website: "https://apparel-e-commerce.vercel.app/",
      category: "Fashion & Retail",
      detailedFeedback:
        "Weartrendz revolutionized our approach to fashion retail. The platform’s intuitive design and seamless user experience have not only attracted a broader audience but also improved customer retention rates. With advanced analytics and a focus on personalization, it has become the cornerstone of our brand's digital transformation. Every interaction feels crafted with the user in mind, making shopping an absolute delight.",
    },
    {
      quote: "Mirror Tattoo Studio: Ink your story with precision and passion.",
      name: "Mirror Tattoo Studio",
      image: Logo1,
      designation: "Tattoo Design",
      src: mockup2,
      website: "https://mirror-final.vercel.app/",
      category: "Creative Arts",
      detailedFeedback:
        "The Mirror Tattoo Studio website is a masterpiece that truly reflects our art. The sleek visuals and dynamic design elements perfectly encapsulate the creativity and precision we strive to deliver. Clients are raving about the easy appointment scheduling and rich portfolio showcase, which have significantly boosted our bookings. This digital upgrade has turned our brand into a beacon for tattoo enthusiasts, setting a new benchmark in the industry.",
    },
    {
      quote: "Spice Bistro: Perfect Italian Taste delivered at your Doorstep",
      name: "Spice-Bistro",
      image: Logo1,
      designation: "Food & Beverages",
      src: sbmockup,
      website: "https://spice-bistro-ak-react-project.netlify.app/",
      category: "Food Delivery",
      detailedFeedback:
        "Spice Bistro has redefined how our customers experience Italian cuisine from the comfort of their homes. The website's sleek design and seamless navigation ensure that ordering is quick and intuitive, while the visually enticing menu and interactive features enhance user engagement. Since its launch, we’ve seen a 40% increase in online orders and a surge in positive customer feedback. The integrated feedback system allows us to refine our offerings, making Spice Bistro the go-to choice for authentic Italian food delivery. It's not just a website; it’s a cornerstone of our growing success.",
    },
  ];

  return (
    <section className="my-10 container max-w-7xl">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-montserrat uppercase tracking-wider">
          Our Recent
          <span className="text-2xl md:text-5xl text-purple">Works</span>
        </h1>
      </div>
      <div className="lg:py-5">
        {/* Left Side - Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default RecentWorks;
