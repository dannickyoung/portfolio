import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import HireMePopup from "@/components/HireMePopup";
import MobileMenu from "@/components/MobileMenu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dannick Young, Lead Product Designer",
  description:
    "Lead product designer taking AI products from zero to shipped, in Figma and in code. Co-founder of Clard.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SmoothScroll />
        <ScrollToTop />
        <CustomCursor />
        {children}
        <MobileMenu />
        <HireMePopup />
      </body>
    </html>
  );
}
