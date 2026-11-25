import { heroFont } from '@/config/font.plugin';
import { HistoriaHero } from '@/components/historia/hero/Hero';
import { HistoriaOrigin } from '@/components/historia/origin/Origin';
import { HistoriaTimeline } from '@/components/historia/timeline/Timeline';
import { HistoriaFounders } from '@/components/historia/founders/Founders';
import { HistoriaVocations } from '@/components/historia/vocations/Vocations';
import { HistoriaBrooklyn } from '@/components/historia/brooklyn/Brooklyn';
import { HistoriaPurpose } from '@/components/historia/purpose/Purpose';
import { HistoriaSiervo } from '@/components/historia/siervo/Siervo';
import { HistoriaCta } from '@/components/historia/cta/Cta';
import style from './style.module.css';

const History = () => {
  return (
    <main className={`${heroFont.className} ${style.historia_page}`}>
      <HistoriaHero/>
      <HistoriaOrigin/>
      <HistoriaTimeline/>
      <HistoriaFounders/>
      <HistoriaVocations/>
      <HistoriaBrooklyn/>
      <HistoriaPurpose/>
      <HistoriaSiervo/>
      <HistoriaCta/>
    </main>
  );
};

export default History;
