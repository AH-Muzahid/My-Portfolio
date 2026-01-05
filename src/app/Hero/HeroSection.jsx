"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import NexusOrb from "@/Components/components/NexusOrb";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      // Move orb opposite to mouse (parallax) or with mouse? User said "interact".
      // Let's make it follow loosely but with large range to cover empty spaces.
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="section-hero flex flex-col items-center relative min-h-[100vh] pt-32 pb-10">
      {/* 3D Icon Cloud Background - Floating & Interactive */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {/* Mouse Parallax Wrapper */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="w-full h-full flex items-center justify-center"
        >
          {/* Infinite Rotation & Wandering Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 0.45, // Increased visibility
              scale: 0.85, // Larger size
              rotate: 360,
              x: [0, 300, -300, 150, -150, 0], // Greatly increased experimental wander range
              y: [0, -150, 150, -100, 100, 0]
            }}
            transition={{
              opacity: { duration: 1.5 },
              scale: { duration: 1.5 },
              rotate: { duration: 150, repeat: Infinity, ease: "linear" },
              x: { duration: 50, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }, // Long, slow, drifting journey
              y: { duration: 60, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
            }}
            className="w-full max-w-[800px] max-h-[800px] flex items-center justify-center" // Removed fixed blur
          >
            <NexusOrb />
          </motion.div>
        </motion.div>
      </div>

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
              <p className="text-lg md:text-2xl lg:text-3xl text-zinc-300 leading-relaxed font-light text-center">
                Engineering scalable, high-performance web solutions with <span className="text-white font-medium">MongoDB</span>, <span className="text-white font-medium">Express</span>, <span className="text-white font-medium">React</span> & <span className="text-white font-medium">Node.js</span>.
              </p>
            </MaskedReveal>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-500 text-xs md:text-sm tracking-widest uppercase items-end">
          <MaskedReveal delay={1.2} className="md:text-left flex justify-center md:justify-start">
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

      {/* Background Gradient/Grain - Optional Polishing */}

    </section>
  );
}