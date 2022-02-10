import '../styles/reset.css';
import '@splidejs/splide/dist/css/splide-core.min.css';
import '../styles/style.css';

import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
