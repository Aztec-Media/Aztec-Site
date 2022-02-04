import HomePortfolioItem from '../layout/components/portfolio/HomePortfolioItem';

export default function HomePortfolio({ portfolioData }) {
  return (
    <section className='home__portfolio__grid'>
      {portfolioData.map((item, index) =>
        index > 3 ? (
          ''
        ) : (
          <HomePortfolioItem key={item.id} item={item.attributes} />
        )
      )}
    </section>
  );
}
