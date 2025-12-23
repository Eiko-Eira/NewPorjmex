import React from 'react';
import { motion } from 'framer-motion';
import { CURRENT_PROJECTS, SECTION_DESCRIPTIONS } from '../constants';
import SectionHeader from './SectionHeader';

const CurrentProjects: React.FC = () => {
  return (
    <section className="mb-32">
      <SectionHeader title="Projects" bio={SECTION_DESCRIPTIONS.PROJECTS} />
      {CURRENT_PROJECTS.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CURRENT_PROJECTS.map((project) => (
            <div key={project.id} className="bg-[#050a10] p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.05)] hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
                <span className="text-xs font-mono text-neon-blue border border-neon-blue/30 px-2 py-1 rounded bg-neon-blue/5">
                  IN PROGRESS
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 font-light">{project.description}</p>
              
              <div className="mb-2 flex justify-between text-xs font-mono text-gray-500">
                <span>PROGRESS</span>
                <span>{project.completion}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.completion}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-gray-800 rounded-xl p-12 text-center">
          <p className="text-xl text-gray-500 font-light italic">
            "Not working on anything at the moment, that means im free"
          </p>
        </div>
      )}
    </section>
  );
};

export default CurrentProjects;