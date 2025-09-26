import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";

/** Headline / hero — strong grotesk vibe */
export const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300","400","500","600","700"],
});

/** Body copy — modern, highly readable */
export const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400","500","600","700"],
});

/** Numbers / code / stats — tight & techy */
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400","600","700"],
});
