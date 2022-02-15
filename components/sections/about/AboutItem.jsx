import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
  }, []);

  return (
    <div className='about__item'>
      <div className='about__item__img' ref={imageRef}>
        <figure>
          <div className='img__cover'></div>
          <Image
            src={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            layout='fill'
            alt='#'
          />
        </figure>
      </div>
      <div className='about__item__text'>
        <h3>
          {item.attributes.Name} <span className='underline'></span>
        </h3>
        <p className='summary'>{item.attributes.Summary}</p>
        <div className='details'>
          <p className='skill'>
            <span> Skill:</span> {item.attributes.Title}
          </p>
          <p className='colour' style={{ borderColor: 'lightcoral' }}>
            <span>Favourite Colour:</span> {item.attributes.Colour}
          </p>
        </div>
        <p className='hobbies'>Hobbies</p>
        <p className='hobbies__text'>{item.attributes.Hobbies}</p>
      </div>
    </div>
  );
}
