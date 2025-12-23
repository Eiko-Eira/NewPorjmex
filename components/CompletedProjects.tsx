import React from 'react';
import { ExternalLink } from 'lucide-react';
import { COMPLETED_PROJECTS, SECTION_DESCRIPTIONS } from '../constants';
import SectionHeader from './SectionHeader';

const CompletedProjects: React.FC = () => {
  return (
    <section className="mb-32">
      <SectionHeader title="Completed Projects" bio={SECTION_DESCRIPTIONS.COMPLETED} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COMPLETED_PROJECTS.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="block group relative rounded-xl overflow-hidden border border-neon-blue/20 hover:border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.05)] hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] transform hover:scale-105 transition-all duration-300">
            <div className="aspect-video bg-gray-900 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain p-8 bg-black opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
              {project.description && <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded hover:border-neon-blue hover:text-neon-blue transition-colors cursor-default bg-black/50 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-neon-blue text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                View Project <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjects;