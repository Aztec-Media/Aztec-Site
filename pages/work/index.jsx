import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/WorkSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

export default function Work({ data }) {
  useEffect(() => {
    colourState.bgColour = 'blue';
  }, []);

  return (
    <Layout>
      <Header />
      <main className='work'>
        <Seo title='Our Work' />
        <WorkSection portfolioData={data.portfolio} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const portfolioRes = await fetch(
    `${process.env.ADMIN_URL}/api/portfolios?populate=*`
  );
  const portfolioData = await portfolioRes.json();

  const data = {
    portfolio: portfolioData.data,
  };

  return {
    props: { data },
  };
}
