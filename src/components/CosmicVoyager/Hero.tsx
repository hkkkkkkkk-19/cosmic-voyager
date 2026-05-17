import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono tracking-widest text-cyan-200 uppercase">Mission: Universe Discovery</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter text-white mb-6">
          Explore the 
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent italic">
            Universe Beyond Earth
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Track meteor showers, chase auroras, monitor the ISS, and plan unforgettable cosmic journeys with our advanced celestial tracking systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg flex items-center gap-2 group transition-all"
          >
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            View Upcoming Events
          </motion.button>
          
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg backdrop-blur-md transition-all"
          >
            Plan Space Travel
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
