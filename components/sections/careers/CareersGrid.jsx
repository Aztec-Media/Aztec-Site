import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';

export default function CareersGrid() {
  return (
    <section className='careers__grid'>
      <article className='insights__item'>
        <Link href='/'>
          <a>
            <div className='date'>02 / 02 / 2022</div>
            <div className='title'>Web Developer</div>
            <div className='summary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illum harum placeat laboriosam ab beatae minima cumque mollitia
              laudantium pariatur?
            </div>
            <div className='more'></div>
            <BtnNoLink text='Apply Here' />
          </a>
        </Link>
      </article>
    </section>
  );
}
