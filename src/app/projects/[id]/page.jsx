"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { ArrowLeft, Github, Globe, Server, Code } from "lucide-react";
import { projects } from "@/Data/projects";

export default function ProjectDetails() {
    const params = useParams();
    const projectId = parseInt(params.id);
    const project = projects.find(p => p.id === projectId) || projects[0];

    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white selection:bg-[#00d150] selection:text-black">
            {/* Navigation / Back Button */}
            <nav className="fixed top-0 left-0 w-full z-50 mt-8 md:mt-2 p-6 md:p-10 flex justify-between items-center mix-blend-difference">
                <Link href="/#project" className="border  border-[#00d150] px-4 py-2 rounded-full group flex items-center gap-2 text-sm uppercase tracking-widest text-[#00d150] hover:text-white transition-colors duration-300">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span>Back</span>
                </Link>
            </nav>

            {/* Hero Header */}
            <section className="relative pt-24 pb-12 px-4 md:px-16 max-w-8xl mx-auto">
                <div className="mb-10 border-b border-white/10 pb-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-4xl">
                            <MaskedReveal>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 rounded-full border border-white/20 text-xs tracking-widest uppercase text-zinc-400">
                                        {project.category}
                                    </span>
                                    <span className="text-xs tracking-widest uppercase text-zinc-500">
                                        {project.year}
                                    </span>
                                </div>
                            </MaskedReveal>
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                    className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white"
                                >
                                    {project.title}
                                </motion.h1>
                            </div>
                        </div>

                        <div className="md:text-right">
                            <MaskedReveal delay={0.2}>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Client</p>
                                <p className="text-lg md:text-xl font-medium">{project.client}</p>
                            </MaskedReveal>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="w-full aspect-video relative rounded-3xl overflow-hidden mb-24"
                >
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Project Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
                    {/* Left Sidebar (Sticky) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 flex flex-col gap-10">
                            <div>
                                <MaskedReveal delay={0.5}>
                                    <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#00d150]"></span>
                                        Project Overview
                                    </h3>
                                </MaskedReveal>
                                <MaskedReveal delay={0.6}>
                                    <p className="text-zinc-400 leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                </MaskedReveal>

                                {/* Tech Stack Tags */}
                                <MaskedReveal delay={0.65}>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies?.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-zinc-300 border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </MaskedReveal>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3">
                                <MaskedReveal delay={0.7}>
                                    <Link href={project.liveLink || "#"} target="_blank" className="primary-btn w-full justify-center text-sm px-6 py-4 flex items-center gap-2">
                                        <Globe className="w-4 h-4" /> Live Preview
                                    </Link>
                                </MaskedReveal>

                                <div className="flex gap-3">
                                    {project.githubClient && (
                                        <MaskedReveal delay={0.8} className="flex-1">
                                            <Link href={project.githubClient} target="_blank" className="w-full justify-center px-6 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-sm flex items-center gap-2 group">
                                                <Code className="w-4 h-4" /> Client <ArrowLeft className="w-3 h-3 rotate-135 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </MaskedReveal>
                                    )}
                                    {project.githubServer && (
                                        <MaskedReveal delay={0.9} className="flex-1">
                                            <Link href={project.githubServer} target="_blank" className="w-full justify-center px-6 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-sm flex items-center gap-2 group">
                                                <Server className="w-4 h-4" /> Server <ArrowLeft className="w-3 h-3 rotate-135 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </MaskedReveal>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Main Content */}
                    <div className="lg:col-span-8 flex flex-col gap-20">

                        {/* Features List */}
                        {project.features && (
                            <div>
                                <MaskedReveal>
                                    <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#00d150] pl-6">Key Features</h3>
                                </MaskedReveal>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, i) => (
                                        <MaskedReveal key={i} delay={0.1 * i} className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                                            <div className="flex items-start gap-4">
                                                <span className="mt-1 w-2 h-2 rounded-full bg-[#00d150] flex-shrink-0" />
                                                <p className="text-zinc-300">{feature}</p>
                                            </div>
                                        </MaskedReveal>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <MaskedReveal>
                                <h3 className="text-3xl font-bold text-white mb-6">The Challenge</h3>
                            </MaskedReveal>
                            <MaskedReveal delay={0.1}>
                                <p className="text-lg text-zinc-300 leading-relaxed opacity-90">
                                    {project.challenge}
                                </p>
                            </MaskedReveal>
                        </div>

                        <div>
                            <MaskedReveal>
                                <h3 className="text-3xl font-bold text-white mb-6">The Solution</h3>
                            </MaskedReveal>
                            <MaskedReveal delay={0.1}>
                                <p className="text-lg text-zinc-300 leading-relaxed opacity-90">
                                    {project.solution}
                                </p>
                            </MaskedReveal>
                        </div>

                        {/* Additional Images */}
                        <div className="grid grid-cols-1 gap-12 mt-8">
                            {project.images.slice(1).map((img, index) => (
                                <MaskedReveal key={index} delay={0.2 + (index * 0.1)} className="w-full">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group">
                                        <Image
                                            src={img}
                                            alt={`${project.title} detail ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-99 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                                    </div>
                                </MaskedReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project Footer */}
            <section className="border-t border-white/10 py-32 bg-[#111] text-center">
                <div className="container mx-auto px-4">
                    <p className="text-zinc-500 uppercase tracking-widest text-sm mb-6">Next Project</p>
                    <Link href={`/projects/${project.id === 3 ? 1 : project.id + 1}`} className="inline-block group">
                        <h2 className="text-5xl md:text-8xl font-black text-white group-hover:text-[#00d150] transition-colors duration-500 cursor-pointer">
                            {projects.find(p => p.id === (project.id === 3 ? 1 : project.id + 1))?.title}
                        </h2>
                        <div className="h-1 w-0 bg-[#00d150] mx-auto mt-4 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
