import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

export default function YarcombeWoodlandProducts() {
  return (
    <Layout>
      <Seo title={'Yarcombe Woodland Products'} />
      <main className='work'>
        <InnerPortfolioHeader
          imageSrc='/img.jpg'
          imageAlt='yarcombe'
          title='Yarcombe Woodland Products'
        />
        <section className='yarcombe__details'>
          <div className='grid'>
            <div className='brochure'>
              <div className='img'>
                <figure>
                  <Image src='/yarcombe/brochure-1.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image src='/yarcombe/brochure-2.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image src='/yarcombe/brochure-3.png' layout='fill' alt='#' />
                </figure>
              </div>
              <div className='img'>
                <figure>
                  <Image src='/yarcombe/brochure-4.png' layout='fill' alt='#' />
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
