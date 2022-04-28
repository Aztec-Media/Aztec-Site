import Image from 'next/image';
import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InsightsFeature({ insights }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    tl.fromTo(
      imageRef.current.querySelector('figure'),
      { yPercent: -15 },
      { yPercent: 15, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <section className='insights__feature'>
      <div className='img' ref={imageRef}>
        <figure>
          <div className='overlay'></div>
          <Image src='/img.jpg' layout='fill' alt='#' />
        </figure>
      </div>
      <article className='text'>
        <Link href={`/insights/${insights[0].attributes.alias}`}>
          <a>
            <p className='date'>{insights[0].attributes.date}</p>
            <h2>{insights[0].attributes.title}</h2>
            <BtnNoLink text='Read on' />
          </a>
        </Link>
      </article>
    </section>
  );
}
