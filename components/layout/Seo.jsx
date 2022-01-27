/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | Aztec Media` : 'Aztec Media'}</title>
      <meta
        name='description'
        content={description ? `${description} | Aztec Media` : 'Aztec Media'}
      />
      <link rel='stylesheet' href='https://use.typekit.net/cwc2amm.css' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap'
        rel='stylesheet'
      />
    </Head>
  );
}
