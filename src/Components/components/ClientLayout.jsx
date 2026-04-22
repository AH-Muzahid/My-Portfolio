"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from 'lenis/react';
import Preloader from "@/Components/components/Preloader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const lenis = useLenis();

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited_v2");
        if (hasVisited) {
            // Use a small timeout to avoid synchronous cascading renders 
            // and satisfy strict React performance rules.
            const timeout = setTimeout(() => setIsLoading(false), 0);
            return () => clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        if (!lenis) return;
        
        if (isLoading) {
            lenis.stop();
        } else {
            lenis.start();
        }
    }, [isLoading, lenis]);

    const handlePreloaderComplete = () => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited_v2", "true");
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
            </AnimatePresence>
            {children}
            <ToastContainer theme="dark" position="top-center" />
        </>
    );
}
