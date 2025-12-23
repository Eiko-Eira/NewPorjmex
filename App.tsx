import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonFrame from './components/NeonFrame';
import ScrollBlurEffect from './components/ScrollBlurEffect';
import CommentsSection from './components/CommentsSection';
import HeroSection from './components/HeroSection';
import CurrentProjects from './components/CurrentProjects';
import SkillsSection from './components/SkillsSection';
import CompletedProjects from './components/CompletedProjects';
import PricingSection from './components/PricingSection';
import SectionHeader from './components/SectionHeader';
import { QUOTES, SHOW_QUOTES, GOOGLE_FORM_LINK, SECTION_DESCRIPTIONS, CONTACT_EMAIL } from './constants';

const App: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();
  
  const topBlurOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const bottomBlurOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-[#02040a] text-white overflow-x-hidden font-sans selection:bg-neon-blue selection:text-black">
      <NeonFrame />
      <ScrollBlurEffect />

      <motion.div 
        style={{ opacity: topBlurOpacity }}
        className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#02040a] to-transparent z-40 pointer-events-none backdrop-blur-[1px]" 
      />
      
      <motion.div 
        style={{ opacity: bottomBlurOpacity }}
        className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02040a] to-transparent z-40 pointer-events-none backdrop-blur-[1px]" 
      />

      <main className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        <HeroSection />
        <CurrentProjects />
        <SkillsSection />
        <CompletedProjects />
        <PricingSection />

        {SHOW_QUOTES && (
          <section className="mb-32">
             <SectionHeader title="Testimonials" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {QUOTES.map((quote, idx) => (
                 <div key={idx} className="bg-[#050a10] p-8 rounded-tr-3xl rounded-bl-3xl border-l-4 border-neon-blue relative shadow-[0_0_15px_rgba(0,243,255,0.05)]">
                   <p className="text-lg italic text-gray-300 mb-6 font-serif">"{quote.text}"</p>
                   <p className="font-display font-bold text-neon-blue text-sm">{quote.author}</p>
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
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/20 hover:bg-neon-blue hover:border-neon-blue hover:text-black px-8 py-4 rounded transition-all duration-300 font-display font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_#00f3ff]"
                >
                  Give Feedback <ExternalLink className="w-5 h-5" />
                </a>
             </div>
          </div>

          <CommentsSection />

        </section>

      </main>

      <footer className="text-center py-12 text-gray-600 text-xs font-mono relative z-10">
        <p className="mb-2 hover:text-neon-blue transition-colors cursor-pointer">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>&copy; {new Date().getFullYear()} Eiko. All made by me.</p>
      </footer>
    </div>
  );
};

export default App;