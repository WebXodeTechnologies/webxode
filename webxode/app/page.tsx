

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
export default function Home() {
  return (
    <main className="space-y-20">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        
        
      </div>
    </main>
  );
}
