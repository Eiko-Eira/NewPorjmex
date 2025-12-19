import React from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

const ScrollBlurEffect: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const blurAmount = useTransform(scrollVelocity, (v) => {
    const absVelocity = Math.abs(v);
    const rawBlur = Math.min(absVelocity / 150, 5); 
    return rawBlur < 0.5 ? 'blur(0px)' : `blur(${rawBlur}px)`;
  });

  const smoothBlur = useSpring(blurAmount, { damping: 30, stiffness: 100 });

  return (
    <motion.div 
      className="fixed inset-0 z-[60] pointer-events-none mix-blend-overlay opacity-50"
      style={{ backdropFilter: smoothBlur }}
    />
  );
};

export default ScrollBlurEffect;