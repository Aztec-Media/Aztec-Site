import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';

export default function FansAndBlowers() {
  return (
    <Layout>
      <Seo title={'Fans and Blowers'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='Fans and Blowers'
          title='Fans and Blowers'
          bgColour='#00467e'
        />
        <section className='fans__details portfolio__details'>
          <div className='grid'>
            {/* <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image
                    src='/fans/brochures.png'
                    width='2372'
                    height='3256'
                    alt='#'
                    layout='responsive'
                  />
                </figure>
              </div>
            </div> */}
            <div className='site__layout'>
              <div className='phone'>
                <figure>
                  <Image src='/fans/phone.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='full'>
                <figure>
                  <Image
                    src='/fans/website.jpg'
                    width='1909'
                    height='6453'
                    alt='#'
                    layout='responsive'
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='#00467e' colour='#fff' />
        <InnerPortfolioNext />
      </main>
      <Footer />
    </Layout>
  );
}
