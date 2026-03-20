import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Check, Zap, Clock, DollarSign, Star } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

const servicesData: Record<string, any> = {
  'wordpress-development': {
    title: 'WordPress Development',
    subtitle: 'Custom WordPress Solutions',
    description: 'I specialize in creating custom WordPress themes and plugins that are optimized for speed, security, and SEO. Whether you need a simple blog or a complex e-commerce site, I can build it.',
    icon: '🌐',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Custom Theme Development',
      'Plugin Development & Integration',
      'WooCommerce Setup & Customization',
      'WordPress Optimization',
      'Migration & Maintenance',
      'Security Hardening',
      'Multisite Configuration',
      'API Integration'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your requirements and goals' },
      { title: 'Design', description: 'Creating mockups and wireframes' },
      { title: 'Development', description: 'Building custom solutions' },
      { title: 'Testing', description: 'Quality assurance and bug fixes' },
      { title: 'Launch', description: 'Deployment and training' },
      { title: 'Support', description: 'Ongoing maintenance and updates' }
    ],
    pricing: {
      starting: '$99',
      delivery: '1-2 weeks'
    },
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'react-applications': {
    title: 'React Applications',
    subtitle: 'Modern Web Applications',
    description: 'Build lightning-fast, interactive web applications using React.js and Next.js. Perfect for SaaS products, dashboards, and complex user interfaces that need to scale.',
    icon: '⚛️',
    gradient: 'from-cyan-400 to-blue-600',
    features: [
      'Single Page Applications (SPA)',
      'Next.js for SSR & SSG',
      'State Management (Redux, Zustand)',
      'API Integration',
      'Responsive Design',
      'Performance Optimization',
      'TypeScript Implementation',
      'Testing & Documentation'
    ],
    process: [
      { title: 'Planning', description: 'Architecture and tech stack selection' },
      { title: 'Design System', description: 'Component library creation' },
      { title: 'Development', description: 'Feature implementation' },
      { title: 'Integration', description: 'API and backend connection' },
      { title: 'Optimization', description: 'Performance tuning' },
      { title: 'Deployment', description: 'CI/CD setup and launch' }
    ],
    pricing: {
      starting: '$249',
      delivery: '2-5 weeks'
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'landing-page-design': {
    title: 'Landing Page Design',
    subtitle: 'High-Converting Landing Pages',
    description: 'Create stunning landing pages that convert visitors into customers. Optimized for marketing campaigns, product launches, and lead generation.',
    icon: '🎨',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Custom Design',
      'Mobile-First Approach',
      'A/B Testing Ready',
      'Fast Loading Speed',
      'SEO Optimized',
      'Analytics Integration',
      'Form Integration',
      'CMS Integration'
    ],
    process: [
      { title: 'Briefing', description: 'Understanding target audience' },
      { title: 'Wireframing', description: 'Layout and flow planning' },
      { title: 'Design', description: 'Visual design creation' },
      { title: 'Development', description: 'Converting to code' },
      { title: 'Optimization', description: 'Speed and conversion optimization' },
      { title: 'Launch', description: 'Deployment and monitoring' }
    ],
    pricing: {
      starting: '$99',
      delivery: '1-2 weeks'
    },
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbnxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'performance-optimization': {
    title: 'Performance Optimization',
    subtitle: 'Speed Up Your Website',
    description: 'Dramatically improve your website\'s loading speed and Core Web Vitals. Better performance means better SEO rankings and user experience.',
    icon: '🚀',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'Core Web Vitals Optimization',
      'Image Optimization',
      'Code Minification',
      'Caching Implementation',
      'CDN Setup',
      'Database Optimization',
      'Lazy Loading',
      'Performance Monitoring'
    ],
    process: [
      { title: 'Audit', description: 'Comprehensive performance analysis' },
      { title: 'Planning', description: 'Optimization strategy' },
      { title: 'Implementation', description: 'Apply optimizations' },
      { title: 'Testing', description: 'Performance testing' },
      { title: 'Monitoring', description: 'Ongoing performance tracking' },
      { title: 'Reporting', description: 'Results documentation' }
    ],
    pricing: {
      starting: '$49',
      delivery: '1 week'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG9wdGltaXphdGlvbnxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'website-redesign': {
    title: 'Website Redesign',
    subtitle: 'Modernize Your Online Presence',
    description: 'Transform your outdated website into a modern, user-friendly experience. Keep your content, upgrade everything else.',
    icon: '🔄',
    gradient: 'from-green-400 to-emerald-600',
    features: [
      'Modern UI/UX Design',
      'Responsive Layout',
      'Content Migration',
      'Brand Refresh',
      'Improved Navigation',
      'Accessibility Compliance',
      'SEO Preservation',
      'Training & Handoff'
    ],
    process: [
      { title: 'Analysis', description: 'Current site audit' },
      { title: 'Strategy', description: 'Redesign planning' },
      { title: 'Design', description: 'New design creation' },
      { title: 'Development', description: 'Implementation' },
      { title: 'Migration', description: 'Content transfer' },
      { title: 'Launch', description: 'Go live and redirect setup' }
    ],
    pricing: {
      starting: '$149',
      delivery: '2-3 weeks'
    },
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'bug-fixing-maintenance': {
    title: 'Bug Fixing & Maintenance',
    subtitle: 'Keep Your Site Running Smoothly',
    description: 'Regular maintenance, security updates, and quick bug fixes to ensure your website runs flawlessly 24/7.',
    icon: '🛠️',
    gradient: 'from-yellow-400 to-orange-500',
    features: [
      'Bug Fixes',
      'Security Updates',
      'Plugin Updates',
      'Backup Management',
      '24/7 Monitoring',
      'Performance Checks',
      'Emergency Support',
      'Monthly Reports'
    ],
    process: [
      { title: 'Onboarding', description: 'Site assessment and access setup' },
      { title: 'Monitoring', description: 'Continuous site monitoring' },
      { title: 'Updates', description: 'Regular maintenance tasks' },
      { title: 'Fixes', description: 'Quick bug resolution' },
      { title: 'Reporting', description: 'Monthly status reports' },
      { title: 'Support', description: 'Ongoing technical support' }
    ],
    pricing: {
      starting: '$75/mo',
      delivery: 'Ongoing'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZXxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080'
  }
};

export function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="bg-[#05050A] min-h-screen text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#05050A] min-h-screen text-slate-100 relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5 backdrop-blur-xl bg-slate-950/50 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-6">
            <Link to="/#services" className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors group w-fit">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-lg">Back to Services</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                  {service.subtitle}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Pricing Info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3 bg-slate-900/60 px-6 py-3 rounded-xl border border-white/10">
                    <DollarSign className="text-green-400" size={24} />
                    <div>
                      <div className="text-xs text-slate-500">Starting at</div>
                      <div className="text-xl font-bold text-white">{service.pricing.starting}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-900/60 px-6 py-3 rounded-xl border border-white/10">
                    <Clock className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-xs text-slate-500">Delivery</div>
                      <div className="text-xl font-bold text-white">{service.pricing.delivery}</div>
                    </div>
                  </div>
                </div>

                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all border border-white/10"
                >
                  Get Started <Zap size={20} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 mix-blend-overlay`} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-950/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What's Included</h2>
              <p className="text-slate-400 text-lg">Everything you need for success</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature: string, index: number) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-6 bg-slate-900/40 rounded-xl border border-white/5 hover:border-white/10 transition-all group"
                >
                  <Check className="text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Process</h2>
              <p className="text-slate-400 text-lg">A proven workflow for exceptional results</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step: any, index: number) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute z-1 -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="p-8 bg-slate-900/60 z-0 rounded-2xl border border-white/5 hover:border-white/10 transition-all h-full pt-10">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-slate-950/50">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
}
