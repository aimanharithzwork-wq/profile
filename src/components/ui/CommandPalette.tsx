"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Info, Briefcase, Mail, Github, Twitter, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const commands = [
    { id: "hero", label: "Home", icon: Home, action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "about", label: "About Identity", icon: Info, action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "projects", label: "View Artifacts", icon: Briefcase, action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "contact", label: "Initiate Contact", icon: Mail, action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "github", label: "Source Protocol (GitHub)", icon: Github, action: () => window.open("https://github.com", "_blank") },
    { id: "twitter", label: "Network Stream (Twitter)", icon: Twitter, action: () => window.open("https://twitter.com", "_blank") },
];

export const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
            if (e.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (cmd: typeof commands[0]) => {
        cmd.action();
        setIsOpen(false);
        setSearch("");
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[10001] flex items-start justify-center pt-[15vh] px-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Palette */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="relative w-full max-w-xl glass-panel border-neon-green/30 bg-cyber-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,159,0.1)]"
                >
                    <div className="flex items-center px-4 py-3 border-b border-neon-green/20">
                        <Search className="text-neon-green/40 mr-3" size={18} />
                        <input
                            autoFocus
                            className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-sm placeholder:text-white/20"
                            placeholder="Search protocols or navigate..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setSelectedIndex(0);
                            }}
                        />
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded border border-white/10 bg-white/5">
                            <Command size={10} className="text-white/40" />
                            <span className="text-[10px] text-white/40 font-mono">K</span>
                        </div>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto py-2">
                        {filteredCommands.map((cmd, index) => (
                            <button
                                key={cmd.id}
                                onClick={() => handleSelect(cmd)}
                                onMouseEnter={() => setSelectedIndex(index)}
                                className={cn(
                                    "w-full flex items-center px-4 py-3 gap-3 transition-colors text-left",
                                    index === selectedIndex ? "bg-neon-green/10 text-neon-green" : "text-white/60 hover:text-white"
                                )}
                            >
                                <cmd.icon size={18} className={index === selectedIndex ? "text-neon-green" : "text-white/20"} />
                                <span className="text-sm font-mono tracking-wide">{cmd.label}</span>
                                {index === selectedIndex && (
                                    <span className="ml-auto text-[10px] uppercase font-bold tracking-widest text-neon-green/60">Select</span>
                                )}
                            </button>
                        ))}
                        {filteredCommands.length === 0 && (
                            <div className="px-4 py-8 text-center text-white/20 font-mono text-xs">
                                NO MATCHING PROTOCOLS FOUND
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
