import ViewAllWork from '../components/sections/portfolio/ViewAllWork';
import Seo from '../components/layout/Seo';
import LargeHero from '../components/general/LargeHero';
import HomePortfolio from '../components/sections/home/HomePortfolio';
import HomeServices from '../components/sections//home/HomeServices';
import MeetTheTeam from '../components/general/MeetTheTeam';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import DotLogo from '../components/vectors/DotLogo';
import LogoFillClip from '../components/vectors/LogoFillClip';
gsap.registerPlugin(ScrollTrigger);

export default function Home({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='Home' />
      <main className='home'>
        <section className='dot__logo'>
          <DotLogo />
          <LogoFillClip />
        </section>
        <LargeHero />
        <HomeServices />
        <HomePortfolio />
        <ViewAllWork />
        <MeetTheTeam />
      </main>
      <Footer />
    </Layout>
  );
}
