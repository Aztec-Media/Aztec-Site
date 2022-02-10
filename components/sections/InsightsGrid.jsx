import Link from 'next/link';

export default function InsightsGrid({ data }) {
  return (
    <section className='insights__grid'>
      <article className='insights__item'>
        <Link href='/'>
          <a>
            <div className='date'></div>
            <div className='title'></div>
            <div className='summary'></div>
            <div className='more'></div>
          </a>
        </Link>
      </article>
    </section>
  );
}
