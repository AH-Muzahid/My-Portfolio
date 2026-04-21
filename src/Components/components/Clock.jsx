"use client";
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(() => new Date().toLocaleString());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => setMounted(true), 0);
        // Initial set avoiding hydration mismatch
        // Initial time set via useState initializer
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return null;
    }
    return <p className="hidden md:block">{time}</p>;
}
