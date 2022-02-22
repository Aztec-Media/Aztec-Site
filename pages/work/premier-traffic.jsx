import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';
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
          bgColour='#1d1d1b'
        />
        <section className='premier__details portfolio__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image
                    src='/premier/brochures.png'
                    width='2267'
                    height='1970'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
            <div className='posters'>
              <div className='img'>
                <figure>
                  <Image
                    src='/premier/posters.png'
                    width='2445'
                    height='1456'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
            <div className='cards'>
              <div className='img'>
                <figure>
                  <Image
                    src='/premier/cards.png'
                    width='2525'
                    height='1298'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
            <div className='logo'>
              <figure>
                <Image src='/premier/website.jpg' layout='fill' alt='#' />
              </figure>
            </div>
            <div className='site__layout'>
              <div className='phone'>
                <figure>
                  <Image src='/premier/phone.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='full'>
                <figure>
                  <Image
                    src='/premier/website.jpg'
                    width='1920'
                    height='4736'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='#f9e01d' />
        <InnerPortfolioNext />
      </main>
      <Footer />
    </Layout>
  );
}
