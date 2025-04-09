import type { Metadata } from "next";
import { ThemeProvider } from "../provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whataspp";
import { navItems } from "@/data/index";

export const metadata: Metadata = {
  title: "Demo | WebXode Technologies",
  description: "Experience a live demo of our custom web and mobile solutions in action.",
  robots: "index, follow",
  openGraph: {
    title: "Demo | WebXode Technologies",
    description: "Try our digital solutions. Live demos of real-world applications built by WebXode.",
    url: "https://webxode.vercel.app/demo",
    images: [{ url: "/webxodelogoc.png", width: 1200, height: 630, alt: "WebXode Demo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo | WebXode Technologies",
    description: "Explore live previews of apps and websites built by WebXode Technologies.",
    images: ["/webxodelogoc.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <FloatingNav navItems={navItems} />
          <main className="container mx-auto px-4 py-10">{children}</main>
        </ThemeProvider>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
