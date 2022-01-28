import '../styles/reset.css';
import '../styles/style.css';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
