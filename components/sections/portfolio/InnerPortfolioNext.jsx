import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../../vectors/Arrow';

export default function InnerPortfolioNext() {
  return (
    <section className='inner__portfolio__next'>
      <div className='img'>
        <figure>
          <Image src='/img.jpg' layout='fill' alt='#' />
        </figure>
        <div className='overlay'></div>
        <div className='hover__overlay'></div>
      </div>
      <div className='prev'>
        <Link href='/work'>
          <a>
            <Arrow />
            <p>Previous</p>
          </a>
        </Link>
      </div>
      <div className='text'>Work</div>
      <div className='next'>
        <Link href='/work'>
          <a>
            <p>Next</p>
            <Arrow />
          </a>
        </Link>
      </div>
    </section>
  );
}
