"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { useEffect } from "react";
import { FlipWords } from "@/Components/ui/flip-words";
import Clock from "@/Components/components/Clock";
import HeroBackground from "@/Components/components/HeroBackground";
import SocialDock from "@/Components/components/SocialDock";

export default function Hero() {
  return (
    <section className="section-hero flex flex-col items-center relative md:min-h-[100vh] min-h-[60vh] pt-32 pb-10">
      <HeroBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">


        <div className="text-center relative">
          {/* Greeting */}
          <div className="flex justify-center mb-1">
            <MaskedReveal delay={0.3}>
              <p className="text-lg md:text-2xl text-[#00d150] font-medium tracking-widest uppercase">
                Hello, I&apos;m
              </p>
            </MaskedReveal>
          </div>

          {/* Top Tagline */}
          <div className="flex justify-center mb-6">
            <MaskedReveal delay={0.2} duration={1}>
              <span className="px-3 md:px-4 py-1 border border-white/20 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase text-zinc-400 backdrop-blur-sm">
                MERN Stack & Next.js Expert
              </span>
            </MaskedReveal>
          </div>

          {/* Main Title - Split for impact if needed, or single block */}
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: "110%", rotateX: -20 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
              className="will-change-transform text-[80px] sm:text-[120px] md:text-[180px] lg:text-[230px] xl:text-[280px] font-black text-[#e8f7fc] leading-[0.85] tracking-tighter"
            >
              Muzahid
            </motion.h1>
          </div>

          <div className="mt-8 md:mt-10 flex justify-center">
            <MaskedReveal delay={0.8} className="max-w-3xl">
              <div className="text-lg md:text-2xl lg:text-3xl text-zinc-300 leading-relaxed font-light text-center gap-2">
                <span>Engineering scalable, high-performance web solutions with </span>
                <FlipWords words={["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]} className="text-[#00d150] font-bold" />
              </div>
            </MaskedReveal>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400 text-xs md:text-sm tracking-widest uppercase items-end relative">
          <MaskedReveal delay={1.2} className="md:text-left flex flex-col items-center md:items-start">

            <SocialDock />
            <Clock />
            <p>Based in Dhaka, BD</p>
          </MaskedReveal>

          <div className="flex justify-center">
            <MaskedReveal delay={1.3}>
              <p className="text-center max-w-xs">Turning complex problems into elegant interfaces</p>
            </MaskedReveal>
          </div>

          <MaskedReveal delay={1.4} className="md:text-right flex justify-center md:justify-end">
            <p>Scroll to explore</p>
          </MaskedReveal>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-12 md:mt-16">
          <MaskedReveal delay={1.6}>
            <button className="primary-btn hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base px-8 py-4">
              View My Work
            </button>
          </MaskedReveal>

          <MaskedReveal delay={1.7}>
            <button className="px-8 py-4 rounded-full border border-white/10 text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm md:text-base tracking-wide">
              Download CV
            </button>
          </MaskedReveal>
        </div>

      </div>

    </section>
  );
}