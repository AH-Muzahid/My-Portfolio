"use client";

import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const IconWrapper = ({
    children,
    className = "",
    isHighlighted = false,
    isActive = false
}) => (
    <div className={`
            backdrop-blur-xl rounded-2xl flex items-center justify-center border
            ${isHighlighted ? "bg-white/10 border-[#00d150]/50 shadow-[#00d150]/20 shadow-2xl animate-breathing-glow" : `bg-white/5 border-white/10 ${!isActive && "animate-float"}`}
            ${isActive && "border-[#00d150]/60"}
            ${className}
        `} style={{
            transform: isActive ? "scale(1.1)" : "scale(1)",
            backgroundColor: isActive ? "rgba(0, 209, 80, 0.1)" : "rgba(255, 255, 255, 0.05)",
            transition: "transform 0.8s ease-in-out, background-color 0.8s ease-in-out, border-color 0.8s ease-in-out"
        }}>
        {children}
    </div>
);

const IconGrid = () => {
    const [activeId, setActiveId] = useState(1);
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    // MERN Stack & Modern Tools - Actual Tech Logos
    const outerIcons = useMemo(() => [
        { id: 1, component: <Image src="https://cdn.simpleicons.org/mongodb/fff" alt="MongoDB" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 2, component: <Image src="https://cdn.simpleicons.org/express/fff" alt="Express" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 3, component: <Image src="https://cdn.simpleicons.org/react/fff" alt="React" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 4, component: <Image src="https://cdn.simpleicons.org/nodedotjs/fff" alt="Node.js" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 5, component: <Image src="https://cdn.simpleicons.org/nextdotjs/fff" alt="Next.js" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 6, component: <Image src="https://cdn.simpleicons.org/tailwindcss/fff" alt="Tailwind" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 7, component: <Image src="https://cdn.simpleicons.org/typescript/fff" alt="TypeScript" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 8, component: <Image src="https://cdn.simpleicons.org/github/fff" alt="GitHub" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> },
        { id: 9, component: <Image src="https://cdn.simpleicons.org/figma/fff" alt="Figma" width={32} height={32} className="w-8 h-8 opacity-90" unoptimized /> }
    ], []);

    const radius = 160;
    const svgSize = 400;
    const svgCenter = svgSize / 2;
    const numIcons = outerIcons.length;

    const getIconPosition = useCallback(index => {
        const angle = (-90 + index * (360 / numIcons)) * (Math.PI / 180);
        return {
            transformX: radius * Math.cos(angle),
            transformY: radius * Math.sin(angle),
            svgX: svgCenter + radius * Math.cos(angle),
            svgY: svgCenter + radius * Math.sin(angle)
        };
    }, [numIcons, radius, svgCenter]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId;
        const render = () => {
            ctx.clearRect(0, 0, svgSize, svgSize);
            particlesRef.current.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 1;
                if (p.life <= 0) {
                    particlesRef.current.splice(index, 1);
                } else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = `rgba(0, 209, 80, ${p.life / 60})`; // Brand green particles
                    ctx.fill();
                }
            });
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        return () => window.cancelAnimationFrame(animationFrameId);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(prevId => {
                const currentIndex = outerIcons.findIndex(icon => icon.id === prevId);
                const nextIndex = (currentIndex + 1) % outerIcons.length;
                const pos = getIconPosition(nextIndex);
                const iconCenterX = svgCenter + pos.transformX;
                const iconCenterY = svgCenter + pos.transformY;
                // Performance Optimization: Reduced particles from 20 to 5
                for (let i = 0; i < 5; i++) {
                    particlesRef.current.push({
                        x: iconCenterX,
                        y: iconCenterY,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * 2 + 1,
                        life: Math.random() * 60
                    });
                }
                return outerIcons[nextIndex].id;
            });
        }, 2500);
        return () => clearInterval(interval);
    }, [outerIcons, getIconPosition, svgCenter]);

    return (
        <div className="relative w-[400px] h-[400px] scale-75 md:scale-90 lg:scale-100">
            <canvas ref={canvasRef} width={svgSize} height={svgSize} className="absolute top-0 left-0 pointer-events-none z-10"></canvas>

            <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
                <defs>
                    <filter id="glow_v6">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g>
                    {outerIcons.map((icon1, i) => {
                        const p1 = getIconPosition(i);
                        return outerIcons.map((icon2, j) => {
                            if (i >= j) return null;
                            const p2 = getIconPosition(j);
                            const isLineActive = activeId === icon1.id || activeId === icon2.id;
                            return <line key={`line-${i}-${j}`} x1={p1.svgX} y1={p1.svgY} x2={p2.svgX} y2={p2.svgY} strokeWidth="1.5" style={{
                                stroke: isLineActive ? "#00d150" : "#6B7280",
                                opacity: isLineActive ? 0.6 : 0.1,
                                filter: isLineActive ? "url(#glow_v6)" : "none",
                                transition: "all 1.2s ease-in-out"
                            }} />;
                        });
                    })}
                </g>
            </svg>

            <div className="absolute top-1/2 left-1/2">
                <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
                    <IconWrapper className="w-24 h-24 p-6" isHighlighted={true}>
                        {/* Center Logo - Code/Terminal Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#00d150]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </IconWrapper>
                </div>

                {outerIcons.map((icon, i) => {
                    const {
                        transformX,
                        transformY
                    } = getIconPosition(i);
                    const isActive = activeId === icon.id;
                    return <div key={icon.id} className="absolute z-20" style={{
                        top: 0,
                        left: 0,
                        transform: `translate(${transformX}px, ${transformY}px)`,
                        transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)"
                    }}>
                        <div className="-translate-x-1/2 -translate-y-1/2 relative">
                            <div className="absolute inset-[-20px] bg-[#00d150]/20 rounded-full blur-2xl" style={{
                                opacity: isActive ? 1 : 0,
                                transition: "opacity 0.8s ease-in-out"
                            }} />
                            <IconWrapper className="w-16 h-16" isActive={isActive}>
                                {icon.component}
                            </IconWrapper>
                        </div>
                    </div>;
                })}
            </div>
        </div>
    );
};

export default function NexusOrb() {
    return (
        <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(0, 209, 80, 0.3); filter: drop-shadow(0 0 5px rgba(0, 209, 80, 0.2)); }
                    50% { box-shadow: 0 0 35px 10px rgba(0, 209, 80, 0.1); filter: drop-shadow(0 0 15px rgba(0, 209, 80, 0.1)); }
                    100% { box-shadow: 0 0 20px 0px rgba(0, 209, 80, 0.3); filter: drop-shadow(0 0 5px rgba(0, 209, 80, 0.2)); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 4s ease-in-out infinite;
                }
            `}
            </style>
            <div className="relative z-10 container mx-auto flex items-center justify-center">
                <IconGrid />
            </div>
        </div>
    );
}
