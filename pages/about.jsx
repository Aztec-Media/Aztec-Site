import Seo from '../components/layout/Seo';
import LargeHero from '../components/general/LargeHero';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import AboutSection from '../components/sections/about/AboutSection';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function About({ data }) {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='About Us' />
      <main className='about'>
        {/* <LargeHero /> */}
        <AboutSection teamData={data.team} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const teamRes = await fetch(`${process.env.ADMIN_URL}/api/teams?populate=*`);
  const teamData = await teamRes.json();

  const data = {
    team: teamData.data,
  };

  return {
    props: { data },
  };
}
