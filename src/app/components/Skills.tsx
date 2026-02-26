import React from 'react';
import { motion } from 'motion/react';
import { Code2, FileCode2, Globe, Layout, Search, Zap, Server, Database } from 'lucide-react';

const skills = [
  { name: 'WordPress', icon: <Globe size={32} />, level: 'Expert', color: 'text-blue-500', bg: 'group-hover:bg-blue-500/10' },
  { name: 'React JS', icon: <Code2 size={32} />, level: 'Advanced', color: 'text-cyan-400', bg: 'group-hover:bg-cyan-400/10' },
  { name: 'JavaScript', icon: <FileCode2 size={32} />, level: 'Advanced', color: 'text-yellow-400', bg: 'group-hover:bg-yellow-400/10' },
  { name: 'HTML5 / CSS3', icon: <Layout size={32} />, level: 'Expert', color: 'text-orange-500', bg: 'group-hover:bg-orange-500/10' },
  { name: 'Tailwind CSS', icon: <Zap size={32} />, level: 'Expert', color: 'text-cyan-300', bg: 'group-hover:bg-cyan-300/10' },
  { name: 'Speed Opt.', icon: <Zap size={32} />, level: 'Advanced', color: 'text-yellow-300', bg: 'group-hover:bg-yellow-300/10' },
  { name: 'SEO Dev', icon: <Search size={32} />, level: 'Intermediate', color: 'text-emerald-400', bg: 'group-hover:bg-emerald-400/10' },
  { name: 'Backend', icon: <Database size={32} />, level: 'Intermediate', color: 'text-fuchsia-400', bg: 'group-hover:bg-fuchsia-400/10' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#05050A] relative z-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My technical stack is focused on performance, scalability, and maintainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/10 transition-all group cursor-default relative overflow-hidden shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]"
            >
              {/* Animated Glow Border */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-${skill.color.split('-')[1]}-500/20`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  className={`mb-6 ${skill.color} p-4 rounded-xl bg-slate-950/80 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-${skill.color.split('-')[1]}-500/50 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)]`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                >
                  {skill.icon}
                </motion.div>
                
                <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                
                {/* Skill Bar */}
                <div className="w-full bg-slate-800/50 h-1.5 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className={`h-full ${skill.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`}
                  />
                </div>
                
                <span className="text-xs text-slate-500 mt-2 font-medium uppercase tracking-wider group-hover:text-slate-400 transition-colors">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
