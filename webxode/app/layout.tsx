import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import localfont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "@/components/Whataspp";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import Footer from "@/components/Footer";

const MontserratAlt1 = localfont({
  src: [
    {
      path: "../public/montserrat-alt1/webfonts/MontserratAlt1-Regular.ttf",
      weight: "700",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "WebXode | Software, Web & Mobile App Development, custom app, Digital Marketing and Business Consultation",
  description:
    "WebXode Technologies is a leading software development company delivering innovative and reliable technology solutions to help businesses thrive in the digital era.",
  keywords: [
    "WebXode Technologies",
    "Software Development",
    "MERN Stack",
    "Web Development",
    "Mobile App Development",
    "Next.js",
    "React",
    "Tech Company",
    "WebXode"
  ],
  authors: [{ name: "WebXode Technologies", url: "https://webxode.vercel.app" }],
  creator: "WebXode Technologies",
  publisher: "WebXode Technologies",
  robots: "index, follow",
  icons: {
    icon: "/webxodelogoc.png",
    apple: "/webxodelogoc.png",
    shortcut: "/webxodelogoc.png",
  },
  openGraph: {
    type: "website",
    url: "https://webxode.vercel.app",
    title: "WebXode Technologies",
    description:
      "We deliver custom software solutions, web and mobile apps tailored to your business goals. Build your digital future with WebXode.",
    images: [
      {
        url: "/webxodelogoc.png",
        width: 1200,
        height: 630,
        alt: "WebXode Technologies",
      },
    ],
    siteName: "WebXode Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebXode Technologies",
    description:
      "Build your business with powerful digital solutions. Explore web & app development by WebXode.",
    images: ["/webxodelogoc.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${MontserratAlt1.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
