/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title}` : 'Aztec Media'}</title>
      <meta
        name='description'
        content={description ? `${description}` : 'Aztec Media'}
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap'
        rel='stylesheet'
      />
    </Head>
  );
}
