import Layout from '../../components/layout/Layout';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';

export default function WebDesign() {
  return (
    <Layout>
      <Header />
      <main className='Web Design'>
        <Seo title={'Web Design'} />
      </main>
      <Footer />
    </Layout>
  );
}
