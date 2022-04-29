import Image from 'next/image';
import Link from 'next/link';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../../vectors/Arrow';

export default function PortfolioSplide({ portfolio }) {
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
      {portfolio.map((item, i) => (
        <SplideSlide key={i}>
          <div className='img'>
            <figure>
              <Image
                src={`http://localhost:1337${item.attributes.mainImage.data.attributes.url}`}
                layout='fill'
                alt={item.attributes.title}
                priority='true'
                className='services__slider__img'
              />
            </figure>
          </div>
          <div className='content'>
            <Link href={`/services/${item.attributes.alias}`}>
              <a>
                <h3>
                  <span className='number'>{item.attributes.number}</span>
                  <span className='text'>
                    {item.attributes.title}
                    <div className='underline'></div>
                  </span>
                  <span className='arrow'>
                    <Arrow />
                  </span>
                </h3>
              </a>
            </Link>
            <p>{item.attributes.summary}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
