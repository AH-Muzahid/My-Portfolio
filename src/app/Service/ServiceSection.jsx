"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import ServiceImage from '@/../public/assets/typing.gif';

const services = [
    "Full Stack Development",
    "MERN Application",
    "React.js Frontend",
    "Node.js Backend",
    "API Development",
    "Database Architecture",
    "Cloud/DevOps",
    "Performance Tuning",
    "Legacy Migration",
    "CMS Development",
    "E-Commerce Solutions",
    "Real-time Chat/Video",
    "Authentication (Auth0/JWT)",
    "Payment Gateways",
    "Bug Fixing",
    "Technical Consulting"
];

import { SectionHeader } from "@/Components/components/SectionHeader";

export default function Service() {
    return (
        <section id="service" className="md:min-h-screen md:flex md:items-center md:justify-center bg-[#1f1f1f] relative overflow-hidden py-24 ">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">
                <SectionHeader 
                    tag="Capabilities" 
                    title="Expertise & Solutions" 
                    align="left"
                    mb="mb-12"
                />

                {/* Main Card Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-gradient-to-br from-[#1a3d26] via-[#12271a] to-[#0b100d] rounded-[30px] md:rounded-[50px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5"
                >
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3Y%3C/filter%3Y%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3Y%3C/svg%3Y")`}}></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

                        {/* Left Content */}
                        <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
                            <MaskedReveal delay={0.2}>
                                <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md">
                                    Transforming ideas into digital reality through expert full-stack development. I deliver scalable, high-performance solutions that drive business growth and enhance user engagement.
                                </p>
                            </MaskedReveal>

                            <motion.div
                                initial={{ rotate: 5, opacity: 0, scale: 0.9 }}
                                whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hidden lg:block"
                            >
                                <Image
                                    src={ServiceImage}
                                    alt="Workspace setup"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Right Content - Service Tags */}
                        <div className="relative order-1 lg:order-2">
                            <div className="flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4">
                                {services.map((service, index) => {
                                    // Deterministic random rotation between -20 and 20 degrees for scattered look
                                    const rotate = ((index * 57) % 40) - 20;

                                    // Pseudo-random delay to make them fall "like rain" (not distinct linear wave)
                                    const delay = 0.2 + ((index * 7) % 8) * 0.1;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ y: -50, opacity: 0, rotate: 0 }}
                                            whileInView={{ y: 0, opacity: 1, rotate: rotate }}
                                            viewport={{ once: true, margin: "100px" }}
                                            transition={{
                                                type: "spring",
                                                damping: 15,
                                                stiffness: 60,
                                                mass: 1,
                                                delay: delay
                                            }}
                                            whileHover={{ 
                                                scale: 1.1, 
                                                rotate: 0, 
                                                backgroundColor: "#00d150", 
                                                color: "#fff", 
                                                zIndex: 10,
                                                boxShadow: "0 20px 40px rgba(0,209,80,0.3)"
                                            }}
                                            className="bg-white/10 backdrop-blur-md text-white border border-white/10 px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-base font-medium shadow-xl cursor-pointer transition-all duration-300"
                                        >
                                            {service}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Mobile Image (Visible only on small screens) */}
                            <div className="mt-8 lg:hidden flex justify-center">
                                <div className="relative w-full max-w-xs aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 rotate-2">
                                    <Image
                                        src={ServiceImage}
                                        alt="Workspace setup"
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-black/30 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
