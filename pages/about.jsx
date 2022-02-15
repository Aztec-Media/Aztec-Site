import Seo from '../components/layout/Seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import AboutSection from '../components/sections/about/AboutSection';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    colourState.bgColour = 'orange';
  }, []);

  return (
    <Layout>
      <Seo title='About Us' />
      <main className='about'>
        <AboutSection />
      </main>
      <Footer />
    </Layout>
  );
}
