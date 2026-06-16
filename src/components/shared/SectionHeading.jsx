import React from 'react';

export const SectionHeading = ({ children, color = 'text-forest' }) => (
  <h2 className={`font-oswald text-[clamp(38px,5vw,60px)] font-bold uppercase leading-none tracking-wide mb-[52px] ${color}`}>
    {children}
  </h2>
);
