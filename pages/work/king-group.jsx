import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';

export default function KingGroup() {
  return (
    <Layout>
      <Seo title={'King Group'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='king group'
          title='King Group'
          bgColour='#044c7e'
        />
        <section className='king__details portfolio__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image
                    src='/king/brochures.png'
                    width='2372'
                    height='3256'
                    alt='#'
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
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='#044c7e' colour='#fff' />
        <InnerPortfolioNext />
      </main>
      <Footer />
    </Layout>
  );
}
