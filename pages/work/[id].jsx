import { useEffect } from 'react';
import InnerPortfolioHeader from '../../components/layout/components/portfolio/InnerPortfolioHeader';
import InnerPortfolioDetail from '../../components/layout/components/portfolio/InnerPortfolioDetail';
import Seo from '../../components/layout/Seo';
import { colourState } from '../../utils/colourState';
import InnerPortfolioDetailImages from '../../components/layout/components/portfolio/InnerPortfolioDetailImages';
import InnerPortfolioOtherWork from '../../components/layout/components/portfolio/InnerPortfolioOtherWork';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

export default function WorkPage({ data }) {
  useEffect(() => {
    colourState.bgColour = 'blue';
  }, []);

  return (
    <Layout>
      <Header />
      <main className='work'>
        <Seo title={''} />
        <InnerPortfolioHeader data={data.portfolio} />
        <InnerPortfolioDetail order={0} data={data.portfolio} />
        <InnerPortfolioDetail order={1} data={data.portfolio} />
        <InnerPortfolioDetailImages data={data.portfolio} />
        <InnerPortfolioOtherWork data={data} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const portfolioRes = await fetch(
    `${process.env.ADMIN_URL}/api/portfolios/${params.id}?populate=*`
  );
  const portfolioData = await portfolioRes.json();

  const portfoliosRes = await fetch(
    `${process.env.ADMIN_URL}/api/portfolios?populate=*`
  );
  const portfoliosData = await portfoliosRes.json();

  const data = {
    portfolio: portfolioData.data,
    portfolios: portfoliosData.data,
  };

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const portfolioRes = await fetch(`${process.env.ADMIN_URL}/api/portfolios`);
  const portfolioData = await portfolioRes.json();

  const ids = portfolioData.data.map((item) => ({
    alias: item.attributes.alias,
    id: item.attributes.id,
  }));

  const aliass = portfolioData.data.map((item) => item.id.toString());
  const paths = aliass.map((id) => ({
    params: { id, alias: 'yes' },
  }));

  return {
    paths,
    fallback: false,
  };
}
