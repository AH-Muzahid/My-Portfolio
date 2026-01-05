"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import NexusOrb from "@/Components/components/NexusOrb";

export default function HeroBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const { clientX, clientY } = e;

            // Calculate normalized mouse position (-1 to 1)
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;

            mouseX.set(x * 100);
            mouseY.set(y * 100);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <motion.div
                style={{ x: springX, y: springY }}
                className="w-full h-full flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 0.45,
                        scale: 0.85,
                        rotate: 360,
                        x: [0, 300, -300, 150, -150, 0],
                        y: [0, -150, 150, -100, 100, 0]
                    }}
                    transition={{
                        opacity: { duration: 1.5 },
                        scale: { duration: 1.5 },
                        rotate: { duration: 150, repeat: Infinity, ease: "linear" },
                        x: { duration: 50, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
                        y: { duration: 60, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
                    }}
                    className="w-full max-w-[800px] max-h-[800px] flex items-center justify-center"
                >
                    <NexusOrb />
                </motion.div>
            </motion.div>
        </div>
    );
}
