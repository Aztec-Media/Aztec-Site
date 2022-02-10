import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../vectors/Arrow';
import Link from 'next/link';

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
      {services.map((service) => (
        <SplideSlide key={service.number}>
          <div className='img'>
            <figure>
              <Image src={service.imgSrc} layout='fill' alt='Aztec Media' />
            </figure>
          </div>
          <div className='content'>
            <Link href={service.link}>
              <a>
                <h3>
                  <span className='number'>{service.number}</span>
                  <span className='text'>
                    {service.title}
                    <div className='underline'></div>
                  </span>
                  <span className='arrow'>
                    <Arrow />
                  </span>
                </h3>
              </a>
            </Link>
            <p>{service.text}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
