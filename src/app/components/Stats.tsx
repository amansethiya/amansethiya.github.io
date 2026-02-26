import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const stats = [
  { label: 'Years of Experience', value: 4, suffix: '+', color: 'from-fuchsia-500 to-pink-500' },
  { label: 'Projects Completed', value: 50, suffix: '+', color: 'from-cyan-400 to-blue-500' },
  { label: 'Happy Clients', value: 30, suffix: '+', color: 'from-emerald-400 to-green-500' },
  { label: 'Coffee Cups', value: 1000, suffix: '+', color: 'from-amber-400 to-orange-500' },
];

function Counter({ value, suffix, color }: { value: number, suffix: string, color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2500, bounce: 0.1 });
  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className={`tabular-nums bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Glassmorphism Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/5 p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.1 
                }}
                className="space-y-3 group hover:-translate-y-2 transition-transform duration-300 px-2"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                </div>
                <div className="text-slate-400 font-medium text-[15px] md:text-base uppercase tracking-wider group-hover:text-slate-200 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
