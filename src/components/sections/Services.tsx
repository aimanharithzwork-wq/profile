"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Rocket, Brain, Layers, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Web Development",
        description: "High-performance Next.js architectures with immersive UI/UX and motion design.",
        icon: Code2,
        color: "neon-green",
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile systems built for scale and seamless user journeys.",
        icon: Smartphone,
        color: "neon-purple",
    },
    {
        title: "SaaS Development",
        description: "Full-cycle SaaS engineering from multi-tenant logic to complex integrations.",
        icon: Rocket,
        color: "neon-green",
    },
    {
        title: "AI Integration",
        description: "Architecting intelligent systems leveraging LLMs and custom ML pipelines.",
        icon: Brain,
        color: "neon-purple",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 px-4 bg-cyber-black/50">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
                        <span className="text-white">Core</span> <span className="text-neon-green">Capabilities</span>
                    </h2>
                    <div className="h-1 w-20 bg-neon-green mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "glass-panel p-8 rounded-lg border-t-2 flex flex-col items-center text-center group cursor-pointer",
                                service.color === "neon-green" ? "border-neon-green/50" : "border-neon-purple/50"
                            )}
                        >
                            <div className={cn(
                                "p-4 rounded-full mb-6 transition-transform duration-500 group-hover:rotate-[360deg]",
                                service.color === "neon-green" ? "bg-neon-green/10 text-neon-green" : "bg-neon-purple/10 text-neon-purple"
                            )}>
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">{service.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>

                            {/* Card Footer Decor */}
                            <div className="mt-8 flex gap-1 items-center opacity-20 group-hover:opacity-100 transition-opacity">
                                <div className={cn("w-1 h-1 rounded-full", service.color === "neon-green" ? "bg-neon-green" : "bg-neon-purple")} />
                                <div className={cn("w-12 h-[1px]", service.color === "neon-green" ? "bg-neon-green" : "bg-neon-purple")} />
                                <Layers size={12} className={service.color === "neon-green" ? "text-neon-green" : "text-neon-purple"} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
