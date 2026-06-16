import React from 'react';

export function TickerSection() {
  return (
    <div className="bg-lime py-2.5 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {['Pomegranate','Grapes','Banana','Mango','Guava','Onion','Tomato','GREEN CHILLI'].map((item, idx) => (
              <div key={`${item}-${idx}`} className="font-oswald text-[13px] font-semibold tracking-[0.1em] uppercase text-forest px-9 whitespace-nowrap after:content-['✦'] after:text-forest/45 after:ml-9">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
