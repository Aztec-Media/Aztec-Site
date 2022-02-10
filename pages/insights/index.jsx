import Seo from '../../components/layout/Seo';
import LargeHero from '../../components/sections/LargeHero';
import InsightsGrid from '../../components/sections/InsightsGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
gsap.registerPlugin(ScrollTrigger);

export default function Insights({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <main className='insights'>
      <Seo title='Insights' />
      <LargeHero />
      <InsightsGrid />
    </main>
  );
}
