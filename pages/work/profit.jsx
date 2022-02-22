import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';

export default function Profit() {
  return (
    <Layout>
      <Seo title={'Profit Windows'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='profit'
          title='Profit Windows'
          bgColour='#798183'
        />
        <section className='profit__details portfolio__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image
                    src='/profit/brochures.png'
                    width='2186'
                    height='2267'
                    alt='#'
                    layout='responsive'
                  />
                </figure>
              </div>
            </div>
            <div className='site__layout'>
              <div className='phone'>
                <figure>
                  <Image src='/profit/phone.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='full'>
                <figure>
                  <Image
                    src='/profit/website.jpg'
                    width='1932'
                    height='6507'
                    alt='#'
                    layout='responsive'
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='#798183' colour='#fff' />
        <InnerPortfolioNext />
      </main>
      <Footer />
    </Layout>
  );
}
