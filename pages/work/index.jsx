import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/work/WorkSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

export default function Work({ data }) {
  return (
    <Layout>
      <Seo title='Our Work' />
      <main className='work'>
        <WorkSection />
      </main>
      <Footer />
    </Layout>
  );
}
