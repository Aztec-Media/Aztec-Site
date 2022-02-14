import Seo from '../../components/layout/Seo';
import InsightsInnerSection from '../../components/sections/insights/InsightsInnerSection';
import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

export default function InsightsInnerPage({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='Insights Inner' />
      <main className='insights-inner'>
        <InsightsInnerSection />
      </main>
      <Footer />
    </Layout>
  );
}
