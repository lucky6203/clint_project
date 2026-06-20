import React, { useState } from 'react';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProduceCard } from '@/components/shared/ProduceCard';

export function ProduceSection() {
  const [activeTab, setActiveTab] = useState('fruits');

  return (
    <section id="products" className="bg-offwhite py-16 px-6 md:py-20 md:px-16 lg:px-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow text="What We Trade" />
        <SectionHeading>Our <em className="text-brown not-italic">Produce</em></SectionHeading>

        <div className="flex flex-col md:flex-row w-full md:w-fit border border-forest/40 rounded-md overflow-hidden mb-9">
          {[
            { id: 'fruits', label: 'Export Fruits' },
            { id: 'veg', label: 'EXPORT VEGETABLES' },
            { id: 'imports', label: 'Global Imports' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-[30px] py-3 font-oswald text-[13px] font-semibold tracking-[0.1em] uppercase flex items-center justify-center gap-2.5 transition-colors border-b md:border-b-0 border-forest/20 md:border-r last:border-0 w-full md:w-auto
                ${activeTab === tab.id ? 'bg-forest text-lime' : 'bg-cream text-forest hover:bg-[#dddab0]'}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeTab === tab.id ? 'bg-lime' : 'bg-olive'}`}></span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {activeTab === 'fruits' && [
            { emoji: '🍇', name: 'Grapes', vars: 'Thompson · Sonaka · Jumbo · Red Globe', season: 'Jan – Apr', bg: 'bg-green' },
            { emoji: '🍎', name: 'Pomegranate', vars: 'Bhagwa', season: 'Year Round', bg: 'bg-brown' },
            { emoji: '🍌', name: 'Banana', vars: 'Cavendish', season: 'Year Round', bg: 'bg-olive' },
            { emoji: '🥭', name: 'Mango', vars: 'Alphonso · Kesar · Baganpalli', season: 'May – Aug', bg: 'bg-terracotta' }
          ].map(p => <ProduceCard key={p.name} {...p} />)}
          
          {activeTab === 'veg' && [
            { emoji: '🧅', name: 'Onion', vars: 'Red · White · Shallot', season: 'Year Round', bg: 'bg-forest' },
            { emoji: '🍅', name: 'Tomato', vars: 'Hybrid · Roma', season: 'Year Round', bg: 'bg-olive' },
            { emoji: '🍈', name: 'Guava', vars: 'Allahabad Safeda · L-49', season: 'Year Round', bg: 'bg-brown' },
            { emoji: '🫛', name: 'Vegetables', vars: 'Okra · Bitter Gourd · Drumstick', season: 'Seasonal', bg: 'bg-terracotta' }
          ].map(p => <ProduceCard key={p.name} {...p} />)}

          {activeTab === 'imports' && [
            { emoji: '🍊', name: 'Citrus', vars: 'Egypt · South Africa · Spain', season: 'Year Round', bg: 'bg-[#6b4423]' },
            { emoji: '🍎', name: 'Apples', vars: 'USA · Chile · New Zealand', season: 'Year Round', bg: 'bg-[#3a6659]' },
            { emoji: '🍐', name: 'Pears', vars: 'South Africa · China', season: 'Seasonal', bg: 'bg-[#5c3d6b]' },
            { emoji: '🥝', name: 'Kiwi', vars: 'New Zealand · Italy', season: 'Apr – Sep', bg: 'bg-green' }
          ].map(p => <ProduceCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}
