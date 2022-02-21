import Image from 'next/image';
import { useEffect, useRef } from 'react';
import LogoFillClip from '../../vectors/LogoFillClip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function AboutItem({ item }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    const slideTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: imageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    introTl
      .fromTo(
        imageRef.current.querySelector('figure'),
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        imageRef.current.querySelector('.img__cover'),
        { scaleX: 1 },
        {
          scaleX: 0,
          ease: 'power2.inOut',
        },
        '-=0.6'
      )
      .fromTo(
        imageRef.current.querySelector('img'),
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'power2.inOut',
        },
        '-=0.8'
      );

    ScrollTrigger.matchMedia({
      '(min-width: 774px)': function () {
        slideTl.fromTo(
          imageRef.current,
          { y: 0 },
          {
            y: -150,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              scrub: 1,
              trigger: imageRef.current,
              start: 'top 70%',
            },
          }
        );
      },
    });
  }, []);

  return (
    <div className='about__item'>
      <div className='about__item__img' ref={imageRef}>
        <figure>
          <div className='img__cover'></div>
          <Image
            src={item.imgSrc}
            layout='fill'
            alt='Aztec Media team members'
          />
        </figure>
        <div className='hover__img'>
          <figure>
            <Image
              src={item.gifImgSrc}
              layout='fill'
              alt='Aztec Media team members'
            />
          </figure>
        </div>
        <LogoFillClip />
      </div>
      <div className='about__item__text'>
        <p className='title'>Designer</p>
        <h3>
          {item.name} <span className='underline'></span>
        </h3>
        <p className='summary'>{item.summary}</p>
        <div className='details'>
          <p className='skill'>
            <span> Skill:</span> {item.title}
          </p>
          <p className='colour' style={{ borderColor: 'lightcoral' }}>
            <span>Favourite Colour:</span> {item.Colour}
          </p>
        </div>
      </div>
    </div>
  );
}
