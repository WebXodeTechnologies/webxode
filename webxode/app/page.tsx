import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import Services from "@/components/Services";
import OurApproach from "@/components/OurApproach";
import AboutUs from "@/components/AboutUs";
import RecentWorks from "@/components/RecentWorks";

export default function Home() {
  return (
    <main className="space-y-20">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutUs />
        <RecentWorks />
        <Services />
        <OurApproach />
      </div>
    </main>
  );
}
