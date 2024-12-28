import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
