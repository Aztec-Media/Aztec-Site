import Seo from '../../components/layout/Seo';
import LargeHero from '../../components/general/LargeHero';
import InsightsGrid from '../../components/sections/insights/InsightsGrid';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import InsightsFeature from '../../components/sections/insights/InsightsFeature';
import fetch from 'node-fetch';

export default function Insights({ insights }) {
  return (
    <Layout>
      <Seo title='Insights' />
      <main className='insights'>
        <LargeHero />
        <InsightsFeature insight={insights[0]} />
        <InsightsGrid insights={insights} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const insightsRes = await fetch(
    'http://localhost:1337/api/insights?populate=*'
  );
  const insightsData = await insightsRes.json();

  return {
    props: {
      insights: insightsData.data,
    },
  };
}
