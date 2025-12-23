import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { SKILLS, SECTION_DESCRIPTIONS } from '../constants';
import { Skill } from '../types';
import SectionHeader from './SectionHeader';

const SkillsSection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Skill | null>(null);

  return (
    <>
      <AnimatePresence>
        {selectedLanguage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedLanguage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a1018] border border-neon-blue p-8 rounded-xl max-w-md w-full relative shadow-[0_0_30px_rgba(0,243,255,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedLanguage(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-neon-blue"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{selectedLanguage.name}</h3>
              <p className="text-neon-blue font-mono text-xs uppercase tracking-widest mb-4">{selectedLanguage.category}</p>
              <p className="text-gray-300 leading-relaxed">{selectedLanguage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mb-32">
        <SectionHeader title="Languages" bio={SECTION_DESCRIPTIONS.LANGUAGES} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx}
              onClick={() => setSelectedLanguage(skill)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 243, 255, 0.5)', cursor: 'pointer' }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050a10] p-4 rounded-lg border border-neon-blue/20 shadow-[0_0_15px_rgba(0,243,255,0.05)] flex flex-col items-center transition-all duration-300"
            >
              <span className="font-display font-bold text-lg mb-2 text-white">{skill.name}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    className={`w-4 h-4 ${starIdx < skill.level ? 'text-neon-blue fill-neon-blue' : 'text-gray-800'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-mono">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;