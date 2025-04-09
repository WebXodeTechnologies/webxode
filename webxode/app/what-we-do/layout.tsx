import type { Metadata } from "next";
import { ThemeProvider } from "../provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whataspp";
import { navItems } from "@/data/index";

export const metadata: Metadata = {
  title: "What We Do | WebXode Technologies",
  description: "Discover our services – Web, Mobile, and Software Solutions tailored to your business goals.",
  robots: "index, follow",
  openGraph: {
    title: "What We Do | WebXode Technologies",
    description: "Explore the digital services we offer to scale your business with powerful solutions.",
    url: "https://webxode.vercel.app/what-we-do",
    images: [{ url: "/webxodelogoc.png", width: 1200, height: 630, alt: "WebXode Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What We Do | WebXode Technologies",
    description: "MERN Stack, Web & Mobile App Development, UI/UX – We build it all.",
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
