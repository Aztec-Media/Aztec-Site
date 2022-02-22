import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

export default function NuovaItalia() {
  return (
    <Layout>
      <Seo title={'Nuova Italia'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='Nuova Italia'
          title='Nuova Italia'
          bgColour='#aeab06'
        />
        <section className='nuova__details portfolio__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image
                    src='/nuova/brochures.png'
                    width='1892'
                    height='1970'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
            <div className='site__layout'>
              <div className='phone'>
                <figure>
                  <Image src='/nuova/phone.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='full'>
                <figure>
                  <Image
                    src='/nuova/website.jpg'
                    width='1977'
                    height='4128'
                    alt='#'
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='#d9d9d9' />
        <InnerPortfolioNext />
      </main>
      <Footer />
    </Layout>
  );
}
