import Layout from '../components/layout/Layout';
import Seo from '../components/layout/Seo';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <Layout>
      <Seo title='Home' />
      <Header />
      <main></main>
    </Layout>
  );
}
