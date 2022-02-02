import HomePortfolioItem from '../layout/components/portfolio/HomePortfolioItem';

export default function HomePortfolio({ portfolioData }) {
  // console.log(portfolioData);

  return (
    <section className='home__portfolio__grid'>
      {/* <HomePortfolioItem /> */}
      {/* <HomePortfolioItem /> */}
      {/* <HomePortfolioItem /> */}
      {/* <HomePortfolioItem /> */}
      {portfolioData.map((item) => (
        <HomePortfolioItem key={item.id} item={item.attributes} />
      ))}
    </section>
  );
}
