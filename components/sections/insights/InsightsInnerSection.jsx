import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Btn from '../../general/Btn';
import BtnNoLink from '../../general/BtnNoLink';
gsap.registerPlugin(ScrollTrigger);

export default function InsightsInnerSection() {
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
        <div className='date'>02 / 02 / 2022</div>
        <h1 className='title'>News title will go in this space here</h1>
      </div>
      <div className='insights__inner__section__img' ref={imageRef}>
        <div className='img'>
          <figure>
            <Image src='/img.jpg' layout='fill' alt='#' />
          </figure>
        </div>
      </div>
      <div className='insights__inner__section__content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta rem
          reiciendis voluptates nostrum pariatur maiores est ratione,
          perspiciatis quidem qui suscipit quae laborum porro accusantium? Porro
          tempora veniam velit, officiis delectus consequatur recusandae iste,
          ducimus vitae quasi distinctio perferendis nobis. Odit consequatur,
          sapiente accusamus delectus mollitia obcaecati nisi reprehenderit!
        </p>
        <Btn href='/insights' text='Back to insights' />
      </div>
      <section className='insights__feature'>
        <div className='img' ref={featureImageRef}>
          <div className='overlay'></div>
          <figure>
            <Image src='/img.jpg' layout='fill' alt='#' />
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
