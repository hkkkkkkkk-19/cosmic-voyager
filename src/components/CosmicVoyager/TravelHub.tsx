import React from 'react';
import { motion } from 'motion/react';
import { Plane, Star, Info, ChevronRight } from 'lucide-react';

const DESTINATIONS = [
  {
    name: "Hanle, Ladakh",
    country: "India",
    type: "Dark Sky Reserve",
    image: "https://images.unsplash.com/photo-1544473244-f6895a69ad0b?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    tag: "Highest Observatory"
  },
  {
    name: "Tromsø",
    country: "Norway",
    type: "Aurora Sanctuary",
    image: "https://images.unsplash.com/photo-1541088922234-9270e5bc531a?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    tag: "Northern Lights"
  },
  {
    name: "Aoraki Mackenzie",
    country: "New Zealand",
    type: "Starlight Reserve",
    image: "https://images.unsplash.com/photo-1464802686167-b939a67e052c?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    tag: "Southern Cross"
  }
];

const TravelHub: React.FC = () => {
  return (
    <section id="travel" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Cosmic Travel Hub</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
          Curated expeditions to the most pristine celestial viewing locations on Earth. From the high plateaus of Ladakh to the sub-arctic wild.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((dest, idx) => (
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-cyan-400 uppercase">
                {dest.tag}
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase italic">{dest.name}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span>{dest.rating}</span>
                    <span className="opacity-30">•</span>
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Info className="w-3 h-3" />
                  {dest.type}
                </div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
         <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-bold font-mono">
           <Plane className="w-4 h-4" /> Discover More Destinations
         </button>
      </div>
    </section>
  );
};

export default TravelHub;
