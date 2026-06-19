import React from "react";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: "🌾",
      title: "RIGHT PRODUCE, RIGHT TIME",
      bg: "bg-[#50261f]",
    },
    {
      step: "02",
      icon: "⚖️",
      title: "GRADING LIKE A PRO",
      bg: "bg-[#48633b]",
    },
    {
      step: "03",
      icon: "📦",
      title: "PACK & HANDLE RIGHT WAY",
      bg: "bg-[#cf6835]",
    },
    {
      step: "04",
      icon: "🚢",
      title: "RELIABLE LOGISTICS",
      bg: "bg-[#8aa153]",
    },
    {
      step: "05",
      icon: "🤝",
      title: "FAIR & TRANSPARENT SELLING",
      bg: "bg-[#244522]",
    },
  ];

  return (
    <section
      id="process"
      className="bg-cream py-12 md:py-20 px-4 md:px-16 lg:px-[72px]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <span className="block font-oswald text-[11px] font-semibold tracking-[0.22em] uppercase mb-3 text-forest/70">
            HOW WE WORK
          </span>

          <h2 className="font-oswald text-[clamp(36px,6vw,72px)] font-bold uppercase leading-[0.9] tracking-wide text-forest">
            THE SEESAW
            <br />
            PROCESS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`
                ${s.bg}
                min-h-[180px] md:min-h-[260px]
                p-4 md:p-6
                flex flex-col justify-between
                text-white
                rounded-lg
                cursor-pointer
                transition-all duration-500 ease-out
                hover:-translate-y-3
                hover:scale-[1.03]
                hover:shadow-2xl
                group
                animate-fade-up
              `}
              style={{
                animationDelay: `${i * 120}ms`,
              }}
            >
              <div>
                <div className="font-oswald text-[9px] md:text-[10px] font-semibold tracking-[0.2em] text-white/70 mb-4 md:mb-6 uppercase">
                  STEP {s.step}
                </div>

                <div className="text-2xl md:text-[36px] mb-4 md:mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {s.icon}
                </div>
              </div>

              <div className="font-oswald text-[13px] md:text-[17px] font-bold tracking-[0.05em] uppercase leading-tight transition-all duration-300 group-hover:translate-x-1">
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}