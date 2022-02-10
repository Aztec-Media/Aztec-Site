import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/layout/components/services/ServicesHeader';
import ServicesSlider from '../../components/layout/components/services/ServicesSlider';

export default function SocialMedia() {
  return (
    <Layout>
      <Seo title={'Social Media'} />
      <main className='social-media'>
        <ServicesHeader title='Social Media' />
        <ServicesSlider />
      </main>
      <Footer />
    </Layout>
  );
}
