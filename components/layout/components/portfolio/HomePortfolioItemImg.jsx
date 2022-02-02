import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemImg({ image }) {
  // console.log(image);

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
          start: 'top 70%',
        },
      }
    );
    gsap.to(imageRef.current, {
      boxShadow: '0px 5px 50px rgba(0,0,0,0.2)',
      duration: 0.6,
      delay: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 70%',
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
