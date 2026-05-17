import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ghost, Orbit, Zap } from 'lucide-react';

const FACTS = [
  { text: "One day on Venus is longer than one year on Earth.", icon: Orbit },
  { text: "Neutron stars can spin 600 times per second.", icon: Zap },
  { text: "There is floating water in space equivalent to 140 trillion times all Earth's oceans.", icon: Ghost },
  { text: "Space is completely silent as there is no atmosphere to transmit sound.", icon: Orbit },
  { text: "The ISS is as big as a football field.", icon: Zap }
];

const SpaceFacts: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % FACTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const FactIcon = FACTS[index].icon;

  return (
    <div className="py-12 bg-white/5 border-y border-white/5 backdrop-blur-md overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center min-h-[60px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-6 text-center"
          >
            <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-400">
              <FactIcon className="w-5 h-5" />
            </div>
            <p className="text-white text-sm md:text-base font-light italic tracking-tight italic">
              “{FACTS[index].text}”
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpaceFacts;
