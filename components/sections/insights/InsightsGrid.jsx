import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';

export default function InsightsGrid({ insights }) {
  return (
    <section className='insights__grid'>
      {insights.map((item, index) => (
        <article key={index} className='insights__item'>
          <Link href={`/insights/${item.attributes.alias}`}>
            <a>
              <div className='date'>{item.attributes.date}</div>
              <div className='title'>{item.attributes.title}</div>
              <BtnNoLink text='Read on' />
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
}
