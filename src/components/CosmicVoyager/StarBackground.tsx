import React from 'react';
import { motion } from 'motion/react';

const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#000105] overflow-hidden">
      {/* Background Image - Cinematic Close-up Satellite Earth */}
      <motion.div 
        initial={{ scale: 1.25, opacity: 0, x: "-5%", y: "5%" }}
        animate={{ 
          scale: [1.25, 1.35, 1.25],
          opacity: 0.9,
          x: ["-5%", "0%", "-5%"],
          y: ["5%", "0%", "5%"]
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop" 
          alt="Satellite view of Earth limb" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.3),transparent_70%)]" />

      {/* Magic Nebula Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000105]/40 via-[#000105]/20 to-[#000105]" />
      
      {/* Aurora-style shifting glow */}
      <motion.div 
        animate={{
          opacity: [0.1, 0.2, 0.1],
          filter: ["hue-rotate(0deg)", "hue-rotate(40deg)", "hue-rotate(0deg)"]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]"
      />
      
      {/* Floating Stardust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>
    </div>
  );
};

export default StarBackground;
