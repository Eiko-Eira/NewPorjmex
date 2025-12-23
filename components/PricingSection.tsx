import React from 'react';
import { PRICING, SECTION_DESCRIPTIONS, CONTACT_EMAIL } from '../constants';
import SectionHeader from './SectionHeader';

const PricingSection: React.FC = () => {
  const handlePriceSelect = (title: string) => {
    const subject = `Inquiry about ${title}`;
    const body = `Hi Eiko,\n\nI am interested in the ${title} package. \n\nHere are some details about my project:\n`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="mb-32">
      <SectionHeader title="Prices" bio={SECTION_DESCRIPTIONS.PRICES} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING.map((plan, idx) => (
          <div 
            key={idx} 
            className={`bg-[#050a10] p-6 rounded-2xl border flex flex-col transition-all duration-300 ${
              plan.recommended 
                ? 'border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.15)] transform scale-105 hover:scale-110 hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] z-10' 
                : 'border-neon-blue/20 shadow-[0_0_15px_rgba(0,243,255,0.05)] hover:border-neon-blue hover:scale-105 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]'
            }`}
          >
            {plan.recommended && (
              <div className="bg-neon-blue text-black text-xs font-bold text-center py-1 px-3 rounded-full self-center mb-4 font-display">
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
                  <div className="w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_5px_#00f3ff] mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handlePriceSelect(plan.title)}
              className={`w-full py-3 rounded font-bold font-display uppercase tracking-widest text-xs transition-all duration-300 ${plan.recommended ? 'bg-neon-blue text-black hover:bg-white' : 'bg-transparent border border-gray-700 text-gray-400 hover:border-neon-blue hover:text-neon-blue'}`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;