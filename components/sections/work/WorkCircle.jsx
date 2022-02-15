import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import LogoFill from '../../vectors/LogoFill';
import LogoFillClip from '../../vectors/LogoFillClip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function WorkCircle({ item, index }) {
  const articleRef = useRef(null);
  const titleRef = useRef(null);

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
    <article
      className='work__circle'
      ref={articleRef}
      onMouseLeave={() => titleRef.current.classList.add('animate-out')}
    >
      <Link href={`${item.link}`}>
        <a>
          <div className='logo__bg'>
            <LogoFill fill='#f69321' />
          </div>
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
          <h4
            ref={titleRef}
            className='title'
            onTransitionEnd={() =>
              titleRef.current.classList.remove('animate-out')
            }
          >
            {item.title}
          </h4>
        </a>
      </Link>
    </article>
  );
}
