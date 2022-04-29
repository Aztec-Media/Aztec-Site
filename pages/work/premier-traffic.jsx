import InnerPortfolioHeader from '../../components/sections/portfolio/InnerPortfolioHeader';
import InnerPortfolioPerson from '../../components/sections/portfolio/InnerPortfolioPerson';
import InnerPortfolioNext from '../../components/sections/portfolio/InnerPortfolioNext';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Btn from '../../components/general/Btn';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../../components/vectors/Arrow';
import { Fragment } from 'react';
import PortfolioSplide from '../../components/sections/sliders/PortfolioSplide';

export default function PremierTraffic({ portfolio, portfolios }) {
  return (
    <Layout>
      <Seo title={'Premier Traffic'} />
      <main className='work__main work__main--premier'>
        <section className='work__heading'>
          <div className='black'></div>
          <div className='title'>
            <ul>
              <li>Web Design &amp; Development</li>
              <li>-</li>
              <li>Print Design</li>
            </ul>
            <div>
              <h1>{portfolio.attributes.title}</h1>
              <Btn href='/project-planner' text='Plan your project' />
            </div>
          </div>
          <div className='main__img'>
            <figure>
              <Image
                src={`http://localhost:1337${portfolio.attributes.mainImage.data.attributes.url}`}
                layout='fill'
                alt=''
                priority='true'
              />
            </figure>
          </div>
        </section>
        <section className='intro__details'>
          <h2>{portfolio.attributes.summary}</h2>
        </section>
        <section className='showcase__img'>
          <figure>
            <Image src={'/phones.jpg'} layout='fill' alt='' />
          </figure>
        </section>
        <section className='project__details'>
          <div>
            <div className='left'>
              <ul>
                <li>
                  <span>What we did</span>
                  <span>- Website Design &amp; Development</span>
                  <span>- Print Design</span>
                </li>
                <li>
                  <span>Website</span>
                  <span>
                    <a
                      href='https://premier-traffic.co.uk'
                      rel='noreferrer nofollower'
                      target='_blank'
                    >
                      - premier-traffic.co.uk
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='right'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                dicta maiores libero suscipit dolores maxime aspernatur aut
                minus debitis distinctio?
              </p>
            </div>
          </div>
        </section>
        <section className='work__img__slider'>
          <Splide
            options={{
              rewind: false,
              arrows: false,
              pagination: false,
              perPage: 1,
              perMove: 1,
              padding: '10rem',
              focus: 'center',
              gap: '6rem',
              updateOnMove: true,
            }}
            className='work__img__splide'
          >
            {portfolio.attributes.sliderImages.data.map((img) => (
              <Fragment key={img.id}>
                <SplideSlide>
                  <div className='img'>
                    <figure>
                      <Image
                        src={`http:localhost:1337${img.attributes.url}`}
                        alt='#'
                        layout='fill'
                      />
                    </figure>
                  </div>
                </SplideSlide>
              </Fragment>
            ))}
            <div className='splide__progress'>
              <div className='splide__progress__bar' />
            </div>
          </Splide>
        </section>
        <section className='work__image__grid'>
          <div className='text__header'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur veniam autem quidem quam voluptates ratione minima,
              cumque deleniti odio expedita quibusdam exercitationem non
              voluptas.
            </p>
          </div>
          <div className='grid'>
            <div className='img'>
              <figure>
                <Image src='/premier/phone.png' alt='#' layout='fill' />
              </figure>
            </div>
            <div className='img'>
              <figure>
                <Image src='/premier/phone.png' alt='#' layout='fill' />
              </figure>
            </div>
            <div className='img'>
              <figure>
                <Image src='/premier/website.jpg' alt='#' layout='fill' />
              </figure>
            </div>
          </div>
        </section>
        <InnerPortfolioPerson bgColour='rgb(19, 19, 19)' colour='#fff' />
        <section className='more__work__slider'>
          <PortfolioSplide portfolio={portfolios} />
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const portfolioRes = await fetch(
    'http://localhost:1337/api/portfolios?populate=*'
  );
  const portfolioData = await portfolioRes.json();

  const portfolio = portfolioData.data.filter(
    (item) => item.attributes.title === 'Premier Traffic'
  );

  return {
    props: {
      portfolios: portfolioData.data,
      portfolio: portfolio[0],
    },
  };
}
