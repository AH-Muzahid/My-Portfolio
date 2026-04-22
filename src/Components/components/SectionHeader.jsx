"use client";
import { MaskedReveal } from "@/Components/ui/MaskedReveal";
import { motion } from "framer-motion";

export const SectionHeader = ({ tag, title, subtitle, align = "left", delay = 0, mb = "mb-16" }) => {
    const isCenter = align === "center";
    
    return (
        <div className={`relative ${mb} flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left border-l-[3px] border-[#00d150] pl-6 md:pl-8'}`}>
            <div className="relative">
                <MaskedReveal delay={delay}>
                    <span className="text-[#00d150] uppercase tracking-[0.3em] text-[11px] md:text-xs font-bold block mb-2">
                        {tag}
                    </span>
                </MaskedReveal>
                <MaskedReveal delay={delay + 0.1}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {title}
                        {subtitle && (
                            <span className="text-zinc-500 font-light ml-3">
                                {subtitle}
                            </span>
                        )}
                    </h2>
                </MaskedReveal>
            </div>
        </div>
    );
};
