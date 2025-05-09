import { useEffect } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import Mission from '@/components/about/Mission';
import Timeline from '@/components/about/Timeline';
import Team from '@/components/about/Team';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - GetMore Centre';
  }, []);

  return (
    <>
      <PageHeader 
        title="About GetMore Centre" 
        description="Our mission, journey, and the team making it all happen." 
      />
      <Mission />
      <Timeline />
      <Team />
    </>
  );
}