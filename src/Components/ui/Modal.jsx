"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useLenis } from 'lenis/react';

export default function Modal({ isOpen, onClose, title, children, size = "md" }) {
    const lenis = useLenis();

    // Handle scroll locking
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            lenis?.stop();
        } else {
            document.body.style.overflow = "unset";
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = "unset";
            lenis?.start();
        };
    }, [isOpen, lenis]);

    const sizes = {
        sm: "max-w-md",
        md: "max-w-xl",
        lg: "max-w-3xl",
        xl: "max-w-5xl",
        full: "max-w-full m-4",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 overflow-y-auto pointer-events-none">
                        {/* Scrollable Container Wrapper */}
                        <div className={`relative w-full ${sizes[size]} my-auto pointer-events-auto`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2 }}
                                className="relative w-full bg-[#2b2b2b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <h3 className="text-xl font-semibold text-white tracking-wide">
                                        {title}
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                                    >
                                        <IoClose size={24} />
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-6">
                                    {children}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
