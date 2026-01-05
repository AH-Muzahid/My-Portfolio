"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/Components/components/Preloader";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited_v2");
        if (hasVisited) {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
            // Optional: window.scrollTo(0, 0); 
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isLoading]);

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
        </>
    );
}
