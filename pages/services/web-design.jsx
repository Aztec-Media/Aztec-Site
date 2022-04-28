import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import ServicesSlider from '../../components/sections/services/ServicesSlider';

export default function WebDesign() {
  return (
    <Layout>
      <Seo title={'Web Design'} />
      <main className='web-design'>
        <ServicesHeader title='Web Design' />
        {/* <ServicesSlider /> */}
      </main>
      <Footer />
    </Layout>
  );
}
