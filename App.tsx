import React, { useState } from 'react';
import { 
  Github, 
  Star, 
  ExternalLink,
  X,
  Mail
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import NeonFrame from './components/NeonFrame';
import ScrollBlurEffect from './components/ScrollBlurEffect';
import CommentsSection from './components/CommentsSection';
import { 
  SKILLS, 
  CURRENT_PROJECTS, 
  COMPLETED_PROJECTS, 
  QUOTES, 
  SHOW_QUOTES, 
  PRICING,
  GOOGLE_FORM_LINK,
  SECTION_DESCRIPTIONS,
  CONTACT_EMAIL
} from './constants';
import { Skill } from './types';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const App: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [selectedLanguage, setSelectedLanguage] = useState<Skill | null>(null);
  
  const topBlurOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const bottomBlurOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const handlePriceSelect = (title: string) => {
    const subject = `Inquiry about ${title}`;
    const body = `Hi Projmex,\n\nI am interested in the ${title} package. \n\nHere are some details about my project:\n`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const SectionHeader: React.FC<{ title: string; bio?: string }> = ({ title, bio }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-widest uppercase">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-neon-green/30 to-transparent ml-4"></div>
      </div>
      {bio && (
        <p className="text-gray-400 font-light text-sm max-w-xl">{bio}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020408] text-white overflow-x-hidden font-sans selection:bg-neon-green selection:text-black">
      <NeonFrame />
      <ScrollBlurEffect />

      <motion.div 
        style={{ opacity: topBlurOpacity }}
        className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020408] to-transparent z-40 pointer-events-none backdrop-blur-[1px]" 
      />
      
      <motion.div 
        style={{ opacity: bottomBlurOpacity }}
        className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020408] to-transparent z-40 pointer-events-none backdrop-blur-[1px]" 
      />

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
              className="bg-[#0a1018] border border-neon-green p-8 rounded-xl max-w-md w-full relative shadow-[0_0_30px_rgba(0,255,65,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedLanguage(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-neon-green"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{selectedLanguage.name}</h3>
              <p className="text-neon-green font-mono text-xs uppercase tracking-widest mb-4">{selectedLanguage.category}</p>
              <p className="text-gray-300 leading-relaxed">{selectedLanguage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        
        <section className="mb-32 flex flex-col md:flex-row items-center gap-12 pt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-800 relative z-10 group-hover:border-neon-green transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <img 
                src="https://picsum.photos/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-[-10px] border border-dashed border-neon-green/20 rounded-full animate-[spin_20s_linear_infinite] z-0 pointer-events-none" />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-black mb-4 text-white"
            >
              PROJ<span className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">MEX</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-lg leading-relaxed font-light mb-8"
            >
              I am a scripter for web pages and games, and yes i do roblox games too, im 19 and i have certifications for my work, email me for more info about that. Rate me or email for work.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/Eiko-Eira", label: "Github" },
                { icon: <Mail className="w-6 h-6" />, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
                { icon: <DiscordIcon className="w-6 h-6" />, href: "https://discord.com/users/1273344981024641132", label: "Discord" }
              ].map((social, idx) => (
                <div key={idx} className="relative group flex flex-col items-center">
                  <a 
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-3 bg-[#0a1018] border border-gray-800 rounded-lg text-gray-500 hover:text-neon-green hover:border-neon-green transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] cursor-pointer"
                  >
                    {social.icon}
                  </a>
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neon-green text-xs font-bold tracking-widest whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader title="Projects" bio={SECTION_DESCRIPTIONS.PROJECTS} />
          {CURRENT_PROJECTS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CURRENT_PROJECTS.map((project) => (
                <div key={project.id} className="bg-[#050a10] p-6 rounded-xl border border-neon-green/20 hover:border-neon-green shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
                    <span className="text-xs font-mono text-neon-green border border-neon-green/30 px-2 py-1 rounded bg-neon-green/5">
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
                      className="h-full bg-neon-green shadow-[0_0_10px_#00ff41]"
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

        <section className="mb-32">
          <SectionHeader title="Languages" bio={SECTION_DESCRIPTIONS.LANGUAGES} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={idx}
                onClick={() => setSelectedLanguage(skill)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 65, 0.5)', cursor: 'pointer' }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#050a10] p-4 rounded-lg border border-neon-green/20 shadow-[0_0_15px_rgba(0,255,65,0.05)] flex flex-col items-center transition-all duration-300"
              >
                <span className="font-display font-bold text-lg mb-2 text-white">{skill.name}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star 
                      key={starIdx} 
                      className={`w-4 h-4 ${starIdx < skill.level ? 'text-neon-green fill-neon-green' : 'text-gray-800'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-mono">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader title="Completed Projects" bio={SECTION_DESCRIPTIONS.COMPLETED} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPLETED_PROJECTS.map((project) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="block group relative rounded-xl overflow-hidden border border-neon-green/20 hover:border-neon-green shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] transform hover:scale-[1.02] transition-all duration-300">
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
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded hover:border-neon-green hover:text-neon-green transition-colors cursor-default bg-black/50 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-neon-green text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                    View Project <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader title="Prices" bio={SECTION_DESCRIPTIONS.PRICES} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING.map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-[#050a10] p-6 rounded-2xl border flex flex-col transition-all duration-300 ${
                  plan.recommended 
                    ? 'border-neon-green shadow-[0_0_30px_rgba(0,255,65,0.15)] transform scale-105 hover:scale-110 hover:shadow-[0_0_50px_rgba(0,255,65,0.4)] z-10' 
                    : 'border-neon-green/20 shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:border-neon-green hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]'
                }`}
              >
                {plan.recommended && (
                  <div className="bg-neon-green text-black text-xs font-bold text-center py-1 px-3 rounded-full self-center mb-4 font-display">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-lg font-bold font-display text-center mb-2 text-white">{plan.title}</h3>
                <div className="text-2xl font-black text-center text-white mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_#00ff41] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handlePriceSelect(plan.title)}
                  className={`w-full py-3 rounded font-bold font-display uppercase tracking-widest text-xs transition-all duration-300 ${plan.recommended ? 'bg-neon-green text-black hover:bg-white' : 'bg-transparent border border-gray-700 text-gray-400 hover:border-neon-green hover:text-neon-green'}`}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </section>

        {SHOW_QUOTES && (
          <section className="mb-32">
             <SectionHeader title="Testimonials" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {QUOTES.map((quote, idx) => (
                 <div key={idx} className="bg-[#050a10] p-8 rounded-tr-3xl rounded-bl-3xl border-l-4 border-neon-green relative shadow-[0_0_15px_rgba(0,255,65,0.05)]">
                   <p className="text-lg italic text-gray-300 mb-6 font-serif">"{quote.text}"</p>
                   <p className="font-display font-bold text-neon-green text-sm">{quote.author}</p>
                 </div>
               ))}
             </div>
          </section>
        )}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
             <div className="mb-8">
                <SectionHeader title="Rate Me" bio={SECTION_DESCRIPTIONS.RATE} />
                <a 
                  href={GOOGLE_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/20 hover:bg-neon-green hover:border-neon-green hover:text-black px-8 py-4 rounded transition-all duration-300 font-display font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_#00ff41]"
                >
                  Give Feedback <ExternalLink className="w-5 h-5" />
                </a>
             </div>
          </div>

          <CommentsSection />

        </section>

      </main>

      <footer className="text-center py-12 text-gray-600 text-xs font-mono relative z-10">
        <p className="mb-2 hover:text-neon-green transition-colors cursor-pointer">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>&copy; {new Date().getFullYear()} PROJMEX. All made by me.</p>
      </footer>
    </div>
  );
};

export default App;