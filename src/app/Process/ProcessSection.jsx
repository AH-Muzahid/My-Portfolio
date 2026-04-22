"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MaskedReveal } from '@/Components/ui/MaskedReveal';
import { SectionHeader } from '@/Components/components/SectionHeader';

const steps = [
    {
        id: '01',
        title: 'Requirement Engineering',
        description: 'Analyzing business logic, defining database entities, and mapping out technical constraints for a bulletproof foundation.',
        details: ['Logic Analysis', 'DB Modeling', 'Risk Assessment']
    },
    {
        id: '02',
        title: 'System Architecture',
        description: 'Designing scalable backend structures, defining API contracts, and choosing high-performance state patterns.',
        details: ['Cloud Infra', 'API Design', 'Scalability Plan']
    },
    {
        id: '03',
        title: 'Core Implementation',
        description: 'Writing clean, modular code using modern patterns. Focus on performance, security, and robust logic.',
        details: ['Clean Code', 'Security Audit', 'Logic Building']
    },
    {
        id: '04',
        title: 'Deployment & Monitoring',
        description: 'Automating deployment via CI/CD and setting up production monitoring for 99.9% uptime.',
        details: ['CI/CD Pipeline', 'Real-time Stats', 'Optimization']
    }
];

export default function ProcessSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="process" className="min-h-screen py-16 md:py-20 bg-[#080808] relative overflow-hidden flex items-center">
            {/* Background Architecture */}
            <div className="absolute inset-0 opacity-[0.15]" 
                 style={{ backgroundImage: `radial-gradient(#164b2b 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
            
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#080808] via-transparent to-[#080808] z-0" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <SectionHeader 
                    tag="Development" 
                    title="Engineering Workflow" 
                    align="left"
                    mb="mb-10"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative"
                        >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`h-full group p-6 md:p-7 rounded-[32px] border transition-all duration-700 bg-zinc-900/40 backdrop-blur-sm relative overflow-hidden ${
                                        hoveredIndex === index ? 'border-[#00d150]/40 translate-y-[-8px]' : 'border-white/5'
                                    }`}
                                >
                                    {/* Glowing Spotlight Effect */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(0,209,80,0.15)_0%,_transparent_70%)]`}
                                         style={{ '--x': '50%', '--y': '50%' }} />
    
                                    <div className="relative z-10 flex flex-col h-full gap-5">
                                        <div className="flex justify-between items-start">
                                            <span className={`text-4xl font-black transition-colors duration-500 ${
                                                hoveredIndex === index ? 'text-[#00d150]' : 'text-white/5'
                                            }`}>
                                                {step.id}
                                            </span>
                                            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                                hoveredIndex === index ? 'bg-[#00d150] shadow-[0_0_15px_#00d150]' : 'bg-zinc-800'
                                            }`} />
                                        </div>
    
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#00d150] transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                                                {step.description}
                                            </p>
                                        </div>
    
                                        <div className="mt-auto pt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                            {step.details.map((tag, i) => (
                                                <span key={i} className="text-[9px] uppercase tracking-widest text-[#00d150] border border-[#00d150]/20 bg-[#00d150]/5 px-2 py-0.5 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                            {/* Connecting Line - Only on Large Screens, for steps 1-3 */}
                            {index < 3 && (
                                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-white/5 z-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
