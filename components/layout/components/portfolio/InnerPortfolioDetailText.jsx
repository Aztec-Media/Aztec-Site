import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InnerPortfolioDetailText() {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 65%',
      },
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    tl.fromTo(
      [
        textRef.current.querySelector('h4'),
        textRef.current.querySelectorAll('li'),
      ],
      { autoAlpha: 0, y: 15 },
      { autoAlpha: 1, y: 0, stagger: 0.15 }
    );
  }, []);

  return (
    <section className='inner__portfolio__detail__text' ref={textRef}>
      <h4 className='heading'>
        Bute Motorsport <span className='underline'></span>
      </h4>
      <ul className='list'>
        <li>
          <span></span>4 Years
        </li>
        <li>
          <span></span>
          27 Race Meetings
        </li>
        <li>
          <span></span>
          450 Graphics
        </li>
        <li>
          <span></span>
          32 Banners
        </li>
        <li>
          <span></span>
          21 Champions
        </li>
      </ul>
    </section>
  );
}
