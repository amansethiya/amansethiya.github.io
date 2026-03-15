import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Heart, ArrowUpRight } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden border-t border-slate-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">amazing together.</span>
            </h2>
            <p className="text-slate-400 max-w-md text-lg">
              Open for freelance opportunities and collaborations. Let's take your digital presence to the next level.
            </p>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-6">
            <a 
              href="mailto:amansethiya.dev@gmail.com"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-semibold text-white hover:text-cyan-400 transition-colors"
            >
              @amansethiya.dev
              <motion.div
                whileHover={{ x: 5, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </a>
            
            <div className="flex gap-4">
              <SocialLink href="https://github.com/amansethiya" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/amansethiyaa/" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="https://x.com/amansethiyaa" icon={<FaXTwitter size={24} />} label="Twitter" />
            </div>
          </div>
        </div>

        {/* Marquee Effect */}
        <div className="w-full overflow-hidden mb-20 border-y border-slate-800/50 py-8 bg-slate-900/30 backdrop-blur-sm">
          <motion.div 
            className="flex whitespace-nowrap gap-16"
            animate={{ x: ["0%", "-200%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20,  }}
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="text-5xl md:text-7xl font-black text-slate-800/50 uppercase tracking-tighter">
            WordPress • React • Frontend • Design • Development • UI/UX • Full-Stack •
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Aman Gupta. All rights reserved.</p>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Nice to See You 👋🏻</span>
          </div>

          <p className="flex items-center gap-1 group">
            Made with <Heart size={14} className="text-slate-600 group-hover:text-red-500 group-hover:fill-red-500 transition-colors duration-300" /> by Aman
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-110 border border-slate-800 hover:border-cyan-400"
    >
      {icon}
    </a>
  );
}
