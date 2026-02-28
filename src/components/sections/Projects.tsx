"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase";
import { ExternalLink, Github, Layers } from "lucide-react";
import { CyberButton } from "@/components/ui/CyberButton";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    image_url: string;
    live_url: string;
    github_url: string;
    featured: boolean;
}

const MOCK_PROJECTS: Project[] = [
    {
        id: "1",
        title: "NeuroLink Dashboard",
        description: "A real-time neural activity monitor built with Next.js and WebSockets.",
        stack: ["Next.js", "Three.js", "Supabase"],
        image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        live_url: "#",
        github_url: "#",
        featured: true,
    },
    {
        id: "2",
        title: "CyberCommerce Engine",
        description: "High-performance headless e-commerce stack with custom animation engine.",
        stack: ["React", "Tailwind", "Node.js"],
        image_url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
        live_url: "#",
        github_url: "#",
        featured: true,
    }
];

export const Projects = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        if (!supabase) return;

        const fetchProjects = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from("projects")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (!error && data && data.length > 0) {
                    setProjects(data as Project[]);
                }
            } catch (err) {
                console.error("Error fetching projects:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [supabase]);

    return (
        <section id="projects" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                            Featured <span className="text-neon-purple">Artifacts</span>
                        </h2>
                        <div className="h-1 w-24 bg-neon-purple mt-2" />
                    </div>
                    <p className="text-white/40 font-mono text-sm max-w-xs">
                        A COLLECTION OF DIGITAL SYSTEMS ARCHITECTED FOR THE FUTURE.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden glass-panel border border-neon-purple/20 rounded-xl"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-neon-purple/10 mix-blend-overlay z-10" />
                                <Image
                                    src={project.image_url}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent z-20" />
                            </div>

                            {/* Project Content */}
                            <div className="p-8 relative z-30">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-neon-purple/30 bg-neon-purple/5 rounded text-white/70">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-purple transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-white/60 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex gap-6">
                                    <a
                                        href={project.live_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-neon-purple transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-neon-purple transition-colors"
                                    >
                                        <Github size={16} /> Source Code
                                    </a>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <Layers className="text-neon-purple" size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
