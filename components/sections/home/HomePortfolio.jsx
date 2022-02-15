import HomePortfolioItem from '../portfolio/HomePortfolioItem';
import portfolioData from '../../../data/portfolioData.json';

export default function HomePortfolio() {
  return (
    <section className='home__portfolio__grid'>
      {portfolioData.map((item, index) =>
        index > 3 ? '' : <HomePortfolioItem key={index} item={item} />
      )}
    </section>
  );
}
