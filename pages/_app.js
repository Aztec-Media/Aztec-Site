import '../styles/reset.css';
import '@splidejs/splide/dist/css/splide-core.min.css';
import '../styles/style.css';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </Layout>
  );
}

export default MyApp;
