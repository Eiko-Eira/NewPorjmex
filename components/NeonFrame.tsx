import React from 'react';

const NeonFrame: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 p-4">
      {/* Single Green Glowing Line - slightly off edge */}
      <div className="w-full h-full border border-neon-green/60 rounded-lg shadow-[0_0_10px_rgba(0,255,65,0.2)]" />
    </div>
  );
};

export default NeonFrame;