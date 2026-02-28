import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />

      {/* Footer Decor */}
      <footer className="py-12 px-4 border-t border-neon-green/10 bg-cyber-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-neon-green/40">
            © 2026 CYBER_PORTFOLIO // ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8 text-[10px] font-mono tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-neon-green transition-colors">Twitter</a>
            <a href="#" className="hover:text-neon-green transition-colors">GitHub</a>
            <a href="#" className="hover:text-neon-green transition-colors">LinkedIn</a>
          </div>
          <div className="font-mono text-[10px] text-neon-green/40">
            STATUS: SECURE // LOCATION: 127.0.0.1
          </div>
        </div>
      </footer>
    </div>
  );
}
