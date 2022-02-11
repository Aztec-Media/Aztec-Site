import '../styles/reset.css';
import '@splidejs/splide/dist/css/splide-core.min.css';
import '../styles/style.css';

import Header from '../components/layout/Header';
import Cursor from '../components/general/Cursor';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
