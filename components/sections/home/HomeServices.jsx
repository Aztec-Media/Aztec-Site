import Btn from '../../general/Btn';
import { colourState } from '../../../utils/colourState';
import ServicesSplide from '../sliders/ServicesSplide';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import services from '../../../data/servicesData.json';
gsap.registerPlugin(ScrollTrigger);

export default function HomeServices() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const changeColour = ScrollTrigger.create({
      trigger: scrollRef.current,
      start: 'top 30%',
      onEnter: () => (colourState.bgColour = 'grey'),
      onLeaveBack: () => (colourState.bgColour = 'orange'),
    });

    return () => changeColour.kill();
  }, []);

  return (
    <section className='home__services' ref={scrollRef}>
      <div className='home__services__header'>
        <div className='text'>
          <h2>Website + Digital</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            nostrum exercitationem deleniti pariatur reiciendis molestias.
          </p>
        </div>
        <div className='button'>
          <Btn href='/about' text='What we do' />
        </div>
      </div>
      <div className='home__services__slider'>
        <ServicesSplide services={services} />
      </div>
    </section>
  );
}
