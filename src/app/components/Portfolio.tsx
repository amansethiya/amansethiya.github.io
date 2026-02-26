import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Zap } from 'lucide-react';
import { Link } from 'react-router';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    link: '#',
    github: '#',
    gradient: 'from-violet-600 to-indigo-600'
  },
  {
    title: 'SaaS Dashboard UI',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Recharts', 'Framer Motion'],
    link: '#',
    github: '#',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Real Estate App',
    category: 'Mobile / Web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Firebase', 'Mapbox'],
    link: '#',
    github: '#',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'AI Content Generator',
    category: 'AI / Tool',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['OpenAI API', 'React', 'Tailwind'],
    link: '#',
    github: '#',
    gradient: 'from-fuchsia-600 to-pink-600'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile / Web', 'AI / Tool'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#05050A] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-violet-900/10 via-transparent to-cyan-900/10 -skew-y-12 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            A selection of my recent work, showcasing innovation and technical excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-md relative overflow-hidden group ${
                  activeCategory === cat
                    ? 'text-white border-transparent shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]'
                    : 'bg-slate-900/40 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 -z-10"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative bg-[#0A0A12] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.7)] flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay`} />
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  
                  {/* Floating Action Bar */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="p-3 bg-slate-900/90 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 shadow-lg"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.link}
                        className="p-3 bg-white/90 hover:bg-cyan-400 text-black hover:text-white rounded-full backdrop-blur-md transition-all duration-300 shadow-lg"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Neon Glow Line */}
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {project.title}
                    </h3>
                    <motion.div 
                      whileHover={{ rotate: 45 }}
                      className="text-slate-500 group-hover:text-white transition-colors"
                    >
                      <ArrowUpRight size={24} />
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 text-xs font-semibold bg-slate-900/50 text-slate-400 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
            <Link to="/projects" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900/50 border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 group shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
                View All Projects 
                <Zap size={18} className="text-yellow-400 group-hover:text-black fill-yellow-400 group-hover:fill-black transition-colors" />
            </Link>
        </div>
      </div>
    </section>
  );
}