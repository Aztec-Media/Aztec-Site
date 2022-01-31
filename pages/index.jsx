import Seo from '../components/layout/Seo';
import HomeHero from '../components/sections/HomeHero';
import HomeServices from '../components/sections/HomeServices';

export default function Home() {
  return (
    <main>
      <Seo title='Home' />
      <HomeHero />
      <HomeServices />
    </main>
  );
}
