import ViewALlWork from '../components/layout/components/portfolio/ViewAllWork';
import Seo from '../components/layout/Seo';
import LargeHero from '../components/sections/LargeHero';
import HomePortfolio from '../components/sections/HomePortfolio';
import HomeServices from '../components/sections/HomeServices';
import MeetTheTeam from '../components/sections/MeetTheTeam';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
gsap.registerPlugin(ScrollTrigger);

export default function Home({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';

    // ScrollTrigger.create({
    //   trigger: '.home .home__services__header',
    //   start: 'top 20%',
    //   onEnter: () => (colourState.bgColour = 'blue'),
    //   onLeaveBack: () => (colourState.bgColour = 'orange'),
    // });

    // ScrollTrigger.create({
    //   trigger: '.home .view__all__work',
    //   start: 'top bottom+=500px',
    //   onEnter: () => (colourState.bgColour = 'grey'),
    //   onLeaveBack: () => (colourState.bgColour = 'blue'),
    // });
  }, []);

  return (
    <Layout>
      <Seo title='Home' />
      <main className='home'>
        <LargeHero />
        <HomeServices />
        <HomePortfolio portfolioData={data.portfolio} />
        <ViewALlWork />
        <MeetTheTeam teamData={data.team} />
      </main>
      <Footer />
    </Layout>
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
