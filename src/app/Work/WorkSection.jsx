"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { projects } from "@/Data/projects";

const Card = ({ i, id, title, description, technologies, src, url, color, progress, range, targetScale }) => {
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
        className="flex flex-col relative h-[500px] md:h-[600px] w-[95%] md:w-[90%] lg:w-[1200px] rounded-[24px] md:rounded-[30px] p-6 md:p-12 origin-top shadow-2xl border border-white/5"
      >
        <div
          className="absolute inset-0 rounded-[24px] md:rounded-[30px] -z-10"
          style={{ backgroundColor: color }}
        />

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

            <div className="flex items-center gap-4">
              <Link href={`/projects/${id}`} className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group">
                <svg className="w-4 h-4 md:w-6 md:h-6 transform group-hover:-rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">View Project Details</span>
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
      <div className="pt-12 md:pt-32 md:pb-64 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-0">
          <MaskedReveal>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              Selected Work
            </h1>
          </MaskedReveal>

          <div className="flex justify-center">
            <MaskedReveal delay={0.2} className="max-w-2xl">
              <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-light">
                Specialize in capture marvelous moments that not only captivate audiences but also provide seamless confidence and peace.
              </p>
            </MaskedReveal>
          </div>
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