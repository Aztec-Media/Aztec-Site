import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InnerPortfolioHeader({ data }) {
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
          <Image
            src={`http://localhost:1337${data.attributes.MainImage.data.attributes.url}`}
            layout='fill'
            alt={data.attributes.Title}
            priority='true'
          />
        </figure>
      </div>
      <div className='intro'>
        <h1>
          <div className='line'></div>
          {data.attributes.Title}
        </h1>
        <p>{data.attributes.Summary}</p>
      </div>
    </section>
  );
}
