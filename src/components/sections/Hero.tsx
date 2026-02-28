"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";
import { CyberButton } from "@/components/ui/CyberButton";
import { Terminal } from "lucide-react";

export const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Web Apps • SaaS • Mobile Apps • AI Systems";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
            {/* Background Grid Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,255,159,0.05)_0%,transparent_70%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green/30 bg-neon-green/5 rounded-full mb-6 glass-panel">
                    <Terminal size={14} className="text-neon-green" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em]">System Status: Operational</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <GlitchText text="Building Digital Systems" className="block" />
                    <span className="text-white">That Feel Alive.</span>
                </h1>

                <div className="h-8 mb-10">
                    <p className="text-xl md:text-2xl font-mono text-neon-green/80">
                        {typedText}
                        <span className="animate-pulse">_</span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <CyberButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                    </CyberButton>
                    <CyberButton
                        variant="secondary"
                        glow
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Work With Me
                    </CyberButton>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 hidden lg:block opacity-30 font-mono text-[10px] space-y-1 pointer-events-none">
                <p>PROTOCOL: PORTFOLIO_V2.0</p>
                <p>UPTIME: 99.99%</p>
                <p>ENCRYPTION: AES-256</p>
            </div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20 pointer-events-none">
                <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-neon-green to-transparent" />
                <span className="vertical-text tracking-[0.5em] text-[10px] uppercase">Scroll to explore</span>
                <div className="h-40 w-[1px] bg-gradient-to-t from-transparent via-neon-green to-transparent" />
            </div>
        </section>
    );
};
