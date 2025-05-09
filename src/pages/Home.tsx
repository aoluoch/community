import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import AnnouncementBar from '@/components/home/AnnouncementBar';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';

export default function Home() {
  useEffect(() => {
    document.title = 'GetMore Centre - Empowering Communities';
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Partners />
    </>
  );
}