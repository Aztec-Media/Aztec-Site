import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import Seo from '../components/layout/Seo';
import Footer from '../components/sections/Footer';
import HomePortfolio from '../components/sections/HomePortfolio';

export default function Work({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);
  return (
    <main className='work'>
      <Seo title='Our Work' />
      <HomePortfolio portfolioData={data.portfolio} />
      <Footer />
    </main>
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
