import Image from 'next/image';
import Link from 'next/link';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../../vectors/Arrow';

export default function ServicesSplide({ services }) {
  return (
    <Splide
      options={{
        arrows: false,
        perPage: 3,
        drag: 'free',
        gap: '4rem',
        focus: 'center',
        trimSpace: false,
        breakpoints: {
          1440: {
            perPage: 2,
          },
          800: {
            perPage: 1,
            padding: {
              right: '8rem',
              left: '4rem',
            },
            gap: '2rem',
          },
          500: {
            perPage: 1,
            padding: {
              right: '4rem',
              left: '2rem',
            },
            gap: '2rem',
          },
        },
      }}
      className='services__splide'
    >
      {services.map((service, i) => (
        <SplideSlide key={i}>
          <div className='img'>
            <figure>
              <Image
                src={`http://localhost:1337${service.attributes.image.data.attributes.url}`}
                layout='fill'
                alt={service.attributes.title}
                priority='true'
                className='services__slider__img'
              />
            </figure>
          </div>
          <div className='content'>
            <Link href={`/services/${service.attributes.link}`}>
              <a>
                <h3>
                  <span className='number'>{service.attributes.number}</span>
                  <span className='text'>
                    {service.attributes.title}
                    <div className='underline'></div>
                  </span>
                  <span className='arrow'>
                    <Arrow />
                  </span>
                </h3>
              </a>
            </Link>
            <p>{service.attributes.summary}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
