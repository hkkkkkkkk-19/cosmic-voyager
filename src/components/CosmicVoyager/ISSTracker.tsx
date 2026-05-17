import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Rocket, Map, Navigation, Eye } from 'lucide-react';

const ISSTracker: React.FC = () => {
  const [coords, setCoords] = useState({ lat: -23.44, lon: 144.55 });
  const [velocity, setVelocity] = useState(27584);

  // Mock movement for visual appeal
  useEffect(() => {
    const timer = setInterval(() => {
      setCoords(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.1,
        lon: prev.lon + (Math.random() - 0.5) * 0.2
      }));
      setVelocity(prev => prev + Math.floor((Math.random() - 0.5) * 5));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="iss" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden">
        {/* Orbital Background Graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full text-cyan-500">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
            <motion.circle 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              cx="200" cy="80" r="4" fill="white"
              style={{ transformOrigin: '200px 200px' }}
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <Rocket className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Live ISS Tracker</h3>
                <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Orbital Status: Nominal</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg mb-10 font-light leading-relaxed">
              Monitoring the International Space Station's real-time trajectory. Predicting the next visible pass over your coordinates.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase mb-2">
                  <Navigation className="w-3 h-3" /> Latitude
                </div>
                <div className="text-2xl font-bold text-white tracking-wide">{coords.lat.toFixed(4)}°</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase mb-2">
                  <Map className="w-3 h-3" /> Longitude
                </div>
                <div className="text-2xl font-bold text-white tracking-wide">{coords.lon.toFixed(4)}°</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
             <div className="p-8 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <Eye className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Jammu Visibility</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                    <span className="text-slate-300 text-sm">Next Pass</span>
                    <span className="text-white font-mono font-bold">21:42 (Tomorrow)</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                    <span className="text-slate-300 text-sm">Max Elevation</span>
                    <span className="text-white font-mono font-bold">67.4°</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                    <span className="text-slate-300 text-sm">Duration</span>
                    <span className="text-white font-mono font-bold">6m 12s</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2"
                >
                  Set Observation Alert
                </motion.button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISSTracker;
