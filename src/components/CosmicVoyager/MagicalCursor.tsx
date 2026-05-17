import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

const MagicalCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ['#0ea5e9', '#8b5cf6', '#d946ef', '#ffffff'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      
      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ scale: 1, opacity: 1, x: particle.x, y: particle.y }}
            animate={{ scale: 0, opacity: 0, x: particle.x + (Math.random() - 0.5) * 40, y: particle.y + (Math.random() - 0.5) * 40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-1.5 h-1.5 rounded-full blur-[1px]"
            style={{ backgroundColor: particle.color, boxShadow: `0 0 8px ${particle.color}` }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MagicalCursor;
