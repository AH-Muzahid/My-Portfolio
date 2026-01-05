"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "./Hero/HeroSection";
import About from "./About/AboutSection";
import Logomarquee from "@/Components/components/Logomarquee";
import Navber from "./Navber/Navber";
import WorkSection from './Work/WorkSection';
import Service from './Service/ServiceSection';
import Contact from "./Contact/ContactSection";
import Preloader from "@/Components/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <div >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main >
        <Navber />
        <HeroSection />
        <About />
        <Logomarquee />
        <WorkSection />
        <Service />
        <Contact />
      </main>
    </div>
  );
}
