import HomePortfolioItem from '../portfolio/HomePortfolioItem';
// import portfolioData from '../../../data/portfolioData.json';

export default function HomePortfolio({ portfolio }) {
  return (
    <section className='home__portfolio__grid'>
      <div className='grid__wrapper'>
        {portfolio.map((item, index) =>
          index > 3 ? '' : <HomePortfolioItem key={index} item={item} />
        )}
      </div>
    </section>
  );
}
