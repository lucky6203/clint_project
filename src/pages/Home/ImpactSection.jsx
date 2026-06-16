import React from 'react';

export function ImpactSection() {
  return (
<div className="grid grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 bg-[#4a6338] border-t border-white/10 lg:border-t-0">      {[
        { num: 60, suf: '%', label: 'Farmer Coverage' },
        { num: 50, suf: '+', label: 'Micro Clusters' },
        { num: 15, suf: '+', label: 'Collection Centres' },
        { num: 1, suf: 'K+', label: 'Verified Growers' },
      ].map((imp, i) => (
        <div key={i} className="bg-offwhite py-[60px] px-8 text-center cursor-default transition-colors hover:bg-cream">
          <div className="font-oswald text-[clamp(52px,5.5vw,72px)] font-bold text-forest leading-none">
            {imp.num}<span className="text-brown">{imp.suf}</span>
          </div>
          <div className="text-[12px] text-olive font-bold tracking-[0.1em] uppercase mt-2.5">
            {imp.label}
          </div>
        </div>
      ))}
    </div>
  );
}
