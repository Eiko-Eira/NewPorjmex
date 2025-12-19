import React from 'react';

interface SectionHeaderProps {
  title: string;
  bio?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, bio }) => (
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

export default SectionHeader;