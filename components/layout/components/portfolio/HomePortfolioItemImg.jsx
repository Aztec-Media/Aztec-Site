import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemImg({ image }) {
  const imageRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        gsap.fromTo(
          imageRef.current,
          { y: 0 },
          {
            y: -450,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.1,
            scrollTrigger: {
              scrub: 1,
              trigger: imageRef.current,
              start: 'top bottom',
            },
          }
        );

        gsap.fromTo(
          imageRef.current.querySelector('figure'),
          { yPercent: -10, scale: 1 },
          {
            yPercent: 0,
            scale: 1.2,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.1,
            scrollTrigger: {
              scrub: 1,
              trigger: imageRef.current,
              start: 'top bottom',
            },
          }
        );
      },
      '(max-width: 899px)': function () {
        gsap.fromTo(
          imageRef.current,
          { y: 0 },
          {
            y: -75,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.1,
            scrollTrigger: {
              scrub: 1,
              trigger: imageRef.current,
              start: 'top bottom',
            },
          }
        );

        gsap.fromTo(
          imageRef.current.querySelector('figure'),
          { yPercent: -10, scale: 1 },
          {
            yPercent: 0,
            scale: 1.2,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.1,
            scrollTrigger: {
              scrub: 1,
              trigger: imageRef.current,
              start: 'top bottom',
            },
          }
        );
      },
    });
  }, [imageRef]);

  return (
    <div className='home__portfolio__item__img' ref={imageRef}>
      <div className='img__wrapper'>
        <figure>
          <Image
            src={`http://localhost:1337${image.url}`}
            layout='fill'
            alt='#'
          />
        </figure>
      </div>
    </div>
  );
}
