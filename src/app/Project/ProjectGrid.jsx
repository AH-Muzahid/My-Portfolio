"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, title: "Abstract Art", category: "Photography", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80" },
  { id: 2, title: "Modern Architecture", category: "Design", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" },
  { id: 3, title: "Minimalist Style", category: "Editorial", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80" },
];

export default function ProjectGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black">
      {/* Section Header */}
      <div className="mb-16 flex justify-between items-end">
        <h2 className="text-5xl font-syne font-bold uppercase tracking-tighter">Selected <br /> Works</h2>
        <p className="text-zinc-500 font-inter uppercase text-sm tracking-widest pb-2">( 2024 — 2026 )</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="image-container aspect-3/4 mb-4 bg-zinc-900">
              <Image
                src={project.img}
                alt={project.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white uppercase tracking-widest text-xs border border-white/40 px-4 py-2 rounded-full">View Project</span>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex justify-between items-start pt-2">
              <h3 className="font-syne text-xl font-bold uppercase">{project.title}</h3>
              <p className="text-zinc-500 text-sm font-inter">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}