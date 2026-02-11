"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 180 : 0,
                    scale: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-5 w-5 text-yellow-500" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : -180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center p-2"
            >
                <Moon className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
