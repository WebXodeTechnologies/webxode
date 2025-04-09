import type { Metadata } from "next";
import { ThemeProvider } from "../provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whataspp";
import { navItems } from "@/data/index";

export const metadata: Metadata = {
  title: "Get Started | WebXode Technologies",
  description: "Kickstart your digital transformation journey with WebXode. Let’s build something amazing.",
  robots: "index, follow",
  openGraph: {
    title: "Get Started | WebXode Technologies",
    description: "Start your project with us. Simple onboarding, clear process, and expert guidance.",
    url: "https://webxode.vercel.app/get-started",
    images: [{ url: "/webxodelogoc.png", width: 1200, height: 630, alt: "WebXode Start" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started | WebXode Technologies",
    description: "Let’s collaborate and build your next digital product with WebXode.",
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
