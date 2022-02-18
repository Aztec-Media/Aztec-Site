import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import LogoFill from '../../vectors/LogoFill';
import LogoFillClip from '../../vectors/LogoFillClip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Arrow from '../../vectors/Arrow';
gsap.registerPlugin(ScrollTrigger);

export default function WorkCircle({ item, index }) {
  const articleRef = useRef(null);

  useEffect(() => {
    let amount = (index / 2) * 50;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work__circles',
        start: 'top 10%',
        scrub: 1,
      },
    });

    tl.fromTo(articleRef.current, { y: 0 }, { yPercent: -amount });
  }, [articleRef, index]);

  return (
    <article className='work__circle' ref={articleRef}>
      <Link href={item.link}>
        <a>
          <div className='logo__bg'></div>
          <div className='img'>
            <figure>
              <Image
                src={item.imgSrc}
                layout='fill'
                alt={`Aztec Media Our Work ${item.title}`}
                className='work__circle__img'
                data-itemname={item.title}
              />
            </figure>
            <LogoFillClip />
          </div>
        </a>
      </Link>
      <Link href={item.link}>
        <a>
          <div className='hover__circle'>
            <h4>{item.title}</h4>
            <div className='discover'>
              <p>Discover</p>
              <Arrow />
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
