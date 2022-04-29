import Image from 'next/image';
import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InsightsFeature({ insight }) {
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
          <Image
            src={`http://localhost:1337${insight.attributes.image.data.attributes.url}`}
            layout='fill'
            alt={insight.attributes.title}
          />
        </figure>
      </div>
      <article className='text'>
        <Link href={`/insights/${insight.attributes.alias}`}>
          <a>
            <p className='date'>{insight.attributes.date}</p>
            <h2>{insight.attributes.title}</h2>
            <BtnNoLink text='Read on' />
          </a>
        </Link>
      </article>
    </section>
  );
}
