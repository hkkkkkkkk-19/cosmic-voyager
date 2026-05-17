import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Telescope, Menu, Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2 rounded-2xl bg-black/20 backdrop-blur-md border border-white/5">
        <div className="flex items-center gap-3 pl-4">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Telescope className="w-6 h-6 text-black" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold tracking-tighter leading-none text-sm md:text-base">COSMIC</h1>
            <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Voyager</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Events', 'Aurora', 'ISS', 'Travel'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-mono font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 pr-2">
           <div className="hidden md:flex flex-col items-end px-4 border-r border-white/10 mr-2">
             <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest opacity-70">Mission Time</div>
             <div className="text-sm font-mono font-bold text-white tabular-nums">
               {time.toLocaleTimeString('en-US', { hour12: false })}
             </div>
           </div>

          <button className="p-2 relative text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-500 rounded-full border border-black" />
          </button>
          
          <button className="md:hidden p-2 text-slate-400">
            <Menu className="w-5 h-5" />
          </button>
          
          <button className="hidden sm:block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-[10px] font-mono font-bold text-white uppercase tracking-widest transition-all">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
