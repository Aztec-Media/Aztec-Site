import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import InnerPortfolioDetailText from './InnerPortfolioDetailText';
gsap.registerPlugin(ScrollTrigger);

export default function InnerPortfolioDetailImages({ data }) {
  const fullImageRef = useRef(null);
  const imageGridRef = useRef(null);

  useEffect(() => {
    const fullTl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: fullImageRef.current,
        start: 'top bottom',
      },
    });

    fullTl.fromTo(
      fullImageRef.current.querySelector('figure'),
      { yPercent: -15 },
      { yPercent: 0, ease: 'power1.inOut' }
    );

    const gridTl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: imageGridRef.current.querySelector('.img'),
        start: 'top bottom',
      },
    });

    gridTl.fromTo(
      [
        imageGridRef.current.querySelector('.fig1'),
        imageGridRef.current.querySelector('.fig2'),
      ],
      { yPercent: -15 },
      { yPercent: 0, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <section className='inner__portfolio__detail__images'>
      <div className='full__img' ref={fullImageRef}>
        <figure>
          <Image
            src={`http://localhost:1337${data.attributes.FullImage.data.attributes.url}`}
            alt={data.attributes.Title}
            layout='fill'
          />
        </figure>
      </div>
      <InnerPortfolioDetailText data={data} />
      <div className='img__grid' ref={imageGridRef}>
        <div className='img'>
          <figure className='fig1'>
            <Image
              src={`http://localhost:1337${data.attributes.BottomImageLeft.data.attributes.url}`}
              alt={data.attributes.Title}
              layout='fill'
            />
          </figure>
        </div>
        <div className='img'>
          <figure className='fig2'>
            <Image
              src={`http://localhost:1337${data.attributes.BottomImageRight.data.attributes.url}`}
              alt={data.attributes.Title}
              layout='fill'
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
