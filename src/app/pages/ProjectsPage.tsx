import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowLeft, Filter, Search } from 'lucide-react';
import { Link } from 'react-router';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Footer } from '../components/Footer';

const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    description: 'A full-featured e-commerce platform with secure payment processing and inventory management.',
    link: '#',
    github: '#',
    gradient: 'from-violet-600 to-indigo-600'
  },
  {
    id: 2,
    title: 'SaaS Dashboard UI',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Recharts', 'Framer Motion'],
    description: 'Modern dashboard with real-time analytics and beautiful data visualizations.',
    link: '#',
    github: '#',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 3,
    title: 'Real Estate App',
    category: 'Mobile / Web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Firebase', 'Mapbox'],
    description: 'Property listing app with interactive maps and virtual tour features.',
    link: '#',
    github: '#',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'AI / Tool',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['OpenAI API', 'React', 'Tailwind'],
    description: 'AI-powered content creation tool for marketing and copywriting.',
    link: '#',
    github: '#',
    gradient: 'from-fuchsia-600 to-pink-600'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'Mobile / Web',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwfGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Redux', 'Chart.js'],
    description: 'Track workouts, nutrition, and progress with detailed analytics.',
    link: '#',
    github: '#',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbXMlMjBkZXNpZ258ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['WordPress', 'PHP', 'MySQL'],
    description: 'Custom content management system for creative professionals.',
    link: '#',
    github: '#',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 7,
    title: 'Restaurant Booking System',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    description: 'Online reservation system with table management and notifications.',
    link: '#',
    github: '#',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 8,
    title: 'Social Media Dashboard',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'API Integration'],
    description: 'Unified dashboard to manage multiple social media accounts.',
    link: '#',
    github: '#',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 9,
    title: 'Learning Management System',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Express', 'MongoDB'],
    description: 'Complete LMS with course management and student tracking.',
    link: '#',
    github: '#',
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    id: 10,
    title: 'Invoice Generator Tool',
    category: 'AI / Tool',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlfGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'PDF.js', 'Tailwind'],
    description: 'Create professional invoices with automatic calculations and PDF export.',
    link: '#',
    github: '#',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 11,
    title: 'Weather Forecast App',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'OpenWeather API', 'Geolocation'],
    description: 'Beautiful weather app with 7-day forecasts and location search.',
    link: '#',
    github: '#',
    gradient: 'from-sky-400 to-blue-500'
  },
  {
    id: 12,
    title: 'Task Management Board',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'DnD Kit', 'Supabase'],
    description: 'Kanban-style task board with drag-and-drop functionality.',
    link: '#',
    github: '#',
    gradient: 'from-violet-500 to-purple-600'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile / Web', 'AI / Tool'];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#05050A] min-h-screen text-slate-100 relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5 backdrop-blur-xl bg-slate-950/50 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-lg">Back to Home</span>
              </Link>
              
              <div className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  All Projects
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {/* Search Bar */}
              <div className="mb-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                  <input
                    type="text"
                    placeholder="Search projects, technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 bg-slate-900/60 border border-white/10 rounded-2xl focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 outline-none text-white transition-all placeholder:text-slate-500 backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                <Filter size={18} className="text-slate-500 mr-2" />
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
                        layoutId="activeProjectTab"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 -z-10"
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <p className="text-center text-slate-400">
                Showing <span className="text-white font-bold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={project.id}
                    className="group relative bg-[#0A0A12] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.7)] flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay`} />
                      
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                      />
                      
                      {/* Floating Action Bar */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-900/80 backdrop-blur-sm">
                        <a 
                          href={project.github}
                          className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 shadow-lg"
                          title="View Code"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.link}
                          className="p-3 bg-white/90 hover:bg-cyan-400 text-black hover:text-white rounded-full backdrop-blur-md transition-all duration-300 shadow-lg"
                          title="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Neon Glow Line */}
                      <div className={`absolute top-56 left-0 w-full h-0.5 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
                      
                      <div className="mb-3">
                        <span className="px-3 py-1 text-xs font-bold bg-slate-900/50 text-slate-400 rounded-full border border-white/5">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all mb-3">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-1 text-xs font-semibold bg-slate-900/50 text-slate-400 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
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

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
