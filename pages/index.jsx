import ViewALlWork from '../components/layout/components/portfolio/ViewAllWork';
import Seo from '../components/layout/Seo';
import HomeHero from '../components/sections/HomeHero';
import HomePortfolio from '../components/sections/HomePortfolio';
import HomeServices from '../components/sections/HomeServices';

export default function Home() {
  return (
    <main>
      <Seo title='Home' />
      <HomeHero />
      <HomeServices />
      <HomePortfolio />
      <ViewALlWork />
    </main>
  );
}
