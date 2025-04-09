import type { Metadata } from "next";
import { ThemeProvider } from "../provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whataspp";
import { navItems } from "@/data/index";

export const metadata: Metadata = {
  title: "How We Do | WebXode Technologies",
  description: "Explore our development process – from strategy to scalable execution.",
  robots: "index, follow",
  openGraph: {
    title: "How We Do | WebXode Technologies",
    description: "See how WebXode delivers results – agile process, scalable solutions, and quality delivery.",
    url: "https://webxode.vercel.app/how-we-do",
    images: [{ url: "/webxodelogoc.png", width: 1200, height: 630, alt: "WebXode Process" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Do | WebXode Technologies",
    description: "From ideation to deployment – discover our approach to building digital solutions.",
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
