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
  title: "WebXode Technologies",
  icons: [
    { rel: "icon", url: "/webxodelogoc.png", sizes: "64x64" },
    { rel: "apple-touch-icon", url: "/webxodelogoc.png", sizes: "180x180" },
    { rel: "shortcut icon", url: "/webxodelogoc.png", sizes: "512x512" }, 
  ],
  description:
    "WebXode Technologies is a leading software development company delivering innovative and reliable technology solutions to help businesses thrive in the digital era.",
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
