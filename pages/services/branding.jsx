import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import ServicesSlider from '../../components/sections/services/ServicesSlider';

export default function Branding() {
  return (
    <Layout>
      <Seo title={'Branding'} />
      <main className='branding'>
        <ServicesHeader title='Branding' />
        <ServicesSlider />
      </main>
      <Footer />
    </Layout>
  );
}
