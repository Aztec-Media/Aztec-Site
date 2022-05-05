import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import ServicesSlider from '../../components/sections/services/ServicesSlider';
import Accordion from '../../components/sections/services/Accordion';

export default function PrintDesign({ services }) {
  return (
    <Layout>
      <Seo title={'Print Design'} />
      <main className='print-design'>
        <ServicesHeader title='Print Design' colour='#5B7B7A' />
        <section className='services__page__slider'>
          <div className='colour' style={{ backgroundColor: '#5B7B7A' }}></div>
          <Splide
            hasTrack={false}
            options={{
              type: 'loop',
              rewind: true,
              arrows: false,
              pagination: false,
              perPage: 1,
              perMove: 1,
              autoplay: false,
              padding: '10rem',
              focus: 'center',
              gap: '6rem',
              updateOnMove: true,
              breakpoints: {
                1200: {
                  gap: '4rem',
                  padding: '6rem',
                },
                768: {
                  padding: '3rem',
                  gap: '2rem',
                },
                550: {
                  padding: '2rem',
                  gap: '1rem',
                },
              },
            }}
            className='work__img__splide'
          >
            <SplideTrack>
              <SplideSlide>
                <div className='overlay'></div>
                <div className='img'>
                  <figure>
                    <Image src='/img.jpg' alt='#' layout='fill' />
                  </figure>
                </div>
                <div className='content'>
                  <h2>Brochures</h2>
                  <p>
                    Lorem ipsum dolor sit amet consec adipisicing elit,
                    ecessitatibus nulla.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='overlay'></div>
                <div className='img'>
                  <figure>
                    <Image src='/img.jpg' alt='#' layout='fill' />
                  </figure>
                </div>
                <div className='content'>
                  <h2>Business Cards</h2>
                  <p>
                    Lorem ipsum dolor sit amet consec adipisicing elit,
                    ecessitatibus nulla.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='overlay'></div>
                <div className='img'>
                  <figure>
                    <Image src='/img.jpg' alt='#' layout='fill' />
                  </figure>
                </div>
                <div className='content'>
                  <h2>Vehicle Wraps</h2>
                  <p>
                    Lorem ipsum dolor sit amet consec adipisicing elit,
                    ecessitatibus nulla.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='overlay'></div>
                <div className='img'>
                  <figure>
                    <Image src='/img.jpg' alt='#' layout='fill' />
                  </figure>
                </div>
                <div className='content'>
                  <h2>Brochures</h2>
                  <p>
                    Lorem ipsum dolor sit amet consec adipisicing elit,
                    ecessitatibus nulla.
                  </p>
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </section>
        <section className='services__info__text'>
          <div className='img'>
            <figure>
              <Image src='/phones.jpg' alt='' layout='fill' />
            </figure>
          </div>
          <div className='text'>
            <h3 style={{ color: '#5B7B7A' }}>
              Some bold text will go in this space here
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              saepe animi excepturi nam eos. Commodi!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              soluta autem velit ut, cupiditate exercitationem.
            </p>
          </div>
        </section>
        <section className='service__intro__details'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nisi voluptatem nobis mollitia, at magni?
          </p>
          <div className='accordions'>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </section>
        <section className='services__full__img'>
          <div className='img'>
            <figure>
              <Image
                src='/layout.jpg'
                alt='#'
                width={3185}
                height={2215}
                layout='responsive'
              />
            </figure>
          </div>
        </section>
        <section
          className='services__testimonial'
          style={{ backgroundColor: '#5B7B7A', color: '#fff' }}
        >
          <div>
            <div className='icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' />
              </svg>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, perferendis omnis? Assumenda inventore sapiente
              repellat ratione perferendis voluptatem, molestiae rem.
            </p>
          </div>
        </section>
        <ServicesSlider services={services} bgColour='#5B7B7A' colour='#fff' />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const servicesRes = await fetch(
    'http://localhost:1337/api/services?populate=*'
  );
  const servicesData = await servicesRes.json();

  const services = servicesData.data.filter(
    (item) => item.attributes.title !== 'Print Design'
  );

  return {
    props: {
      services,
    },
  };
}
