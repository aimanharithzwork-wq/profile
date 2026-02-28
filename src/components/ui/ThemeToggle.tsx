"use client";

import React, { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<"green" | "purple">("green");

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "purple") {
            root.style.setProperty("--neon-green", "#bc13fe");
            root.style.setProperty("--foreground", "#bc13fe");
            root.style.setProperty("--color-cyber-grid", "rgba(188, 19, 254, 0.05)");
        } else {
            root.style.setProperty("--neon-green", "#00ff9f");
            root.style.setProperty("--foreground", "#00ff9f");
            root.style.setProperty("--color-cyber-grid", "rgba(0, 255, 159, 0.05)");
        }
    }, [theme]);

    return (
        <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "green" ? "purple" : "green")}
            className="fixed bottom-10 right-10 z-[10000] p-4 glass-panel border border-neon-green/30 rounded-full text-neon-green shadow-lg shadow-neon-green/20"
            aria-label="Toggle Theme"
        >
            <Palette size={24} />
        </motion.button>
    );
};
