import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemImg({ image }) {
  const portfolioImageRef = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioImageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    const slideTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: portfolioImageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    introTl
      .fromTo(
        portfolioImageRef.current.querySelector('figure'),
        { scaleX: 0 },
        { scaleX: 1 }
      )
      .fromTo(
        portfolioImageRef.current.querySelector('.img__cover'),
        { scaleX: 1 },
        {
          scaleX: 0,
        },
        '-=0.6'
      )
      .fromTo(
        portfolioImageRef.current.querySelector('img'),
        { scale: 1.2 },
        { scale: 1 },
        '-=0.9'
      );

    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        slideTl.fromTo(
          portfolioImageRef.current,
          { y: 0 },
          {
            y: -450,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.1,
          }
        );
      },
    });
  }, [portfolioImageRef]);

  return (
    <div className='home__portfolio__item__img' ref={portfolioImageRef}>
      <div className='img__wrapper'>
        <figure>
          <div className='img__cover'></div>
          <Image src={image} layout='fill' alt='#' />
        </figure>
      </div>
    </div>
  );
}
