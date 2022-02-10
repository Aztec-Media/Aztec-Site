import { useEffect } from 'react';
import InnerPortfolioHeader from '../../components/layout/components/portfolio/InnerPortfolioHeader';
import InnerPortfolioDetail from '../../components/layout/components/portfolio/InnerPortfolioDetail';
import Seo from '../../components/layout/Seo';
import InnerPortfolioDetailImages from '../../components/layout/components/portfolio/InnerPortfolioDetailImages';
import InnerPortfolioOtherWork from '../../components/layout/components/portfolio/InnerPortfolioOtherWork';
import Layout from '../../components/layout/Layout';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function ButeMotorsport() {
  return (
    <Layout>
      <Header />
      <main className='work'>
        <Seo title={'Bute Motorsport'} />
        <InnerPortfolioHeader
          imageSrc='/bute.jpg'
          imageAlt='bute'
          title='Bute Motorsport'
        />
        {/* <InnerPortfolioDetail order={0} data={data.portfolio} /> */}
        {/* <InnerPortfolioDetail order={1} data={data.portfolio} /> */}
        {/* <InnerPortfolioDetailImages data={data.portfolio} /> */}
        {/* <InnerPortfolioOtherWork data={data} /> */}
      </main>
      <Footer />
    </Layout>
  );
}
