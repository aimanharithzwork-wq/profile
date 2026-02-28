"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Cpu, Globe, Zap } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel border border-neon-green/30 rounded-lg overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,255,159,0.05)]"
                >
                    {/* Terminal Header */}
                    <div className="bg-neon-green/10 px-4 py-2 border-b border-neon-green/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <TerminalIcon size={16} className="text-neon-green" />
                            <span className="text-xs font-mono uppercase tracking-wider">identity_profile.sh — 80x24</span>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed space-y-6">
                        <div className="space-y-2">
                            <p className="text-neon-green/50"># whoami</p>
                            <p className="text-white">
                                I am a Senior Full-Stack Developer and UI/UX Futurist dedicated to building systems that transcend the ordinary. My work sits at the intersection of performance engineering and immersive design.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-neon-green/50"># cat skills.json</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-3 border border-neon-green/20 rounded bg-neon-green/5">
                                    <Cpu size={20} className="text-neon-green mt-1" />
                                    <div>
                                        <p className="font-bold text-neon-green">System Architecture</p>
                                        <p className="text-xs text-white/70">SaaS, AI Integrations, Microservices</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 border border-neon-purple/20 rounded bg-neon-purple/5">
                                    <Zap size={20} className="text-neon-purple mt-1" />
                                    <div>
                                        <p className="font-bold text-neon-purple">Frontend Mastery</p>
                                        <p className="text-xs text-white/70">Next.js, Framer Motion, Three.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-neon-green/50"># grep --mission life</p>
                            <p className="text-neon-green italic">
                                "To architect digital experiences that feel tangible, alive, and undeniably premium."
                            </p>
                        </div>

                        <div className="pt-4 flex items-center gap-2">
                            <span className="text-neon-green">guest@cyber-portfolio:~$</span>
                            <span className="w-2 h-5 bg-neon-green animate-pulse" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
