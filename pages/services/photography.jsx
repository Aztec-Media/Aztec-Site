import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import ServicesSlider from '../../components/sections/services/ServicesSlider';

export default function Photography() {
  return (
    <Layout>
      <Seo title={'Photography'} />
      <main className='photography'>
        <ServicesHeader title='Photography' />
        {/* <ServicesSlider /> */}
      </main>
      <Footer />
    </Layout>
  );
}
