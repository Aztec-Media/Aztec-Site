import Seo from '../components/layout/Seo';
import Footer from '../components/sections/Footer';
import HomePortfolio from '../components/sections/HomePortfolio';

export default function Work({ data }) {
  return (
    <main>
      <Seo title='Our Work' />
      <HomePortfolio portfolioData={data.portfolio} />
      <Footer />
    </main>
  );
}

export async function getStaticProps(context) {
  const portfolioRes = await fetch(
    `${process.env.ADMIN_URL}/api/portfolios?populate=*`
  );
  const portfolioResponse = await portfolioRes.json();

  const data = {
    portfolio: portfolioResponse,
  };

  return {
    props: { data },
  };
}
