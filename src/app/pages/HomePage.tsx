import React, { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { ScrollToTop } from '../components/ScrollToTop';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { usePerformance } from '../hooks/usePerformance';

// Lazy load components for better performance
const About = lazy(() => import('../components/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('../components/Skills').then(module => ({ default: module.Skills })));
const Services = lazy(() => import('../components/Services').then(module => ({ default: module.Services })));
const Portfolio = lazy(() => import('../components/Portfolio').then(module => ({ default: module.Portfolio })));
const Stats = lazy(() => import('../components/Stats').then(module => ({ default: module.Stats })));
const Testimonials = lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('../components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('../components/Footer').then(module => ({ default: module.Footer })));

// Loading fallback component
function SectionLoader() {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
    </div>
  );
}

export function HomePage() {
  // Enable smooth scrolling for anchor links
  useSmoothScroll();
  
  // Performance optimizations
  usePerformance();

  return (
    <div className="bg-[#05050A] min-h-screen text-slate-100 selection:bg-fuchsia-500/30 selection:text-fuchsia-200 relative overflow-x-hidden">
      <AnimatedBackground />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}