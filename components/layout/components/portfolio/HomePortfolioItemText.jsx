import Link from 'next/link';

import Arrow from '../../../vectors/Arrow';

export default function HomePortfolioItemText() {
  return (
    <article className='home__portfolio__item home__portfolio__item--text'>
      <h3>
        Bute Motorsport
        <span className='underline'></span>
      </h3>
      <p>
        Revenue-driven, customer-centric, creating strategic solutions based in
        technology, we help brands.
      </p>
      <Link href='/'>
        <a>
          <span>Case Study</span>
          <div className='arrow'>
            <Arrow />
          </div>
        </a>
      </Link>
    </article>
  );
}
