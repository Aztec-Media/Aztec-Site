import { useEffect } from 'react';
import { colourState } from '../../utils/colourState';
import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/WorkSection';

export default function Work({ data }) {
  useEffect(() => {
    colourState.bgColour = 'blue';
  }, []);

  return (
    <main className='work'>
      <Seo title='Our Work' />
      <WorkSection portfolioData={data.portfolio} />
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
