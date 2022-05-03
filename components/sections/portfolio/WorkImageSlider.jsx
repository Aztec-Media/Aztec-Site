import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Fragment } from 'react';
import Image from 'next/image';

export default function WorkImageSlider({ portfolio }) {
  return (
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
          breakpoints: {
            1200: {
              gap: '4rem',
              padding: '6rem',
            },
            768: {
              padding: '3rem',
              gap: '2rem',
            },
          },
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
                    alt={img.attributes.alternativeText}
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
  );
}
