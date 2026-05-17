import React from 'react';
import { motion } from 'motion/react';
import { Sparkle, MapPin, Calendar, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SHOWERS = [
  {
    name: 'Lyrids',
    peak: 'Apr 22, 2026',
    days: 4,
    rate: '18/hr',
    visibility: 'High',
    color: 'from-blue-500/20 to-cyan-500/20',
    description: 'One of the oldest known meteor showers, noted for bright fireballs.'
  },
  {
    name: 'Perseids',
    peak: 'Aug 12, 2026',
    days: 104,
    rate: '100/hr',
    visibility: 'Very High',
    color: 'from-purple-500/20 to-blue-500/20',
    description: 'The most popular shower of the year, with fast and bright meteors.'
  },
  {
    name: 'Geminids',
    peak: 'Dec 14, 2026',
    days: 228,
    rate: '120/hr',
    visibility: 'High',
    color: 'from-gold-500/20 to-orange-500/20',
    description: 'Consistently one of the best showers, producing many bright meteors.'
  }
];

const MeteorTracker: React.FC = () => {
  return (
    <section id="events" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Meteor Shower Tracker</h2>
          <p className="text-slate-400 max-w-xl">
            Real-time monitoring of celestial debris trails. Priority visibility forecasts for major global events.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-slate-300 font-mono tracking-tight">Viewing Local: Jammu, India</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SHOWERS.map((shower, idx) => (
          <motion.div
            key={shower.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "p-8 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden group",
              "hover:border-white/20 transition-all cursor-pointer bg-gradient-to-br",
              shower.color
            )}
          >
            {/* Animated Stardust inside card */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Sparkle className="w-16 h-16 text-white" />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{shower.name}</h3>
                <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Active</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm">Peak: {shower.peak}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Activity className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm">Rate: {shower.rate}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Days Remaining</span>
                  <span>{shower.days} Days</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(10, 100 - (shower.days / 3.65))}%` }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed italic">
                "{shower.description}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeteorTracker;
