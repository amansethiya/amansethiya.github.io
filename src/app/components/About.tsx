import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Code, User, ArrowRight } from 'lucide-react';
import profileImg from "../../assets/about.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 max-w-lg mx-auto lg:mx-0"
          >
            <div className="relative aspect-square rounded-[20rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <img
                src={profileImg}
                alt="Aman Gupta"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            </div>

            {/* Experience Card Overlay */}

          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 relative z-10">About Me</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-cyan-500 rounded-full"
              />
            </div>

            <h3 className="text-2xl font-semibold text-slate-200">
              Freelance WordPress & <span className="text-cyan-400">Frontend Developer</span>
            </h3>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I'm Aman Gupta, a passionate developer with a knack for building robust and user-friendly web applications. With a strong foundation in WordPress and modern JavaScript frameworks like React, I help businesses transform their ideas into digital reality.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design, ensuring that every project I deliver is not only functional but also visually appealing and performance-optimized.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <ExperienceBadge
                icon={<Code size={24} className="text-purple-400" />}
                title="4+ Years"
                subtitle="WordPress Dev"
                delay={0}
              />
              <ExperienceBadge
                icon={<Briefcase size={24} className="text-cyan-400" />}
                title="2 Years"
                subtitle="React / JS"
                delay={0.1}
              />
              <ExperienceBadge
                icon={<User size={24} className="text-green-400" />}
                title="Freelance"
                subtitle="Available"
                delay={0.2}
              />

              <div className=" flex justify-center lg:justify-space-between">
                <a href="#contact" className="pt-5 text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-2 group text-lg">

                  Let's Talk Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperienceBadge({ icon, title, subtitle, delay }: { icon: React.ReactNode, title: string, subtitle: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + delay }}
      className="flex items-center gap-4 p-4 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all cursor-default group"
    >
      <div className="p-3 bg-slate-950 rounded-lg shadow-inner group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-left">
        <div className="font-bold text-white text-lg">{title}</div>
        <div className="text-slate-500 text-sm group-hover:text-cyan-400/80 transition-colors">{subtitle}</div>
      </div>
    </motion.div>
  );
}
