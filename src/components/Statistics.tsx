"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 200, suffix: "+" },
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Team Members", value: 15, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toFixed(0) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary mb-2 block" />;
}

export default function Statistics() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up">
                            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[160px]">
                                <div className="h-12 flex items-center justify-center">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
