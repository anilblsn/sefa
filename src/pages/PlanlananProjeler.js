import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjeDetay from '../components/ProjeDetay';
import Iletisim from '../components/Iletisim';
import Footer from '../components/Footer';
import './PlanlananProjeler.css';

import kartal0 from '../assets/planlananprojects/1-EVİNPARK KARTAL/0.jpg';
import kartal1 from '../assets/planlananprojects/1-EVİNPARK KARTAL/1.jpg';

const KARTAL_IMAGES = [kartal0, kartal1];

const CONTENT = {
  tr: {
    bannerTitle: 'Planlanan Projeler',
    kartal: {
      title: 'EVİNPARK Kartal',
      description: 'EVİNPARK Kartal projesi; konumu ve yaşam alanlarıyla öne çıkan planlanan bir projedir.',
      details: [
        { icon: 'building', label: 'İnşaat Alanı', value: '—' },
        { icon: 'ruler', label: 'Proje alanı', value: '—' },
        { icon: 'calendar', label: 'Ruhsat Tarihi', value: '—' },
        { icon: 'house', label: 'Konut sayısı', value: '—' },
        { icon: 'house', label: 'Konut tipleri', value: '—' },
        { icon: 'calendar', label: 'Planlanan teslim', value: '—' },
      ],
    },
  },
  en: {
    bannerTitle: 'Planned Projects',
    kartal: {
      title: 'EVİNPARK Kartal',
      description: 'EVİNPARK Kartal is a planned project that stands out with its location and living spaces.',
      details: [
        { icon: 'building', label: 'Construction Area', value: '—' },
        { icon: 'ruler', label: 'Project Area', value: '—' },
        { icon: 'calendar', label: 'Permit Date', value: '—' },
        { icon: 'house', label: 'Number of Units', value: '—' },
        { icon: 'house', label: 'Unit Types', value: '—' },
        { icon: 'calendar', label: 'Planned Delivery', value: '—' },
      ],
    },
  },
};

function PlanlananProjeler() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') === 'en' ? 'en' : 'tr';
  const c = CONTENT[lang];

  return (
    <>
      <Navbar />
      <section className="planlanan-projeler-banner">
        <div className="planlanan-projeler-banner__overlay" />
        <h1 className="planlanan-projeler-banner__title">{c.bannerTitle}</h1>
      </section>
      <main className="planlanan-projeler">
        <ProjeDetay
          developer="Sefa İnşaat"
          title={c.kartal.title}
          images={KARTAL_IMAGES}
          details={c.kartal.details}
          description={c.kartal.description}
          websiteUrl="#"
        />
      </main>
      <Iletisim />
      <Footer />
    </>
  );
}

export default PlanlananProjeler;
