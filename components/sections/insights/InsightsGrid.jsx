import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';

export default function InsightsGrid({ data }) {
  return (
    <section className='insights__grid'>
      <article className='insights__item'>
        <Link href='/'>
          <a>
            <div className='date'>02 / 02 / 2022</div>
            <div className='title'>
              Title of article goes in this space here
            </div>
            <div className='summary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illum harum placeat laboriosam ab beatae minima cumque mollitia
              laudantium pariatur?
            </div>
            <div className='more'></div>
            <BtnNoLink text='Read on' />
          </a>
        </Link>
      </article>
      <article className='insights__item'>
        <Link href='/'>
          <a>
            <div className='date'>02 / 02 / 2022</div>
            <div className='title'>
              Title of article goes in this space here
            </div>
            <div className='summary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illum harum placeat laboriosam ab beatae minima cumque mollitia
              laudantium pariatur?
            </div>
            <div className='more'></div>
            <BtnNoLink text='Read on' />
          </a>
        </Link>
      </article>
      <article className='insights__item'>
        <Link href='/'>
          <a>
            <div className='date'>02 / 02 / 2022</div>
            <div className='title'>
              Title of article goes in this space here
            </div>
            <div className='summary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illum harum placeat laboriosam ab beatae minima cumque mollitia
              laudantium pariatur?
            </div>
            <div className='more'></div>
            <BtnNoLink text='Read on' />
          </a>
        </Link>
      </article>
    </section>
  );
}
