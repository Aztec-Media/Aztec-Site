import Seo from '../../components/layout/Seo';
import LargeHero from '../../components/sections/LargeHero';
import InsightsGrid from '../../components/sections/InsightsGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
gsap.registerPlugin(ScrollTrigger);

export default function Insights({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Header />
      <main className='insights'>
        <Seo title='Insights' />
        <LargeHero />
        <InsightsGrid />
      </main>
      <Footer />
    </Layout>
  );
}
