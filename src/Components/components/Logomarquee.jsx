"use client";

import React from 'react';
import Image from 'next/image';

// Helper to provide consistent MERN/Dev logos
const LogoImage = ({ slug, title }) => (
    <Image
        src={`https://cdn.simpleicons.org/${slug}/fff`}
        alt={title}
        width={48}
        height={48}
        className="w-full h-full object-contain opacity-90"
        unoptimized
    />
);

const logos1 = [
    { id: 1, component: <LogoImage slug="mongodb" title="MongoDB" /> },
    { id: 2, component: <LogoImage slug="express" title="Express" /> },
    { id: 3, component: <LogoImage slug="react" title="React" /> },
    { id: 4, component: <LogoImage slug="nodedotjs" title="Node.js" /> },
    { id: 5, component: <LogoImage slug="nextdotjs" title="Next.js" /> },
    { id: 6, component: <LogoImage slug="tailwindcss" title="Tailwind" /> },
    { id: 7, component: <LogoImage slug="typescript" title="TypeScript" /> },
    { id: 8, component: <LogoImage slug="javascript" title="JavaScript" /> },
    { id: 9, component: <LogoImage slug="redux" title="Redux" /> },
];

const logos2 = [
    { id: 1, component: <LogoImage slug="postgresql" title="PostgreSQL" /> },
    { id: 2, component: <LogoImage slug="firebase" title="Firebase" /> },
    { id: 3, component: <LogoImage slug="prisma" title="Prisma" /> },
    { id: 4, component: <LogoImage slug="docker" title="Docker" /> },
    { id: 5, component: <LogoImage slug="amazonaws" title="AWS" /> },
    { id: 6, component: <LogoImage slug="git" title="Git" /> },
    { id: 7, component: <LogoImage slug="github" title="GitHub" /> },
    { id: 8, component: <LogoImage slug="figma" title="Figma" /> },
    { id: 9, component: <LogoImage slug="vercel" title="Vercel" /> },
];


function Logomarquee() {
    return (
        <div className="w-full flex items-center justify-center py-20 bg-[#1e1e1e] relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00d150]/5 blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-y-8 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">My <span className="text-[#00d150]">Tech Stack</span></h2>
                <Marquee2 logos={logos1} speed={80} />
                <Marquee2 logos={logos2} speed={80} direction="reverse" />
            </div>
        </div>
    );
}

// Robust Marquee Component
const Marquee2 = ({ logos, speed = 30, direction = 'normal' }) => {
    return (
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-nowrap mask-linear-fade">
            <style jsx>{`
                .mask-linear-fade {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
             `}</style>
            <div className={`flex flex-nowrap gap-[1rem] items-center animate-infinite-scroll ${direction === 'reverse' ? 'reverse' : ''}`}
                style={{ animationDuration: `${speed}s`, animationDirection: direction }}
            >
                {/* 3 Sets for seamless loop */}
                {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="w-[120px] h-[140px] flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:border-[#00d150]/50 hover:bg-white/10 transition-all duration-300">
                        <div className="w-12 h-12">
                            {logo.component}
                        </div>
                    </div>
                ))}
            </div>
            <div className={`flex flex-nowrap gap-[1rem] items-center animate-infinite-scroll ${direction === 'reverse' ? 'reverse' : ''}`}
                aria-hidden="true"
                style={{ animationDuration: `${speed}s`, animationDirection: direction }}
            >
                {/* Duplicate set for seamlessly filling space if needed, though simple CSS animation usually handles 100% to -100% translation on a long unified strip. 
                     Here I'll just put enough items in the first div and animate IT.
                     Actually, standard Tailwind animation "animate-infinite-scroll" is:
                     @keyframes infinite-scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-100%); }
                     }
                     This requires TWO identical divs next to each other.
                 */}
                {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="w-[120px] h-[140px] flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:border-[#00d150]/50 hover:bg-white/10 transition-all duration-300">
                        <div className="w-12 h-12">
                            {logo.component}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logomarquee;
