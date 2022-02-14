import Seo from '../../components/layout/Seo';
import LargeHero from '../../components/general/LargeHero';
import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import CareersGrid from '../../components/sections/careers/CareersGrid';

export default function Careers({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='Careers' />
      <main className='careers'>
        <LargeHero />
        <CareersGrid />
      </main>
      <Footer />
    </Layout>
  );
}