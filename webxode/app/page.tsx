import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import Services from "@/components/Services";
import OurApproach from "@/components/OurApproach";
import AboutUs from "@/components/AboutUs";
import RecentWorks from "@/components/RecentWorks";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative space-y-20 flex justify-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className=" w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutUs />
        <RecentWorks />
        <Services />
        <OurApproach />
        <RecentProjects/>
      </div>
    </main>
  );
}
