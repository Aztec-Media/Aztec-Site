import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Btn from '../../general/Btn';

export default function InnerPortfolioHeader({
  imageSrc,
  imageAlt,
  title,
  bgColour,
}) {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: imageRef.current,
        start: 'top center',
        end: 'bottom top',
      },
    });

    tl.fromTo(
      imageRef.current.querySelector('figure'),
      { yPercent: 0 },
      { yPercent: 15, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <section
      className='inner__portfolio__header'
      style={{ backgroundColor: bgColour ? bgColour : 'var(--orange)' }}
    >
      <div className='overlay'></div>
      <div className='intro'>
        <Btn href='/' text='Start new project' />
        <h1>{title}</h1>
      </div>
      <div className='img' ref={imageRef}>
        <figure>
          <Image src={imageSrc} layout='fill' alt={imageAlt} priority='true' />
        </figure>
      </div>
    </section>
  );
}
