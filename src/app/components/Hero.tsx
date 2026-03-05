import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, MousePointer2, ChevronDown } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left relative z-20"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/60 border border-violet-500/30 backdrop-blur-md mx-auto lg:mx-0 shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:border-violet-500/50 transition-all cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 text-sm font-medium group-hover:text-violet-200 transition-colors">Available for new projects</span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 animate-gradient-x drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Aman</span>
            </h1>
            
            <div className="text-2xl lg:text-4xl font-bold h-[60px] lg:h-[80px] flex justify-center lg:justify-start items-center">
              <span className="text-slate-400 mr-3">I build</span>
              <TypeAnimation
                sequence={[
                  'Digital Experiences',
                  2000,
                  'Modern Web Apps',
                  2000,
                  'WordPress Solutions',
                  2000,
                  'Interactive UIs',
                  2000,
                  'eCommerce Store',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"
              />
            </div>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Crafting <span className="text-fuchsia-300 font-medium">immersive</span> and <span className="text-cyan-300 font-medium">high-performance</span> web experiences. I blend technical expertise with creative design to bring ideas to life.
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center gap-3 group relative overflow-hidden border border-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio" 
              className="px-8 py-4 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-700/50 text-white font-bold rounded-xl hover:border-cyan-500/50 transition-all flex items-center gap-3 backdrop-blur-md group shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            >
              View Work
              <MousePointer2 className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:text-cyan-400 transition-all group-hover:rotate-12" />
            </motion.a>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 pt-10 border-t border-white/5">
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={22} />} href="https://github.com/amansethiya" label="Github" />
              <SocialIcon icon={<Linkedin size={22} />} href="https://www.linkedin.com/in/amansethiyaa/" label="LinkedIn" />
              <SocialIcon icon={<FaXTwitter size={22} />} href="https://x.com/amansethiyaa" label="Instagram" />
            </div>
            
            <div className="hidden lg:block h-10 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
            
            <div className="text-sm text-slate-500 flex items-center gap-3 bg-slate-900/30 px-4 py-2 rounded-lg border border-white/5">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#05050A] flex items-center justify-center text-[10px] text-slate-500">
                    www
                  </div>
                ))}
              </div>
              <div>
                <span className="text-white font-bold block">50+ Projects</span>
                <span className="text-xs">Successfully Delivered</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Content - 3D Glass Card Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block perspective-1000"
        >
          {/*
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, 1, 0, -1, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-slate-900/40 backdrop-blur-md group"
          >
            
             <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-500/20 mix-blend-overlay z-20 pointer-events-none" />
             
             <img 
               src="https://images.unsplash.com/photo-1753715613457-63127ec40824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwc2V0dXB8ZW58MXx8fHwxNzcwODg3Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
               alt="Developer Workspace" 
               className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
             />
             
             
             
             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none" />
          </motion.div>
        
            */}
          {/* Glowing Orbs behind image */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-[80px] animate-pulse delay-700 mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse mix-blend-screen pointer-events-none" />
          

          
          {/* Floating Code Snippet Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
              default: { duration: 0.8, delay: 0.6 } 
            }}
            className="absolute -bottom-20  ml-50 p-10 bg-[#0A0A12]/90 border border-slate-700/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl max-w-xs z-30"
          >
            <div className="flex justify-between gap-5 items-center mb-4 border-b border-white/5 pb-2">
              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <div className="text-[15px] text-slate-500 font-mono">config.js</div>
            </div>
            
            <div className="space-y-1.5 font-mono text-2xs leading-relaxed">
              <div className="flex">
                <span className="text-fuchsia-400 mr-2">const</span>
                <span className="text-cyan-300">stack</span>
                <span className="text-white mx-2">=</span>
                <span className="text-amber-300">{"["}</span>
              </div>
              <div className="pl-4 text-emerald-300">'React',</div>
              <div className="pl-4 text-emerald-300">'Next.js',</div>
              <div className="pl-4 text-emerald-300">'Tailwind',</div>
              <div className="pl-4 text-emerald-300">'TypeScript'</div>
              <div className="text-amber-300">{"];"}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={20} className="text-cyan-500" />
      </motion.div>
    </section>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <motion.a 
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      aria-label={label}
      className="p-3.5 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-transparent"
    >
      {icon}
    </motion.a>
  );
}