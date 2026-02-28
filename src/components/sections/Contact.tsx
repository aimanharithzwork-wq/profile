"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { CyberButton } from "@/components/ui/CyberButton";
import { createClient } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!supabase) {
            console.error("Transmission failed: Supabase client not initialized.");
            setStatus("error");
            alert("Supabase is not configured. Email submission is disabled in this demo.");
            return;
        }

        setStatus("loading");

        try {
            const { error } = await supabase
                .from("messages")
                .insert([formData]);

            if (error) throw error;

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            console.error("Submission error:", err);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-cyber-black">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
                        <span className="text-white">Initiate</span> <span className="text-neon-green">Contact</span>
                    </h2>
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest">Transmit your inquiry via the secure channel.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border border-neon-green/20"
                >
                    {status === "success" ? (
                        <div className="py-12 text-center space-y-4">
                            <CheckCircle2 size={64} className="text-neon-green mx-auto animate-bounce" />
                            <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                            <p className="text-white/60">Your message has been encrypted and sent to my neural network.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-neon-green/60 px-1">Source Name</label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-green/40" />
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-cyber-black/50 border border-neon-green/20 rounded-lg py-4 pl-12 pr-4 text-white focus:border-neon-green/60 focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all"
                                            placeholder="Enter identity..."
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-neon-green/60 px-1">Secure Email</label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-green/40" />
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-cyber-black/50 border border-neon-green/20 rounded-lg py-4 pl-12 pr-4 text-white focus:border-neon-green/60 focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all"
                                            placeholder="Enter coordinate..."
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-neon-green/60 px-1">Message Packet</label>
                                <div className="relative">
                                    <MessageSquare size={18} className="absolute left-4 top-6 text-neon-green/40" />
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full bg-cyber-black/50 border border-neon-green/20 rounded-lg py-4 pl-12 pr-4 text-white focus:border-neon-green/60 focus:outline-none focus:ring-1 focus:ring-neon-green/30 transition-all resize-none"
                                        placeholder="Describe mission parameters..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <CyberButton
                                    type="submit"
                                    className="w-full py-6 text-lg"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? "Transmitting..." : "Send Transmission"}
                                </CyberButton>
                                {status === "error" && (
                                    <p className="text-red-500 text-xs mt-4 text-center font-mono">ENCRYPTION ERROR: Transmission failed. Please try again.</p>
                                )}
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
