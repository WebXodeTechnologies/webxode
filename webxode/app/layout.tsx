import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import localfont from "next/font/local"
import "./globals.css";
import WhatsAppButton from "@/components/Whataspp";


const MontserratAlt1 = localfont(
  {
    src: [{
      path:"../public/montserrat-alt1/webfonts/MontserratAlt1-Regular.ttf",
      weight:"700"
    },],
    variable:"--font-montserrat"
  })

export const metadata: Metadata = {
  title: "WebXode Technologies",
  description:
    "WebXode Technologies is a leading software development company delivering innovative and reliable technology solutions to help businesses thrive in the digital era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${MontserratAlt1.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
