"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CyberButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary";
    glow?: boolean;
}


export const CyberButton: React.FC<CyberButtonProps> = ({
    children,
    variant = "primary",
    glow = true,
    className,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative px-6 py-2 font-bold uppercase tracking-widest transition-all duration-300",
                "border-2 skew-x-[-15deg] overflow-hidden group",
                variant === "primary"
                    ? "border-neon-green text-neon-green bg-transparent hover:bg-neon-green/10"
                    : "border-neon-purple text-neon-purple bg-transparent hover:bg-neon-purple/10",
                glow && (variant === "primary" ? "shadow-[0_0_15px_rgba(0,255,159,0.3)] hover:shadow-[0_0_25px_rgba(0,255,159,0.5)]" : "shadow-[0_0_15px_rgba(188,19,254,0.3)] hover:shadow-[0_0_25px_rgba(188,19,254,0.5)]"),
                className
            )}
            {...(props as any)}
        >
            <span className="skew-x-[15deg] inline-block relative z-10">{children as React.ReactNode}</span>


            {/* Glitch Overlay */}
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-0 left-0 w-full h-[1px] bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </motion.button>
    );
};
