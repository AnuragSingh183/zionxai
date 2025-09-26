import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { display, mono,body } from "./fonts";


export const metadata: Metadata = {
  title: "ZionXAI — AI, Cloud & Security Consulting",
  description: "AI systems, cloud modernization, and cybersecurity for mid‑market organizations.",
  openGraph: {
    title: "ZionXAI",
    description: "AI systems, cloud modernization, and cybersecurity for mid‑market organizations.",
    url: "https://zionxai.com",
    siteName: "ZionXAI",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* add the font variables to the body */}
      <body className={`${display.variable} ${body.variable} ${mono.variable} bg-grid-radial font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
