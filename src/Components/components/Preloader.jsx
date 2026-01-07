"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Welcome to My Devfolio"];

export default function Preloader({ onComplete }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) return;

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 1000); // Reduced duration

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        if (index === words.length - 1) {
            const finishTimeout = setTimeout(() => {
                onComplete();
            }, 1000); // Reduced wait time at end
            return () => clearTimeout(finishTimeout);
        }
    }, [index, onComplete]);

    return (
        <motion.div
            className="global-preloader fixed inset-0 z-[99999] flex items-center justify-center bg-[#2b2b2b]"
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                borderBottomLeftRadius: "100%",
                borderBottomRightRadius: "100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="px-10 py-4 text-4xl md:text-6xl font-bold text-white tracking-tight text-center"
            >
                {words[index]}<span className="text-[#00d150]">.</span>
            </motion.p>
        </motion.div>
    );
}
