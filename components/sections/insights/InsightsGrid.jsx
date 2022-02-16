import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';

export default function InsightsGrid({ data }) {
  return (
    <section className='insights__grid'>
      {data.map((item, index) => (
        <article key={index} className='insights__item'>
          <Link href={`/insights/${item.alias}`}>
            <a>
              <div className='date'>{item.date}</div>
              <div className='title'>{item.title}</div>
              <div className='summary'>{item.summary}</div>
              <BtnNoLink text='Read on' />
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
}
