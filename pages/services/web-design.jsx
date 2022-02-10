import Layout from '../../components/layout/Layout';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/layout/components/services/ServicesHeader';
import ServicesSlider from '../../components/layout/components/services/ServicesSlider';

export default function WebDesign() {
  return (
    <Layout>
      <Seo title={'Web Design'} />
      <main className='Web Design'>
        <ServicesHeader title='Web Design' />
        <ServicesSlider />
      </main>
      <Footer />
    </Layout>
  );
}
