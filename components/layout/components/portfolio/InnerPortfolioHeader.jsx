import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InnerPortfolioHeader() {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: imageRef.current,
        start: 'bottom bottom',
      },
    });

    tl.fromTo(
      imageRef.current.querySelector('figure'),
      { yPercent: -7.5 },
      { yPercent: 7.5, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <section className='inner__portfolio__header'>
      <div className='overlay'></div>
      <div className='img' ref={imageRef}>
        <figure>
          <Image src={'/img.jpg'} layout='fill' alt='#' priority='true' />
        </figure>
      </div>
      <div className='intro'>
        <h1>
          <div className='line'></div>
          Bute Motorsport
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A mollitia,
          ullam deleniti odio iure optio dolores consectetur iste neque
          perferendis ratione aut voluptatem molestias, deserunt inventore qui
          quas nam nisi.
        </p>
      </div>
    </section>
  );
}
