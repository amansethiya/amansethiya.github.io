import React, { memo } from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground = memo(function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#05050A]" />
      
      {/* Aurora Borealis Effects - Using explicit RGBA for animations */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ 
          backgroundColor: 'rgba(124, 58, 237, 0.2)',
          willChange: 'transform, opacity'
        }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ 
          backgroundColor: 'rgba(192, 38, 211, 0.15)',
          willChange: 'transform, opacity'
        }}
        className="absolute -bottom-20 -right-20 w-[700px] h-[700px] rounded-full blur-[140px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ 
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          willChange: 'transform, opacity'
        }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Interactive Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />
      
      {/* Subtle Noise Texture for analog feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
    </div>
  );
});