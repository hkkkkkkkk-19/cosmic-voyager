import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, Clock, Zap } from 'lucide-react';

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const AstroReport: React.FC = () => {
  const stats = [
    { label: "Next Meteor Shower", value: "Lyrids", sub: "Peak in 4 days", icon: Zap, color: "text-blue-400" },
    { label: "Aurora Activity", value: "High", sub: "Kp 6.2 Detected", icon: BarChart3, color: "text-red-400" },
    { label: "ISS Visibility", value: "21:42", sub: "Tomorrow Over Jammu", icon: ShieldCheck, color: "text-green-400" },
    { label: "Recommended Day", value: "Thursday", sub: "Clear Cosmic Sky", icon: Clock, color: "text-purple-400" },
  ];

  return (
    <section id="report" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="p-1 border border-white/5 bg-white/5 rounded-[3rem] backdrop-blur-2xl">
        <div className="p-12 md:p-16 rounded-[2.8rem] bg-gradient-to-b from-[#0f172a]/80 to-[#020617]/95">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div>
              <div className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">Internal Data Feed</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase italic">Captain's Deck Report</h2>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">System Status: Online / Decrypted</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={ITEM_VARIANTS}
                  className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all"
                >
                  <div className={`p-3 rounded-xl bg-white/5 w-fit mb-6 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-2">{stat.label}</h4>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.sub}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center font-mono text-cyan-400 text-sm">Advice</div>
              <p className="text-slate-400 text-sm md:max-w-xl">
                Stargazing conditions are optimal this week. We recommend visiting higher elevations for the Lyrids peak. Geomagnetic storms may affect radio communications in northern latitudes.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-full transition-all uppercase tracking-widest">
              Full System Log
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstroReport;
