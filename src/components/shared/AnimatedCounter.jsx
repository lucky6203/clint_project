import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({
  target,
  suffix = "",
  label,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isNumber = typeof target === "number";

  useEffect(() => {
    if (!isNumber) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = null;
          const duration = 1500;

          const animate = (timestamp) => {
            if (!start) start = timestamp;

            const progress = Math.min(
              (timestamp - start) / duration,
              1
            );

            setCount(
              Math.floor(progress * target)
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, isNumber]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center p-7 border-r border-b border-white/5 hover:bg-white/5 transition-colors"
    >
      {isNumber ? (
        <div className="font-oswald text-[clamp(40px,4.5vw,56px)] font-bold text-[#DBE465] leading-none flex items-center justify-center gap-1">
          <span>{count}</span>

          {suffix && (
            <span className="text-[clamp(40px,4.5vw,56px)]">
              {suffix}
            </span>
          )}
        </div>
      ) : (
        <div className="font-oswald text-[clamp(24px,3vw,38px)] font-bold text-[#DBE465] leading-tight">
          {target}
        </div>
      )}

      <div className="text-[11px] text-white/60 tracking-[0.09em] uppercase mt-3">
        {label}
      </div>
    </div>
  );
}