import '../styles/reset.css';
import '@splidejs/splide/dist/css/splide-core.min.css';
import '../styles/style.css';

import Header from '../components/layout/Header';
import Cursor from '../components/general/Cursor';
import Loader from '../components/general/Loader';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [firstLoad, setFirstLoad] = useState(true);

  return (
    <>
      {/* <Loader firstLoad={firstLoad} setFirstLoad={setFirstLoad} /> */}
      <Header />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
