import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Arrow from '../vectors/Arrow';

export default function TeamSplide({ direction }) {
  return (
    <Splide
      className='team__splide'
      options={{
        arrows: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        gap: '2rem',
        autoScroll: {
          speed: 2,
        },
        direction,
      }}
      Extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className='slide__content'>
          <div className='overlay'></div>
          <div className='img'>
            <figure>
              <Image src='/img.jpg' layout='fill' alt='#' />
            </figure>
          </div>
          <div className='text'>
            <h4>Jerry</h4>
            <p>Stud.... Wall Builder</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='slide__spacer'>
          <p>The Team</p>
          <div className='arrows'>
            <Arrow />
            <Arrow />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='slide__content'>
          <div className='overlay'></div>
          <div className='img'>
            <figure>
              <Image src='/img.jpg' layout='fill' alt='#' />
            </figure>
          </div>
          <div className='text'>
            <h4>Jerry</h4>
            <p>Stud.... Wall Builder</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='slide__spacer'>
          <p>The Team</p>
          <div className='arrows'>
            <Arrow />
            <Arrow />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='slide__content'>
          <div className='overlay'></div>
          <div className='img'>
            <figure>
              <Image src='/img.jpg' layout='fill' alt='#' />
            </figure>
          </div>
          <div className='text'>
            <h4>Jerry</h4>
            <p>Stud.... Wall Builder</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='slide__spacer'>
          <p>The Team</p>
          <div className='arrows'>
            <Arrow />
            <Arrow />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
