"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
    children: React.ReactNode;
    width?: "100%" | "fit-content";
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export default function FadeIn({
    children,
    width = "fit-content",
    direction = "up",
    delay = 0,
    duration = 0.5,
    className = "",
    once = true,
}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) { // Reset if not once
            controls.start("hidden");
        }
    }, [isInView, controls, once]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut" as any, // Cast to any to avoid strict Easing type mismatch
            },
        },
    };

    return (
        <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={controls}
            >
                {children}
            </motion.div>
        </div>
    );
}
