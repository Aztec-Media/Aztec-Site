import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import ServicesSlider from '../../components/sections/services/ServicesSlider';

export default function PrintDesign() {
  return (
    <Layout>
      <Seo title={'Print Design'} />
      <main className='print-design'>
        <ServicesHeader title='Print Design' />
        <ServicesSlider />
      </main>
      <Footer />
    </Layout>
  );
}
