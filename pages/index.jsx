import ViewALlWork from '../components/layout/components/portfolio/ViewAllWork';
import Seo from '../components/layout/Seo';
import Footer from '../components/sections/Footer';
import HomeHero from '../components/sections/HomeHero';
import HomePortfolio from '../components/sections/HomePortfolio';
import HomeServices from '../components/sections/HomeServices';
import MeetTheTeam from '../components/sections/MeetTheTeam';

export default function Home({ data }) {
  return (
    <main>
      <Seo title='Home' />
      <HomeHero />
      <HomeServices />
      <HomePortfolio portfolioData={data.portfolio} />
      <ViewALlWork />
      <MeetTheTeam teamData={data.team} />
      <Footer />
    </main>
  );
}

export async function getStaticProps(context) {
  const portfolioRes = await fetch(
    `${process.env.ADMIN_URL}/api/portfolios?populate=*`
  );
  const portfolioData = await portfolioRes.json();

  const teamRes = await fetch(`${process.env.ADMIN_URL}/api/teams?populate=*`);
  const teamData = await teamRes.json();

  const data = {
    portfolio: portfolioData.data,
    team: teamData.data,
  };

  return {
    props: { data },
  };
}
