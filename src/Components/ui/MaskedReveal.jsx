"use client";
import { motion } from "framer-motion";

export const MaskedReveal = ({ children, className = "", delay = 0, duration = 0.8 }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
                duration: duration,
                ease: "easeOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};
