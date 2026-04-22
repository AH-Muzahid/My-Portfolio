"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from '@/../public/assets/About2.png';
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { SectionHeader } from "@/Components/components/SectionHeader";
import { useState } from "react";
import ContactModal from "@/Components/components/ContactModal";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="w-full bg-[#0b0b0b] py-24 px-4 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#164b2b]/30 to-transparent -z-10" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay -z-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3Y%3C/filter%3Y%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3Y%3C/svg%3Y")`}}></div>
      
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Identity" 
          title="About Me" 
          align="left"
          mb="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl relative z-10">
              <Image
                alt="Muzahid - Full Stack Developer"
                className="w-full h-full object-[35%_50%] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                src={AboutImage}
                width={500}
                height={400}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-3 md:-right-8 md:-bottom-4 z-20 bg-[#164228] text-white p-6 md:p-8 rounded-2xl shadow-xl w-40 md:w-56 text-center border border-white/10 backdrop-blur-sm"
            >
              <MaskedReveal delay={0.6}>
                <span className="block text-4xl md:text-5xl font-bold text-white mb-1">1+</span>
              </MaskedReveal>
              <MaskedReveal delay={0.7}>
                <span className="block text-sm md:text-base text-gray-200 font-light leading-tight">
                  Years of<br />Experience
                </span>
              </MaskedReveal>
            </motion.div>
          </motion.div>

          <div className="lg:pl-8 pt-8 lg:pt-0">
            <MaskedReveal delay={0.4}>
              <p className="text-[#10b94c] uppercase tracking-widest text-sm font-semibold mb-2">
              About Ali Hasan Muzahid
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Elevating Businesses with <br className="hidden xl:block" />
                Modern <span className="text-[#10b94c]">Web Solutions</span>
              </h3>
            </MaskedReveal>

            <MaskedReveal delay={0.5}>
              <div className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed space-y-4 font-light text-justify">
                <p>
                  My journey into tech started with a curiosity for how things work, which quickly turned into a passion for solving complex problems through code. I love building high-performance web applications that bridge the gap between powerful functionality and beautiful design, specializing in the MERN stack and Next.js.
                </p>
                <p>
                  When I’m not coding, I’m exploring my creative side through photography or staying active with sports. I believe that a balanced life fuels a sharper mind, and I bring that same energy and holistic perspective to every project I collaborate on.
                </p>
              </div>
            </MaskedReveal>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <MaskedReveal delay={0.6}>
                <a
                  href="https://wa.me/8801312009084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#10b94c] hover:bg-[#0e9f41] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#10b94c]/30 transform hover:-translate-y-1 block text-center"
                >
                  Hire Me
                </a>
              </MaskedReveal>

              <MaskedReveal delay={0.7}>
                <div
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="bg-white/10 rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-[#10b94c]/20">
                    <svg className="w-6 h-6 text-[#10b94c]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-zinc-400 text-sm font-medium">Have an idea?</span>
                    <span className="block text-white text-lg font-bold group-hover:text-[#10b94c] transition-colors">Let&apos;s Discuss</span>
                  </div>
                </div>
              </MaskedReveal>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section >
  );
}