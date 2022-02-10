import { useEffect } from 'react';
import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import InnerPortfolioDetail from '../../components/sections/portfolio//InnerPortfolioDetail';
import Seo from '../../components/layout/Seo';
import InnerPortfolioDetailImages from '../../components/sections/portfolio//InnerPortfolioDetailImages';
import InnerPortfolioOtherWork from '../../components/sections/portfolio//InnerPortfolioOtherWork';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

export default function ButeMotorsport() {
  return (
    <Layout>
      <Seo title={'Bute Motorsport'} />
      <main className='work'>
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
