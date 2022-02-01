import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../vectors/Arrow';
import Link from 'next/link';

export default function ServicesSplide() {
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
            padding: {
              right: '4rem',
              left: '2rem',
            },
          },
        },
      }}
      className='home__services__splide'
    >
      <SplideSlide>
        <div className='img'>
          <figure>
            <Image src='/img.jpg' layout='fill' alt='Aztec Media' />
          </figure>
        </div>
        <div className='content'>
          <Link href='/'>
            <a>
              <h3>
                <span className='number'>01</span>
                <span className='text'>
                  Website + Digital
                  <div className='underline'></div>
                </span>
                <span className='arrow'>
                  <Arrow />
                </span>
              </h3>
            </a>
          </Link>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='img'>
          <figure>
            <Image src='/img.jpg' layout='fill' alt='Aztec Media' />
          </figure>
        </div>
        <div className='content'>
          <Link href='/'>
            <a>
              <h3>
                <span className='number'>01</span>
                <span className='text'>
                  Website + Digital
                  <div className='underline'></div>
                </span>
                <span className='arrow'>
                  <Arrow />
                </span>
              </h3>
            </a>
          </Link>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='img'>
          <figure>
            <Image src='/img.jpg' layout='fill' alt='Aztec Media' />
          </figure>
        </div>
        <div className='content'>
          <Link href='/'>
            <a>
              <h3>
                <span className='number'>01</span>
                <span className='text'>
                  Website + Digital
                  <div className='underline'></div>
                </span>
                <span className='arrow'>
                  <Arrow />
                </span>
              </h3>
            </a>
          </Link>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='img'>
          <figure>
            <Image src='/img.jpg' layout='fill' alt='Aztec Media' />
          </figure>
        </div>
        <div className='content'>
          <Link href='/'>
            <a>
              <h3>
                <span className='number'>01</span>
                <span className='text'>
                  Website + Digital
                  <div className='underline'></div>
                </span>
                <span className='arrow'>
                  <Arrow />
                </span>
              </h3>
            </a>
          </Link>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
      </SplideSlide>
    </Splide>
  );
}
