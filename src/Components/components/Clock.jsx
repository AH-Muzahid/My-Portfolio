"use client";
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        // Initial set avoiding hydration mismatch
        setTime(new Date().toLocaleString());
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <p className="hidden md:block">{time}</p>;
}
