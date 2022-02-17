import HomePortfolioItem from '../portfolio/HomePortfolioItem';
import portfolioData from '../../../data/portfolioData.json';
import { useEffect, useRef } from 'react';
import { colourState } from '../../../utils/colourState';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolio() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const changeColour = ScrollTrigger.create({
      trigger: scrollRef.current,
      start: 'bottom bottom',
      onEnter: () => (colourState.bgColour = 'grey'),
      onLeaveBack: () => (colourState.bgColour = 'blue'),
    });
    return () => changeColour.kill();
  }, []);

  return (
    <section className='home__portfolio__grid' ref={scrollRef}>
      {portfolioData.map((item, index) =>
        index > 3 ? '' : <HomePortfolioItem key={index} item={item} />
      )}
    </section>
  );
}
