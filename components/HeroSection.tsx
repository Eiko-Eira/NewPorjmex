import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';
import { DiscordIcon } from './icons/DiscordIcon';

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;