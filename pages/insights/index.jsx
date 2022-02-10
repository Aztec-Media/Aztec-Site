import Seo from '../../components/layout/Seo';
import LargeHero from '../../components/general/LargeHero';
import InsightsGrid from '../../components/sections/insights/InsightsGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function Insights({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='Insights' />
      <main className='insights'>
        <LargeHero />
        <InsightsGrid />
      </main>
      <Footer />
    </Layout>
  );
}
