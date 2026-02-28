"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase";
import { Plus, Trash2, Edit, MessageSquare, Briefcase, LogOut } from "lucide-react";
import { CyberButton } from "@/components/ui/CyberButton";
import { cn } from "@/lib/utils";

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<"projects" | "messages">("projects");
    const [projects, setProjects] = useState<any[]>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        if (!supabase) {
            setLoading(false);
            return;
        }

        setLoading(true);
        if (activeTab === "projects") {
            const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
            setProjects(data || []);
        } else {
            const { data } = await supabase.from("messages").select("*").order("created_at", { ascending: false });
            setMessages(data || []);
        }
        setLoading(false);
    };

    const deleteProject = async (id: string) => {
        if (!supabase) return;
        if (confirm("Terminate project data?")) {
            await supabase.from("projects").delete().eq("id", id);
            fetchData();
        }
    };

    return (
        <div className="min-h-screen pt-24 px-4 pb-12">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter text-white">Central <span className="text-neon-green">Intelligence</span></h1>
                        <p className="text-white/40 font-mono text-xs uppercase mt-1">Authorized Access Only // System Admin</p>
                    </div>

                    <div className="flex bg-cyber-black border border-neon-green/20 rounded-lg p-1 glass-panel">
                        <button
                            onClick={() => setActiveTab("projects")}
                            className={cn("px-6 py-2 rounded-md font-mono text-xs transition-all", activeTab === "projects" ? "bg-neon-green text-black" : "text-white/60 hover:text-white")}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => setActiveTab("messages")}
                            className={cn("px-6 py-2 rounded-md font-mono text-xs transition-all", activeTab === "messages" ? "bg-neon-green text-black" : "text-white/60 hover:text-white")}
                        >
                            Messages
                        </button>
                    </div>
                </div>

                {activeTab === "projects" ? (
                    <div className="space-y-6">
                        <div className="flex justify-end">
                            <CyberButton className="flex items-center gap-2">
                                <Plus size={18} /> New Project
                            </CyberButton>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {loading ? (
                                <div className="text-center py-20 text-neon-green animate-pulse font-mono">LOADING_DATABASES...</div>
                            ) : (
                                projects.map((project) => (
                                    <div key={project.id} className="glass-panel p-6 border border-neon-green/10 rounded-xl flex justify-between items-center group">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center text-neon-green">
                                                <Briefcase size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg">{project.title}</h3>
                                                <p className="text-xs text-white/40 font-mono italic">{project.id}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-white/40 hover:text-white transition-colors"><Edit size={18} /></button>
                                            <button onClick={() => deleteProject(project.id)} className="p-2 text-white/40 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {loading ? (
                            <div className="text-center py-20 text-neon-green animate-pulse font-mono">RETRIEVING_TRANSMISSIONS...</div>
                        ) : (
                            messages.map((msg) => (
                                <div key={msg.id} className="glass-panel p-8 border border-neon-green/10 rounded-xl space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-neon-green/10 rounded-full flex items-center justify-center text-neon-green">
                                                <MessageSquare size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white">{msg.name}</p>
                                                <p className="text-xs text-white/40 font-mono">{msg.email}</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono text-neon-green/40">{new Date(msg.created_at).toLocaleString()}</span>
                                    </div>
                                    <p className="text-white/70 bg-cyber-black/50 p-4 rounded-lg border border-neon-green/5 italic">
                                        "{msg.message}"
                                    </p>
                                </div>
                            ))
                        )}
                        {!loading && messages.length === 0 && (
                            <div className="text-center py-20 text-white/20 font-mono text-sm">NO INCOMING TRANSMISSIONS DETECTED.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
