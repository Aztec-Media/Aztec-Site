import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Btn from '../../general/Btn';

export default function InnerPortfolioHeader({ imageSrc, imageAlt, title }) {
  const imageRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       scrub: true,
  //       trigger: imageRef.current,
  //       start: 'top bottom',
  //       end: 'bottom top',
  //     },
  //   });

  //   tl.fromTo(
  //     imageRef.current.querySelector('figure'),
  //     { yPercent: -7.5 },
  //     { yPercent: 7.5, ease: 'power1.inOut' }
  //   );
  // }, []);

  return (
    <section className='inner__portfolio__header'>
      <div className='overlay'></div>
      <div className='intro'>
        {/* <p>{data.attributes.Summary}</p> */}
        <Btn href='/' text='Project Planner' />
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
