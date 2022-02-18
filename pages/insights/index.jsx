import Seo from '../../components/layout/Seo';
import LargeHero from '../../components/general/LargeHero';
import InsightsGrid from '../../components/sections/insights/InsightsGrid';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import InsightsFeature from '../../components/sections/insights/InsightsFeature';

import insightsData from '../../data/insightsData.json';

export default function Insights({ data }) {
  return (
    <Layout>
      <Seo title='Insights' />
      <main className='insights'>
        <LargeHero />
        <InsightsFeature data={data} />
        <InsightsGrid data={data} />
      </main>
      <Footer />
    </Layout>
  );
}

export function getStaticProps() {
  const data = insightsData;

  return {
    props: { data },
  };
}
