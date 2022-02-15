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
      </div>
      <Link href='/work'>
        <a className='text'>
          <p className='next'>Next Project</p>
          <div className='arrow'>
            <Arrow />
            <div className='arrow__hover'></div>
          </div>
        </a>
      </Link>
    </section>
  );
}
