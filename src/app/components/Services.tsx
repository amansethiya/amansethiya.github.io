import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Code, Layout, Rocket, RefreshCw, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins built for speed and security.',
    icon: <Monitor size={32} />,
    color: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20'
  },
  {
    id: 'react-applications',
    title: 'React Applications',
    description: 'Modern, interactive web applications using React.js and Next.js.',
    icon: <Code size={32} />,
    color: 'from-cyan-400 to-blue-600',
    shadow: 'shadow-cyan-500/20'
  },
  {
    id: 'landing-page-design',
    title: 'Landing Page Design',
    description: 'High-converting landing pages optimized for marketing campaigns.',
    icon: <Layout size={32} />,
    color: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20'
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Boosting website speed and Core Web Vitals for better SEO.',
    icon: <Rocket size={32} />,
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-500/20'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Modernizing outdated websites with fresh design and cleaner code.',
    icon: <RefreshCw size={32} />,
    color: 'from-green-400 to-emerald-600',
    shadow: 'shadow-green-500/20'
  },
  {
    id: 'bug-fixing-maintenance',
    title: 'Bug Fixing & Maintenance',
    description: 'Regular updates, security patches, and troubleshooting issues.',
    icon: <PenTool size={32} />,
    color: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-yellow-500/20'
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Providing high-quality web development solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group p-8 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Bottom animated border */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-800 border border-slate-700 group-hover:border-transparent group-hover:bg-gradient-to-br ${service.color} text-white shadow-lg ${service.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-base mb-8 flex-grow group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>

                <Link to={`/services/${service.id}`} className="flex items-center text-sm font-bold text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}