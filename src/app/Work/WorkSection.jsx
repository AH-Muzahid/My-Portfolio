"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { projects } from "@/Data/projects";
import { SectionHeader } from "@/Components/components/SectionHeader";

const Card = ({ i, id, title, description, technologies, src, url, color, progress, range, targetScale, liveLink }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-[80vh] md:h-screen flex items-start justify-center sticky top-0 pt-24 md:pt-32">
            <motion.div
                style={{ scale, top: `calc(${i * 25}px)` }}
                className="flex flex-col relative h-[500px] md:h-[600px] w-[95%] md:w-[90%] lg:w-[1200px] rounded-[24px] md:rounded-[30px] p-6 md:p-12 origin-top shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-xl overflow-hidden"
            >
                <div
                    className="absolute inset-0 rounded-[24px] md:rounded-[30px] -z-10 opacity-90"
                    style={{ backgroundColor: color }}
                />
                <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3Y%3C/filter%3Y%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3Y%3C/svg%3Y")` }}></div>

                <div className="flex flex-col md:flex-row h-full gap-6 md:gap-12">
                    {/* Image Container */}
                    <div className="w-full md:w-[60%] h-[50%] md:h-full relative rounded-2xl overflow-hidden shadow-lg group">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full">
                            <Image
                                fill
                                src={src}
                                alt={title}
                                className="object-cover transition-transform duration-700 group-hover:scale-99"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-[40%] flex flex-col justify-center h-[50%] md:h-full">
                        <span className="text-[#00d150] text-xs md:text-base font-medium uppercase tracking-widest mb-3 md:mb-4">
                            0{i + 1} — Project
                        </span>

                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            {title}
                        </h2>

                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                            {description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                            {technologies?.slice(0, 4).map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs text-zinc-300 border border-white/10">
                                    {tech}
                                </span>
                            ))}
                            {technologies?.length > 4 && (
                                <span className="px-3 py-1 bg-transparent rounded-full text-[10px] md:text-xs text-zinc-500 border border-white/5">
                                    +{technologies.length - 4} more
                                </span>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link href={`/projects/${id}`} className="flex items-center gap-3 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <span className="text-[10px] md:text-xs font-bold text-zinc-500 group-hover:text-white uppercase tracking-widest transition-colors">Details</span>
                            </Link>

                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00d150]/30 flex items-center justify-center bg-[#00d150]/5 group-hover:bg-[#00d150] group-hover:text-black transition-all duration-500">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-[#00d150]/70 group-hover:text-[#00d150] uppercase tracking-widest transition-colors">Live Link</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
  );
};

export default function WorkSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="project"
      ref={container}
      className="relative"
      style={{ backgroundImage: 'linear-gradient(#000000, #154628 51%)' }}
    >
      <div className="pt-24 md:pt-32 md:pb-64 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            tag="Portfolio" 
            title="Selected Projects" 
            align="left"
            mb="mb-12"
          />
        </div>

        <div className="w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return (
              <Card
                key={project.id}
                i={i}
                {...project}
                src={project.images[0]}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}