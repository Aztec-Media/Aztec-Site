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
                Website + Digital
                <span className='arrow'>
                  <Arrow />
                </span>
                <span className='underline'></span>
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
          <h3>
            <span className='number'>01</span>
            Website + Digital
            <span className='arrow'>
              <Arrow />
            </span>
            <span className='underline'></span>
          </h3>
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
          <h3>
            <span className='number'>01</span>
            Website + Digital
            <span className='arrow'>
              <Arrow />
            </span>
            <span className='underline'></span>
          </h3>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
      </SplideSlide>
    </Splide>
  );
}
