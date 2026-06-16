import React from 'react';

export const SectionEyebrow = ({ text, color = 'text-brown' }) => (
  <span className={`block font-oswald text-[11px] font-semibold tracking-[0.22em] uppercase mb-3.5 ${color}`}>
    {text}
  </span>
);
