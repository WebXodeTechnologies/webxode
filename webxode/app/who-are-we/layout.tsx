// app/who-are-we/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "../provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whataspp";
import { navItems } from "@/data/index";

export const metadata: Metadata = {
  title: "Who Are We | WebXode Technologies",
  description:
    "Learn more about WebXode Technologies — our vision, mission, team, and journey as a leading software development company.",
  robots: "index, follow",
  openGraph: {
    title: "Who Are We | WebXode Technologies",
    description:
      "Learn more about WebXode Technologies — our vision, mission, team, and journey as a leading software development company.",
    url: "https://webxode.vercel.app/who-are-we",
    images: [
      {
        url: "/webxodelogoc.png",
        width: 1200,
        height: 630,
        alt: "WebXode Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Are We | WebXode Technologies",
    description:
      "Get to know WebXode Technologies — the team, the culture, and the purpose behind our digital innovation.",
    images: ["/webxodelogoc.png"],
  },
};

export default function WhoAreWeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <main className="container mx-auto px-4 py-10">{children}</main>
        </ThemeProvider>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
