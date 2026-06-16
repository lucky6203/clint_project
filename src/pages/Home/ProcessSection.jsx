import React from 'react';

export function ProcessSection() {
  const steps = [
    {
      step: '01',
      icon: '🌾',
      title: 'RIGHT PRODUCE, RIGHT TIME',
      bg: 'bg-[#50261f]'
    },
    {
      step: '02',
      icon: '⚖️',
      title: 'GRADING LIKE A PRO',
      bg: 'bg-[#48633b]'
    },
    {
      step: '03',
      icon: '📦',
      title: 'PACK & HANDLE RIGHT WAY',
      bg: 'bg-[#cf6835]'
    },
    {
      step: '04',
      icon: '🚢',
      title: 'RELIABLE LOGISTICS',
      bg: 'bg-[#8aa153]'
    },
    {
      step: '05',
      icon: '🤝',
      title: 'FAIR & TRANSPARENT SELLING',
      bg: 'bg-[#244522]'
    }
  ];

  return (
    <section id="process" className="bg-cream py-16 px-6 md:py-20 md:px-16 lg:px-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10">
          <span className="block font-oswald text-[11px] font-semibold tracking-[0.22em] uppercase mb-3.5 text-forest/70">
            HOW WE WORK
          </span>
          <h2 className="font-oswald text-[clamp(42px,6vw,72px)] font-bold uppercase leading-[0.9] tracking-wide text-forest">
            THE SEESAW<br />PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 h-auto md:h-[320px]">
          {steps.map((s, i) => (
            <div key={i} className={`${s.bg} p-8 flex flex-col justify-between text-white transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-default group`}>
              <div>
                <div className="font-oswald text-[10px] font-semibold tracking-[0.2em] text-white/70 mb-8 uppercase">
                  STEP {s.step}
                </div>
                <div className="text-[32px] mb-8 group-hover:scale-110 transition-transform origin-left">
                  {s.icon}
                </div>
              </div>
              <div className="font-oswald text-[18px] font-bold tracking-[0.05em] uppercase leading-tight pr-4">
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
