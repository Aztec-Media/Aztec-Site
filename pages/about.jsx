import Seo from '../components/layout/Seo';
import LargeHero from '../components/sections/LargeHero';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import AboutSection from '../components/sections/AboutSection';
gsap.registerPlugin(ScrollTrigger);

export default function About({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <main className='about'>
      <Seo title='About Us' />
      <LargeHero />
      <AboutSection teamData={data.team} />
    </main>
  );
}

export async function getStaticProps(context) {
  const teamRes = await fetch(`${process.env.ADMIN_URL}/api/teams?populate=*`);
  const teamData = await teamRes.json();

  const data = {
    team: teamData.data,
  };

  return {
    props: { data },
  };
}
