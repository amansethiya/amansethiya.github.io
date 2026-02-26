import React, { useEffect, useRef } from 'react';

export function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    
    const colors = [
      'rgba(139, 92, 246, ', // Violet
      'rgba(6, 182, 212, ',  // Cyan
      'rgba(232, 121, 249, ', // Fuchsia
      'rgba(56, 189, 248, '   // Light Blue
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      decay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 2;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.95; // Friction
        this.speedY *= 0.95; // Friction
        this.size *= 0.96;
        this.life -= this.decay;
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.life;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color + this.life + ')';
        context.fill();
        context.globalAlpha = 1.0;
      }
    }

    const addParticles = (e: MouseEvent) => {
      // Create a small splash on move
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };
    
    const clickSplash = (e: MouseEvent) => {
      // Create a big splash on click
      for (let i = 0; i < 20; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        
        if (particles[i].life <= 0 || particles[i].size <= 0.5) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', addParticles);
    window.addEventListener('mousedown', clickSplash);
    
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', addParticles);
      window.removeEventListener('mousedown', clickSplash);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9990]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
