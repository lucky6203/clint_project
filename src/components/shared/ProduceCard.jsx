import React from 'react';

export function ProduceCard({ emoji, name, vars, season, bg }) {
  return (
    <div className={`${bg} p-9 cursor-default transition-all duration-200 hover:scale-[1.025] hover:brightness-110 hover:z-10 relative`}>
      <span className="text-[50px] block mb-4.5">{emoji}</span>
      <div className="font-oswald text-[22px] font-bold text-white uppercase tracking-wide mb-2">
        {name}
      </div>
      <div className="text-[12px] text-white/60 leading-relaxed">
        {vars}
      </div>
      <span className="inline-block mt-4 bg-white/10 text-white/90 px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-[0.09em] uppercase">
        {season}
      </span>
    </div>
  );
}
