import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Fraunces is variable (opsz + wght); omit weight to load the full range.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHE — Shakti Through Harmony & Empowerment",
  description:
    "SHE is a global movement empowering women through culture, creativity, and education. Where movement meets purpose.",
  openGraph: {
    title: "SHE — Shakti Through Harmony & Empowerment",
    description:
      "A safe space for women to rise, express, and be seen. Shakti · Harmony · Empowerment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${allura.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
