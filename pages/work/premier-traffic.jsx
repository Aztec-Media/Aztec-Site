import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

export default function PremierTraffic() {
  return (
    <Layout>
      <Seo title={'Premier Traffic'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='premier'
          title='Premier Traffic'
        />
        <section className='premier__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image src='/premier/brochure-1.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image src='/premier/brochure-2.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image src='/premier/brochure-3.png' layout='fill' alt='#' />
                </figure>
              </div>
            </div>
            <div className='poster'>
              <div className='img'>
                <figure>
                  <Image src='/premier/poster-left.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image
                    src='/premier/poster-right.png'
                    layout='fill'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
            <div className='cards'>
              <div className='img'>
                <figure>
                  <Image src='/premier/cards-left.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image src='/premier/cards-right.png' layout='fill' alt='#' />
                </figure>
              </div>
            </div>
            <div className='logo'></div>
            <div className='laptop'>
              <div className='screen'>
                <figure>
                  <div className='img'></div>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
