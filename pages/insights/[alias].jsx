import Seo from '../../components/layout/Seo';
import InsightsInnerSection from '../../components/sections/insights/InsightsInnerSection';
import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

import insightsData from '../../data/insightsData';

export default function InsightsInnerPage({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='Insights Inner' />
      <main className='insights-inner'>
        <InsightsInnerSection data={data} />
      </main>
      <Footer />
    </Layout>
  );
}

export function getStaticProps({ params }) {
  const data = insightsData;

  let insight = {};

  data.forEach((item) => {
    if (item.alias === params.alias) {
      insight = item;
    }
  });

  return {
    props: {
      data: insight,
    },
  };
}

export function getStaticPaths() {
  const data = insightsData;

  const aliass = data.map((item) => item.alias);
  const paths = aliass.map((alias) => ({ params: { alias } }));

  return {
    paths,
    fallback: false,
  };
}
