import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';
import { DiscordIcon } from './icons/DiscordIcon';

const HeroSection: React.FC = () => {
  return (
    <section className="mb-32 flex flex-col items-center justify-center pt-24 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-display font-black mb-6 text-white tracking-tighter"
        >
          EI<span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">KO</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12"
        >
          I am a scripter for web pages and games, and yes i do roblox games too, im 19 and i have certifications for my work, email me for more info about that. Rate me or email for work.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 justify-center"
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
                className="p-4 bg-[#0a1018] border border-gray-800 rounded-xl text-gray-500 hover:text-neon-blue hover:border-neon-blue transition-all duration-300 transform hover:-translate-y-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] cursor-pointer"
              >
                {social.icon}
              </a>
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neon-blue text-xs font-bold tracking-widest whitespace-nowrap pointer-events-none">
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