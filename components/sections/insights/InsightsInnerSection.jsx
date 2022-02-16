import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Btn from '../../general/Btn';
import BtnNoLink from '../../general/BtnNoLink';
gsap.registerPlugin(ScrollTrigger);
import ReactMarkdown from 'react-markdown';

export default function InsightsInnerSection({ data }) {
  const imageRef = useRef(null);
  const featureImageRef = useRef(null);

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

    const featureTl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: featureImageRef.current,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    featureTl.fromTo(
      featureImageRef.current.querySelector('figure'),
      { yPercent: -15 },
      { yPercent: 15, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <section className='insights__inner__section'>
      <div className='insights__inner__section__header'>
        <div className='date'>{data.date}</div>
        <h1 className='title'>{data.title}</h1>
      </div>
      <div className='insights__inner__section__img' ref={imageRef}>
        <div className='img'>
          <figure>
            <Image src={data.imgSrc} layout='fill' alt={data.title} />
          </figure>
        </div>
      </div>
      <div className='insights__inner__section__content'>
        <ReactMarkdown>{data.content}</ReactMarkdown>
        <Btn href='/insights' text='View all insights' />
      </div>
      <section className='insights__feature'>
        <div className='img' ref={featureImageRef}>
          <div className='overlay'></div>
          <figure>
            <Image src={'/img.jpg'} layout='fill' alt='#' />
          </figure>
        </div>
        <article className='text'>
          <Link href='/'>
            <a>
              <p className='date'>02 / 02 / 2022</p>
              <h2>Featured article will go in this space here</h2>
              <BtnNoLink text='Read on' />
            </a>
          </Link>
        </article>
      </section>
    </section>
  );
}
