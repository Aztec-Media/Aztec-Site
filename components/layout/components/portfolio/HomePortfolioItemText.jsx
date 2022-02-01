import Btn from '../Btn';

export default function HomePortfolioItemText() {
  return (
    <article className='home__portfolio__item__text'>
      <h3>
        Bute Motorsport
        <span className='underline'></span>
      </h3>
      <p>
        Revenue-driven, customer-centric, creating strategic solutions based in
        technology, we help brands.
      </p>
      <Btn href='/' text='Case Study' />
    </article>
  );
}
