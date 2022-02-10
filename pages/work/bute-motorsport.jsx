import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
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
      </main>
      <Footer />
    </Layout>
  );
}
