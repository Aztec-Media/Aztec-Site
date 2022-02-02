import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemImg() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        imageRef.current.querySelector('figure'),
        imageRef.current.querySelector('img'),
      ],
      { xPercent: -102 },
      {
        xPercent: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
        },
      }
    );
  }, [imageRef]);

  return (
    <div className='home__portfolio__item__img' ref={imageRef}>
      <div className='img__wrapper'>
        <figure>
          <Image src='/img.jpg' layout='fill' alt='#' />
        </figure>
      </div>
    </div>
  );
}
