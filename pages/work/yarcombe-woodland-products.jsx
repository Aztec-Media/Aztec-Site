import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';

export default function YarcombeWoodlandProducts() {
  return (
    <Layout>
      <Seo title={'Yarcombe Woodland Products'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='yarcombe'
          title='Yarcombe Woodland Products'
          bgColour='#2b4934'
        />
        <section className='yarcombe__details portfolio__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image
                    src='/yarcombe/brochures.png'
                    width='2800'
                    height='2900'
                    alt='#'
                    layout='responsive'
                  />
                </figure>
              </div>
            </div>
            <div className='site__layout'>
              <div className='phone'>
                <figure>
                  <Image src='/yarcombe/phone.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='full'>
                <figure>
                  <Image
                    src='/yarcombe/website.jpg'
                    width='1932'
                    height='6507'
                    alt='#'
                    layout='responsive'
                  />
                </figure>
              </div>
            </div>
            <div className='social'>
              <figure>
                <Image
                  src='/yarcombe/social.png'
                  width='3422'
                  height='1565'
                  alt='#'
                  layout='responsive'
                />
              </figure>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='#2b4934' colour='#fff' />
        <InnerPortfolioNext />
      </main>
      <Footer />
    </Layout>
  );
}
