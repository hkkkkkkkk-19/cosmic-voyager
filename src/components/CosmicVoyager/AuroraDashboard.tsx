import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap, Globe, AlertTriangle } from 'lucide-react';

const DATA = [
  { time: '00:00', kp: 2 },
  { time: '04:00', kp: 3 },
  { time: '08:00', kp: 5 },
  { time: '12:00', kp: 4 },
  { time: '16:00', kp: 6 },
  { time: '20:00', kp: 4 },
  { time: '23:59', kp: 3 },
];

const AuroraDashboard: React.FC = () => {
  const currentKp = 6.2;
  const status = currentKp > 5 ? 'High Activity' : currentKp > 3 ? 'Moderate' : 'Low';
  const color = currentKp > 5 ? 'text-red-400' : currentKp > 3 ? 'text-yellow-400' : 'text-green-400';
  const glow = currentKp > 5 ? 'shadow-[0_0_20px_rgba(248,113,113,0.3)]' : currentKp > 3 ? 'shadow-[0_0_20px_rgba(250,204,21,0.3)]' : 'shadow-[0_0_20px_rgba(74,222,128,0.3)]';

  return (
    <section id="aurora" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kp Index Main Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Geomagnetic Forecast</h3>
            </div>
            <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-[10px] font-mono text-cyan-400 uppercase">Live Index</div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[0, 9]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#06b6d4' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="kp" 
                  stroke="#06b6d4" 
                  strokeWidth={3} 
                  dot={{ fill: '#06b6d4', r: 4 }}
                  activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Status Widget */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center ${glow}`}
          >
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-4">Current Kp Index</h4>
            <div className={`text-7xl font-bold mb-2 ${color}`}>{currentKp}</div>
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className={`w-4 h-4 ${color}`} />
              <span className={`font-semibold ${color}`}>{status}</span>
            </div>
            <p className="text-xs text-slate-400 font-light">
              Storm levels are peaking. Northern and Southern aurora visibility is highly likely in sub-arctic regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-cyan-400" />
              <h4 className="text-lg font-bold text-white">Top Viewing Sites</h4>
            </div>
            <ul className="space-y-3">
              {['Tromsø, Norway', 'Whitehorse, Canada', 'Fairbanks, Alaska', 'Rovaniemi, Finland'].map((city) => (
                <li key={city} className="flex items-center justify-between text-sm text-slate-300">
                  <span>{city}</span>
                  <span className="text-cyan-400 font-mono">92% Chance</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuroraDashboard;
