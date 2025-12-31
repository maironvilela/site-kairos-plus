"use client";

import { motion } from "framer-motion";

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
};

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-100px" }} // Repeats animation when scrolling back
            transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
