"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroEN from "@/components/HeroEN";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="lChrf4R4smlYnl2HUIpK_azfQoVLO3ts4bzBtBrEGAw" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <HeroEN />
          <About />
          {/* <Stack /> */}
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
