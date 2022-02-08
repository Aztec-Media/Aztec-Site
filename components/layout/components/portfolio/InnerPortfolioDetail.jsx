import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InnerPortfolioDetail({ order }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: imageRef.current,
        start: 'top bottom',
      },
    });

    tl.fromTo(
      imageRef.current.querySelector('.img'),
      { y: 0 },
      { y: -300 }
    ).fromTo(
      imageRef.current.querySelector('figure'),
      { yPercent: -7.5 },
      { yPercent: 7.5, ease: 'power1.inOut' },
      0
    );
  }, []);

  if (order === 0) {
    return (
      <section className='inner__portfolio__detail' ref={imageRef}>
        <div className='img'>
          <figure>
            <Image src={'/img.jpg'} layout='fill' alt='#' />
          </figure>
        </div>
        <div className='text'>
          <h2>
            Custom Graphics <span className='underline'></span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            accusantium assumenda. Nemo quo vitae magni.
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className='inner__portfolio__detail inner__portfolio__detail--img-right'
        ref={imageRef}
      >
        <div className='text'>
          <h2>
            Bespoke Website <span className='underline'></span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            accusantium assumenda. Nemo quo vitae magni.
          </p>
        </div>
        <div className='img'>
          <figure>
            <Image src={'/img.jpg'} layout='fill' alt='#' />
          </figure>
        </div>
      </section>
    );
  }
}
