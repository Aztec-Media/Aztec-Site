import { useRef, useEffect } from 'react';

import Btn from '../Btn';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemText({ item }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        textRef.current.querySelector('h3'),
        textRef.current.querySelector('p'),
        textRef.current.querySelector('.btn'),
      ],
      { autoAlpha: 0, y: 25 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <article className='home__portfolio__item__text' ref={textRef}>
      <h3>
        {item.Title}
        <span className='underline'></span>
      </h3>
      <p>{item.Summary}</p>
      <Btn href='/' text='Case Study' />
    </article>
  );
}
