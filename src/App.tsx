/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/CosmicVoyager/Navbar';
import StarBackground from './components/CosmicVoyager/StarBackground';
import Hero from './components/CosmicVoyager/Hero';
import MeteorTracker from './components/CosmicVoyager/MeteorTracker';
import AuroraDashboard from './components/CosmicVoyager/AuroraDashboard';
import ISSTracker from './components/CosmicVoyager/ISSTracker';
import TravelHub from './components/CosmicVoyager/TravelHub';
import AstroReport from './components/CosmicVoyager/AstroReport';
import AINavigator from './components/CosmicVoyager/AINavigator';
import MagicalCursor from './components/CosmicVoyager/MagicalCursor';
import SpaceFacts from './components/CosmicVoyager/SpaceFacts';

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="fixed top-0 left-0 w-full z-[110] bg-cyan-500/10 backdrop-blur-md border-b border-white/5 py-1 overflow-hidden">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]"
        >
          Alert: Major Geomagnetic Storm (G3) in progress • Lyrids Meteor Shower peak approaching in 72 hours • ISS passing over Northern India at 21:42 UTC • Alert: Major Geomagnetic Storm (G3) in progress
        </motion.div>
      </div>

      <StarBackground />
      <MagicalCursor />
      <Navbar />
      
      <div className="relative z-10 pt-4">
        <Hero />
        <SpaceFacts />
        <MeteorTracker />
        <AuroraDashboard />
        <ISSTracker />
        <TravelHub />
        <AstroReport />
        
        <footer className="py-24 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Stay Synchronized with the Cosmos</h3>
                <p className="text-slate-400 text-lg font-light">Join 50,000+ explorers receiving weekly celestial alerts and space travel guides.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all uppercase text-xs tracking-widest">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.4em]">
                © 2026 Cosmic Voyager • Built for Deep Space Exploration
              </p>
              <div className="flex gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Orbit Protocol</a>
                <a href="#" className="hover:text-white transition-colors">Mission Control</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <AINavigator />
    </main>
  );
}
