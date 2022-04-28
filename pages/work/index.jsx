import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/work/WorkSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

export default function Work({ portfolio }) {
  return (
    <Layout>
      <Seo title='Our Work' />
      <main className='work'>
        <WorkSection portfolio={portfolio} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const portfolioRes = await fetch(
    'http://localhost:1337/api/portfolios?populate=*'
  );
  const portfolioData = await portfolioRes.json();

  return {
    props: {
      portfolio: portfolioData.data,
    },
  };
}
