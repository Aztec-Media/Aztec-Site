import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function InnerPortfolioDetail({ order, data }) {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 800px)': function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: imageRef.current,
            start: 'top bottom',
          },
        });

        tl.fromTo(
          imageRef.current.querySelector('.img'),
          { y: 0 },
          { y: -300 }
        ).fromTo(
          imageRef.current.querySelector('figure'),
          { yPercent: -15 },
          { yPercent: 0, ease: 'power1.inOut' },
          0
        );

        const textTl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 95%',
            duration: 1,
            ease: 'power2.inOut',
          },
        });

        textTl.fromTo(
          [
            textRef.current.querySelector('h2'),
            textRef.current.querySelector('p'),
          ],
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
          }
        );
      },
      '(max-width: 799px)': function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: imageRef.current,
            start: 'top bottom',
          },
        });

        tl.fromTo(
          imageRef.current.querySelector('.img'),
          { y: 0 },
          { y: -100 }
        ).fromTo(
          imageRef.current.querySelector('figure'),
          { yPercent: -15 },
          { yPercent: 0, ease: 'power1.inOut' },
          0
        );

        const textTl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 70%',
            duration: 1,
            ease: 'power2.inOut',
          },
        });

        textTl.fromTo(
          [
            textRef.current.querySelector('h2'),
            textRef.current.querySelector('p'),
          ],
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
          }
        );
      },
    });
  }, [imageRef, textRef]);

  if (order === 0) {
    return (
      <section className='inner__portfolio__detail' ref={imageRef}>
        <div className='img'>
          <figure>
            <Image
              src={`http://localhost:1337${data.attributes.FirstBlockImage.data.attributes.url}`}
              layout='fill'
              alt='#'
            />
          </figure>
        </div>
        <div className='text' ref={textRef}>
          <h2>
            Custom Graphics <span className='underline'></span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            accusantium assumenda. Nemo quo vitae magni.
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className='inner__portfolio__detail inner__portfolio__detail--img-right'
        ref={imageRef}
      >
        <div className='text' ref={textRef}>
          <h2>
            Bespoke Website <span className='underline'></span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            accusantium assumenda. Nemo quo vitae magni.
          </p>
        </div>
        <div className='img'>
          <figure>
            <Image
              src={`http://localhost:1337${data.attributes.SecondBlockImage.data.attributes.url}`}
              layout='fill'
              alt='#'
            />
          </figure>
        </div>
      </section>
    );
  }
}
