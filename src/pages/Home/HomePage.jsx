import React from 'react';
import { appConfig } from '@/config/app';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { AppLayout } from '@/components/layout/AppLayout';

import { HeroSection } from './HeroSection';
import { TickerSection } from './TickerSection';
import { ProcessSection } from './ProcessSection';
import { PurposeSection } from './PurposeSection';
import { ImpactSection } from './ImpactSection';
import { ServicesSection } from './ServicesSection';
import { ProduceSection } from './ProduceSection';
import { CalendarSection } from './CalendarSection';
import { LogisticsSection } from './LogisticsSection';
import { FounderSection } from './FounderSection';
import { ContactSection } from './ContactSection';

export function HomePage() {
  useDocumentTitle(appConfig.name);

  return (
    <AppLayout>
      <HeroSection />
      <TickerSection />
      <ProcessSection />
      <ImpactSection />
      <ServicesSection />
      <ProduceSection />
      <CalendarSection />
      <LogisticsSection />
      <PurposeSection />
      <FounderSection />
      <ContactSection />
    </AppLayout>
  );
}
